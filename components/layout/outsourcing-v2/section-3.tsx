"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Section3Props {
  heading: string;
  subheading: string;
  challengeTitle: string;
  challenges: string[];
  conclusionText: string;
  ctaText: string;
  imageSrc: string;
  service: string; 
}

const FALLBACK_IMAGES = [
  "/assets/images/staffingconsulting2.webp",
  "/assets/images/categories/it-development.webp",
  "/assets/images/categories/business-support.webp",
  "/assets/images/categories/design-services.webp",
  "/assets/images/categories/marketing-analytics.webp",
];

// Simple deterministic hash: same input => same fallback image, hamesha.
const hashToIndex = (text: string, mod: number) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % mod;
};

const Section3 = ({
  heading,
  subheading,
  challengeTitle,
  challenges,
  conclusionText,
  ctaText,
  imageSrc,
  service,
}: Section3Props) => {
  const fallbackImage = FALLBACK_IMAGES[hashToIndex(service || imageSrc || "default", FALLBACK_IMAGES.length)];
  const [currentSrc, setCurrentSrc] = useState(imageSrc || fallbackImage);

  return (
   
    <div
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 block clearfix overflow-hidden"
      style={{
        background: "#DCE9EC",
      }}
    >
      {/* A few very faint, soft random white glow patches */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.55) 0%, transparent 22%), radial-gradient(circle at 78% 10%, rgba(255,255,255,0.4) 0%, transparent 20%), radial-gradient(circle at 90% 70%, rgba(255,255,255,0.5) 0%, transparent 25%), radial-gradient(circle at 30% 85%, rgba(255,255,255,0.35) 0%, transparent 20%), radial-gradient(circle at 55% 45%, rgba(255,255,255,0.3) 0%, transparent 18%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center text-left order-1">
          
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold text-[#05262C] leading-[1.2] tracking-tight mb-6">
            {heading}
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#2D4A4F] leading-relaxed mb-8 font-normal max-w-2xl">
            {subheading}
          </p>

          <h4 className="text-[14px] font-bold text-[#05262C] tracking-wider uppercase mb-4">
            {challengeTitle}
          </h4>

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

          {/* WhatsApp Action Button */}
          <div className="flex justify-start">
            <a
              href={`https://wa.me/31107660786?text=Hi%20there!%20I%20would%20like%20to%20discuss%20hiring%20a%20dedicated%20${encodeURIComponent(service)}.%20${encodeURIComponent(conclusionText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B8991] hover:bg-[#156F76] text-white text-[15px] font-bold py-3 px-6 rounded-[8px] transition-all duration-200 shadow-sm inline-block"
            >
              {ctaText}
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[48%] flex justify-center lg:justify-end order-2 mt-8 lg:mt-0">
          <div className="relative w-full max-w-[640px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-white/40 bg-white min-h-[340px] lg:min-h-[420px]">
            <Image
              src={currentSrc}
              alt="Challenge presentation illustration"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 640px"
              priority
              onError={() => {
                if (currentSrc !== fallbackImage) {
                  setCurrentSrc(fallbackImage);
                }
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section3;