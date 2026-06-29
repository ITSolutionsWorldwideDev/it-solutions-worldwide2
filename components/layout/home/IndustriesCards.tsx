"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { industriesData } from "@/lib/commonData";
import Image from "next/image";

type Rect = { top: number; left: number; width: number; height: number };

export default function IndustriesCards() {
  const [activeId, setActiveId] = useState<string | number | null>(null);
  const [sourceRect, setSourceRect] = useState<Rect | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [renderContent, setRenderContent] = useState(false);
  const cardRefs = useRef<Record<string | number, HTMLDivElement | null>>({});
  
  // Slider ke liye naya Ref
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeSlide = industriesData.find((s) => s.id === activeId) || null;

  const openCard = (id: string | number) => {
    const el = cardRefs.current[id];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSourceRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    setActiveId(id);
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
      setActiveId(null);
      setSourceRect(null);
    }, 400);
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCard();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, closeCard]);

  const getOverlayStyle = (): React.CSSProperties => {
    if (!sourceRect) return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const finalWidth = Math.min(vw * 0.9, 800);
    const finalHeight = Math.min(vh * 0.8, 600);
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

  const getCleanSrc = (imgStr: string | undefined) => {
    if (!imgStr) return "";
    let clean = imgStr.trim();
    if (!clean.startsWith("/") && !clean.startsWith("http")) {
      clean = `/${clean}`;
    }
    return clean;
  };

  // Scroll Functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto py-16 px-6 relative group">
      {/* ADDED HEADING HERE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        Industries We Empower
      </h2>
      {/* Subtle Left Arrow */}
      <button 
        onClick={scrollLeft}
        aria-label="Scroll Left"
        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur border border-gray-100 shadow-md rounded-full flex items-center justify-center text-[#175864] hover:scale-110 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Scrollable Container for Slider Effect */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto pb-8 gap-6 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Safely hides scrollbar in Firefox/IE
      >
        {industriesData.map((slide) => {
          const currentSrc = getCleanSrc(slide.image);

          return (
            <div 
              key={slide.id} 
              className="min-w-[300px] sm:min-w-[340px] md:flex-1 snap-start"
            >
              <div
                ref={(el) => { cardRefs.current[slide.id] = el; }}
                onClick={() => openCard(slide.id)}
                className="group/card rounded-[28px] overflow-hidden border border-gray-100 bg-white flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(23,88,100,0.12)] shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  {currentSrc ? (
                    <Image
                      src={currentSrc}
                      alt={slide.industry || "Industry"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : <div className="w-full h-full bg-gray-200 animate-pulse" />}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#175864] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {slide.number}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <h3 className="text-lg font-bold text-gray-900 group-hover/card:text-[#175864] transition-colors mb-3">
                    {slide.industry}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {slide.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Right Arrow */}
      <button 
        onClick={scrollRight}
        aria-label="Scroll Right"
        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur border border-gray-100 shadow-md rounded-full flex items-center justify-center text-[#175864] hover:scale-110 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Morphing Overlay */}
      {activeId !== null && activeSlide && sourceRect && (
        <>
          <div onClick={closeCard} className={`fixed inset-0 bg-gray-900/40 backdrop-blur-md z-40 transition-opacity duration-500 ${animateIn ? "opacity-100" : "opacity-0"}`} />
          <div
            className="fixed z-50 rounded-[32px] overflow-hidden bg-white shadow-2xl flex flex-col md:flex-row"
            style={{ ...getOverlayStyle(), transition: "all 450ms cubic-bezier(0.25, 1, 0.5, 1)" }}
          >
            <button onClick={closeCard} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition-all">✕</button>
            
            <div className="w-full md:w-1/2 relative bg-gray-100">
               {/* Modal Image Content */}
               <Image src={getCleanSrc(activeSlide.image)} alt={activeSlide.industry} fill className="object-cover" />
            </div>

            <div className={`w-full md:w-1/2 p-10 overflow-y-auto flex flex-col ${renderContent ? "opacity-100" : "opacity-0"}`}>
              <h3 className="text-3xl font-black text-gray-900 mb-4">{activeSlide.industry}</h3>
              <p className="text-gray-600 leading-relaxed">{activeSlide.content}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}