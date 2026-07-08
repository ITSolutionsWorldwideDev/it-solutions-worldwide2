// components/layout/home/ClientSection.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const clients = [
  {
    name: "ISO 9001",
    img: "/assets/icons/tech/ISO 9001.webp",
  },
  {
    name: "ISO 270001",
    img: "/assets/icons/tech/ISO 270001.webp",
  },
  {
    name: "Compliant",
    img: "/assets/icons/tech/compliant.webp",
  },
  {
    name: "Google Ads",
    img: "/assets/icons/tech/google_ads.webp",
  },
];

export default function ClientSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="container xl:max-w-[1200px] md:px-5 mx-auto pt-10 relative">
      <div className="flex justify-between items-center mb-6 px-4 pr-5 md:pr-0 md:px-0 relative">
        <div>
          <h2 className="text-teal-700 text-3xl font-bold">
            Our Clients
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative z-10 mt-14 px-10 xl:max-w-[600px] mx-auto">
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
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="">

                <div className=" items-center gap-4">
                  <Image
                    src={item.img}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="rounded-full object-cover"
                    loading="lazy"
                    fetchPriority="low"
                    quality={50}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Radio Dots */}
        <div className="flex justify-center mt-6 gap-1 z-50 relative">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef?.slideTo(index)}
              className="w-12 h-12 flex items-center justify-center relative group cursor-pointer"
              // 🔥 Touch Target Fixed: Button ka physical size ab 48px ho gaya hai (Lighthouse Pass!)
              aria-label={`Go to slide ${index + 1}`}
            >
              
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