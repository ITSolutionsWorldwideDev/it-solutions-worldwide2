import React from "react";

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

type SectionHiringProcessProps = {
  heading: string;
  steps: ProcessStep[];
  ctaText: string;
};

const TEAL = "#0E5E64";

export default function SectionHiringProcess({
  heading,
  steps,
  ctaText,
}: SectionHiringProcessProps) {
  return (
    <section className="py-24 px-6 bg-white font-sans w-full overflow-visible">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
          {heading}
        </h2>
      </div>

      {/* Desktop View */}
      <div className="max-w-7xl mx-auto hidden md:block relative select-none px-8 overflow-visible">

        {/* TOP TEXT AREA (Renders content for 'Up' positions) */}
        <div className="flex justify-between items-end min-h-[80px] mb-2 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 min-w-0 text-center px-3">
              {idx % 2 === 0 && (
                <>
                  <h3 className="text-[13px] font-bold text-[#0F172A] mb-1">{step.title}</h3>
                  <p className="text-[#475569] text-[11px] leading-snug max-w-[180px] mx-auto">{step.description}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* MIDDLE SECTION (SVG and Circles) */}
        <div className="relative flex items-center justify-between h-[150px] my-1 overflow-visible">
          <div className="absolute inset-0 flex items-center px-10 overflow-visible z-0">
            <svg className="w-full h-[120px]" viewBox="0 0 920 120" fill="none" preserveAspectRatio="none">
              <path d="M 75 35 C 190 35, 210 85, 325 85 C 440 85, 460 35, 575 35 C 690 35, 710 85, 825 85 L 910 85" stroke={TEAL} strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" />
              <path d="M 900 78 L 912 85 L 900 92" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex justify-center relative z-10 overflow-visible">
              <div
                className="w-24 h-24 rounded-full text-white flex items-center justify-center text-2xl font-bold shadow-[0_12px_24px_rgba(14,94,100,0.25)]"
                style={{
                  backgroundColor: TEAL,
                  transform: idx % 2 === 1 ? "translateY(25px)" : "translateY(-25px)",
                }}
              >
                {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT AREA (Renders content for 'Down' positions) */}
        <div className="flex justify-between items-start min-h-[80px] mt-2 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 min-w-0 text-center px-3">
              {idx % 2 === 1 && (
                <>
                  <h3 className="text-[13px] font-bold text-[#0F172A] mb-1">{step.title}</h3>
                  <p className="text-[#475569] text-[11px] leading-snug max-w-[180px] mx-auto">{step.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-12 max-w-sm mx-auto relative before:content-[''] before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:border-l-2 before:border-dashed mt-16" style={{ borderColor: TEAL }}>
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-6 items-start pl-2">
            <div className="w-12 h-12 rounded-full text-white flex items-center justify-center text-lg font-bold shadow-md shrink-0" style={{ backgroundColor: TEAL }}>
              {step.number}
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-1">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <button className="text-white px-8 py-3.5 rounded-md text-sm font-semibold tracking-wide hover:opacity-90 transition" style={{ backgroundColor: TEAL }}>
          {ctaText}
        </button>
      </div>
    </section>
  );
}