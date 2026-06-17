"use client";
import { useEffect, useState } from "react";

// Shared hook: detects tablet/mobile breakpoint
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false); // default to false

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const media = window.matchMedia(query);
    setMatches(media.matches); // initial value

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

// Shared decorative dotted line used in AnimatedList
export function DottedLine() {
  return (
    <svg
      className="flex-shrink-0 w-28 h-6 sm:w-36 sm:h-6 md:w-28 md:h-8 lg:w-32 lg:h-8"
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="5" fill="#18B0A8" />
      <line
        x1="20"
        y1="10"
        x2="180"
        y2="10"
        stroke="#DDF4F5"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
      <circle cx="190" cy="10" r="5" fill="#16666F" />
    </svg>
  );
}
