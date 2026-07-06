"use client";
import React, { useRef } from "react";
import { getHowWeWorkData } from "@/lib/commonData";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery, DottedLine } from "@/components/layout/home/animation-helpers";
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedList() {
  const t = useTranslations();
  const howWeWork = getHowWeWorkData(t);

  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const isTabletOrMobile = useMediaQuery("(max-width: 768px)");

  useGSAP(() => {
    if (!isTabletOrMobile) {
      const itemElements = gsap.utils.toArray(".process-list-item");

      gsap.fromTo(
        itemElements,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
      });
    }
  }, [isTabletOrMobile]);

  if (isTabletOrMobile) {
    return (
      <div className="flex flex-col items-center space-y-0 px-4 pt-0">
        <div
          className="w-[180px] aspect-square flex items-center justify-center font-bold text-white rounded-full shadow-lg"
          style={{ background: "#194A59" }}
        >
          <h2 className="w-[58%] text-center text-[clamp(1rem,4vw,2.5rem)]">
            {t("howWeWork.title")}
          </h2>
        </div>
        <div className="w-[320px] lg:w-[569px] md:w-[470px] aspect-square flex items-center justify-center font-normal rounded-full bg-[#29A1B626]">
          <p className="w-[45%] text-center text-[clamp(0.75rem,1.5vw,1.2rem)] leading-tight">
            {t("howWeWork.description")}
          </p>
        </div>
        <div className="flex flex-col space-y-6 items-center w-full">
          {howWeWork.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-2xl font-bold items-center"
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <span className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-center leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:items-start"
      ref={sectionRef}
    >
      <section className="relative flex flex-col items-center md:flex-row md:justify-center lg:-space-x-16 md:-space-x-28 px-4 pt-20">
        <div
          className="w-[280px] lg:w-[345px] aspect-square flex items-center justify-center font-bold text-white rounded-full shadow-lg"
          style={{ background: "#194A59" }}
        >
          <h2 className="w-[58%] text-center text-[clamp(1rem,4vw,2.5rem)]">
            {t("howWeWork.title")}
          </h2>
        </div>
        <div className="w-[320px] md:w-[470px] lg:w-[569px] aspect-square flex items-center justify-center font-normal rounded-full bg-[#29A1B626]">
          <p className="w-[45%] text-center text-[clamp(0.75rem,1.5vw,1.2rem)] leading-tight">
            {t("howWeWork.description")}
          </p>
        </div>
        <div
          ref={listRef}
          className="flex flex-col items-center md:items-start w-full md:w-auto "
        >
          {howWeWork.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row process-list-item text-2xl font-bold opacity-20 items-center ${item.styles.largeScreens}`}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <DottedLine />
              <span className="ml-2 text-[clamp(1rem,2vw,1.5rem)] text-center md:text-left leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}