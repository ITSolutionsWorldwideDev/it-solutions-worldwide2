"use client";
import React, { useEffect, useRef } from "react";
import { industriesData } from "@/lib/commonData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedProgressSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const totalSlides = industriesData.length;
      const totalScrollDuration = 4000;
      const isTabletOrSmaller = window.matchMedia("(max-width: 768px)").matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScrollDuration}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const currentIndex = Math.floor(self.progress * totalSlides);
            dotRefs.current.forEach((dot, i) => {
              if (!dot) return;
              if (i <= currentIndex) {
                gsap.to(dot, { opacity: 1, attr: { r: 6 }, duration: 0.3 });
                gsap.set(dot, { stroke: "none", fill: "#0FB6AE" });
              } else if (i === currentIndex + 1) {
                gsap.to(dot, { opacity: 1, attr: { r: 8 }, duration: 0.3 });
                gsap.set(dot, {
                  stroke: "#0FB6AE",
                  strokeWidth: 2,
                  fill: "none",
                });
              } else {
                gsap.to(dot, { opacity: 0, duration: 0.3 });
              }
            });
          },
        },
      });

      industriesData.forEach((slide, i) => {
        const slideEl = slideRefs.current[i];
        if (!slideEl) return;
        const imageEl = slideEl.querySelector(".image-container");
        const textEl = slideEl.querySelector(".text-container");
        const dotEl = dotRefs.current[i];
        const label = `slide-${i}`;

        tl.addLabel(label);

        if (i === 0) {
          gsap.set(imageEl, { x: 0, opacity: 1 });
          gsap.set(textEl, {
            x: isTabletOrSmaller ? 10 : 100,
            opacity: 1,
          });
        } else {
          tl.fromTo(
            imageEl,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            label
          );
          tl.fromTo(
            textEl,
            { x: 200, opacity: 0 },
            {
              x: isTabletOrSmaller ? 10 : 100,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            label
          );
        }

        if (i < totalSlides - 1) {
          const nextLabel = `slide-${i + 1}`;
          tl.to(
            imageEl,
            { x: -100, opacity: 0, duration: 0.5, ease: "power2.in" },
            `${nextLabel}-=0.2`
          );
          tl.to(
            textEl,
            {
              x: isTabletOrSmaller ? 10 : 100,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            `${nextLabel}-=0.2`
          );
          tl.to(
            dotEl,
            {
              backgroundColor: "#cbd5e1",
              scale: 1,
              boxShadow: "none",
              duration: 0.5,
            },
            `${nextLabel}-=0.2`
          );
        }
      });

      if (!svgRef.current) return;
      const svgPath = svgRef.current.querySelector("path");
      if (!svgPath) return;
      const pathLength = svgPath.getTotalLength();

      gsap.set(svgPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(svgPath, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top top",
          end: `+=${totalScrollDuration}`,
          scrub: 1,
        },
        ease: "none",
      });

      const spacing = pathLength / industriesData.length;
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const pt = svgPath.getPointAtLength(i * spacing);
        gsap.set(dot, { cx: pt.x, cy: pt.y, opacity: 0 });
      });
    }, containerRef);

    // Content above this section (LogosSlider, AnimatedList, FunFacts) is
    // dynamically imported and can finish loading AFTER this component
    // mounts, changing the total page height. ScrollTrigger calculates pin
    // start/end based on page height at mount time, so if that height
    // changes afterward, the pin point becomes wrong — causing the
    // double-render / white-screen flash during scroll.
    // Refreshing after a short delay (and once more on window load)
    // re-syncs ScrollTrigger with the final page layout.
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(refreshTimeout);
      window.removeEventListener("load", handleLoad);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-[95%] relative h-screen overflow-hidden bg-white z-10"
    >
      {industriesData.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          className="absolute inset-0 flex items-center justify-between"
        >
          <div className="image-container w-full md:w-1/2 h-2/5 md:h-full flex items-center justify-center z-20">
            <img
              src={slide.image}
              alt={slide.industry}
              className="w-full h-[90%] rounded object-cover"
            />
          </div>
          <div className="text-container w-full md:w-1/2 h-full flex flex-col items-start justify-center p-3 md:p-12 lg:pl-20 xl:pl-40 z-20">
            <h2 className="text-xl md:text-3xl 2xl:text-5xl font-bold mb-4">
              {slide.heading}
            </h2>
            <p className="mb-4 2xl:text-2xl">
              <strong className="text-teal-500">{slide.number}</strong>{" "}
              {slide.industry}
            </p>
            <p className="mb-10 lg:w-[30vw] 2xl:text-2xl">{slide.content}</p>
          </div>
        </div>
      ))}

      <div className="pointer-events-none absolute z-0 hidden lg:block lg:left-[65%] lg:top-[50%] lg:w-[300px] lg:h-[300px] xl:left-[65.5%] xl:w-[448px] xl:h-[465px] 2xl:left-[60%] transform -translate-x-1/2 -translate-y-1/2">
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 448 475"
          fill="none"
        >
          <path
            d="M2,2 A230,230 0 0 1 2,462"
            stroke="#0FB6AE"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {industriesData.map((_, i) => (
            <circle
              key={i}
              r="6"
              fill="#0FB6AE"
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}