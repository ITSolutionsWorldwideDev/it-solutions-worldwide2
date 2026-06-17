"use client";
import React from 'react';
import Image from 'next/image';
import { servicesData } from "@/lib/commonData";

export default function ExpandingCards() {
  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  // Duplicate the set once so translateX(-50%) loops seamlessly
  const loopCards = [...servicesData, ...servicesData];

  return (
    <div className="w-full py-12 relative overflow-hidden">
      {/* Edge fades — masks the slide-in/out so it feels intentional */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="marquee-track flex gap-6 w-max">
        {loopCards.map((card, index) => (
          <div
            key={index}
            className="custom-card group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col shrink-0 w-[280px] sm:w-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* Image */}
            <div className="w-full h-52 overflow-hidden bg-gray-900 relative shrink-0">
              <Image
                src={card.url}
                alt={card.title}
                fill
                sizes="320px"
                quality={85}
                className="object-cover object-center opacity-90 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#175864]/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="card-content p-6 flex flex-col flex-1 text-left">
              <h3 className="card-title text-lg font-bold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="card-desc text-sm text-gray-500 leading-relaxed line-clamp-5">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Marquee Animation */
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* 100% Guaranteed Hover Effect via CSS */
        .custom-card {
          transition: all 0.3s ease-out;
        }
        
        .custom-card:hover {
          background-color: #175864 !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(23, 88, 100, 0.15);
        }

        .custom-card .card-content {
          transition: background-color 0.3s ease-out;
        }

        /* Hover karne par text colors */
        .custom-card:hover .card-title {
          color: #ffffff !important;
        }

        .custom-card:hover .card-desc {
          color: rgba(255, 255, 255, 0.85) !important;
        }

        /* Smooth transition text ke liye */
        .card-title, .card-desc {
          transition: color 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}