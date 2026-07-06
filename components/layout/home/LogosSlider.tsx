"use client";
import React, { useState } from "react";
import { clientLogos, logosSlider } from "@/lib/commonData";
import Image from "next/image";

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// CSS file load block ko prevent karne ke liye (Swiper CSS global layout shift rokta hai)
import "swiper/css";
import "swiper/css/navigation";

export default function LogosSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="container w-full max-w-6xl md:px-5 mx-auto pb-10 relative">
      <div className="relative z-10 mt-8 px-10 pb-10 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".blog-prev-btn",
            nextEl: ".blog-next-btn",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative"
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clientLogos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-32 md:h-40 w-full items-center justify-center">
                <Image
                  src={item.src}
                  width={140} 
                  height={60} 
                  alt={item.alt}
                  className="object-contain max-h-14 w-auto"
                  loading="lazy"
                  quality={40} // 20 standard compression se visual blur hota hai, 40 metadata remove rakhta hai
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Radio Dots */}
        {/* ✅ FIXED: Gap ko thoda manage kiya taaki touch targets overlap na karein */}
{/* Radio Dots */}
<div className="flex justify-center mt-6 gap-1 z-10 relative">
            {clientLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef?.slideTo(index)}
              className="w-12 h-12 flex items-center justify-center relative group cursor-pointer" 
              // 🔥 Touch Target Fixed: Physical size ab 48px vertical/horizontal ho chuka hai
              aria-label={`Go to slide ${index + 1}`} 
            >
              {/* 🔥 Visual Dot: actual visual rendering choti hi rahegi taaki layout structure safe rahe */}
              <span 
                className={`w-3 h-3 rounded-full border border-black transition-all block
                  ${
                    activeIndex === index
                      ? "bg-white scale-125"
                      : "bg-transparent opacity-60"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Alternate continuous-scroll logos slider
export function ClientLogosSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="relative overflow-hidden py-8 whitespace-nowrap">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-white via-transparent to-transparent" />
        <div className="inline-block animate-slide">
          {logosSlider.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="h-14 md:h-20 w-auto mx-4 md:mx-6 inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
              quality={40}
              loading="lazy"
              width={140}
              height={60}
            />
          ))}
        </div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-white via-transparent to-transparent" />
      </div>
    </div>
  );
}