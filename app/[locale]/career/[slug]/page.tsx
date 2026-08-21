// app/[locale]/career/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import JobDetailPage, { JobDetail } from "@/components/layout/job-detail-page";
import { extractPdfText, parseJobPdfText, parseMarkdownJobContent, isParsedContentEmpty } from "@/utils/pdf-job-parser";

interface ApiJob {
  job_info_id: number;
  title: string;
  location: string;
  type: string;
  pdf_url?: string | null;
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

function contentToParagraphs(content: string): string[] {
  return content
    .split(/\r?\n\s*\r?\n|\r?\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export default function Page() {
  const params = useParams<{ slug: string }>();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(`/api/jobs-info?page=1&limit=1000`, { cache: "no-store" });
        const data = await res.json();
        const items: ApiJob[] = data.items || [];

        const match = items.find((j) => slugify(j.title) === params.slug);

        if (!match) {
          setFailed(true);
          setLoading(false);
          return;
        }

        const baseJob: JobDetail = {
          slug: slugify(match.title),
          title: match.title,
          location: match.location,
          workType: match.type,
          postedAgo: timeAgo(match.created_at),
        };

        // 1) DB ke content field mein pehle se text hai — markdown headings ke
        // hisaab se structured sections mein todo
        if (match.content && match.content.trim().length > 0) {
          const parsed = parseMarkdownJobContent(match.content);

          if (!isParsedContentEmpty(parsed)) {
            setJob({
              ...baseJob,
              aboutRole: parsed.aboutRole.length ? parsed.aboutRole : undefined,
              whatYoullDo: parsed.whatYoullDo.length ? parsed.whatYoullDo : undefined,
              whatYoullBring: parsed.whatYoullBring.length ? parsed.whatYoullBring : undefined,
              niceToHave: parsed.niceToHave.length ? parsed.niceToHave : undefined,
            });
          } else {
            // Headings match nahi hui — raw text hi paragraphs ki tarah dikha do
            setJob({ ...baseJob, aboutRole: contentToParagraphs(match.content) });
          }
          setLoading(false);
          return;
        }

        // 2) content khali hai — PDF khud parse karo (agar PDF hai)
        if (match.pdf_url) {
          try {
            const rawText = await extractPdfText(match.pdf_url);
            const parsed = parseJobPdfText(rawText);

            if (!cancelled) {
              if (!isParsedContentEmpty(parsed)) {
                setJob({
                  ...baseJob,
                  aboutRole: parsed.aboutRole.length ? parsed.aboutRole : undefined,
                  whatYoullDo: parsed.whatYoullDo.length ? parsed.whatYoullDo : undefined,
                  whatYoullBring: parsed.whatYoullBring.length ? parsed.whatYoullBring : undefined,
                  niceToHave: parsed.niceToHave.length ? parsed.niceToHave : undefined,
                });
              } else {
                // Headings match nahi hui — kam se kam raw text hi dikha do
                setJob({ ...baseJob, aboutRole: contentToParagraphs(rawText).slice(0, 6) });
              }
            }
          } catch (pdfErr) {
            console.error("PDF parse failed, falling back to PDF link", pdfErr);
            if (!cancelled) setJob({ ...baseJob, pdfUrl: match.pdf_url });
          }
        } else {
          // Na content, na PDF — basic info ke sath page dikha do
          setJob(baseJob);
        }

        if (!cancelled) setLoading(false);
      } catch (err) {
        console.error("Failed to load job detail", err);
        if (!cancelled) {
          setFailed(true);
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading job details...</p>
      </div>
    );
  }

  if (failed || !job) {
    notFound();
  }

  return <JobDetailPage job={job} />;
}