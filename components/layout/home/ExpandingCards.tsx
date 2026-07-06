"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ExpandingCards({
  servicesData,
  learnMoreText,
  visitServicePageText,
}: {
  servicesData: any[];
  learnMoreText: string;
  visitServicePageText: string;
}) {
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto pt-6 pb-20 px-4 sm:px-8 relative z-10">
      {/* Cards Grid - items-stretch ensure karta hai ki sabhi cards ki height barabar rahe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
        {servicesData.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(card)}
            className="group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col h-full min-h-[420px] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#175864] hover:shadow-[0_20px_40px_rgba(23,88,100,0.15)]"
          >
            {/* Image Wrapper - fixed height */}
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

            {/* Content Container - flex-1 stretch karta hai content ko niche tak */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-white transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-4 group-hover:text-white transition-colors mb-4">
                {card.description}
              </p>

              {/* Button fixed at bottom */}
              <div className="mt-auto">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center rounded-lg bg-[#175864] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f434d] group-hover:bg-white group-hover:text-[#175864]"
                >
                  {learnMoreText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {/* Popup */}
{selectedCard && (
  <div
    onClick={() => setSelectedCard(null)}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
  >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2"
            >
              ✕
            </button>

            <div className="relative h-64 w-full">
              <Image
                src={selectedCard.url}
                alt={selectedCard.title}
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#175864]">
                {selectedCard.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedCard.description}
              </p>

              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[#175864] px-5 py-3 text-white font-semibold hover:bg-[#0f434d]"
              >
                {visitServicePageText}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}