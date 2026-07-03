"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <div className="container xl:max-w-[1200px] md:px-5 mx-auto pb-10 relative">
      <div className="flex justify-between items-center mb-6 px-4 pr-5 md:pr-0 md:px-0 relative">
        <div>
          <h2 className="text-teal-700 text-3xl font-bold">
            Certifications
          </h2>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16 pb-6">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            <Link href={`/${locale}/iso-certified`}>
              <Image
                src={item.img}
                width={100}
                height={100}
                alt={item.name}
                className="rounded-full object-cover shadow-sm bg-gray-50/50 p-1 border border-gray-100"
                loading="lazy"
                quality={10}
                fetchPriority="low"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}