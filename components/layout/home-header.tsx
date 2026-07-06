"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import NavbarHome from "./nav-bar-home";
import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";
const SegmentTabs = dynamic(() => import("./home/SegmentTabComponent"), {
  ssr: false,
});

const HERO_POSTER = "/assets/images/backgrounds/hero-bg.webp";
const HERO_VIDEO = "/assets/images/backgrounds/hero-bg.mp4";

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);
  const params = useParams();
  const locale = params?.locale || "en";
  const t = locale === "nl" ? nlCommon.hero : enCommon.hero;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isMobile) return;

    const timeoutId = setTimeout(() => setShowVideo(true), 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      id="hometop"
    >
      {/* Background Poster */}
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

      {/* Background Video */}
      {showVideo && (
        <video
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

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/60 z-25 pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative z-30 px-4">
        {/* Navbar */}
        <div className="relative z-50">
          <NavbarHome />
        </div>

        {/* Hero Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center text-white pt-28 lg:pt-32">
          {/* Heading */}
     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-[1.15] mb-5">
  {t.title}
</h1>

          {/* Description */}
 <p className="text-[15px] md:text-lg text-gray-200 max-w-6xl leading-7 mb-8 px-2">
  {t.description}
</p>

          {/* Tagline */}
       <div className="flex items-center gap-4 mb-10 text-lg md:text-xl font-bold uppercase tracking-wider text-white">
  <span>{t.innovate}</span>
  <span>|</span>
  <span>{t.automate}</span>
  <span>|</span>
  <span>{t.succeed}</span>
</div>

          {/* CTA Button */}
          <Link href={`/${locale}/contact-us`}>
            <button
  type="button"
  className="bg-[#11928C] hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 mb-16"
>
  {t.ctaButton}
</button>
          </Link>

          {/* Segment Tabs */}
          <div className="w-full">
            <SegmentTabs />
          </div>
        </div>
      </div>
    </div>
  );
}