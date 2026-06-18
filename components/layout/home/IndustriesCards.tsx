"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { industriesData } from "@/lib/commonData";
import Image from 'next/image';

type Rect = { top: number; left: number; width: number; height: number };

export default function IndustriesCards() {
  const [activeId, setActiveId] = useState<string | number | null>(null);
  const [sourceRect, setSourceRect] = useState<Rect | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [renderContent, setRenderContent] = useState(false);
  const cardRefs = useRef<Record<string | number, HTMLDivElement | null>>({});

  // Pagination: 3 cards per page
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(industriesData.length / cardsPerPage);
  const currentCards = industriesData.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  const goPrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

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

  // Helper logic to ensure image folder pathways match correctly
  const getCleanSrc = (imgStr: string | undefined) => {
    if (!imgStr) return "";
    let clean = imgStr.trim();
    
    // Agar path full stream link nahi h aur direct name h, ya path structural error control me h:
    if (!clean.startsWith("/") && !clean.startsWith("http")) {
      clean = `/${clean}`;
    }
    return clean;
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto py-16 px-6 sm:px-12 relative flex items-center justify-center">
      <div className="w-full max-w-[1150px] flex items-center justify-between gap-4 md:gap-10">
        
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous industries"
          className="shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#175864] hover:bg-[#175864] hover:text-white transition-all duration-300 active:scale-95 z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 justify-items-center">
          {currentCards.map((slide) => {
            const currentSrc = getCleanSrc(slide.image);

            return (
              <div 
                key={slide.id} 
                className="w-full max-w-[280px] md:max-w-[300px] flex flex-col"
              >
                <div
                  ref={(el) => { cardRefs.current[slide.id] = el; }}
                  onClick={() => openCard(slide.id)}
                  className={`group rounded-[24px] overflow-hidden border border-gray-100/80 bg-white flex flex-col h-full cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(23,88,100,0.12)] shadow-[0_8px_30px_rgb(0,0,0,0.03)] ${
                    activeId === slide.id ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {/* Fixed Image Aspect Ratio Box */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 relative shrink-0 border-b border-gray-50">
                    {currentSrc ? (
                      <Image
                        src={currentSrc}
                        alt={slide.industry || "Industry background"}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                        quality={50} 
                        width={400}  
                        height={300}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 animate-pulse" />
                    )}
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-[#175864] font-extrabold text-[10px] px-2.5 py-1 rounded-full shadow-sm border border-white/40">
                      {slide.number}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex flex-col flex-1 justify-between bg-gradient-to-b from-white to-gray-50/30">
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-bold tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-[#175864] line-clamp-2 min-h-[44px] mb-2">
                        {slide.industry}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                        {slide.content}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#175864] tracking-wide uppercase">
                      <span>Explore</span>
                      <div className="w-6 h-6 rounded-full bg-gray-50 text-[#175864] group-hover:bg-[#175864] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        <svg className="w-3 h-3 transform transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          aria-label="Next industries"
          className="shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#175864] hover:bg-[#175864] hover:text-white transition-all duration-300 active:scale-95 z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Morphing Full-Screen Dialog Overlay */}
      {activeId !== null && activeSlide && sourceRect && (
        <>
          <div
            onClick={closeCard}
            className={`fixed inset-0 bg-gray-900/40 backdrop-blur-md z-40 transition-opacity duration-500 ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className="fixed z-50 rounded-[32px] overflow-hidden bg-white shadow-[0_30px_70px_rgba(0,0,0,0.25)] flex flex-col md:flex-row border border-white/20"
            style={{ ...getOverlayStyle(), transition: "all 450ms cubic-bezier(0.25, 1, 0.5, 1)" }}
          >
            <button
              onClick={closeCard}
              aria-label="Close details"
              className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-gray-100 hover:bg-white text-gray-700 hover:text-black transition-all duration-300 ${
                animateIn ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden bg-gray-100 relative shrink-0">
              {getCleanSrc(activeSlide.image) ? (
                <Image
                  src={getCleanSrc(activeSlide.image)}
                  alt={activeSlide.industry || "Industry detail View"}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"      
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse" />
              )}
              <div className="absolute top-4 left-4 bg-[#175864] text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md">
                {activeSlide.number}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>

            <div
              className={`w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50 transition-all duration-300 ${
                renderContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#175864] font-black block mb-2">
                  Premium Enterprise Overview
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  {activeSlide.industry}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal whitespace-pre-line">
                  {activeSlide.content || "Detailed data overview is being updated."}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={closeCard}
                  className="px-6 py-2.5 bg-[#175864] hover:bg-[#12454e] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-[#175864]/20 transition-all active:scale-95"
                >
                  Return to Panel
                </button>
              </div>
            </div>

          </div>
        </>
      )}
    </section>
  );
}