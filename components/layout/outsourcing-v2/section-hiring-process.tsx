"use client";

import React from "react";
import Link from "next/link"; 

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

type SectionHiringProcessProps = {
  heading: string;
  steps: ProcessStep[];
  ctaText: string;
  ctaLink?: string; 
};

const TEAL = "#0E5E64";

export default function zSectionHiringProcess({
  heading,
  steps,
  ctaText,
  ctaLink = "/en/contact-us",
}: SectionHiringProcessProps) {
  return (
   
<section className="pt-0 pb-12 px-6 bg-white font-sans w-full overflow-visible">      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        {/* Font size 4xl/5xl se 3xl/4xl kardi */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
          {heading}
        </h2>
      </div>

      {/* Desktop View */}
      <div className="max-w-7xl mx-auto hidden md:block relative select-none px-8 overflow-visible">
        <div className="flex justify-between items-end min-h-[40px] mb-2 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 min-w-0 text-center px-2">
              {idx % 2 === 0 && (
                <h3 className="text-[18px] font-bold text-[#0F172A]">{step.title}</h3>
              )}
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-between h-[120px] my-1 overflow-visible">
          <div className="absolute inset-0 flex items-center px-10 overflow-visible z-0">
       <svg className="w-full h-[100px]" viewBox="0 0 920 120" fill="none" preserveAspectRatio="none">
  <defs>
    <marker
      id="arrowhead"
      markerWidth="6"  // Pehle 10 tha
      markerHeight="5" // Pehle 7 tha
      refX="5"         // Arrow ko line ke paas shift kiya
      refY="2.5"
      orient="auto"
    >
      {/* Triangle points */}
      <polygon points="0 0, 6 2.5, 0 5" fill={TEAL} />
    </marker>
  </defs>

  <path 
    d="M 75 35 C 190 35, 210 85, 325 85 C 440 85, 460 35, 575 35 C 690 35, 710 85, 825 85 L 910 85" 
    stroke={TEAL} 
    strokeWidth="2.5" 
    strokeDasharray="6 7" 
    strokeLinecap="round" 
    markerEnd="url(#arrowhead)" 
  />
</svg>
          </div>
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex justify-center relative z-10 overflow-visible">
              <div
                className="w-20 h-20 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-[0_8px_16px_rgba(14,94,100,0.2)]"
                style={{
                  backgroundColor: TEAL,
                  transform: idx % 2 === 1 ? "translateY(15px)" : "translateY(-15px)",
                }}
              >
                {step.number}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-start min-h-[40px] mt-2 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 min-w-0 text-center px-2">
              {idx % 2 === 1 && (
                <h3 className="text-[18px] font-bold text-[#0F172A]">{step.title}</h3>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-8 max-w-sm mx-auto relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:border-l-2 before:border-dashed mt-8" style={{ borderColor: TEAL }}>
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 items-center pl-2">
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center text-base font-bold shadow-sm shrink-0" style={{ backgroundColor: TEAL }}>
              {step.number}
            </div>
            <h3 className="text-[18px] font-bold text-[#0F172A]">{step.title}</h3>
          </div>
        ))}
      </div>

      {/* CTA Button - mt-20 se mt-10 kardi */}
      <div className="mt-10 text-center">
        <Link 
          href={ctaLink} 
          className="inline-flex items-center justify-center text-white px-7 py-3 rounded-md text-xs font-semibold tracking-wide hover:opacity-90 transition" 
          style={{ backgroundColor: TEAL }}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}