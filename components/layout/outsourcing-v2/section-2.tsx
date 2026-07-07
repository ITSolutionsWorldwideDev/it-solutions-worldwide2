"use client";

import React from "react";

interface FeatureIcon {
  emoji: string;
  label: string;
}

interface Section2Props {
  heading: string;
  icons?: string[]; // e.g. ["🔷 Dedicated Front-End Developers", "⏱ Start in Days, Not Months", ...]
}

// Rotating background colors for the icon boxes (design ke original palette se)
const BG_COLORS = ["#e6f4f4", "#fdf0ed", "#edf7ed", "#fbf0fc", "#edf5fd"];

// String jesa "🔷 Dedicated Front-End Developers" ko emoji + label mein split karta hai.
const parseIconString = (raw: string): FeatureIcon => {
  const match = raw.match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F?)\s*(.*)$/u);
  if (match) {
    return { emoji: match[1], label: match[2].trim() };
  }
  return { emoji: "✦", label: raw.trim() };
};

const DEFAULT_ICONS = [
  "👥 Dedicated Remote Experts",
  "⏱ Start in Days, Not Months",
  "💰 Save up to 60% on Hiring Costs",
  "🛡 Fully Managed Support",
  "📋 Flexible Monthly Plans",
];

const Section2 = ({ heading, icons }: Section2Props) => {
  const rawIcons = icons && icons.length > 0 ? icons : DEFAULT_ICONS;
  const currentFeatures = rawIcons.map((raw, i) => ({
    ...parseIconString(raw),
    bgColor: BG_COLORS[i % BG_COLORS.length],
  }));

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#05262C] text-center max-w-4xl tracking-tight leading-[1.25] mb-10">
          {heading}
        </h2>

        {/* Features Row - forced single line, square icons matching reference */}
        <div className="flex flex-row flex-nowrap items-start justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 w-full max-w-6xl px-2 overflow-x-auto">
          {currentFeatures.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-[120px] sm:w-[140px] md:w-[160px] shrink-0 px-1"
            >
              {/* Square rounded icon box */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm text-2xl sm:text-[28px]"
                style={{ backgroundColor: item.bgColor }}
              >
                <span role="img" aria-hidden="true">{item.emoji}</span>
              </div>

              {/* Label text */}
              <span className="text-[13px] sm:text-[14px] font-normal text-[#143237] leading-snug tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;