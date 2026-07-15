"use client";

import React from "react";
import Image from "next/image";

export default function ExpandingCards({
  servicesData,
  learnMoreText,
}: {
  servicesData: any[];
  learnMoreText: string;
  visitServicePageText: string; // Isse yahan add karein
}) {
  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    // 'w-full' se pura width lega, 'px-0' se corners se touch ho jayega
    <div className="w-full px-0 py-12">
      {/* gap-6 cards ke beech mein space dega */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesData.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col h-full min-h-[420px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#175864] hover:shadow-[0_20px_40px_rgba(23,88,100,0.15)]"
          >
            <div className="relative w-full h-48 overflow-hidden bg-gray-900 shrink-0">
              <Image
                src={card.url}
                alt={card.title}
                fill
                loading="lazy"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-white transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-1 group-hover:text-white transition-colors mb-4">
                {card.description}
              </p>

              <div className="mt-auto">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#175864] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f434d]"
                >
                  {learnMoreText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}