// components/layout/banner-section-2.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Slide = {
  heading: string;
  text?: string;
  backgroundImage: string;
  button?: string;
  button2?: string;
  button3?: string;
  button4?: string;
  buttonTextColor?: string;
  priority?: boolean; // ✅ priority field add kiya
};

type BannerSectionProps = {
  slides: Slide[];
};

const BannerSection2: React.FC<BannerSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  const slide = slides[currentSlide];
  const buttonTextColor = slide.buttonTextColor ?? "text-black";

  // ✅ Sirf first slide priority=true hogi (LCP image)
  const isFirstSlide = currentSlide === 0;

  const buttons = [slide.button, slide.button2, slide.button3, slide.button4].filter(Boolean);

  return (
    <div className="relative w-full px-4 sm:px-8 md:px-7 lg:px-32 py-2">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center">
        <Image
          src={slide.backgroundImage}
          alt={`${slide.heading} banner`}
          fill
          priority={isFirstSlide}               // ✅ sirf slide 0 par priority
          fetchPriority={isFirstSlide ? "high" : "auto"} // ✅ same
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
          aria-hidden
        />
        <div className="relative z-10 text-left text-white px-6 md:px-12">
          <h1 className="uppercase text-xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-4 w-[90%] md:w-[90%] lg:w-1/2">
            {slide.heading}
          </h1>
          {slide.text && (
            <p className="text-sm sm:text-base w-[90%] md:w-[90%] lg:w-1/2">
              {slide.text}
            </p>
          )}
          {/* ✅ Buttons — ek loop mein, 4 alag div nahi */}
          <div className="flex flex-col justify-start gap-2 mt-2">
            {buttons.map((btn, i) => (
              <Link
                key={i}
                href="/contact-us"
                target="_blank"
                className={`bg-white ${buttonTextColor} px-4 py-2 rounded font-semibold transition w-fit`}
              >
                {btn}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection2;