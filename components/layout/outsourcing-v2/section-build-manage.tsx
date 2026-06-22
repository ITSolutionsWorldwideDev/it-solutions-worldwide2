"use client";

import React from "react";

export type BuildCardItem = {
  title: string;
  bgColor?: string; // Made optional for safe fallback routing
  iconPath?: React.ReactNode; // Made optional for dynamic parsing
  features: string[];
};

interface SectionBuildManageProps {
  heading?: string;
  subheading?: string;
  cards?: BuildCardItem[];
}

// Clean fallback task icon (Briefcase / Check-list theme)
const DefaultTaskIcon = () => (
  <svg className="w-5 h-5 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const SectionBuildManage = ({ heading, subheading, cards }: SectionBuildManageProps) => {
  
  // ── Robust Local Fallbacks ───────────────────────────────────────────────
  const finalHeading = heading || "Core Responsibilities Handled";
  const finalSubheading = subheading || "Engineered to deliver high accountability standards across routine operational assignments.";

  const fallbackCards: BuildCardItem[] = [
    {
      title: "Task Execution & Routing",
      features: [
        "Maintain direct communication workflows within company schedules.",
        "Update critical line item information logs securely.",
        "Flag system performance anomalies to departmental managers."
      ]
    },
    {
      title: "Data System Management",
      features: [
        "Track critical project parameters inside standard internal software stacks.",
        "Organize documentation files systematically for prompt team access.",
        "Perform recurring validation checks on production system ledgers."
      ]
    },
    {
      title: "Operational Quality Control",
      features: [
        "Enforce compliance and data protection guidelines reliably.",
        "Prepare comprehensive analytical reports weekly.",
        "Identify internal execution bottlenecks to streamline delivery cycles."
      ]
    }
  ];

  const finalCards = Array.isArray(cards) && cards.length > 0 ? cards : fallbackCards;

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Centered Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#05262C] tracking-tight leading-[1.15] mb-5">
            {finalHeading}
          </h2>
          {finalSubheading && (
            <p className="text-[15.5px] sm:text-[16.5px] text-[#4A5D61] leading-relaxed font-normal px-2">
              {finalSubheading}
            </p>
          )}
        </div>

        {/* 3-Column Premium Content Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {finalCards.map((card, idx) => {
            const cardTitle = card.title || `Capability Core ${idx + 1}`;
            
            // Handle both dynamic JSON arrays or structured lists safely
            const cardFeatures = Array.isArray(card.features) ? card.features : [];
            
            // Guard against missing aesthetic variables in standard json translation files
            const backgroundTint = card.bgColor || "#E6F4F5";
            const customIcon = card.iconPath || <DefaultTaskIcon />;

            return (
              <div 
                key={idx} 
                className="bg-white rounded-[18px] border border-[#E6ECEE] p-7 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-[#D0DCDE] flex flex-col justify-between"
              >
                <div>
                  {/* Horizontal Inline Header Grid Frame */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Styled Icon Container Box */}
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: backgroundTint }}
                    >
                      {customIcon}
                    </div>
                    {/* Card Title Inside Block */}
                    <h3 className="text-[17px] sm:text-[18px] font-extrabold text-[#05262C] tracking-tight">
                      {cardTitle}
                    </h3>
                  </div>

                  {/* Structured Checkmark Points Feature Mapping Array */}
                  <ul className="space-y-3.5">
                    {cardFeatures.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[#3A4D51] leading-relaxed">
                        <span className="text-[#14A38B] font-bold text-[14px] mt-[1px] select-none shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SectionBuildManage;