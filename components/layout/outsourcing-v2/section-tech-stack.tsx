"use client";

import React from "react";

interface SectionTechStackProps {
  heading: string;
  subheading: string;
  line1Tags: string[];
  line2Tags: string[];
}

const SectionTechStack = ({
  heading,
  subheading,
  line1Tags,
  line2Tags,
}: SectionTechStackProps) => {
  const tagClass =
    "px-4 py-2 bg-white border border-[#D8E2E2] rounded-full text-[13px] font-medium text-[#1F383D] whitespace-nowrap";

  const allTags = [...line1Tags, ...line2Tags];

  return (
    <section className="w-full bg-white pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 -mt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#05262C] tracking-tight mb-3">
            {heading}
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#4A5D61] font-normal px-4">
            {subheading}
          </p>
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