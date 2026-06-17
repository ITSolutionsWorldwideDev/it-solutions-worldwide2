"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { servicesData } from "@/lib/commonData";

type Rect = { top: number; left: number; width: number; height: number };

export default function ExpandingCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<Rect | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [renderContent, setRenderContent] = useState(false);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  const activeSlide = activeIndex !== null ? servicesData[activeIndex] : null;

  const openCard = (index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSourceRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    setActiveIndex(index);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimateIn(true);
        setTimeout(() => setRenderContent(true), 150);
      });
    });
  };

  const closeCard = useCallback(() => {
    setAnimateIn(false);
    setRenderContent(false);
    document.body.style.overflow = "";
    window.setTimeout(() => {
      setActiveIndex(null);
      setSourceRect(null);
    }, 400);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCard();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, closeCard]);

  const getOverlayStyle = (): React.CSSProperties => {
    if (!sourceRect) return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const finalWidth = Math.min(vw * 0.9, 700);
    const finalHeight = Math.min(vh * 0.8, 550);
    const finalTop = (vh - finalHeight) / 2;
    const finalLeft = (vw - finalWidth) / 2;

    const base = {
      top: finalTop,
      left: finalLeft,
      width: finalWidth,
      height: finalHeight,
      transformOrigin: "top left",
    };

    if (!animateIn) {
      return {
        ...base,
        transform: `translate(${sourceRect.left - finalLeft}px, ${sourceRect.top - finalTop}px) scale(${
          sourceRect.width / finalWidth
        }, ${sourceRect.height / finalHeight})`,
      };
    }
    return { ...base, transform: "translate(0px, 0px) scale(1, 1)" };
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto pt-6 pb-0 mb-0 px-4 sm:px-8 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full items-stretch">
        {servicesData.map((card, index) => (
          <div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            onClick={() => openCard(index)}
            className={`group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col w-full h-full min-h-[400px] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#175864] hover:shadow-[0_20px_40px_rgba(23,88,100,0.15)] ${
              activeIndex === index ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-full h-48 overflow-hidden bg-gray-900 relative shrink-0">
              <Image
                src={card.url}
                alt={card.title}
                fill
                sizes="(max-w-768px) 100vw, 350px"
                quality={85}
                className="object-cover object-center opacity-90 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#175864]/40 to-transparent mix-blend-multiply" />
            </div>

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