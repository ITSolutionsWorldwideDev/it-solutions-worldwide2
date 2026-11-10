import React from "react";
import Image from "next/image";

export interface ClientDetailHeroProps {
  clientName: string;
  heroHeadline?: string;
  clientLogo?: string;
  showcaseImage: string;
  imageAlt?: string;
  eyebrow?: string;
  subtext?: string;
  backgroundImage?: string;
}

export default function ClientDetailHero({
  clientName,
  heroHeadline,
  showcaseImage,
  imageAlt,
  eyebrow = "OUR WORK · PORTFOLIO",
  subtext = "From startups to established enterprises across Europe, we've delivered digital products, AI solutions, outsourcing services, and business automation that help companies scale with confidence.",
  backgroundImage = "/assets/images/career/c_bg.webp",
}: ClientDetailHeroProps) {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* 
        Dark Hero Background:
        Covers the top half of the section and extends roughly halfway down the showcase card,
        matching the exact Figma guideline. Below this, the background is pure white.
      */}
      <div
        className="absolute inset-x-0 top-0 h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] xl:h-[630px] bg-[#050b0d] overflow-hidden pointer-events-none select-none z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b0d]/75 via-[#050b0d]/55 to-[#050b0d]/90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 sm:pt-20 lg:pt-24 sm:px-6 lg:px-8">
        {/* Top Text Content (sits in the dark hero area) */}
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#00A896]">
              <span className="h-px w-8 sm:w-10 bg-[#00A896]" />
              <span>{eyebrow}</span>
              <span className="h-px w-8 sm:w-10 bg-[#00A896]" />
            </div>
          )}

          {/* Client Name / Hero Headline */}
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[54px] text-white leading-[1.16]">
            {heroHeadline || clientName}
          </h1>

          {/* Subtext */}
          {subtext && (
            <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal mx-auto">
              {subtext}
            </p>
          )}
        </div>

        {/* 
          Showcase Card Image:
          Starts directly below subtext, with its top half sitting on the dark hero background
          and its bottom half sitting on the pure white background.
        */}
        <div className="mt-8 sm:mt-10 lg:mt-12 relative w-full overflow-hidden rounded-[24px] sm:rounded-[34px] lg:rounded-[42px] drop-shadow-2xl">
          <Image
            src={showcaseImage}
            alt={imageAlt || `${clientName} project showcase`}
            width={1565}
            height={880}
            sizes="(max-width: 1024px) 95vw, 1100px"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Clean bottom padding after showcase card */}
        <div className="pb-8 sm:pb-10 lg:pb-12" />
      </div>
    </div>
  );
}
