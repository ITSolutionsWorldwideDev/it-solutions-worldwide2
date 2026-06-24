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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl leading-tight">
            Empowering Businesses with Smart IT Solutions
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-4xl leading-relaxed px-4">
            Welcome to IT Solutions Worldwide, a trusted IT service provider,
            business consultant, and supply chain provider helping businesses
            across the Netherlands and worldwide scale through smart technology
            and streamlined operations. From warehouse management systems to
            full-scale IT outsourcing, we deliver innovative solutions that
            drive efficiency, growth, and long-term success.
          </p>

          {/* Tagline */}
          <div className="flex items-center gap-4 mb-10 text-lg md:text-xl font-bold uppercase tracking-wider text-white">
  <span>Innovate</span>
  <span>|</span>
  <span>Automate</span>
  <span>|</span>
  <span>Succeed</span>
</div>

          {/* CTA Button */}
          <Link href={`/${locale}/contact-us`}>
            <button
              type="button"
              className="bg-[#11928C] hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 mb-16"
            >
              Get FREE Consultation
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