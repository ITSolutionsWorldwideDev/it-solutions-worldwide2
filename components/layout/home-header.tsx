"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import NavbarHome from "./nav-bar-home";

const SegmentTabs = dynamic(() => import("./home/SegmentTabComponent"), {
  ssr: false,
});

const HERO_POSTER = "/assets/images/backgrounds/hero-section-bg.webp";
const HERO_VIDEO = "/assets/images/backgrounds/hero-bg.webp";

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);
  const params = useParams();
  const locale = params?.locale || "en";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isMobile) return;

    // Video 3.5 seconds ke baad load hogi, tab tak LCP window successfully close ho chuki hogi
    const timeoutId = setTimeout(() => setShowVideo(true), 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    // FIX: Element wrapper ko explicit content constraints diye hain taaki reflow rendering block na ho
    <div className="relative w-full min-h-screen overflow-hidden bg-black" id="hometop">
      
      {/* PERFECT LCP IMAGE: Isko state condition se upar rakha hai aur browser direct render karega */}
      <Image
        src={HERO_POSTER}
        alt="IT Solutions Worldwide hero background"
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover z-0 pointer-events-none"
        quality={75} // Quality thodi behtar rakhein kyunki size pehle hi 30 KB hai
      />

      {showVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 animate-fade-in"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HERO_POSTER}
          aria-hidden
          onCanPlay={(e) => {
            (e.target as HTMLVideoElement).style.opacity = "1";
          }}
        />
      )}

      {/* Black Overlay overlay block layer */}
      <div className="absolute inset-0 bg-black/60 z-0 content-none pointer-events-none" aria-hidden />

      <div className="container mx-auto relative z-10">
        <div className="relative z-50">
          <NavbarHome />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <h1 className="text-[45px] sm:text-6xl/tight lg:text-7xl/tight 2xl:text-8xl/tight font-bold mb-8 w-full sm:w-10/12 lg:w-8/12 xl:w-9/12">
            Empowering Businesses with Smart IT Solutions
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mb-12">
            <p className="flex items-center space-x-2 text-sm uppercase text-[16px] sm:text-lg/tight lg:text-lg/tight 2xl:text-3xl/tight">
              <span>Innovate</span>
              <span className="inline-block" aria-hidden>|</span>
              <span>Automate</span>
              <span className="inline-block" aria-hidden>|</span>
              <span>Succeed</span>
            </p>
          </div>

          <Link href={`/${locale}/contact-us`}>
            <button
              type="button"
              className="bg-[#0FB6AE] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Get FREE Consultation
            </button>
          </Link>

          <SegmentTabs />
        </div>
      </div>
    </div>
  );
}