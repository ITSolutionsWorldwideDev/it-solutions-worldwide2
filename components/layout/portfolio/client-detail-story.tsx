import React from "react";

export interface CaseStudyPart {
  text: string;
  highlight?: boolean;
}

export interface ClientDetailStoryProps {
  accentColor?: string;
  eyebrow?: string;
  title1Parts: CaseStudyPart[];
  paragraph1: string;
  paragraph2Lead?: string;
  paragraph2Rest?: string;
  title2Parts: CaseStudyPart[];
  paragraph3: string;
  paragraph4: string;
}

export default function ClientDetailStory({
  accentColor = "#FF8A00",
  eyebrow = "OUR WORK · PORTFOLIO",
  title1Parts,
  paragraph1,
  paragraph2Lead,
  paragraph2Rest,
  title2Parts,
  paragraph3,
  paragraph4,
}: ClientDetailStoryProps) {
  return (
    <section className="relative w-full bg-white text-gray-900 pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <div className="mx-auto max-w-6xl lg:max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Tag with Brand Accent Horizontal Lines */}
        {eyebrow && (
          <div
            className="mb-6 sm:mb-8 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]"
            style={{ color: accentColor }}
          >
            <span
              className="h-[1.5px] w-8 sm:w-12 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span>{eyebrow}</span>
            <span
              className="h-[1.5px] w-8 sm:w-12 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        )}

        {/* Section 1 Heading */}
        <h2 className="mx-auto max-w-5xl lg:max-w-[1100px] text-center text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-[#111827] leading-[1.2]">
          {title1Parts.map((part, idx) => (
            <span
              key={idx}
              style={part.highlight ? { color: accentColor } : undefined}
            >
              {part.text}
            </span>
          ))}
        </h2>

        {/* Paragraph 1 */}
        {paragraph1 && (
          <p className="mx-auto mt-6 sm:mt-7 max-w-5xl lg:max-w-[1080px] text-center text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-normal">
            {paragraph1}
          </p>
        )}

        {/* Paragraph 2 with bold lead-in */}
        {(paragraph2Lead || paragraph2Rest) && (
          <p className="mx-auto mt-4 sm:mt-5 max-w-5xl lg:max-w-[1080px] text-center text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-normal">
            {paragraph2Lead && (
              <strong className="font-bold text-gray-900 mr-1.5">
                {paragraph2Lead}
              </strong>
            )}
            {paragraph2Rest}
          </p>
        )}

        {/* Separation Gap between Block 1 and Block 2 */}
        <div className="my-12 sm:my-16 lg:my-20" />

        {/* Section 2 Heading */}
        <h3 className="mx-auto max-w-5xl lg:max-w-[1100px] text-center text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-[#111827] leading-[1.2]">
          {title2Parts.map((part, idx) => (
            <span
              key={idx}
              style={part.highlight ? { color: accentColor } : undefined}
            >
              {part.text}
            </span>
          ))}
        </h3>

        {/* Paragraph 3 */}
        {paragraph3 && (
          <p className="mx-auto mt-6 sm:mt-7 max-w-5xl lg:max-w-[1080px] text-center text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-normal">
            {paragraph3}
          </p>
        )}

        {/* Paragraph 4 */}
        {paragraph4 && (
          <p className="mx-auto mt-4 sm:mt-5 max-w-5xl lg:max-w-[1080px] text-center text-sm sm:text-base md:text-[17px] text-gray-600 leading-relaxed font-normal">
            {paragraph4}
          </p>
        )}
      </div>
    </section>
  );
}
