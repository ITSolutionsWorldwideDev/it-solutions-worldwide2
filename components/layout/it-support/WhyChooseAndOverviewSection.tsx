import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Plus } from "lucide-react";

interface WhyChooseAndOverviewSectionProps {
  locale?: string;
}

export default function WhyChooseAndOverviewSection({
  locale = "en",
}: WhyChooseAndOverviewSectionProps) {
  const isNl = locale === "nl";

  // Part A: Banner content
  const bannerEyebrow = isNl
    ? "TECHNOLOGIE DIE VOOR JOU WERKT"
    : "TECHNOLOGY THAT WORKS FOR YOU";
  const bannerHeading = isNl
    ? "Snelle, Betrouwbare IT-Support Afgestemd op Jouw Bedrijf"
    : "Fast, Reliable IT Support Built Around Your Business";
  const bannerBtn1 = isNl ? "Boek een Demo" : "Book a Demo";
  const bannerBtn2 = isNl
    ? "BESPREEK JE IT-UITDAGING"
    : "DISCUSS YOUR IT CHALLENGE";

  // Part B Left: Why Choose Us
  const whyEyebrow = isNl ? "WAAROM ONS KIEZEN" : "WHY CHOOSE US";
  const whyHeading = isNl
    ? "Wat Maakt Ons de Beste IT-Supportpartner?"
    : "What Makes Us the Best IT Support Provider?";

  const whyItems = isNl
    ? [
        {
          title: "Regelmatige Monitoring — Problemen Oplossen Vóór Downtime",
          desc: "Proactieve monitoring van servers, netwerken, endpoints en back-ups vindt problemen voordat je team ze opmerkt.",
        },
        {
          title: "24/7 Support voor Probleemoplossing & Urgente Zaken",
          desc: "Dag en nacht toegang tot IT-specialisten, zodat een storing je nooit een werkdag kost.",
        },
        {
          title: "Schaalbaar van Kleinbedrijf tot Enterprise",
          desc: "Groei van basisonderhoud naar multi-site IT-omgevingen zonder van provider te wisselen.",
        },
      ]
    : [
        {
          title: "Regular Monitoring — Catch Issues Before Downtime",
          desc: "Proactive monitoring of servers, networks, endpoints, and backups finds problems before your team does.",
        },
        {
          title: "24/7 Support for Troubleshooting & Urgent Issues",
          desc: "Round-the-clock access to IT specialists, so a fault never costs you a working day.",
        },
        {
          title: "Scales From Small Business to Enterprise",
          desc: "Grow from essential maintenance to multi-site IT environments without changing provider.",
        },
      ];

  // Part B Right: Built Around Your Business
  const overviewTitle = isNl
    ? "IT-Support Afgestemd op Jouw Bedrijf"
    : "IT Support Built Around Your Business";
  const overviewDesc = isNl
    ? "Managed, remote, netwerk en uitbestede support — van kleinbedrijf tot enterprise, online of self-service, met expert hulp op één telefoontje afstand."
    : "Managed, remote, network, and outsourced support — for small business to enterprise, online or self-service, with expert help one call away.";

  const overviewList = isNl
    ? [
        { label: "Managed IT-support:", text: "monitoring, patches, back-ups" },
        { label: "Remote IT-support:", text: "24/7 troubleshooting" },
        { label: "IT-netwerksupport:", text: "beveiliging, uptime, performance" },
        { label: "Uitbestede IT-support:", text: "experts zonder overhead" },
        { label: "Cybersecurity & data-protectie", text: "(AVG-conform)" },
        { label: "IT-consulting & strategie:", text: "roadmaps die passen" },
      ]
    : [
        { label: "Managed IT support:", text: "monitoring, patches, backups" },
        { label: "Remote IT support:", text: "24/7 troubleshooting" },
        { label: "IT network support:", text: "security, uptime, performance" },
        { label: "Outsourced IT support:", text: "experts without overhead" },
        { label: "Cybersecurity & data protection", text: "(AVG-compliant)" },
        { label: "IT consulting & strategy:", text: "roadmaps that fit" },
      ];

  // Part C: Small Business to Enterprise
  const sizeEyebrow = isNl
    ? "IT-SUPPORT VOOR ELKE OMVANG"
    : "IT SUPPORT FOR EVERY SIZE";
  const sizeHeading = isNl
    ? "Van Kleinbedrijf tot Enterprise"
    : "Small Business to Enterprise";
  const sizeSubtext = isNl
    ? "Dezelfde praktijkgerichte expertise voor elke schaal, afgestemd op jouw bereik en budget."
    : "The same hands-on expertise at every size, tailored to your scope and budget.";

  const sizeCol1 = isNl
    ? [
        "Kleinbedrijf IT-support",
        "Enterprise & multi-site IT",
        "Online IT-support, remote teams",
        "Startups & scale-ups",
      ]
    : [
        "Small business IT support",
        "Enterprise & multi-site IT",
        "Online IT support, remote teams",
        "Startups & scale-ups",
      ];

  const sizeCol2 = isNl
    ? [
        "MKB & groeiende bedrijven",
        "B2B IT-support & integratie",
        "Self-service bronnen",
        "Ecommerce & retail IT",
      ]
    : [
        "MKB & growing companies",
        "B2B IT support & integration",
        "Self-service resources",
        "Ecommerce & retail IT",
      ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* =============================================================
            PART A: Wide Banner with Background Image (it2.png)
        ============================================================= */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200/70 shadow-sm min-h-[420px] flex items-center bg-gray-50">
          {/* Background Image: it2.png */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <Image
              src="/assets/it-support/it2.png"
              alt="IT Support Technology that works for you"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Desktop: Original soft balanced fade (restored exactly as before) */}
          <div
            className="hidden sm:block absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.55) 35%, rgba(255, 255, 255, 0.2) 60%, transparent 82%)",
            }}
          />

          {/* Mobile: Soft balanced overlay to keep text legible on portrait phone screens */}
          <div
            className="block sm:hidden absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 60%, rgba(255, 255, 255, 0.65) 100%)",
            }}
          />

          {/* Banner Content on Left */}
          <div className="relative z-20 px-6 py-10 sm:px-12 sm:py-14 lg:px-16 max-w-xl">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0E6774] uppercase block mb-3">
              {bannerEyebrow}
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-8">
              {bannerHeading}
            </h2>

            {/* Vertically stacked buttons with identical widths for perfect side alignment */}
            <div className="flex flex-col items-start gap-3 w-full max-w-sm">
              <Link
                href={`/${locale}/contact-us`}
                className="w-full sm:w-[260px] inline-flex items-center justify-center gap-2 bg-[#0E6774] hover:bg-[#0B515C] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <span>{bannerBtn1}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href={`/${locale}/contact-us`}
                className="w-full sm:w-[260px] inline-flex items-center justify-center bg-white/80 sm:bg-transparent hover:bg-white text-[#0F172A] border border-gray-400 hover:border-gray-500 text-xs sm:text-sm font-bold tracking-wider px-6 py-3 rounded-lg transition-all duration-200"
              >
                {bannerBtn2}
              </Link>
            </div>
          </div>
        </div>

        {/* =============================================================
            PART B: 2-Column: "Why Choose Us" vs "IT Support Built Around Your Business"
        ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Why Choose Us (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0E6774] uppercase block mb-2">
                {whyEyebrow}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] mb-8">
                {whyHeading}
              </h3>

              <div className="space-y-6">
                {whyItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-start gap-3.5">
                      <div className="mt-1 shrink-0 text-[#0E6774]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {idx < whyItems.length - 1 && (
                      <div className="w-full h-px bg-gray-200/90 mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: "IT Support Built Around Your Business" Mint Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#EDF7F7] rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-[#D8ECEC]">
            <div>
              <h3 className="text-2xl sm:text-[30px] font-extrabold text-[#0F172A] tracking-tight leading-snug mb-3">
                {overviewTitle}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                {overviewDesc}
              </p>

              <ul className="space-y-3.5">
                {overviewList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] leading-snug"
                  >
                    <Plus className="w-4 h-4 text-[#0E6774] shrink-0 mt-0.5 stroke-[3]" />
                    <span>
                      <strong className="font-bold">{item.label}</strong>{" "}
                      <span className="text-gray-600">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* =============================================================
            PART C: Wide Bottom Card: "Small Business to Enterprise"
        ============================================================= */}
        <div className="w-full bg-[#EDF7F7] rounded-2xl p-8 sm:p-10 lg:p-12 border border-[#D8ECEC]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14">
            {/* Left Block (35% width) */}
            <div className="w-full lg:w-[35%] shrink-0">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0E6774] uppercase block mb-2">
                {sizeEyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-3">
                {sizeHeading}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
                {sizeSubtext}
              </p>
            </div>

            {/* Right Block (65% width) with 2 clear columns and clean divider lines */}
            <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-0">
              {/* Column 1 */}
              <div>
                {sizeCol1.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-3 border-b border-gray-300/60"
                  >
                    <Check className="w-4 h-4 text-[#0E6774] shrink-0 stroke-[2.5]" />
                    <span className="text-xs sm:text-sm font-medium text-[#0F172A] leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div>
                {sizeCol2.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-3 border-b border-gray-300/60"
                  >
                    <Check className="w-4 h-4 text-[#0E6774] shrink-0 stroke-[2.5]" />
                    <span className="text-xs sm:text-sm font-medium text-[#0F172A] leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
