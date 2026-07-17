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
  buttonTextColor?: string;
  priority?: boolean;
};

type BannerSectionProps = {
  slides: Slide[];
  locale: string;
};

const BannerSectionAboutUs: React.FC<BannerSectionProps> = ({
  slides,
  locale,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
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
    <div className="relative w-full py-2 mt-2">
      <div className="relative w-full h-[600px] md:h-[400px] lg:h-[600px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center">
        <Image
          src={slides[currentSlide].backgroundImage}
          alt={slides[currentSlide].heading || "About Us Banner background"}
          fill
          quality={85}
          priority={currentSlide === 0}
          fetchPriority={currentSlide === 0 ? "high" : "low"}
          loading={currentSlide === 0 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          className="object-cover object-center pointer-events-none select-none z-0"
        />

        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative w-full h-full z-10 text-left text-white px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full h-full">
            <div className="self-center">
              <h1 className="uppercase text-xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-4 w-full lg:w-full">
                {slides[currentSlide].heading}
              </h1>
              <p className="text-sm sm:text-base w-full lg:w-full">
                {slides[currentSlide].text}
              </p>
              
              {/* Button 1 */}
              {slides[currentSlide].button ? (
                <div className="gap-4 mt-2 inline-flex align-middle">
                  <Link href={`/${locale}/contact-us`}
                    className="transition px-4 py-2 rounded-[10px] bg-[#418F92] text-base shrink-0 inline-flex align-middle leading-[50.37px] text-[16.79px] hover:bg-[#347477]"
                  >
                    {slides[currentSlide].button}
                    <Image
                      className="w-6 h-6 ml-2 self-center"
                      width={24}
                      height={24}
                      alt="right arrow icon"
                      src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                    />
                  </Link>
                </div>
              ) : null}

              {/* Button 2 */}
              {slides[currentSlide].button2 ? (
                <div className="justify-start gap-4 mt-2 inline-flex align-middle ml-10">
                  <Link
                    href={`/${locale}/contact-us`}
                    className="bg-white transition px-4 py-2 rounded-[10px] border border-[#418F92] text-[#418F92] shrink-0 text-base leading-[50.37px] text-[16.79px] inline-flex align-middle hover:text-[#236B7A] hover:bg-neutral-50"
                  >
                    {slides[currentSlide].button2}
                    <Image
                      className="w-6 h-6 ml-2 self-center"
                      width={24}
                      height={24}
                      alt="right arrow icon"
                      src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                    />
                  </Link>
                </div>
              ) : null}

              {/* Button 3 */}
              {slides[currentSlide].button3 ? (
                <div className="flex justify-start gap-4 mt-2">
                  <Link
                    href={`/${locale}/contact-us`}
                    className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition hover:bg-neutral-50`}
                  >
                    {slides[currentSlide].button3}
                  </Link>
                </div>
              ) : null}

              {/* Button 4 */}
              {slides[currentSlide].button4 ? (
                <div className="flex justify-start gap-4 mt-2">
                  <Link
                    href={`/${locale}/contact-us`}
                    className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition hover:bg-neutral-50`}
                  >
                    {slides[currentSlide].button4}
                  </Link>
                </div>
              ) : null}
            </div>

            <div className="relative">
              {slides[currentSlide].backgroundMainImage ? (
                <Image
                  className="object-contain"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={`${slides[currentSlide].heading} illustration`}
                  src={slides[currentSlide].backgroundMainImage}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSectionAboutUs;