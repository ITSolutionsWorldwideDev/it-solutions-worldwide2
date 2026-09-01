"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";

type CommonTranslations = Record<string, any>;

interface JobInfo {
  job_info_id: number;
  title: string;
  location: string;
  type: string;
  pdf_url?: any;
  author_username?: string;
  author_email?: string;
  created_at: string;
  updated_at: string;
  published: number;
}

interface ApiResponse {
  items: JobInfo[];
  totalResults: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

const PAGE_SIZE = 50;

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

const CareerJobsSection = ({ locale = "en" }: { locale?: string }) => {
  const translations = (
    locale.toLowerCase().startsWith("nl") ? nlCommon : enCommon
  ) as CommonTranslations;

  const jobsData = translations.career?.jobs || {};

  const [JobInfos, setJobInfos] = useState<JobInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const fetchjobsInfo = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/jobs-info?page=${page}&limit=${PAGE_SIZE}`,
        {
          cache: "no-store",
        }
      );
      const data: ApiResponse = await res.json();
      setJobInfos(data.items || []);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(data.currentPage || 1);
    } catch (err) {
      console.error("Failed to load jobsInfo", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchjobsInfo(currentPage);
  }, [currentPage]);

  const filteredJobs = JobInfos.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "All") return matchesSearch;
    return matchesSearch && job.type.toLowerCase() === activeTab.toLowerCase();
  });

  const tabFilters = [
    { key: "All", label: jobsData.tabs?.all || "All" },
    { key: "Full-Time", label: jobsData.tabs?.fullTime || "Full-Time" },
    { key: "Part-Time", label: jobsData.tabs?.partTime || "Part-Time" },
    { key: "Contract", label: jobsData.tabs?.contract || "Contract" },
    { key: "Internship", label: jobsData.tabs?.internship || "Internship" },
  ];

  if (loading)
    return (
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center px-6 py-12 sm:px-8 lg:px-0">
        <p className="text-sm font-medium text-gray-400">
          {jobsData.loading || "Loading positions..."}
        </p>
      </div>
    );

  const langPrefix = locale ? `/${locale}` : "";

  return (
    <section className="w-full bg-[#FAFCFC] py-16">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-[#2B8A99]">
            {jobsData.eyebrow}
          </span>
          <h2 className="text-[36px] font-extrabold tracking-tight text-[#06282C] sm:text-[44px]">
            {jobsData.headingPrefix}{" "}
            <span className="text-[#2B8A99]">
              {jobsData.headingHighlight}
            </span>
          </h2>
        </div>

        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-5">
          <div className="relative mb-4 flex items-center">
            <span className="pointer-events-none absolute left-4 flex items-center text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder={jobsData.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200/70 bg-[#F8FAFA] py-3 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 transition focus:border-[#2B8A99] focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {tabFilters.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-[#2B8A99] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}{" "}
                {tab.key === "All" && (
                  <span className="ml-1 opacity-90">({JobInfos.length})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-4 text-xs font-medium text-gray-400">
          {filteredJobs.length} {jobsData.positionsFound}
        </p>

        <div className="flex flex-col gap-4">
          {filteredJobs.map((job, index) => (
            <div
              key={job.job_info_id || index}
              className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200/70 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition duration-300 hover:shadow-md md:flex-row md:items-center"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-[#E6F4F5] px-2.5 py-0.5 text-[11px] font-semibold text-[#2B8A99]">
                    {job.type}
                  </span>
                  <span className="rounded-full bg-[#F3E8FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#7E22CE]">
                    {jobsData.statusActive}
                  </span>
                </div>

                <h3 className="mb-1.5 text-lg font-bold text-[#06282C]">
                  {job.title}
                </h3>

                <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <svg className="h-3.5 w-3.5 text-[#2B8A99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </p>

                <Link
                  href={`${langPrefix}/career/${slugify(job.title)}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2B8A99] hover:underline"
                >
                  {jobsData.viewDetails}
                </Link>
              </div>

              <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
                <Link
                  href={`${langPrefix}/job-apply`}
                  className="w-full rounded-xl bg-[#2B8A99] px-6 py-2.5 text-center text-xs font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-[#237380] md:w-auto"
                >
                  {jobsData.applyNow}
                </Link>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-gray-100 bg-white py-12 text-center">
              <p className="text-sm text-gray-500">
                {jobsData.noResults}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerJobsSection;