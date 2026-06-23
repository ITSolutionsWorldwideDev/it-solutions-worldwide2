"use client";

import React from "react";
import Image from "next/image";

interface Section3Props {
  heading: string;
  subheading: string;
  challengeTitle: string;
  challenges: string[];
  conclusionText: string;
  ctaText: string;
  imageSrc: string;
}

const Section3 = ({
  heading,
  subheading,
  challengeTitle,
  challenges,
  conclusionText,
  ctaText,
  imageSrc // <--- Prop bilkul sahi aa rahi hai
}: Section3Props) => {
  return (
    /* Forceful background color integration matching the light blue tone */
    <div className="w-full bg-[#E3EFF1] py-16 md:py-24 px-4 sm:px-6 lg:px-8 block clearfix">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Explicitly forcing text content onto the left side */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center text-left order-1">
          
          {/* Main Typography Header matching image_3c72e3.png formatting */}
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold text-[#05262C] leading-[1.2] tracking-tight mb-6">
            {heading}
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#2D4A4F] leading-relaxed mb-8 font-normal max-w-2xl">
            {subheading}
          </p>

          <h4 className="text-[14px] font-bold text-[#05262C] tracking-wider uppercase mb-4">
            {challengeTitle}
          </h4>

          {/* Hardcoded Red/Coral Multipliers List Layout */}
          <ul className="space-y-3.5 mb-8 max-w-2xl">
            {challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-[#1C3B40] leading-relaxed">
                <span className="text-[#D9534F] font-bold text-[15px] mt-[1px] select-none shrink-0">
                  ×
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>

          <p className="text-[15px] sm:text-[16px] font-extrabold text-[#05262C] leading-relaxed mb-8 max-w-xl">
            {conclusionText}
          </p>

          {/* Core Action Accent Element Button */}
          <div className="flex justify-start">
            <button className="bg-[#1B8991] hover:bg-[#156F76] text-white text-[15px] font-bold py-3 px-6 rounded-[8px] transition-all duration-200 shadow-sm">
              {ctaText}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Rigidly pinning the Showcase Card on the right side on desktop */}
        <div className="w-full lg:w-[38%] flex justify-center lg:justify-end order-2 mt-8 lg:mt-0">
          <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-white/40 bg-white min-h-[300px]">
            <Image
              src={imageSrc} /* <--- MAINE YAHAN DYNAMIC VARIABLE SET KAR DIYA HAI */
              alt="Challenge presentation illustration"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-w-1024px) 100vw, 460px"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section3;