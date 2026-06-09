"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Slide = {
  heading: string;
  text: string;
  backgroundImage: string;
  button?: string;
  button2?: string;
  button3?: string;
  button4?: string;
  buttonTextColor?: string;
  priority?: boolean; // 👈 Accept priority configuration flags smoothly
};

type BannerSectionProps = {
  slides: Slide[];
};

const BannerSection2: React.FC<BannerSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return; // Don't run intervals needlessly for single slide arrays
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  const buttonTextColor = slides[currentSlide].buttonTextColor
    ? slides[currentSlide].buttonTextColor
    : "text-black";

  return (
    <div className="relative w-full px-4 sm:px-8 md:px-7 lg:px-32 py-2">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center">
        
        {/* PERFORMANCE FIX: Swapped slow CSS background image with Next.js high-priority Image compiler */}
        <Image
          src={slides[currentSlide].backgroundImage}
          alt={slides[currentSlide].heading || "Service Banner"}
          fill
          quality={85}
          // Only eager-load and prioritize the initial index image to maximize your network performance bandwidth
          priority={currentSlide === 0}
          fetchPriority={currentSlide === 0 ? "high" : "low"}
          loading={currentSlide === 0 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover object-center pointer-events-none select-none"
        />

        {/* Semi-opaque backdrop overlay layer for dark layout contrast maintenance */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 text-left text-white px-6 md:px-12">
          <h1 className="uppercase text-xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-4 w-[90%] md:w-[90%] lg:w-1/2">
            {slides[currentSlide].heading}
          </h1>
          <p className="text-sm sm:text-base w-[90%] md:w-[90%] lg:w-1/2">
            {slides[currentSlide].text}
          </p>
          
          {slides[currentSlide].button ? (
            <div className="flex justify-start gap-4 mt-2">
              <Link
                href="/contact-us" 
                target="_blank"
                className={`bg-white ${buttonTextColor} px-4 py-2 rounded font-semibold transition hover:bg-neutral-100`}
              >
                {slides[currentSlide].button}
              </Link>
            </div>
          ) : null}
          
          {slides[currentSlide].button2 ? (
            <div className="flex justify-start gap-4 mt-2">
              <Link
                href="#"
                className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition hover:bg-neutral-100`}
              >
                {slides[currentSlide].button2}
              </Link>
            </div>
          ) : null}
          
          {slides[currentSlide].button3 ? (
            <div className="flex justify-start gap-4 mt-2">
              <Link
                href="#"
                className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition hover:bg-neutral-100`}
              >
                {slides[currentSlide].button3}
              </Link>
            </div>
          ) : null}
          
          {slides[currentSlide].button4 ? (
            <div className="flex justify-start gap-4 mt-2">
              <Link
                href="#"
                className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition hover:bg-neutral-100`}
              >
                {slides[currentSlide].button4}
              </Link>
            </div>
          ) : null}
        
        </div>
      </div>
    </div>
  );
};

export default BannerSection2;