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
  service: string; // Naya prop add kiya
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
  service, // Destructured
  stats,
  darkColor = "#05262C",
}: HeroSectionAdvancedProps) => {
  
  const exactGradient = "linear-gradient(90deg, #22a3ad, #219fa9 7.14%, #209ba5 14.29%, #1f98a1 21.43%, #1e949d 28.57%, #1d9099 35.71%, #1c8c95 42.86%, #1b8991 50%, #1a858d 57.14%, #1a8189 64.29%, #197d85 71.43%, #187a81 78.57%, #17767e 85.71%, #16737a 92.86%, #156f76)";

  return (
    <section
      className="relative w-full overflow-hidden pt-16 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, #ffffff 0%, #ffffff 35%, #eef8f9 60%, #d9eef0 85%, #cbe8eb 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_60%,rgba(176,221,224,0.6),transparent_55%)] pointer-events-none" />

      <div className="max-w-5xl w-full flex flex-col items-center relative z-10 text-center px-4 sm:px-6 lg:px-8">
        
        {/* Pill Badge Tag */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#cbe7eb] bg-[#e6f4f6]/80 px-4 py-1 mb-8 shadow-sm">
          <Zap size={13} strokeWidth={2.5} className="fill-current opacity-90" style={{ color: "#1b8991" }} />
          <span className="text-[13px] font-semibold tracking-wide" style={{ color: "#1b8991" }}>
            {typeof badgeText === "string" ? badgeText.replace(/[✦★⭐✦]/g, "").trim() : badgeText}
          </span>
        </div>

        {/* Headings */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.15] max-w-4xl"
          style={{ color: darkColor }}
        >
          {(() => {
            const words = `${headingLine1} ${headingLine2}`.trim().split(" ");
            const lastWord = words.pop();
            const remainingText = words.join(" ");

            return (
              <>
                {remainingText}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: exactGradient }}
                >
                  {lastWord}
                </span>
              </>
            );
          })()}
        </h1>

        {/* Accent Bar */}
        <div className="w-28 h-[4px] rounded-full mt-4 mb-8" style={{ background: exactGradient }} />

        {/* Description */}
        <p className="max-w-3xl text-[15px] sm:text-[16px] leading-relaxed text-[#3a5357] font-normal mb-10 px-2 sm:px-6">
          {description}
        </p>

        {/* Button Actions Row */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-5 w-full mb-8">
          {/* Primary Button */}
          <Link
            href={primaryButtonLink}
            className="inline-flex items-center justify-center gap-2 h-[50px] px-10 rounded-xl text-[15px] font-bold text-white shadow-md transition-all duration-200 hover:brightness-95 whitespace-nowrap min-w-[180px] sm:min-w-[210px]"
            style={{ background: exactGradient }}
          >
            <span className="leading-[27.77px]">{primaryButtonText}</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>

          {/* WhatsApp Secondary Button */}
          <Link
            href={`https://wa.me/31107660786?text=Hi%20there!%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20hiring%20a%20dedicated%20${encodeURIComponent(service)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-[50px] px-10 rounded-xl text-[15px] font-bold border-2 bg-transparent transition-all duration-200 hover:bg-[#e6f4f6]/40 whitespace-nowrap min-w-[180px] sm:min-w-[210px]"
            style={{ color: "#1b8991", borderColor: "#1b8991" }}
          >
            <Play size={14} className="fill-current opacity-80 mt-[1px]" />
            <span className="leading-[27.77px]">{secondaryButtonText}</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-row items-center justify-between pt-0 pb-8 w-full max-w-2xl px-2 sm:px-6 gap-2">
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

      {/* Trust Ribbon */}
      <div 
        className="w-full py-4 flex items-center justify-center border-t border-white/10 relative z-10"
        style={{ background: exactGradient }}
      >
        <div className="max-w-5xl w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 text-center text-white text-[13px] sm:text-[14px] font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <Check size={15} strokeWidth={3} className="text-white shrink-0" />
            <span>Trusted by 500+ Businesses Looking to Scale Faster Across Netherlands</span>
          </div>
          <span className="hidden sm:inline text-white/40 font-light">|</span>
          <div className="flex items-center gap-2">
            <span>Pre-Vetted Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAdvanced;