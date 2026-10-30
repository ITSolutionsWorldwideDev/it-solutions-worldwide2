// app/[locale]/career/[slug]/page.tsx
import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailPage, { JobDetail } from "@/components/layout/job-detail-page";
import { parseJobContent } from "@/lib/parse-job-content";
import pool from "@/lib/db";
import { getCanonicalUrl, getLanguageAlternates } from "@/utils/seo";

export const dynamic = "force-dynamic";

interface ApiJob {
  job_info_id: number;
  title: string;
  location: string;
  type: string;
  content?: string | null;
  created_at: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted 1 day ago";
  return `Posted ${days} days ago`;
}

const getJob = cache(async (slug: string): Promise<JobDetail | null> => {
  try {
    const result = await pool.query(
      `SELECT * FROM jobs_infos 
       WHERE title IS NOT NULL AND TRIM(title) != ''
         AND content IS NOT NULL AND TRIM(content) != ''
         AND location IS NOT NULL AND TRIM(location) != '' AND LOWER(TRIM(location)) != 'location not set'
         AND type IS NOT NULL AND TRIM(type) != ''
         AND (published = 1 OR published IS NULL)
       ORDER BY created_at DESC`
    );

    const items: ApiJob[] = result.rows || [];
    const match = items.find((j) => slugify(j.title) === slug);
    if (!match) return null;

    const baseJob: JobDetail = {
      slug: slugify(match.title),
      title: match.title,
      location: match.location,
      workType: match.type,
      postedAgo: timeAgo(match.created_at),
    };

    if (match.content && match.content.trim().length > 0) {
      const parsed = parseJobContent(match.content);
      return {
        ...baseJob,
        aboutRole: parsed.aboutRole,
        whatYoullDo: parsed.whatYoullDo,
        whatYoullBring: parsed.whatYoullBring,
        niceToHave: parsed.niceToHave,
        additionalInfo: parsed.additionalInfo,
      };
    }

    return baseJob;
  } catch (err) {
    console.error("Failed to load job detail from DB:", err);
    return null;
  }
});

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    const fallbackTitle = slug
      .replace(/---+/g, " - ")
      .replace(/-/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      title: `${fallbackTitle} | Careers at IT Solutions Worldwide`,
    };
  }

  const jobTitle = job.title;
  const locationSuffix = job.location ? ` - ${job.location}` : "";

  return {
    title: `${jobTitle}${locationSuffix} | Careers at IT Solutions Worldwide`,
    description: `Apply for the ${jobTitle} position in ${job.location || "Netherlands"} at IT Solutions Worldwide. ${job.workType} role. View job description, requirements, and apply today.`,
    alternates: {
      canonical: getCanonicalUrl(locale, `/career/${slug}`),
      languages: getLanguageAlternates(`/career/${slug}`),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}