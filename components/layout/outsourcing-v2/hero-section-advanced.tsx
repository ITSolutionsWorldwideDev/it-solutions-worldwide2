"use client";

import Link from "next/link";
import { Zap, Play, ArrowRight, Check } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionAdvancedProps {
  badgeText: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText: string;
  secondaryButtonLink?: string;
  stats: Stat[];
  darkColor?: string;
}

const HeroSectionAdvanced = ({
  badgeText,
  headingLine1,
  headingLine2,
  description,
  primaryButtonText,
  primaryButtonLink = "#roles",
  secondaryButtonText,
  secondaryButtonLink = "#services",
  stats,
  darkColor = "#05262C",
}: HeroSectionAdvancedProps) => {
  
  // Exact high-end custom multi-stop gradient provided by you
  const exactGradient = "linear-gradient(90deg, #22a3ad, #219fa9 7.14%, #209ba5 14.29%, #1f98a1 21.43%, #1e949d 28.57%, #1d9099 35.71%, #1c8c95 42.86%, #1b8991 50%, #1a858d 57.14%, #1a8189 64.29%, #197d85 71.43%, #187a81 78.57%, #17767e 85.71%, #16737a 92.86%, #156f76)";

  return (
    <section
      className="relative w-full overflow-hidden pt-16 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f2fafb 40%, #e6f4f6 75%, #f4fafb 100%)",
      }}
    >
      {/* Background glow matching the screenshots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(216,233,235,0.5),transparent_50%)] pointer-events-none" />

      {/* Main Content Box Wrapper */}
      <div className="max-w-5xl w-full flex flex-col items-center relative z-10 text-center px-4 sm:px-6 lg:px-8">
        
        {/* Pill Badge Tag */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#cbe7eb] bg-[#e6f4f6]/80 px-4 py-1 mb-8 shadow-sm">
          <Zap size={13} strokeWidth={2.5} className="fill-current opacity-90" style={{ color: "#1b8991" }} />
          <span className="text-[13px] font-semibold tracking-wide" style={{ color: "#1b8991" }}>
            {badgeText}
          </span>
        </div>

        {/* Headings */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.15] max-w-4xl"
          style={{ color: darkColor }}
        >
          {headingLine1}
          <span 
            className="block mt-1 font-extrabold bg-clip-text text-transparent pb-1" 
            style={{ backgroundImage: exactGradient }}
          >
            {headingLine2}
          </span>
        </h1>

        {/* Accent Bar */}
        <div className="w-28 h-[4px] rounded-full mt-4 mb-8" style={{ background: exactGradient }} />

        {/* Description Paragraph */}
        <p className="max-w-3xl text-[15px] sm:text-[16px] leading-relaxed text-[#3a5357] font-normal mb-10 px-2 sm:px-6">
          {description}
        </p>

        {/* Button Actions Row */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-5 w-full mb-14">
          {/* Solid Primary Button */}
          <Link
            href={primaryButtonLink}
            className="inline-flex items-center justify-center gap-2 h-[50px] px-10 rounded-xl text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:brightness-95 whitespace-nowrap min-w-[180px] sm:min-w-[210px]"
            style={{ background: exactGradient }}
          >
            <span className="leading-[27.77px]">{primaryButtonText}</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>

          {/* Outlined Secondary Button */}
          <Link
            href={secondaryButtonLink}
            className="inline-flex items-center justify-center gap-2 h-[50px] px-10 rounded-xl text-[15px] font-bold border-2 bg-transparent transition-all duration-200 hover:bg-[#e6f4f6]/40 whitespace-nowrap min-w-[180px] sm:min-w-[210px]"
            style={{ color: "#1b8991", borderColor: "#1b8991" }}
          >
            <Play size={14} className="fill-current opacity-80 mt-[1px]" />
            <span className="leading-[27.77px]">{secondaryButtonText}</span>
          </Link>
        </div>

        {/* Performance Stats Counter Row — Pushed to pb-36 and added mb-12 to guarantee separation */}
        <div className="flex flex-row items-center justify-between border-t border-[#d0e7ea] pt-8 pb-36 mb-12 w-full max-w-2xl px-2 sm:px-6 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-1">
              <span 
                className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-0.5 whitespace-nowrap bg-clip-text text-transparent" 
                style={{ backgroundImage: exactGradient }}
              >
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[12px] md:text-[13px] text-[#4a6367] font-medium leading-tight whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Ribbon Bar — Completely detached from the bottom text labels */}
      <div 
        className="w-full py-4 flex items-center justify-center border-t border-white/10 relative z-10"
        style={{ background: exactGradient }}
      >
        <div className="max-w-5xl w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 text-center text-white text-[13px] sm:text-[14px] font-medium tracking-wide">
          
          {/* Main Trust Statement */}
          <div className="flex items-center gap-2">
            <Check size={15} strokeWidth={3} className="text-white shrink-0" />
            <span>Trusted by 500+ Businesses Looking to Scale Faster Across Netherlands</span>
          </div>

          {/* Separation Pipeline Hidden on Mobile */}
          <span className="hidden sm:inline text-white/40 font-light">|</span>

          {/* Cleaned Pre-Vetted Professionals Text without Star Elements */}
          <div className="flex items-center gap-2">
            <Check size={15} strokeWidth={3} className="text-white shrink-0" />
            <span>Pre-Vetted Professionals</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSectionAdvanced;