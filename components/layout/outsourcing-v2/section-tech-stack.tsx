"use client";

import React from "react";

interface SectionTechStackProps {
  heading?: string;
  subheading?: string;
  line1Tags?: string[];
  line2Tags?: string[];
}

const SectionTechStack = ({
  heading,
  subheading,
  line1Tags = [],
  line2Tags = [],
}: SectionTechStackProps) => {
  const tagClass =
    "px-4 py-2 bg-white border border-[#D8E2E2] rounded-full text-[13px] font-medium text-[#1F383D] whitespace-nowrap shadow-sm hover:border-[#0E6774] transition-colors duration-200";

  // ── Robust Local Fallbacks ───────────────────────────────────────────────
  const finalHeading = heading || "Core Platform and Technical Competencies";
  const finalSubheading = subheading || "Experienced across major industry digital toolsets and production environments.";

  const fallbackTags = [
    "Microsoft Excel", "Google Workspace", "Salesforce CRM", "HubSpot", 
    "Zendesk Desk", "Jira Software", "Asana PM", "Trello Boards", 
    "Slack Workspace", "Notion", "Airtable Systems", "QuickBooks"
  ];

  // Combine passed tags. If both incoming arrays are empty, use the fallback array.
  const combinedIncoming = [...(line1Tags || []), ...(line2Tags || [])];
  const allTags = combinedIncoming.length > 0 ? combinedIncoming : fallbackTags;

  return (
    <section className="w-full bg-white pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 -mt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#05262C] tracking-tight mb-3">
            {finalHeading}
          </h2>
          {finalSubheading && (
            <p className="text-[14px] sm:text-[15px] text-[#4A5D61] font-normal px-4">
              {finalSubheading}
            </p>
          )}
        </div>

        {/* Tags Section - single wrap, centered, fills full width */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-[1300px] mx-auto">
          {allTags.map((tag, index) => (
            <span key={`tag-${index}`} className={tagClass}>
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionTechStack;