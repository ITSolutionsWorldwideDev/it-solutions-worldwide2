"use client";
import React, { useState } from "react";
import { clientLogos, logosSlider } from "@/lib/commonData";
import Image from "next/image";

type LogoItem = { src: string; alt: string };

// String ya object dono formats handle karega + duplicates hata dega
const normalize = (list: any[]): LogoItem[] => {
  const seen = new Set<string>();
  const result: LogoItem[] = [];

  list.forEach((item, i) => {
    const src: string = typeof item === "string" ? item : item.src ?? item.img;
    const alt: string =
      typeof item === "string"
        ? `client-logo-${i + 1}`
        : item.alt ?? item.name ?? `client-logo-${i + 1}`;

    if (!src || seen.has(src)) return;
    seen.add(src);
    result.push({ src, alt });
  });

  return result;
};

// Ek group itna lamba ho ke screen se hamesha bada rahe (gap kabhi na aaye)
const ensureEnough = (logos: LogoItem[], min = 14): LogoItem[] => {
  if (logos.length === 0) return logos;
  let result = [...logos];
  while (result.length < min) result = [...result, ...logos];
  return result;
};

function Marquee({ items }: { items: LogoItem[] }) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const group = ensureEnough(items).filter((i) => !failed[i.src]);

  if (group.length === 0) return null;

  // Har logo ko ~2.5 sec; zyada logos = lamba duration, speed same rehti hai
  const duration = Math.max(30, group.length * 2.5);

  const renderGroup = (suffix: string) => (
    <div className="logo-marquee-group" aria-hidden={suffix === "b"}>
      {group.map((item, index) => (
        <div
          key={`${suffix}-${item.src}-${index}`}
          className="relative shrink-0 h-14 w-28 md:h-20 md:w-40 mr-6 md:mr-10"
        >
          <Image
            src={item.src}
            alt={suffix === "b" ? "" : item.alt}
            fill
            sizes="160px"
            unoptimized
            priority
            loading="eager"
            className="object-contain transition-transform duration-300 hover:scale-110"
            onError={() => {
              console.warn("Logo load nahi hua:", item.src);
              setFailed((prev) => ({ ...prev, [item.src]: true }));
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logo-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .logo-marquee-track {
              display: flex;
              width: max-content;
              animation: logo-marquee ${duration}s linear infinite;
              will-change: transform;
            }
            .logo-marquee-group {
              display: flex;
              flex-shrink: 0;
              align-items: center;
            }
            .logo-marquee-wrap:hover .logo-marquee-track {
              animation-play-state: paused;
            }
          `,
        }}
      />
      <div className="logo-marquee-wrap relative overflow-hidden py-8">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

        <div className="logo-marquee-track">
          {renderGroup("a")}
          {renderGroup("b")}
        </div>

        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// Dono exports ab same seamless marquee use karte hain
export default function LogosSlider() {
  return <Marquee items={normalize(clientLogos as any[])} />;
}

export function ClientLogosSlider() {
  return <Marquee items={normalize(logosSlider as any[])} />;
}