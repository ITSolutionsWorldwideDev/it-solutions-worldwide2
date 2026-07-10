"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  { name: "ISO 9001", img: "/assets/icons/tech/ISO 9001.webp" },
  { name: "ISO 270001", img: "/assets/icons/tech/ISO 270001.webp" },
  { name: "Compliant", img: "/assets/icons/tech/compliant.webp" },
  { name: "Google Ads", img: "/assets/icons/tech/google_ads.webp" },
];

export default function ClientSection() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    // 'pt-5' ko 'pt-2' kar diya, container padding hata di
    <div className="w-full pt-1 pb-10"> 
      <h2 className="text-teal-700 text-center text-2xl font-bold mb-4">
        Our Clients
      </h2>

      {/* Slider ka margin zero kar diya */}
      <div className="w-full max-w-[600px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperRef}
          spaceBetween={10} // Space kam ki
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="!px-0 !py-0" // Swiper ke default padding/margin ko force-reset kiya
        >
          {clients.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="w-16 h-16 relative"> {/* Size fix kiya */}
                <Image
                  src={item.img}
                  fill
                  alt={item.name}
                  className="rounded-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}