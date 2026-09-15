// app/api/consultation-form/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  escapeHtml,
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
  host: process.env.SMTP_HOST_2,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER_2,
    pass: process.env.SMTP_PASS,
  },
  // pool: true,
  // maxConnections: 1,
  // maxMessages: 20,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

const MAX_BODY_BYTES = 64 * 1024;

// KVK = Dutch chamber-of-commerce number, always 8 digits
const KVK_RE = /^\d{8}$/;
// hoursPerWeek — sirf number expect hai, kisi bhi string se HTML na bane
const HOURS_RE = /^\d{1,3}$/;

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

    // ---- Parse -------------------------------------------------------------
    let data: Record<string, unknown>;
    try {
      data = await req.json();
    } catch {
      return NextResponse.json(
        { ok: false, success: false, error: "Invalid request." },
        { status: 400 }
      );
    }

    // ---- Honeypot ----------------------------------------------------------
    if (isBot(data.website)) {
      return NextResponse.json({ ok: true, success: true });
    }

    // ---- Normalize + cap lengths --------------------------------------------
    const fullName = clean(data.fullName, 100);
    const companyEmail = clean(data.companyEmail, 150);
    const phone = clean(data.phone, 20);
    const kvk = clean(data.kvk, 20);
    const hoursPerWeek = clean(data.hoursPerWeek, 10);
    const service = clean(data.service, 120);

    // ---- Server-side validation (client checks bypass ho sakte hain) -------
    const errors: string[] = [];
    if (fullName.length < 2) errors.push("fullName");
    if (!isValidEmail(companyEmail)) errors.push("companyEmail");
    if (phone && !isValidPhone(phone)) errors.push("phone");
    if (kvk && !KVK_RE.test(kvk)) errors.push("kvk");
    if (hoursPerWeek && !HOURS_RE.test(hoursPerWeek)) errors.push("hoursPerWeek");

    if (errors.length > 0) {
      return NextResponse.json(
        { ok: false, success: false, error: "Invalid or missing fields." },
        { status: 400 }
      );
    }

    // ---- Build mail — sab user input escaped --------------------------------
    const safeSubject = sanitizeHeader(service || "Unknown User", 120);
    const safeReplyTo = sanitizeHeader(companyEmail, 150);

    await transporter.sendMail({
      from: `"IT Solutions Worldwide Contact" <${process.env.SMTP_USER_2}>`,
      to: process.env.MK_EMAIL,
      cc: process.env.CC_EMAIL,
      replyTo: safeReplyTo,
      subject: `New Contact Message: ${safeSubject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(fullName)}</li>
          <li><strong>Email:</strong> ${escapeHtml(companyEmail)}</li>
          <li><strong>Hours per week:</strong> ${escapeHtml(hoursPerWeek) || "-"}</li>
          <li><strong>KVK number:</strong> ${escapeHtml(kvk) || "-"}</li>
          <li><strong>Phone:</strong> ${escapeHtml(phone) || "-"}</li>
        </ul>
        <br/>
        <p><strong>Subject:</strong> ${escapeHtml(service) || "Not selected"}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (err) {
    console.error(
      "Consultation form error:",
      isDev ? err : err instanceof Error ? err.message : "unknown"
    );

    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: "Unable to submit form at this time.",
      },
      { status: 500 }
    );
  }
}