"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import NavbarHome from "./nav-bar-home";
import SegmentTabs from "./home/SegmentTabComponent";

const HERO_POSTER = "/assets/images/backgrounds/hero-section-bg.webp";
const HERO_VIDEO = "/assets/images/backgrounds/hero-bg 1";

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);

  const params = useParams();
  const locale = params?.locale || "en"; // Dutch me automatic 'nl' uthayega aur english me 'en'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mobile / small screens: skip video entirely, poster is enough.
    // Video on mobile only adds LCP risk + bandwidth cost, no real UX gain.
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isMobile) return;

    // Fixed delay instead of requestIdleCallback — guarantees the video
    // mounts well after the LCP measurement window has closed, even on
    // a fast/idle main thread (which is exactly when idle callback used
    // to fire too early and get flagged as the LCP element).
    const timeoutId = setTimeout(() => setShowVideo(true), 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="hometop">
      <Image
        src={HERO_POSTER}
        alt="IT Solutions Worldwide hero background"
        fill
        priority
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="object-cover z-0"
        aria-hidden
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
            // Only reveal once it can actually play, avoids a blank frame flash
            (e.target as HTMLVideoElement).style.opacity = "1";
          }}
        />
      )}

      {/* FIX 1: Moved black overlay out of the inner container container and gave it z-0 */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" aria-hidden />

      <div className="container mx-auto relative z-10">

        {/* FIX 2: Wrapped NavbarHome in an explicit z-50 layer container so headings can't block mouse hover */}
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

          {/* FIXED: Removed target="_blank" to fix Chrome Back Button history freeze and kept dynamic locale */}
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