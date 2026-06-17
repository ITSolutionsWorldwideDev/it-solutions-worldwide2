import Image from "next/image";
import { countriesData } from "@/lib/commonData";

// Lightweight static replacement for AnimatedGlobe (Three.js).
// Keeps your exact styling but forces pixel-perfect layout alignment.
export default function RegionsCards() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-[#175864] w-full">
      <div className="max-w-5xl mx-auto w-full px-4">
        <h2 className="text-center text-xl md:text-4xl font-bold text-white">
          Delivering Excellence In Your Country
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-200 max-w-md mt-2 mx-auto mb-12">
          Tailored Solutions for Unique Market Needs
        </p>

        {/* items-stretch forces all cards to match the height of the tallest card in the row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-stretch">
          {countriesData.map((country) => (
            <div
              key={country.name}
              className="flex flex-col items-center justify-center gap-2 bg-white/10 rounded-lg py-6 px-3 min-h-[120px] h-full"
            >
              {/* Fixed sizing container for the flag to ensure layout consistency */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                {/* FIX: next/image with explicit small width/height instead of
                    plain <img>. Originals are 512x512 / 512x341 being displayed
                    at 40x40 — this forces Next.js to actually resize + compress
                    them instead of shipping the full-size file. */}
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={40}
                  height={40}
                  quality={75}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text center aligned with strict spacing */}
              <span className="text-white text-sm md:text-base text-center font-normal leading-tight">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}