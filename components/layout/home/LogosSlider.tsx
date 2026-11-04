"use client";
import React, { useState } from "react";
import { clientLogos, logosSlider } from "@/lib/commonData";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type LogoItem = { src: string; alt: string };

// String ya object dono formats handle karega + duplicates hata dega
const normalize = (list: any[]): LogoItem[] => {
  const seen = new Set<string>();
  const result: LogoItem[] = [];

  list.forEach((item, i) => {
    const src: string = typeof item === "string" ? item : item.src ?? item.img;
    const alt: string =
      typeof item === "string"
        ? `client-logo-${i + 1}`
        : item.alt ?? item.name ?? `client-logo-${i + 1}`;

    if (!src || seen.has(src)) return;
    seen.add(src);
    result.push({ src, alt });
  });

  return result;
};

// Loop ke liye enough slides
const ensureEnough = (logos: LogoItem[], min = 12): LogoItem[] => {
  if (logos.length === 0) return logos;
  let result = [...logos];
  while (result.length < min) result = [...result, ...logos];
  return result;
};

// ---------- Swiper version ----------
export default function LogosSlider() {
  const logos = ensureEnough(normalize(clientLogos as any[]));

  return (
    <div className="container w-full max-w-6xl md:px-5 mx-auto pb-10 relative">
      <div className="relative z-10 mt-8 px-4 md:px-10 pb-10 mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          loopAdditionalSlides={logos.length}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="relative [&_.swiper-wrapper]:!ease-linear"
        >
          {logos.map((item, index) => (
            <SwiperSlide key={`${item.src}-${index}`}>
              <div className="relative mx-auto h-16 w-32 md:h-20 md:w-40 my-8">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="160px"
                  unoptimized
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// ---------- Pure CSS marquee (home page pe yahi use hota hai) ----------
export function ClientLogosSlider() {
  const logos = normalize(logosSlider as any[]);
  const doubled = [...logos, ...logos];
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logo-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .logo-marquee-track {
              display: flex;
              width: max-content;
              animation: logo-marquee 40s linear infinite;
            }
            .logo-marquee-wrap:hover .logo-marquee-track {
              animation-play-state: paused;
            }
          `,
        }}
      />
      <div className="logo-marquee-wrap relative overflow-hidden py-8">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="logo-marquee-track">
          {doubled.map((item, index) =>
            failed[item.src] ? null : (
              <div
                key={`${item.src}-${index}`}
                className="relative shrink-0 h-14 w-28 md:h-20 md:w-40 mx-3 md:mx-5"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="160px"
                  unoptimized
                  className="object-contain transition-transform duration-300 hover:scale-110"
                  onError={() => {
                    console.warn("Logo load nahi hua:", item.src);
                    setFailed((prev) => ({ ...prev, [item.src]: true }));
                  }}
                />
              </div>
            )
          )}
        </div>

        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}