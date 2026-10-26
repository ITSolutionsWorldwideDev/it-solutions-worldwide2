import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Check } from "lucide-react";

interface TransformITBannerSectionProps {
  locale?: string;
}

export default function TransformITBannerSection({
  locale = "en",
}: TransformITBannerSectionProps) {
  const isNl = locale === "nl";

  const eyebrow = isNl ? "NEEM CONTACT OP" : "CONTACT US";
  const heading = isNl
    ? "Klaar om je IT-Infrastructuur te Transformeren?"
    : "Ready to Transform Your IT Infrastructure?";
  const subtext = isNl
    ? "terugkerende downtime, beveiligingszorgen, of een it-omgeving die beter moet presteren? begin met een gesprek met een specialist."
    : "recurring downtime, security concerns, or an it setup that should perform better? start with a conversation with a specialist.";

  const btnText = isNl ? "Boek een Demo" : "Book a Demo";

  const trustPoints = isNl
    ? [
        "No commitment required",
        "Free initial consultation",
        "Support starts within days",
        "Customised to your business",
      ]
    : [
        "No commitment required",
        "Free initial consultation",
        "Support starts within days",
        "Customised to your business",
      ];

  return (
    <section className="w-full bg-[#072428] text-white py-12 sm:py-16 lg:py-20 border-y border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── Left Side: Heading, Subtext, CTA (7 cols) ─────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-teal-400 uppercase block mb-3">
              {eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-[1.16] tracking-tight mb-4">
              {heading}
            </h2>

            <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed max-w-lg mb-8">
              {subtext}
            </p>

            <div>
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#072428] font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <span>{btnText}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* ── Right Side: Trust points & Contact info (5 cols) ──── */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-10 flex flex-col justify-between space-y-8">
            {/* Trust Points */}
            <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {trustPoints.map((point, idx) => (
                  <React.Fragment key={idx}>
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 stroke-[2.5]" />
                      <span>{point}</span>
                    </span>
                    {idx < trustPoints.length - 1 && (
                      <span className="text-gray-500 hidden sm:inline">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <a
                  href="mailto:info@itsolutionsworldwide.com"
                  className="text-gray-200 hover:text-white underline-offset-2 hover:underline transition-colors"
                >
                  info@itsolutionsworldwide.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                <a
                  href="tel:+31107660786"
                  className="text-white font-bold tracking-wide hover:text-teal-200 transition-colors"
                >
                  +31 10 766 0786
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Mandenmakerstraat+100C,+3194+DG+Hoogvliet+Rotterdam,+Netherlands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-tight text-gray-300 hover:text-white transition-colors group"
                >
                  <p className="group-hover:text-white">Mandenmakerstraat 100C, 3194 DG Hoogvliet</p>
                  <p className="text-gray-400 group-hover:text-gray-200 mt-0.5">Rotterdam, Netherlands</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
