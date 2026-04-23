// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true,
  maxConnections: 3,
  maxMessages: 50,
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { companyEmail, fullName, hoursPerWeek, kvk, phone, service } = data;

    if (!companyEmail) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const mailBody = {
      from: `"IT Solutions Worldwide Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MK_EMAIL,
      cc: process.env.CC_EMAIL,
      subject: `New Contact Message: ${service || "Unknown User"}`,
      html: `
        <h2>New Contact Form Message</h2>
        <ul>
          <li><strong>Name:</strong> ${fullName || "-"}</li>
          <li><strong>Email:</strong> ${companyEmail}</li>
          <li><strong>Hours per week:</strong> ${hoursPerWeek || "-"}</li>
          <li><strong>kvk number:</strong> ${kvk || "-"}</li>
          <li><strong>Phone:</strong> ${phone || "-"}</li>
        </ul>
        <br/>
        <p><strong>Subject:</strong> ${service || "Not selected"}</p>
        <br/>
        <p><strong>Message:</strong> ${service || "Not selected"}</p>
        `,
    };

    await transporter.sendMail(mailBody);

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Contact submitted successfully!",
    });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json({
      ok: false,
      success: false,
      error: err.message || "Something went wrong.",
    });
  }
}
