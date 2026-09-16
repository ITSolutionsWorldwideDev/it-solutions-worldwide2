// app/api/contact/route.ts
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

// Transporter module scope pe — har request pe nayi SMTP connection
// banane se shared hosting pe "too many connections" aata hai.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // pool: true,
  // maxConnections: 2,
  // maxMessages: 50,
});

const MAX_BODY_BYTES = 64 * 1024; // 64 KB — contact form ke liye kaafi hai

export async function POST(req: NextRequest) {
  try {
    // ---- Body size guard -------------------------------------------------
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, success: false, error: "Payload too large." },
        { status: 413 }
      );
    }

    // ---- Parse (invalid JSON = 400, not 500) -----------------------------
    let data: Record<string, unknown>;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, success: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    // ---- Honeypot --------------------------------------------------------
    // Bot ko success dikhao taake wo retry na kare, mail mat bhejo
    if (isBot(data.website)) {
      return NextResponse.json({ ok: true, success: true });
    }

    // ---- Normalize + cap lengths ----------------------------------------
    const name = clean(data.name, 100);
    const email = clean(data.email, 150);
    const phone = clean(data.phone, 20);
    const company = clean(data.company, 100);
    const service = clean(data.service, 120);
    const subject = clean(data.subject, 150);
    const message = clean(data.message, 2000);

    // ---- Server-side validation (client checks bypass ho sakte hain) -----
    const errors: string[] = [];
    if (name.length < 2) errors.push("name");
    if (!isValidEmail(email)) errors.push("email");
    if (phone && !isValidPhone(phone)) errors.push("phone");
    if (message.length < 10) errors.push("message");

    if (errors.length > 0) {
      return NextResponse.json(
        { ok: false, success: false, error: "Invalid or missing fields." },
        { status: 400 }
      );
    }

    // ---- Build mail — sab user input escaped ----------------------------
    // Email subject line ke liye form ka "subject" field prefer karo,
    // warna service, warna generic fallback.
    const safeSubject = sanitizeHeader(subject || service || "General Enquiry", 120);
    const safeReplyTo = sanitizeHeader(email, 150);

    const mailBody = {
      from: `"IT Solutions Worldwide Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MK_EMAIL,
      cc: process.env.CC_EMAIL,
      replyTo: safeReplyTo, // reply seedha user ko jayega
      subject: `New Contact Message: ${safeSubject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone) || "-"}</li>
          <li><strong>Company:</strong> ${escapeHtml(company) || "-"}</li>
          <li><strong>Service Interested In:</strong> ${escapeHtml(service) || "-"}</li>
          <li><strong>Subject:</strong> ${escapeHtml(subject) || "-"}</li>
        </ul>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${escapeHtmlMultiline(message)}</p>
      `,
    };

    await transporter.sendMail(mailBody);

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Contact submitted successfully!",
    });
  } catch (err) {
    // Sirf server logs mein — client ko kabhi raw error nahi
    console.error(
      "Contact form error:",
      isDev ? err : err instanceof Error ? err.message : "unknown"
    );

    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: "Unable to send message at this time.",
      },
      { status: 500 } // pehle 200 return ho raha tha — client ko fail pata hi nahi chalta tha
    );
  }
}