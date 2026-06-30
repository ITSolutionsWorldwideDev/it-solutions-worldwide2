"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Slide = {
  heading: string;
  text: string;
  backgroundImage: string;
  backgroundMainImage: string;
  button?: string;
  button2?: string;
  button3?: string;
  button4?: string;
};

type BannerSectionProps = {
  slides: Slide[];
  locale: string;
};

const BannerSection3: React.FC<BannerSectionProps> = ({ slides, locale }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // This state ensures we only render dynamic content after the component has hydrated
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [slides]);

  // If not yet mounted, force the first slide to match the server-rendered HTML exactly
  const slide = isMounted ? slides[currentSlide] : slides[0];
  const isFirst = currentSlide === 0;

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full py-2 mt-2">
      <div className="relative w-full h-[900px] md:h-[400px] lg:h-[600px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center">
        {/* Background Image */}
        <Image
          src={slide.backgroundImage}
          alt={`${slide.heading} banner`}
          fill
          priority={isFirst}
          fetchPriority={isFirst ? "high" : "auto"}
          loading={isFirst ? "eager" : "lazy"}
          quality={85}
          sizes="100vw"
          className="object-cover object-center z-0"
          aria-hidden
        />

        <div className="relative w-full h-full z-10 text-left text-white px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full h-full">
            <div className="relative self-center">
              <h1 className="bg-linear-to-r from-[#1A2980] to-[#26D0CE] bg-clip-text text-transparent font-lexend text-[54.636px] md:text-[84.636px] font-bold leading-[81.009px] uppercase">
                {slide.heading}
              </h1>
              <p className="text-black font-lexend text-[34.636px] md:text-[61.395px] font-normal leading-[58.764px]">
                {slide.text}
              </p>

              {/* Contact Button */}
              {slide.button && (
                <div className="gap-4 mt-2 inline-flex align-middle sm:w-full">
                  <Link
                    href={`/${locale}/contact-us`}
                    target="_blank"
                    className="transition px-4 py-2 rounded-[10px] bg-[#418F92] text-base shrink-0 inline-flex align-middle leading-[50.37px] text-[16.79px]"
                  >
                    {slide.button}
                    <Image
                      className="w-6 h-6 ml-2 self-center"
                      width={24}
                      height={24}
                      alt="right arrow icon"
                      src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                    />
                  </Link>
                </div>
              )}

              {/* Button 2 */}
              {slide.button2 && (
                <div className="justify-start gap-4 mt-2 inline-flex align-middle md:ml-10 sm:w-full">
                 <Link
  href={`/${locale}/contact-us`}
  target="_blank"
  className="bg-white transition px-4 py-2 rounded-[10px] border border-[#418F92] text-[#418F92] shrink-0 text-base leading-[50.37px] text-[16.79px] inline-flex align-middle hover:text-[#236B7A]"
>
                    {slide.button2}
                    <Image
                      className="w-6 h-6 ml-2 self-center"
                      width={24}
                      height={24}
                      alt="right arrow icon"
                      src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                    />
                  </Link>
                </div>
              )}
            </div>

            {/* Illustration side */}
            <div className="relative">
              {slide.backgroundMainImage && (
                <Image
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`${slide.heading} illustration`}
                  src={slide.backgroundMainImage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection3;