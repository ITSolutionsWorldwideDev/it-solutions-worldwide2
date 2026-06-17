"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Slide = {
  heading: string;
  text?: string;
  backgroundImage: string;
  priority?: boolean; // 👈 Safely handles incoming optimization parameters
};

type BannerSectionProps = {
  slides: Slide[];
};

const BannerSection: React.FC<BannerSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return; // Prevents unnecessary execution for single layouts
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <div className="container mx-auto my-10">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
        
        {/* PERFORMANCE FIX: Next.js Optimized Image component with native high network priorities */}
        <Image
          src={slides[currentSlide].backgroundImage}
          alt={slides[currentSlide].heading}
          fill
          quality={85}
          priority={currentSlide === 0}
          fetchPriority={currentSlide === 0 ? "high" : "low"}
          loading={currentSlide === 0 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover object-center pointer-events-none select-none z-0"
        />

        {/* Dynamic opaque backdrop overlay layer */}
        <div className="absolute inset-0 bg-black/25 z-0" />
        
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {slides[currentSlide].heading}
          </h1>
          {slides[currentSlide].text ? (
            <p className="text-sm sm:text-base">{slides[currentSlide].text}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
