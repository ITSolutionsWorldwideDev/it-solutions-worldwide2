import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import NavbarHome from "./nav-bar-home";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

/**
 * 🔥 CRITICAL: Heavy UI removed from LCP entirely
 */
const SegmentTabs = dynamic(
  () => import("./home/SegmentTabComponent"),
  {
    ssr: false,
    loading: () => null,
  }
);

const HERO_POSTER =
  "/assets/images/backgrounds/hero-section-bg.webp";

const HERO_VIDEO =
  "/assets/images/backgrounds/hero-bg.mp4";

/**
 * =========================
 * ULTRA FAST HEADER v2
 * =========================
 */
export default function Header() {
  const [showVideo, setShowVideo] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const params = useParams();
  const locale = params?.locale || "en";

  /**
   * ⚡ POST-LCP VIDEO LOAD
   */
  useEffect(() => {
    const isMobile =
      window.matchMedia("(max-width: 768px)").matches;

    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || reduced) return;

    const t = setTimeout(() => setShowVideo(true), 2500);
    return () => clearTimeout(t);
  }, []);

  /**
   * ⚡ DEFER ALL NON-CRITICAL JS
   */
  useEffect(() => {
    const run = () => setShowExtras(true);

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(run);
      return () => (window as any).cancelIdleCallback(id);
    } else {
      const id = setTimeout(run, 1);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <header className="relative w-full min-h-screen overflow-hidden">

      {/* ================= LCP IMAGE (CRITICAL PATH ONLY) ================= */}
      <Image
        src={HERO_POSTER}
        alt="IT Solutions Worldwide hero background"
        fill
        priority
        sizes="100vw"
        quality={55}
        className="object-cover z-0"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* ================= OPTIONAL VIDEO (AFTER LCP) ================= */}
      {showVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 transition-opacity duration-700"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={HERO_POSTER}
          onCanPlay={(e) => {
            (e.currentTarget as HTMLVideoElement).style.opacity =
              "1";
          }}
        />
      )}

      {/* ================= OVERLAY (PURE CSS = ZERO JS COST) ================= */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto">

        {/* NAVBAR (keep lightweight) */}
        <div className="relative z-50">
          <NavbarHome />
        </div>

        {/* ================= HERO TEXT (LCP SAFE) ================= */}
        <div className="flex flex-col items-center justify-center text-center text-white px-4 pt-20">

          <h1 className="text-[42px] sm:text-6xl lg:text-7xl font-bold mb-6 w-full sm:w-10/12">
            Empowering Businesses with Smart IT Solutions
          </h1>

          <p className="text-[15px] sm:text-lg uppercase mb-10 opacity-90">
            Innovate | Automate | Succeed
          </p>

          <Link href={`/${locale}/contact-us`}>
            <button className="bg-[#0FB6AE] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-medium transition-colors">
              Get FREE Consultation
            </button>
          </Link>

          {/* ================= HEAVY UI (POST-LCP) ================= */}
          {showExtras && (
            <div className="mt-10">
              <SegmentTabs />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}