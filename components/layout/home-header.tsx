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

const HERO_POSTER = "/assets/images/backgrounds/hero-bg.webp";
// ✅ FIX 1: URL path ko safely encode kar diya hai taaki space ki wajah se break na ho
const HERO_VIDEO = "/assets/images/backgrounds/hero-bg.mp4";

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
    <div className="relative w-full min-h-screen overflow-hidden bg-black" id="hometop">
      
      {/* ✅ FIX 2: Z-index ko explicitly z-10 rakha hai taaki image background par har haal mein dikhe */}
      <Image
        src={HERO_POSTER}
        alt="IT Solutions Worldwide hero background"
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="object-cover z-10 pointer-events-none"
        quality={75}
        fetchPriority="high"
      />

      {/* Video Background */}
      {showVideo && (
        <video
          // ✅ FIX 3: Dynamic classes fix ki hain jo video active hote hi use image ke upar (z-20) le aayengi
          className="absolute top-0 left-0 w-full h-full object-cover z-20 opacity-0 transition-opacity duration-1000 ease-in-out"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HERO_POSTER}
          aria-hidden
          onCanPlay={(e) => {
            const videoEl = e.target as HTMLVideoElement;
            videoEl.classList.remove("opacity-0");
            videoEl.classList.add("opacity-100");
          }}
        />
      )}

      {/* ✅ FIX 4: Black Overlay ko z-25 kiya taaki woh image aur video dono ke upar sahi se layer banaye */}
      <div className="absolute inset-0 bg-black/60 z-25 pointer-events-none" aria-hidden />

      {/* ✅ FIX 5: Content container ko highest layer (z-30) di hai taaki text and buttons access ho sakein */}
      <div className="container mx-auto relative z-30">
        <div className="relative z-50">
          <NavbarHome />
        </div>

        <div className="relative z-30 flex flex-col items-center justify-center text-center text-white px-4 pt-20">
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
    className="bg-[#11928C] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold text-lg transition-colors cursor-pointer" 
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