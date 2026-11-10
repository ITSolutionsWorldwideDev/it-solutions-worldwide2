import React from "react";
import Image from "next/image";

export interface PortfolioSection3Props {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  headingSuffix?: string;
  highlightSuffix?: boolean;
  subtext?: string;
  backgroundImage?: string;
  accentColor?: string;
}

export default function PortfolioSection3({
  eyebrow = "OUR WORK · PORTFOLIO",
  headingPrefix = "Let's Build Something",
  headingHighlight = "Exceptional",
  headingSuffix = "Together.",
  highlightSuffix = false,
  subtext = "Tell us about your project. We'll respond within one business day with a tailored proposal.",
  backgroundImage = "/assets/images/portfolio/section3.webp",
  accentColor = "#00A896",
}: PortfolioSection3Props) {
  return (
    <section className="relative w-full">
      {/* Image at natural size — no cropping */}
      <Image
        src={backgroundImage}
        alt={
          headingPrefix
            ? `${headingPrefix} ${headingHighlight}`
            : "Portfolio feature banner"
        }
        width={1920}
        height={1187}
        sizes="100vw"
        quality={90}
        className="w-full h-auto block"
        priority
      />

      {/* Text overlaid on the foggy/white top area of the image */}
      <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center pt-6 sm:pt-10 md:pt-14 lg:pt-16 px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        {eyebrow && (
          <div
            className="mb-2 sm:mb-3 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]"
            style={{ color: accentColor }}
          >
            <span
              className="h-px w-8 sm:w-10"
              style={{ backgroundColor: accentColor }}
            />
            <span>{eyebrow}</span>
            <span
              className="h-px w-8 sm:w-10"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        )}

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-extrabold tracking-tight text-[#06282C] leading-[1.18] max-w-4xl text-center">
          {headingPrefix}{" "}
          <span style={{ color: accentColor }}>{headingHighlight}</span>
          <br className="hidden sm:inline" />{" "}
          <span style={highlightSuffix ? { color: accentColor } : undefined}>
            {headingSuffix}
          </span>
        </h2>

        {/* Subtext */}
        {subtext && (
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-xl md:max-w-2xl text-center">
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
