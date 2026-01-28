// app/api/send-enquiry/website/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      companyName,
      phoneNumber,
      services,
      customWebsiteDesign,
      ecommerceSpecifics,
      package: selectedPackage,
      budget,
      projectDescription,
    } = body;

    if (!fullName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    /** 1️⃣ Save to DB */
    const query = `
      INSERT INTO public.website_enquiries
      (
        full_name,
        email,
        company_name,
        phone_number,
        services,
        custom_website_design,
        ecommerce_specifics,
        package,
        budget,
        project_description
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING enquiry_id
    `;

    const values = [
      fullName,
      email,
      companyName,
      phoneNumber,
      services || [],
      customWebsiteDesign || [],
      ecommerceSpecifics || [],
      selectedPackage || null,
      budget || null,
      projectDescription || null,
    ];

    const result = await pool.query(query, values);
    const enquiryId = result.rows[0].enquiry_id;

    /** 2️⃣ Email setup */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /** 3️⃣ Admin Email */
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.HR_EMAIL,
      subject: `New Website Enquiry #${enquiryId}`,
      html: `
        <h3>New Website Enquiry</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Company:</strong> ${companyName}</p>

        <p><strong>Services:</strong> ${(services || []).join(", ")}</p>
        <p><strong>Design:</strong> ${(customWebsiteDesign || []).join(", ")}</p>
        <p><strong>Ecommerce:</strong> ${(ecommerceSpecifics || []).join(", ")}</p>

        <p><strong>Package:</strong> ${selectedPackage}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <p><strong>Description:</strong></p>
        <p>${projectDescription}</p>

        <hr/>
        <p>Enquiry ID: ${enquiryId}</p>
      `,
    });

    /** 4️⃣ Visitor Confirmation Email */
    await transporter.sendMail({
      from: `"Your Company" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your enquiry 🎉",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thanks for contacting us! We’ve received your enquiry.</p>
        <p>Our team will reach out within <strong>24 hours</strong>.</p>

        <p><strong>Reference ID:</strong> ${enquiryId}</p>

        <br/>
        <p>Regards,<br/>Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      enquiry_id: enquiryId,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
