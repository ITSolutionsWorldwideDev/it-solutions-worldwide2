"use client";
import dynamic from "next/dynamic";
import ExpandingCards from "./ExpandingCards";

// ===== STATIC REPLACEMENTS (currently active) =====
// These replace the heavy GSAP/Three.js animated sections with plain
// cards to reduce Total Blocking Time. No animation libraries needed.
import HowWeWorkCards from "@/components/layout/home/HowWeWorkCards";
import StatsCards from "@/components/layout/home/StatsCards";
import IndustriesCards from "@/components/layout/home/IndustriesCards";
import RegionsCards from "@/components/layout/home/RegionsCards";

// ===== ORIGINAL ANIMATED VERSIONS (commented out, kept for revert) =====
// To restore the animated versions, uncomment the imports below and
// swap the corresponding JSX further down (also commented).
//
// const AnimatedList = dynamic(() => import("./AnimatedList"), {
//   loading: () => <div className="min-h-[400px]" />,
// });
// const FunFacts = dynamic(() => import("./FunFacts"), {
//   loading: () => <div className="min-h-[250px]" />,
// });
// const PinnedProgressSection = dynamic(
//   () => import("./PinnedProgressSection"),
//   { ssr: false, loading: () => <div className="min-h-screen" /> }
// );
//const AnimatedGlobe = dynamic(() => import("./AnimatedGlobe"), {
  // ssr: false,
   //loading: () => <div className="min-h-[40rem] bg-[#175864]" />,
 //});

// Logos slider — still uses Swiper, isolate it (kept as-is)
const LogosSlider = dynamic(() => import("./LogosSlider"), {
  loading: () => <div className="min-h-[300px]" />,
});

export default function AnimationArea() {
  return (
    <section className="relative z-10 w-full">
<div className="xl:max-h-fit container xl:max-w-[1200px] mx-auto text-center pt-20">
        {/* FIX: framer-motion's <motion.h2> replaced with a plain CSS
            fade-in. These were adding to the framer-motion bundle weight
            for a simple one-time fade that CSS handles natively. */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center animate-fade-in-up">
          <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
            OUR SERVICES
          </span>
        </h2>

        <ExpandingCards />
      </div>

      <div className="flex flex-col justify-center items-center bg-cover bg-center w-full pt-20">
        <div className="container mx-auto ">
          {/* FIX: same as above — plain CSS fade/slide instead of framer-motion's
              whileInView. Uses the existing .animate-fade-in-up keyframes. */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center animate-fade-in-up">
            <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
              Our Clients
            </span>
          </h2>
          <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-medium text-[#175864] w-11/12 lg:w-8/12 mx-auto">
            Empowering Customers, Automating Success Smart Solutions for Smarter
            Businesses
          </h2>
          <LogosSlider />
        </div>
      </div>

<div className=" container xl:max-w-[1200px] mx-auto text-center pb-20">
        {/* ORIGINAL: <AnimatedList /> */}
        <HowWeWorkCards />
      </div>

      <div
        className="flex flex-col justify-center items-center bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(/assets/images/backgrounds/clients-section-radial-bg.webp)`,
        }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 place-items-center">
          {/* ORIGINAL: <FunFacts /> */}
          <StatsCards />
        </div>
      </div>

      {/* ORIGINAL: <PinnedProgressSection /> */}
      <IndustriesCards />

      {/* ORIGINAL: <AnimatedGlobe /> */}
      <RegionsCards />
    </section>
  );
}