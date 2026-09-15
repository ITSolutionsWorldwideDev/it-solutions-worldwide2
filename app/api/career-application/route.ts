// app/api/career-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  escapeHtml,
  escapeHtmlMultiline,
  sanitizeHeader,
  clean,
  isValidEmail,
  isValidPhone,
  isBot,
  isDev,
} from "@/lib/form-security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Transporter created once and reused across requests (module scope),
// instead of creating a brand-new SMTP connection on every submit.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // pool: true,
  // maxConnections: 1, // shared hosting SMTP usually allows very few concurrent conns
  // maxMessages: 50,
});

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB — frontend limit se match
const MAX_TOTAL_BYTES = 6 * 1024 * 1024;

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = new Set([".pdf", ".doc", ".docx"]);

// File signature check — extension/MIME dono spoof ho sakte hain,
// isliye actual bytes verify karte hain
function detectFileType(buffer: Buffer): "pdf" | "doc" | "docx" | null {
  if (buffer.length < 8) return null;
  // %PDF
  if (buffer.subarray(0, 4).toString("ascii") === "%PDF") return "pdf";
  // PK.. → zip container (docx)
  if (buffer[0] === 0x50 && buffer[1] === 0x4b) return "docx";
  // OLE2 compound file (legacy .doc)
  if (
    buffer.subarray(0, 8).toString("hex").toLowerCase() === "d0cf11e0a1b11ae1"
  ) {
    return "doc";
  }
  return null;
}

// Attachment filename sanitize — path traversal / header injection roko
function safeFilename(original: string, fallbackExt: string): string {
  const base = original
    .replace(/[\r\n\t]/g, "")
    .replace(/[\\/]/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/^\.+/, "")
    .slice(0, 100);
  return base || `resume${fallbackExt}`;
}

export async function POST(req: NextRequest) {
  try {
    // ---- Body size guard -------------------------------------------------
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        { ok: false, success: false, error: "Payload too large." },
        { status: 413 }
      );
    }

    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json(
        { ok: false, success: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    // ---- Honeypot --------------------------------------------------------
    if (isBot(formData.get("website"))) {
      return NextResponse.json({ ok: true, success: true });
    }

    // ---- Normalize + cap lengths ----------------------------------------
    const name = clean(formData.get("name"), 100);
    const email = clean(formData.get("email"), 150);
    const phone = clean(formData.get("phone"), 20);
    const expertise = clean(formData.get("expertise"), 120);
    const message = clean(formData.get("message"), 2000);

    const source = clean(formData.get("source"), 40) || "open-application";
    const jobTitle = clean(formData.get("jobTitle"), 120);
    const isJobApplication = source === "job-page" && !!jobTitle;

    // ---- Server-side validation -----------------------------------------
    const errors: string[] = [];
    if (name.length < 2) errors.push("name");
    if (!isValidEmail(email)) errors.push("email");
    if (!phone || !isValidPhone(phone)) errors.push("phone");
    if (!expertise) errors.push("expertise");
    if (message.length < 10) errors.push("message");

    if (errors.length > 0) {
      return NextResponse.json(
        { ok: false, success: false, error: "Invalid or missing fields." },
        { status: 400 }
      );
    }

    // ---- Resume validation (CRITICAL — client check bypass ho sakta hai) --
    const resumeFile = formData.get("resume");
    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json(
        { ok: false, success: false, error: "Resume is required." },
        { status: 400 }
      );
    }

    if (resumeFile.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { ok: false, success: false, error: "File too large." },
        { status: 413 }
      );
    }

    const ext = resumeFile.name
      .slice(resumeFile.name.lastIndexOf("."))
      .toLowerCase();

    if (!ALLOWED_EXT.has(ext) || !ALLOWED_MIME.has(resumeFile.type)) {
      return NextResponse.json(
        { ok: false, success: false, error: "Unsupported file type." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    // Magic-byte check — .exe ko resume.pdf rename karke bhejna na chale
    const detected = detectFileType(buffer);
    if (!detected) {
      return NextResponse.json(
        { ok: false, success: false, error: "Unsupported file type." },
        { status: 400 }
      );
    }
    if (
      (ext === ".pdf" && detected !== "pdf") ||
      (ext === ".docx" && detected !== "docx") ||
      (ext === ".doc" && detected !== "doc" && detected !== "docx")
    ) {
      return NextResponse.json(
        { ok: false, success: false, error: "Unsupported file type." },
        { status: 400 }
      );
    }

    const attachments = [
      {
        filename: safeFilename(resumeFile.name, ext),
        content: buffer,
        contentType: resumeFile.type,
      },
    ];

    // ---- Build mail — sab user input escaped ----------------------------
    const subject = isJobApplication
      ? `New Job Application: ${sanitizeHeader(jobTitle, 120)}`
      : `New Open Application: ${sanitizeHeader(expertise || "Unspecified", 120)}`;

    const heading = isJobApplication
      ? `New Job Application — ${escapeHtml(jobTitle)}`
      : "New Open Application (Career Page)";

    const mailBody = {
      from: `"Career Open Application" <${process.env.SMTP_USER}>`,
      to: process.env.CAREER_EMAIL,
      cc: process.env.CAREER_CC_EMAIL,
      replyTo: sanitizeHeader(email, 150),
      subject,
      html: `
        <h2>${heading}</h2>
        <ul>
          ${isJobApplication ? `<li><strong>Applied For:</strong> ${escapeHtml(jobTitle)}</li>` : ""}
          <li><strong>Name:</strong> ${escapeHtml(name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
          <li><strong>Area of Expertise:</strong> ${escapeHtml(expertise) || "-"}</li>
        </ul>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${escapeHtmlMultiline(message)}</p>
        <p><strong>Resume/CV:</strong> Attached (${escapeHtml(attachments[0].filename)})</p>
      `,
      attachments,
    };

    const info = await transporter.sendMail(mailBody);

    // DEBUG log sirf development mein — production logs mein applicant
    // ke email addresses nahi jaane chahiye
    if (isDev) {
      console.log("sendMail accepted:", info.accepted, "rejected:", info.rejected);
    }

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (err) {
    console.error(
      "Career application error:",
      isDev ? err : err instanceof Error ? err.message : "unknown"
    );

    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: "Unable to submit application at this time.",
      },
      { status: 500 }
    );
  }
}