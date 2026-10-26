import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Headphones, MapPin } from "lucide-react";

interface HeroSectionProps {
  locale?: string;
}

export default function HeroSection({ locale = "en" }: HeroSectionProps) {
  const isNl = locale === "nl";

  // Content with fallback to exact screenshot text
  const breadcrumbServices = isNl ? "Diensten" : "Services";
  const breadcrumbCurrent = isNl ? "IT Support" : "IT Support";

  const eyebrow = isNl
    ? "IT-SUPPORT DIENSTEN · NEDERLAND"
    : "IT SUPPORT SERVICES · NETHERLANDS";

  const titleLine1 = isNl ? "Betrouwbare IT-Support" : "Reliable IT Support";
  const titleLine2 = isNl ? "Diensten in Nederland" : "Services in the Netherlands";

  const description = isNl
    ? "Managed, remote en uitbestede IT-support voor Nederlandse bedrijven — proactieve monitoring, snelle probleemoplossing en AVG-conforme beveiliging afgestemd op jouw operatie."
    : "Managed, remote, and outsourced IT support for Dutch businesses — proactive monitoring, rapid troubleshooting, and AVG-compliant security built around your operation.";

  const primaryBtnText = isNl ? "Boek een Demo" : "Book a Demo";
  const secondaryBtnText = isNl ? "Bekijk Supportmodellen" : "Explore Support Models";

  const trustItems = [
    {
      icon: ShieldCheck,
      text: isNl
        ? "AVG (GDPR) conforme gegevensverwerking"
        : "AVG (GDPR) compliant data handling",
    },
    {
      icon: Headphones,
      text: isNl
        ? "24/7 probleemoplossing & urgente support"
        : "24/7 troubleshooting & urgent support",
    },
    {
      icon: MapPin,
      text: isNl
        ? "Gevestigd in Nederland, voor Nederlandse bedrijven"
        : "Netherlands-based, serving Dutch businesses",
    },
  ];

  return (
    <section className="w-full bg-white pt-8 sm:pt-12">
      {/* ── Main Hero Container ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 font-medium">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-teal-700 transition-colors"
              >
                {breadcrumbServices}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">{breadcrumbCurrent}</li>
          </ol>
        </nav>

        {/* 2-Column Grid (Balanced 50/50 split matching Figma design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow / Tag */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wider text-[#0E6774] uppercase mb-2.5 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0E6774] inline-block animate-pulse" />
              <span>{eyebrow}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[42px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-3 sm:mb-4">
              {titleLine1}
              <br />
              {titleLine2}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-lg mb-6">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center justify-center gap-2 bg-[#0E6774] hover:bg-[#0B515C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <span>{primaryBtnText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>

              <a
                href="#support-models"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 hover:border-gray-400 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
              >
                {secondaryBtnText}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image (Full natural aspect matching content height) */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 bg-white">
              <Image
                src="/assets/it-support/it1.png"
                alt="IT Support Team in Netherlands - IT Solutions Worldwide"
                width={663}
                height={312}
                priority
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust / Feature Bar ────────────────────────────────────────── */}
      <div className="w-full bg-[#F8FAFC] border-y border-gray-200/80 mt-10 sm:mt-12 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-700"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E6774] shrink-0" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
