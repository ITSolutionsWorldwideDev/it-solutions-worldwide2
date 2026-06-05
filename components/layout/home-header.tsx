// components/layout/home-header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarHome from "./nav-bar-home";
import SegmentTabs from "./home/SegmentTabComponent";

const HERO_POSTER = "/assets/images/backgrounds/hero-section-bg.png";
const HERO_VIDEO = "/assets/images/backgrounds/hero-section-bg.mp4";

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const idleCallback =
      window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));

    const idleId = idleCallback(() => setShowVideo(true));

    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idleId as number);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="hometop">
      <Image
        src={HERO_POSTER}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover z-0"
        aria-hidden
      />

      {showVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HERO_POSTER}
          aria-hidden
        />
      )}

      <div className="container mx-auto">
        <div className="absolute inset-0 bg-black opacity-60" aria-hidden />

        <NavbarHome />

        <div className="relative z-1 flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <h1 className="text-[45px] sm:text-6xl/tight lg:text-7xl/tight 2xl:text-8xl/tight font-bold mb-8 w-full sm:w-10/12 lg:w-8/12 xl:w-9/12">
            Empowering Businesses with Smart IT Solutions
          </h1>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mb-12">
            <p className="flex items-center space-x-2 text-sm uppercase text-[16px] sm:text-lg/tight lg:text-lg/tight 2xl:text-3xl/tight">
              <span>Innovate</span>
              <span className="inline-block" aria-hidden>
                |
              </span>
              <span>Automate</span>
              <span className="inline-block" aria-hidden>
                |
              </span>
              <span>Succeed</span>
            </p>
          </div>

          <Link href="/contact-us" target="_blank">
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
