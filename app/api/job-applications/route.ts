// app/api/job-applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db";

const HR_BACKEND_API_BASE_URL =
  process.env.HR_BACKEND_API_BASE_URL ||
  "https://it-solution-code-hr-app-backend.vercel.app/api";

function buildRequestId() {
  return `website-apply-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function resolveWebsiteJob(jobCategoryId: string) {
  const parsedId = Number(jobCategoryId);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    return null;
  }

  const query = `
    SELECT
      job_info_id,
      title,
      hr_vacancy_id
    FROM jobs_infos
    WHERE job_info_id = $1
    LIMIT 1
  `;

  const result = await pool.query(query, [parsedId]);
  return result.rows?.[0] ?? null;
}

export async function POST(req: NextRequest) {
  const requestId = buildRequestId();

  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const address = formData.get("address")?.toString();
    const hear = formData.get("hear")?.toString();
    const job_category = formData.get("job_category")?.toString();
    const message = formData.get("message")?.toString();
    const job_category_id = formData.get("job_category_id")?.toString();
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !phone || !job_category_id || !resumeFile) {
      return NextResponse.json(
        {
          error: "Missing required fields.",
          request_id: requestId,
        },
        { status: 400 }
      );
    }

    const websiteJob = await resolveWebsiteJob(job_category_id);

    if (!websiteJob) {
      console.error("[job-applications] website job not found", {
        request_id: requestId,
        website_job_id: job_category_id,
      });

      return NextResponse.json(
        {
          error: "Selected website job was not found.",
          request_id: requestId,
          website_job_id: job_category_id,
        },
        { status: 404 }
      );
    }

    if (!websiteJob.hr_vacancy_id) {
      console.error("[job-applications] website job missing hr_vacancy_id", {
        request_id: requestId,
        website_job_id: websiteJob.job_info_id,
        website_job_title: websiteJob.title,
      });

      return NextResponse.json(
        {
          error: "This website vacancy is not linked to an HR vacancy yet.",
          request_id: requestId,
          website_job_id: websiteJob.job_info_id,
        },
        { status: 409 }
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const safeFileName = resumeFile.name.replace(/\s+/g, "_");
    const mimeType = resumeFile.type || "application/octet-stream";

    const insertQuery = `
      INSERT INTO job_applications
      (
        name,
        email,
        phone,
        address,
        hear,
        message,
        job_category_id,
        job_category,
        resume_filename,
        resume_mime,
        resume_data,
        created_at,
        updated_at,
        published_at
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,NOW(),NOW(),NOW())
      RETURNING job_applications_id
    `;

    const insertValues = [
      name,
      email,
      phone,
      address || "",
      hear || "",
      message || "",
      job_category_id,
      job_category || websiteJob.title || "",
      safeFileName,
      mimeType,
      buffer,
    ];

    const result = await pool.query(insertQuery, insertValues);
    const applicationId = result.rows?.[0]?.job_applications_id;

    const hrFormData = new FormData();
    hrFormData.append("file", resumeFile, safeFileName);
    hrFormData.append("candidate_email", email);
    hrFormData.append("candidate_name", name);
    hrFormData.append("candidate_phone", phone);
    hrFormData.append("address", address || "");
    hrFormData.append("how_did_you_hear", hear || "");
    hrFormData.append("cover_letter", message || "");
    hrFormData.append("source_label", "website_job_apply");
    hrFormData.append("vacancy_id", String(websiteJob.hr_vacancy_id));

    const hrResponse = await fetch(
      `${HR_BACKEND_API_BASE_URL}/applications/public-submit`,
      {
        method: "POST",
        body: hrFormData,
      }
    );

    const hrResponseText = await hrResponse.text();
    let hrPayload: any = null;

    try {
      hrPayload = hrResponseText ? JSON.parse(hrResponseText) : null;
    } catch {
      hrPayload = { raw: hrResponseText };
    }

    if (!hrResponse.ok) {
      console.error("[job-applications] HR backend forwarding failed", {
        request_id: requestId,
        status: hrResponse.status,
        body: hrPayload,
        legacy_job_application_id: applicationId,
        website_job_id: websiteJob.job_info_id,
        resolved_hr_vacancy_id: websiteJob.hr_vacancy_id,
      });

      return NextResponse.json(
        {
          error: "Application stored on website, but HR sync failed.",
          request_id: requestId,
          legacy_job_application_id: applicationId,
          hr_error: hrPayload,
        },
        { status: 502 }
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
      maxConnections: 3,
      maxMessages: 10,
    });

    const applicantMail = {
      from: `"IT Solutions Worldwide Careers" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank You for Reaching Out to IT Solutions Worldwide`,
      html: `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for contacting IT Solutions Worldwide and applying for <strong>${job_category || websiteJob.title}</strong>.</p>
        <p>Your application has been received and forwarded to the relevant department.</p>
        <p>A member of our team will get back to you as soon as possible.</p>
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
      subject: `Job application for ${job_category || websiteJob.title} - ${name}`,
      html: `
        <p>Dear <strong>HR Manager</strong>,</p>
        <p>Here is a job application for the post of <strong>${job_category || websiteJob.title}</strong>.</p>
        <p><strong>Applicant details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Address:</strong> ${address || ""}</li>
          <li><strong>Hear From:</strong> ${hear || ""}</li>
          <li><strong>Message:</strong> ${message || ""}</li>
        </ul>
        <p>The applicant’s resume is attached to this email.</p>
      `,
      attachments: [
        {
          filename: safeFileName,
          content: buffer,
          contentType: mimeType,
        },
      ],
    };

    await transporter.sendMail(applicantMail);
    await transporter.sendMail(hrMail);

    return NextResponse.json(
      {
        message: "Application submitted successfully!",
        request_id: requestId,
        legacy_job_application_id: applicationId,
        vacancy_id: websiteJob.hr_vacancy_id,
        talent_genie: hrPayload,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[job-applications] unexpected error", {
      request_id: requestId,
      error: err,
    });

    return NextResponse.json(
      {
        error: err.message || "Something went wrong.",
        request_id: requestId,
      },
      { status: 500 }
    );
  }
}

