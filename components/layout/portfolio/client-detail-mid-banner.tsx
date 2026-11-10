import React from "react";
import Image from "next/image";

export interface ClientDetailMidBannerProps {
  imageSrc: string;
  clientName: string;
}

export default function ClientDetailMidBanner({
  imageSrc,
  clientName,
}: ClientDetailMidBannerProps) {
  if (!imageSrc) return null;

  return (
    <section className="relative w-full bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl lg:max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[16/7] sm:aspect-[2.4/1] md:aspect-[2.6/1] max-h-[520px] overflow-hidden rounded-[24px] sm:rounded-[32px] drop-shadow-2xl bg-gray-100">
          <Image
            src={imageSrc}
            alt={`${clientName} featured banner`}
            fill
            sizes="(max-width: 1024px) 95vw, 1240px"
            quality={90}
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
