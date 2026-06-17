import Image from "next/image";
import { howWeWork } from "@/lib/commonData";

// Lightweight static replacement for AnimatedList ("How We Work").
// No GSAP/ScrollTrigger — just a simple step layout.
export default function HowWeWorkCards() {
  return (
    <div className="flex flex-col items-center px-4">
      <div
        className="w-[220px] aspect-square flex items-center justify-center font-bold text-white rounded-full shadow-lg mb-10"
        style={{ background: "#194A59" }}
      >
        <h2 className="w-[58%] text-center text-[clamp(1rem,4vw,2.5rem)]">
          HOW WE WORK?
        </h2>
      </div>

      <p className="text-center max-w-2xl mb-12 text-[clamp(0.9rem,1.5vw,1.2rem)] leading-relaxed">
        We start with a quick, free analysis of your architecture, applying a
        pragmatic approach to identify gaps. We propose advanced business
        models to enhance efficiency, scalability, and overall performance.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
        {howWeWork.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3"
          >
            {/* FIX: next/image with explicit dimensions instead of plain <img>.
                Display is max 80x80 (md:w-20 h-20) so we request that size
                instead of shipping the full original file. */}
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={80}
              height={80}
              quality={75}
              loading="lazy"
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <span className="text-base md:text-lg font-bold">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}