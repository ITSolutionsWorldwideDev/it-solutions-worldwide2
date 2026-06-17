"use client";
import React, { useState } from "react";
import { clientLogos, logosSlider } from "@/lib/commonData";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function LogosSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="container w-full max-w-6xl md:px-5 mx-auto py-10 relative">
      {/* Slider */}
      <div className="relative z-10 mt-14 px-10 pb-20 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500, // Auto scroll every 2.5 seconds
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
                  width={200}
                  height={200}
                  alt={item.alt}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Radio Dots */}
        <div className="flex justify-center mt-10 gap-3 z-50 relative">
          {clientLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef?.slideTo(index)}
              className={`w-4 h-4 rounded-full border border-black transition-all
                ${
                  activeIndex === index
                    ? "bg-white scale-110"
                    : "bg-transparent opacity-60"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Alternate continuous-scroll logos slider (kept in case it's used elsewhere)
export function ClientLogosSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="relative overflow-hidden py-8 whitespace-nowrap">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-white via-transparent to-transparent" />
        <div className="inline-block animate-slide">
          {logosSlider.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="h-14 md:h-20 mx-4 md:mx-6 inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
            />
          ))}
        </div>

        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-white via-transparent to-transparent" />
      </div>
    </div>
  );
}
