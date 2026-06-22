"use client";

import React from "react";

export type BuildCardItem = {
  title: string;
  bgColor: string; // Dynamic soft icon background tint color
  iconPath: React.ReactNode; // Inline clean SVG icon paths matching image marks
  features: string[];
};

interface SectionBuildManageProps {
  heading: string;
  subheading: string;
  cards: BuildCardItem[];
}

const SectionBuildManage = ({ heading, subheading, cards }: SectionBuildManageProps) => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Centered Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#05262C] tracking-tight leading-[1.15] mb-5">
            {heading}
          </h2>
          <p className="text-[15.5px] sm:text-[16.5px] text-[#4A5D61] leading-relaxed font-normal px-2">
            {subheading}
          </p>
        </div>

        {/* 3-Column Premium Content Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, idx) => (
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
                    style={{ backgroundColor: card.bgColor }}
                  >
                    {card.iconPath}
                  </div>
                  {/* Card Title Inside Block */}
                  <h3 className="text-[17px] sm:text-[18px] font-extrabold text-[#05262C] tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Structured Checkmark Points Feature Mapping Array */}
                <ul className="space-y-3.5">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-[#3A4D51] leading-relaxed">
                      {/* Vibrant Light-Green Verification Tick Mark Vector */}
                      <span className="text-[#14A38B] font-bold text-[14px] mt-[1px] select-none shrink-0">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionBuildManage;