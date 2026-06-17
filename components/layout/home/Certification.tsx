"use client";

import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    name: "ISO 9001",
    img: "/assets/icons/tech/ISO 9001.webp",
  },
  {
    name: "ISO 270001",
    img: "/assets/icons/tech/ISO 270001.webp",
  },
  {
    name: "Compliant",
    img: "/assets/icons/tech/compliant.webp",
  },
  {
    name: "Google Ads",
    img: "/assets/icons/tech/google_ads.webp",
  },
];

export default function Certifications() {
  return (
    <div className="container xl:max-w-[1200px] md:px-5 mx-auto py-10 relative">
      <div className="flex justify-between items-center mb-6 px-4 pr-5 md:pr-0 md:px-0 relative">
        <div>
          <h2 className="text-teal-700 text-3xl font-bold">
            Certifications
          </h2>
        </div>
      </div>

      {/* Static Icons Container: Hata diya loop aur scroll wala system */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16 py-6">
        {certifications.map((item, index) => (
          <div 
            key={index} 
            className="transition-transform duration-300 hover:scale-105"
          >
            <Link href="/iso-certified">
              <Image
                src={item.img}
                width={100}
                height={100}
                alt={item.name}
                className="rounded-full object-cover shadow-sm bg-gray-50/50 p-1 border border-gray-100"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}