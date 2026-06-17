"use client";
import React from 'react';
import Image from 'next/image';
import { servicesData } from "@/lib/commonData";

export default function ExpandingCards() {
  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    <div className="w-full container xl:max-w-[1200px] mx-auto py-12 px-4">
      {/* Grid setup creates identical heights automatically */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {servicesData.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(23,88,100,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* 1. Image Container - Fixed height across all cards */}
            <div className="w-full h-60 overflow-hidden bg-gray-900 relative shrink-0">
              <Image
                src={card.url}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                className="object-cover object-center opacity-90 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
                priority={index < 3} // Priority load top 3 desktop cards
              />
              {/* Subtle brand tint gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#175864]/40 to-transparent mix-blend-multiply" />
            </div>

            {/* 2. Content Container - Aligned perfectly with line clamping */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 bg-white text-left">
              <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300 group-hover:text-[#175864]">
                {card.title}
              </h3>
              
              {/* line-clamp prevents differing text lengths from altering card layouts */}
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-6">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}