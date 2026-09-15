// app/api/job-applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db"; // your PostgreSQL/MySQL pool
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

// Transporter module scope pe — har request pe nayi connection nahi
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // pool: true,
  // maxConnections: 3,
  // maxMessages: 10,
});

const HR_BACKEND_API_BASE_URL =
  process.env.HR_BACKEND_API_BASE_URL ||
  "https://it-solution-code-hr-app-backend.vercel.app/api";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const MAX_TOTAL_BYTES = 6 * 1024 * 1024;

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = new Set([".pdf", ".doc", ".docx"]);

// Actual bytes verify karte hain — extension/MIME spoof ho sakte hain
function detectFileType(buffer: Buffer): "pdf" | "doc" | "docx" | null {
  if (buffer.length < 8) return null;
  if (buffer.subarray(0, 4).toString("ascii") === "%PDF") return "pdf";
  if (buffer[0] === 0x50 && buffer[1] === 0x4b) return "docx"; // PK.. zip container
  if (buffer.subarray(0, 8).toString("hex").toLowerCase() === "d0cf11e0a1b11ae1") {
    return "doc"; // OLE2 compound file
  }
  return null;
}

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
      return NextResponse.json({ error: "Payload too large." }, { status: 413 });
    }

    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // ---- Honeypot ----------------------------------------------------------
    if (isBot(formData.get("website"))) {
      return NextResponse.json({ message: "Application submitted successfully!" });
    }

    // ---- Normalize + cap lengths --------------------------------------------
    const name = clean(formData.get("name"), 100);
    const email = clean(formData.get("email"), 150);
    const phone = clean(formData.get("phone"), 20);
    const address = clean(formData.get("address"), 200);
    const hear = clean(formData.get("hear"), 100);
    const job_category = clean(formData.get("job_category"), 120);
    const message = clean(formData.get("message"), 2000);
    const job_category_id_raw = clean(formData.get("job_category_id"), 20);
    const resumeFile = formData.get("resume");

    // ---- Server-side validation ----------------------------------------------
    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json({ error: "Resume is required." }, { status: 400 });
    }

    const errors: string[] = [];
    if (name.length < 2) errors.push("name");
    if (!isValidEmail(email)) errors.push("email");
    if (!isValidPhone(phone)) errors.push("phone");
    if (job_category_id_raw && !/^\d+$/.test(job_category_id_raw)) errors.push("job_category_id");

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "Invalid or missing fields." },
        { status: 400 }
      );
    }

    const job_category_id = job_category_id_raw ? Number(job_category_id_raw) : null;

    // ---- Resume validation (CRITICAL) -----------------------------------
    if (resumeFile.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ error: "File too large." }, { status: 413 });
    }

    const ext = resumeFile.name.slice(resumeFile.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXT.has(ext) || !ALLOWED_MIME.has(resumeFile.type)) {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());

    const detected = detectFileType(buffer);
    if (
      !detected ||
      (ext === ".pdf" && detected !== "pdf") ||
      (ext === ".docx" && detected !== "docx") ||
      (ext === ".doc" && detected !== "doc" && detected !== "docx")
    ) {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 400 });
    }

    const safeFileName = safeFilename(resumeFile.name, ext);
    const mimeType = resumeFile.type || "application/octet-stream";

    // ---- Resolve real HR vacancy id from jobs_infos -----------------------
    // Parameterized query — SQL injection safe already
    let resolvedHrVacancyId: number | null = null;

    if (job_category_id) {
      const vacancyLookupQuery = `
        SELECT job_info_id, title, hr_vacancy_id
        FROM jobs_infos
        WHERE job_info_id = $1
        LIMIT 1
      `;

      const vacancyLookupResult = await pool.query(vacancyLookupQuery, [job_category_id]);
      const websiteJob = vacancyLookupResult.rows?.[0];

      if (!websiteJob) {
        return NextResponse.json(
          { error: "Selected website job was not found." },
          { status: 404 }
        );
      }

      if (!websiteJob.hr_vacancy_id) {
        return NextResponse.json(
          { error: "This website vacancy is not linked to an HR vacancy yet." },
          { status: 409 }
        );
      }

      resolvedHrVacancyId = Number(websiteJob.hr_vacancy_id);
    }

    // ---- Save application (parameterized — safe) ---------------------------
    const query = `
      INSERT INTO job_applications
      (name, email, phone, address, hear, message, job_category_id, job_category, resume_filename, resume_mime, resume_data, created_at, updated_at, published_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11, NOW(), NOW(), NOW())
      RETURNING job_applications_id
    `;
    const values = [
      name,
      email,
      phone,
      address,
      hear,
      message,
      job_category_id,
      job_category,
      safeFileName,
      mimeType,
      buffer,
    ];

    const result = await pool.query(query, values);
    const applicationId = result.rows?.[0]?.job_applications_id;

    // ---- Forward to HR backend --------------------------------------------
    const hrFormData = new FormData();
    hrFormData.append("file", resumeFile, safeFileName);
    hrFormData.append("candidate_email", email);
    hrFormData.append("candidate_name", name);
    hrFormData.append("candidate_phone", phone);
    hrFormData.append("address", address);
    hrFormData.append("how_did_you_hear", hear);
    hrFormData.append("cover_letter", message);
    hrFormData.append("source_label", "website_job_apply");

    if (resolvedHrVacancyId) {
      hrFormData.append("vacancy_id", String(resolvedHrVacancyId));
    }

    let hrResponse: Response;
    try {
      hrResponse = await fetch(`${HR_BACKEND_API_BASE_URL}/applications/public-submit`, {
        method: "POST",
        body: hrFormData,
      });
    } catch (fetchErr) {
      console.error("HR backend unreachable:", isDev ? fetchErr : "network error");
      return NextResponse.json(
        {
          error: "Application stored on website, but HR sync failed.",
          legacy_job_application_id: applicationId,
        },
        { status: 502 }
      );
    }

    const hrResponseText = await hrResponse.text();
    let hrPayload: unknown = null;
    try {
      hrPayload = hrResponseText ? JSON.parse(hrResponseText) : null;
    } catch {
      hrPayload = null; // raw text kabhi client ko forward nahi karte
    }

    if (!hrResponse.ok) {
      console.error("HR backend forwarding failed", {
        status: hrResponse.status,
        legacy_job_application_id: applicationId,
        website_job_id: job_category_id,
        resolved_hr_vacancy_id: resolvedHrVacancyId,
      });

      return NextResponse.json(
        {
          error: "Application stored on website, but HR sync failed.",
          legacy_job_application_id: applicationId,
        },
        { status: 502 }
      );
    }

    // ---- Emails — user input escaped before going into HTML --------------
    const applicantMail = {
      from: `"IT Solutions Worldwide Careers" <${process.env.SMTP_USER}>`,
      to: sanitizeHeader(email, 150),
      subject: `Thank You for Reaching Out to IT Solutions Worldwide`,
      html: `
        <p>Dear <strong>${escapeHtml(name)}</strong>,</p>
        <p>Thank you for contacting IT Solutions Worldwide and applying for <strong>${escapeHtml(job_category)}</strong>.</p>
        <p>Your application has been received and forwarded to the relevant department.</p>
        <p>A member of our team will get back to you as soon as possible. We appreciate your interest and the time you've taken to connect with us,
        whether it's regarding career opportunities, business inquiries, or general information.</p>
        <p>Please note that in case of job applications, shortlisted candidates will be contacted for further steps.</p>
        <p>We thank you once again for reaching out to us.</p><br>
        <p>Best regards,</p>
        <p>HR Department</p>
        <p>IT Solutions Worldwide</p>
        <p>Mandenmakerstraat 100C, 3194DG, Hoogvliet Rotterdam</p>
      `,
    };

    const hrMail = {
      from: `"IT Solutions Worldwide Careers" <${process.env.SMTP_USER}>`,
      to: [process.env.HR_EMAIL!, process.env.HR_EMAIL_2!],
      cc: process.env.CC_EMAIL,
      replyTo: sanitizeHeader(email, 150),
      subject: `Job application for ${sanitizeHeader(job_category, 120)} - ${sanitizeHeader(name, 100)}`,
      html: `
        <p>Dear <strong>HR Manager</strong>,</p>
        <p>Here is a job application for the post of <strong>${escapeHtml(job_category)}</strong>.</p>
        <p><strong>Applicant details:</strong></p>
        <ul>
            <li><strong>Name:</strong> ${escapeHtml(name)}</li>
            <li><strong>Email:</strong> ${escapeHtml(email)}</li>
            <li><strong>Phone:</strong> ${escapeHtml(phone)}</li>
            <li><strong>Address:</strong> ${escapeHtml(address) || "-"}</li>
            <li><strong>Hear From:</strong> ${escapeHtml(hear) || "-"}</li>
            <li><strong>Message:</strong> ${escapeHtmlMultiline(message) || "-"}</li>
        </ul>
        <p>The applicant's resume is attached to this email.</p>
      `,
      attachments: [
        {
          filename: safeFileName,
          content: buffer,
          contentType: mimeType,
        },
      ],
    };

    // Applicant ko mail fail ho jaye to bhi application already saved/HR-synced
    // hai — is liye email failure user-facing error nahi banate, sirf log karte hain
    const [applicantResult, hrResult] = await Promise.allSettled([
      transporter.sendMail(applicantMail),
      transporter.sendMail(hrMail),
    ]);

    if (applicantResult.status === "rejected") {
      console.error("Applicant confirmation email failed:", isDev ? applicantResult.reason : "send error");
    }
    if (hrResult.status === "rejected") {
      console.error("HR notification email failed:", isDev ? hrResult.reason : "send error");
    }

    return NextResponse.json({
      message: "Application submitted successfully!",
      legacy_job_application_id: applicationId,
      talent_genie: hrPayload,
    });
  } catch (err) {
    console.error(
      "Job application error:",
      isDev ? err : err instanceof Error ? err.message : "unknown"
    );
    return NextResponse.json(
      { error: "Unable to submit application at this time." },
      { status: 500 }
    );
  }
}