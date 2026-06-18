"use client";
import React from 'react';
import Image from 'next/image';
import { servicesData } from "@/lib/commonData";

export default function ExpandingCards() {
  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto pt-6 pb-0 mb-0 px-4 sm:px-8 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full items-stretch">
        {servicesData.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col w-full h-full min-h-[400px] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#175864] hover:shadow-[0_20px_40px_rgba(23,88,100,0.15)]"
          >
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden bg-gray-900 relative shrink-0">
              <Image
                src={card.url}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                quality={50}
                fetchPriority="low"
                loading="lazy"
                className="object-cover object-center opacity-90 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#175864]/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1 text-left justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-white line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-5 transition-colors duration-300 group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}