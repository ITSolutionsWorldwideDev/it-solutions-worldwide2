"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface SupportModelsSectionProps {
  locale?: string;
}

export default function SupportModelsSection({
  locale = "en",
}: SupportModelsSectionProps) {
  const isNl = locale === "nl";
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const models = [
    {
      id: "01",
      name: "Essential",
      hasBadge: false,
      badgeText: "",
      description: isNl
        ? "Remote IT-support en een goed georganiseerde, veilige IT-setup voor een modern digitaal bedrijf."
        : "Remote IT support and a well-organised, secure IT setup for a modern digital business.",
      price: "250",
      priceLine1: null,
      priceLine2: null,
      includedTitle: isNl ? "Wat is inbegrepen:" : "What is included:",
      features: isNl
        ? [
            "Remote helpdesk voor al je IT-vragen en problemen",
            "Microsoft 365 configuratie & beheer incl.",
            "Liever Google Workspace? Ook ondersteund",
            "Zakelijke e-mail & agenda's op je eigen domein",
            "Dagelijkse versleutelde back-ups",
            "Spamfilter & antivirus inbegrepen",
            "Veilige toegang vanaf desktop, mobiel & tablet",
            "Regelmatige updates & beveiligingspatches",
          ]
        : [
            "Remote helpdesk for all IT questions and issues",
            "Microsoft 365 setup & management incl.",
            "Prefer Google Workspace? Supported too",
            "Business email & calendars on your own domain",
            "Daily encrypted backups",
            "Spam filter & antivirus included",
            "Secure access from desktop, mobile & tablet",
            "Regular updates & security patching",
          ],
      forWhomTitle: isNl ? "Voor wie?" : "For Whom?",
      forWhom: isNl
        ? "Zelfstandigen (ZZP) en kleine teams tot [5] personen"
        : "Self-employed professionals (ZZP) and small teams of up to [5] people",
      btnText: isNl ? "Boek een Demo" : "Book a Demo",
      btnHref: `/${locale}/contact-us`,
    },
    {
      id: "02",
      name: "Business",
      hasBadge: true,
      badgeText: isNl ? "MEEST GEKOZEN" : "MOST CHOSEN",
      description: isNl
        ? "Compleet managed IT voor bedrijven met [2–150] medewerkers — proactieve monitoring en 24/7 support voor urgente zaken."
        : "Complete managed IT for companies with [2–150] employees — proactive monitoring and 24/7 support for urgent issues.",
      price: "425",
      priceLine1: isNl
        ? "basisbedrag per maand + €425 per"
        : "basic amount per month + €425 per",
      priceLine2: isNl ? "werkplek / maand" : "workstation / month",
      includedTitle: isNl ? "Wat is inbegrepen:" : "What is included:",
      features: isNl
        ? [
            "Proactieve monitoring & regelmatig onderhoud",
            "Volledig systeembeheer",
            "Netwerkbeheer, internet & managed Wi-Fi",
            "Server- & infrastructuurondersteuning",
            "Cybersecurity-monitoring & AVG-conforme gegevensverwerking",
            "24/7 support voor urgente storingen",
            "Vaste IT-specialist & periodieke rapportage",
          ]
        : [
            "Proactive monitoring & regular maintenance",
            "Complete system administration",
            "Network management, internet & managed Wi-Fi",
            "Server & infrastructure support",
            "Cybersecurity monitoring & AVG-compliant data handling",
            "24/7 support for urgent issues",
            "Named IT specialist & periodic reporting",
          ],
      forWhomTitle: isNl ? "Voor wie?" : "For Whom?",
      forWhom: isNl
        ? "MKB en groeiende MKB-bedrijven"
        : "SMEs and growing MKB companies",
      btnText: isNl ? "Boek een Demo" : "Book a Demo",
      btnHref: `/${locale}/contact-us`,
    },
    {
      id: "03",
      name: "Compliance+",
      hasBadge: false,
      badgeText: "",
      description: isNl
        ? "Voor organisaties die moeten voldoen aan hogere normen en uitzonderlijke serviceniveaus nodig hebben."
        : "For organisations that must meet higher standards and need exceptional service levels.",
      price: "700",
      priceLine1: isNl
        ? "basisbedrag per maand + €700 per"
        : "basic amount per month + €700 per",
      priceLine2: isNl ? "werkplek / maand" : "workstation / month",
      includedTitle: isNl ? "Wat is inbegrepen:" : "What is included:",
      features: isNl
        ? [
            "Geavanceerde, op maat gemaakte IT-beveiliging voor gevoelige of gereguleerde gegevens",
            "Geavanceerde monitoring & logging",
            "Ondersteuning afgestemd op ISO 27001, NEN 7510 of NIS2 vereisten",
            "Complexe & multi-site configuraties, performance tuning",
            "IT-strategie & continue roadmap",
            "Prioritaire respons zoals overeengekomen in je SLA",
          ]
        : [
            "Advanced, tailored IT security for sensitive or regulated data",
            "Advanced monitoring & logging",
            "Support aligned with ISO 27001, NEN 7510 or NIS2 requirements",
            "Complex & multi-site configurations, performance tuning",
            "IT strategy & roadmap",
            "Priority response as agreed in your SLA",
          ],
      forWhomTitle: isNl ? "Voor wie?" : "For Whom?",
      forWhom: isNl
        ? "Organisaties met uitzonderlijke IT-eisen, bijv. zorg, finance of multi-site operaties"
        : "Organisations with exceptional IT requirements, e.g. healthcare, finance or multi-site operations",
      btnText: isNl ? "Boek een Demo" : "Book a Demo",
      btnHref: `/${locale}/contact-us`,
    },
  ];

  return (
    <section id="support-models" className="w-full bg-white py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0E6774] uppercase block mb-2">
              {isNl ? "IT-SUPPORT MODELLEN" : "IT SUPPORT MODELS"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              {isNl
                ? "Kies Jouw IT-Support Model"
                : "Choose Your IT Support Model"}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            {isNl
              ? "Flexibele IT-support van remote hulp op aanvraag tot een volledig uitbestede IT-afdeling."
              : "Flexible IT support from on-demand remote help to a fully outsourced IT department."}
          </p>
        </div>

        {/* ── 3 Pricing Cards Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch mb-16">
          {models.map((model) => {
            const isHovered = hoveredId === model.id;

            return (
              <div
                key={model.id}
                onMouseEnter={() => setHoveredId(model.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor: isHovered ? "#F1F8F8" : "#FFFFFF",
                  borderColor: isHovered ? "#358E92" : "#E2E8F0",
                  borderWidth: "1.5px",
                  borderStyle: "solid",
                  boxShadow: isHovered
                    ? "0 14px 30px -4px rgba(14, 103, 116, 0.12), 0 8px 10px -6px rgba(14, 103, 116, 0.06)"
                    : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="rounded-2xl flex flex-col justify-between p-6 sm:p-7 cursor-pointer"
              >
                <div>
                  {/* Top Index & Badge */}
                  <div className="flex items-center justify-between mb-4 h-6">
                    <span className="text-xs font-mono font-medium text-gray-400">
                      / {model.id}
                    </span>

                    {model.hasBadge && (
                      <span className="bg-[#0F5A63] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                        {model.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Plan Title */}
                  <h3 className="text-2xl sm:text-[26px] font-bold text-[#101828] mb-2 tracking-tight">
                    {model.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed min-h-[42px] mb-5">
                    {model.description}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#101828]">€</span>
                      <span className="text-4xl sm:text-[44px] font-black text-[#101828] tracking-tight leading-none">
                        {model.price}
                      </span>
                      <span className="text-xs font-medium text-gray-500 ml-1">
                        {isNl ? "/ maand" : "/ month"}
                      </span>
                    </div>

                    {model.priceLine1 ? (
                      <p className="text-[11px] text-gray-500 mt-2 leading-tight">
                        {model.priceLine1}
                        <br />
                        {model.priceLine2}
                      </p>
                    ) : (
                      <div className="h-[26px]" />
                    )}
                  </div>

                  {/* Button: justify-between with text on left, arrow on right */}
                  <Link
                    href={model.btnHref}
                    style={{
                      backgroundColor: isHovered ? "#0F5A63" : "#FFFFFF",
                      color: isHovered ? "#FFFFFF" : "#101828",
                      borderColor: isHovered ? "#0F5A63" : "#D0D5DD",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      transition: "all 0.2s ease",
                    }}
                    className="w-full py-2.5 px-4 rounded-lg flex items-center justify-between text-xs sm:text-sm font-semibold mb-6 shadow-sm"
                  >
                    <span>{model.btnText}</span>
                    <ArrowUpRight
                      className="w-4 h-4 stroke-[2.5]"
                      style={{
                        color: isHovered ? "#FFFFFF" : "#101828",
                      }}
                    />
                  </Link>

                  {/* Divider Line */}
                  <div
                    style={{
                      backgroundColor: isHovered ? "rgba(53, 142, 146, 0.2)" : "#E4E7EC",
                    }}
                    className="w-full h-px mb-5 transition-colors"
                  />

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#101828] mb-3">
                      {model.includedTitle}
                    </h4>

                    <ul className="space-y-2">
                      {model.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#344054] leading-snug"
                        >
                          {/* Exact crisp Teal Checkmark from screenshot */}
                          <svg
                            className="w-4 h-4 text-[#0F5A63] shrink-0 mt-0.5"
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* For Whom Bottom Block */}
                <div
                  style={{
                    borderTopColor: isHovered ? "rgba(53, 142, 146, 0.2)" : "#E4E7EC",
                  }}
                  className="pt-4 border-t transition-colors"
                >
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#101828] mb-1.5">
                    {model.forWhomTitle}
                  </h4>
                  <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#344054] leading-snug">
                    <svg
                      className="w-4 h-4 text-[#0F5A63] shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                    </svg>
                    <span>{model.forWhom}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Dark Banner: Explore Our Services ──────────────── */}
        <div className="w-full rounded-2xl bg-[#05262C] p-6 sm:p-8 lg:p-9 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md border border-teal-900/40">
          {/* Left: Icon & Titles */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-11 h-11 rounded-full border border-teal-500/40 bg-teal-500/10 flex items-center justify-center shrink-0 text-teal-300">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-teal-400 uppercase block mb-1">
                {isNl ? "ONTDEK ONZE DIENSTEN" : "EXPLORE OUR SERVICES"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {isNl
                  ? "Ontdek Onze IT-Support Diensten"
                  : "Explore Our IT Support Services"}
              </h3>
            </div>
          </div>

          {/* Middle: Description */}
          <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
            {isNl
              ? "Automation Services en ERP Implementatie breiden jouw IT-support uit naar diepere efficiëntie en systeemtransformatie."
              : "Automation Services and ERP Implementation extend your IT support into deeper efficiency and system transformation."}
          </p>

          {/* Right: Two Quick Links */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto shrink-0">
            <Link
              href={`/${locale}/it-support/automation-services`}
              className="bg-[#0B3B42] hover:bg-[#0E4A53] text-teal-100 hover:text-white border border-teal-500/30 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center justify-between gap-4 transition-all duration-200"
            >
              <span>{isNl ? "Automation Services" : "Automation Services"}</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </Link>

            <Link
              href={`/${locale}/it-support/erp-implementation`}
              className="bg-[#0B3B42] hover:bg-[#0E4A53] text-teal-100 hover:text-white border border-teal-500/30 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center justify-between gap-4 transition-all duration-200"
            >
              <span>{isNl ? "ERP - Implementatie" : "ERP - Implementation"}</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
