// app/api/consultation-form/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },

      pool: true,
      maxConnections: 1,
      maxMessages: 20,

      connectionTimeout: 10000, // 5s to establish TCP connection
      greetingTimeout: 10000, // 5s for SMTP greeting
      socketTimeout: 15000,
    });

    // Verify SMTP connection
    // await transporter.verify();

    await transporter.sendMail({
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
    });

    // .catch((err)=>console.error("Unable to send email:",err));

    // const emailPromise = transporter.sendMail(mailBody);

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (err: any) {
    console.error("Email error:", err);
    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: err.message || "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
