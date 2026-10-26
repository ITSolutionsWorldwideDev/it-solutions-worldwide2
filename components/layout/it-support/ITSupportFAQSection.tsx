"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ITSupportFAQSectionProps {
  locale: string;
}

const FAQS_EN: FAQItem[] = [
  {
    id: 1,
    question: "What are IT support services?",
    answer:
      "IT support services cover the ongoing maintenance, monitoring, troubleshooting, and security of your business technology — including networks, systems, software, and data. They can be delivered as managed, remote, or outsourced IT support, so your team stays productive without the cost of a full in-house IT department.",
  },
  {
    id: 2,
    question: "What is included in managed IT support?",
    answer:
      "Managed IT support includes proactive monitoring, regular updates and security patches, backup management, helpdesk troubleshooting, and performance and risk reporting. The exact scope is agreed in your free consultation and matched to your infrastructure, user numbers, and priorities.",
  },
  {
    id: 3,
    question: "Do you provide IT support for small businesses?",
    answer:
      "Yes. Our small business and MKB IT support covers essential maintenance, user troubleshooting, backups, and security basics, and can scale into network management, cybersecurity, and consulting as you grow. You pay only for the support you need.",
  },
  {
    id: 4,
    question: "Can IT support be provided remotely?",
    answer:
      "Yes. Most IT support is delivered remotely, giving faster response and lower cost than on-site visits. Remote support covers troubleshooting, software and access issues, monitoring, and security management. Where on-site work adds value, such as network installation, we scope and schedule it with you.",
  },
  {
    id: 5,
    question: "What types of IT support services are available?",
    answer:
      "We offer managed IT support, remote IT support, IT network support, outsourced IT support, cybersecurity and data protection, and IT consulting and strategy — for small businesses, enterprises, and B2B environments, online or through self-service resources backed by expert help.",
  },
  {
    id: 6,
    question: "How quickly can support start?",
    answer:
      "Support typically starts within days of your free initial consultation. We review your environment, agree scope and access, sign an NDA and DPA, then onboard your systems and users. Urgent issues are covered by our 24/7 troubleshooting support.",
  },
  {
    id: 7,
    question: "How do you protect confidential business data?",
    answer:
      "We execute a Non-Disclosure Agreement (NDA) and data processing agreement (DPA) before any system access or sensitive data is shared. All data is handled in line with Dutch AVG (GDPR) obligations, using least-privilege access and secure tooling throughout.",
  },
  {
    id: 8,
    question: "What commercial models are available?",
    answer:
      "We offer monthly managed IT support plans, flexible pay-as-you-go remote support, and project-based engagements for one-off needs such as migrations or network upgrades. The right model is agreed during your free consultation, with no obligation to proceed.",
  },
  {
    id: 9,
    question: "How much does IT support cost in the Netherlands?",
    answer:
      "Cost depends on the number of users, devices, and systems, and on coverage such as business hours or 24/7. Flexible plans avoid the salary and overhead of an in-house IT hire. Request a free consultation for a tailored quote.",
  },
  {
    id: 10,
    question: "Do you help with NIS2 and Cyberbeveiligingswet requirements?",
    answer:
      "We strengthen security practices that support compliance — patching, access control, backups, monitoring, and incident readiness — alongside AVG (GDPR) data protection. Whether NIS2 or the Cyberbeveiligingswet applies depends on your sector and size, so we assess this with you.",
  },
];

const FAQS_NL: FAQItem[] = [
  {
    id: 1,
    question: "Wat zijn IT-ondersteuningsdiensten?",
    answer:
      "IT-ondersteuningsdiensten omvatten het doorlopende onderhoud, monitoring, probleemoplossing en beveiliging van uw bedrijfstechnologie — inclusief netwerken, systemen, software en gegevens. Ze kunnen worden geleverd als beheerde, externe of uitbestede IT-ondersteuning, zodat uw team productief blijft zonder de kosten van een volledige interne IT-afdeling.",
  },
  {
    id: 2,
    question: "Wat is inbegrepen bij beheerde IT-ondersteuning?",
    answer:
      "Beheerde IT-ondersteuning omvat proactieve monitoring, regelmatige updates en beveiligingspatches, back-upbeheer, helpdesk-probleemoplossing en prestatie- en risicorapportage. De exacte reikwijdte wordt afgestemd tijdens uw gratis consultatie op basis van uw infrastructuur, gebruikersaantallen en prioriteiten.",
  },
  {
    id: 3,
    question: "Bieden jullie IT-ondersteuning voor het MKB en kleine bedrijven?",
    answer:
      "Ja. Onze IT-ondersteuning voor het MKB en kleine bedrijven dekt essentieel onderhoud, gebruikersondersteuning, back-ups en basisbeveiliging, en kan meegroeien naar netwerkbeheer, cyberbeveiliging en consultancy. U betaalt alleen voor de ondersteuning die u nodig heeft.",
  },
  {
    id: 4,
    question: "Kan IT-ondersteuning op afstand worden verleend?",
    answer:
      "Ja. De meeste IT-ondersteuning wordt op afstand geleverd, wat zorgt voor snellere responstijden en lagere kosten dan bezoeken op locatie. Ondersteuning op afstand omvat probleemoplossing, software- en toegangsproblemen, monitoring en beveiligingsbeheer. Waar werkzaamheden op locatie meerwaarde bieden, zoals netwerkinstallatie, plannen we dit in overleg in.",
  },
  {
    id: 5,
    question: "Welke soorten IT-ondersteuningsdiensten zijn er beschikbaar?",
    answer:
      "Wij bieden beheerde IT-ondersteuning, IT-ondersteuning op afstand, netwerkondersteuning, uitbestede IT-ondersteuning, cyberbeveiliging en gegevensbescherming, en IT-consulting en strategie — voor kleine bedrijven, enterprises en B2B-omgevingen.",
  },
  {
    id: 6,
    question: "Hoe snel kan de ondersteuning van start gaan?",
    answer:
      "De ondersteuning start doorgaans binnen enkele dagen na uw gratis eerste consultatie. We beoordelen uw omgeving, stemmen omvang en toegang af, ondertekenen een NDA en DPA en onboarden vervolgens uw systemen en gebruikers. Urgente problemen worden gedekt door onze 24/7 storingsdienst.",
  },
  {
    id: 7,
    question: "Hoe beschermt u vertrouwelijke bedrijfsgegevens?",
    answer:
      "We sluiten een geheimhoudingsovereenkomst (NDA) en verwerkersovereenkomst (DPA) af voordat systeemtoegang of gevoelige gegevens worden gedeeld. Alle gegevens worden verwerkt conform de Nederlandse AVG (GDPR), met minimale toegangsrechten en veilige tools.",
  },
  {
    id: 8,
    question: "Welke commerciële modellen zijn er beschikbaar?",
    answer:
      "Wij bieden maandelijkse beheerde IT-ondersteuningsabonnementen, flexibele pay-as-you-go ondersteuning op afstand en projectmatige trajecten voor eenmalige behoeften zoals migraties of netwerkupgrades.",
  },
  {
    id: 9,
    question: "Wat kost IT-ondersteuning in Nederland?",
    answer:
      "De kosten zijn afhankelijk van het aantal gebruikers, apparaten en systemen, en de gewenste dekking zoals kantooruren of 24/7. Flexibele plannen voorkomen het salaris en de overhead van een vaste interne IT'er. Vraag een gratis adviesgesprek aan voor een offerte op maat.",
  },
  {
    id: 10,
    question: "Helpt u met NIS2 en de Cyberbeveiligingswet?",
    answer:
      "Wij versterken beveiligingspraktijken die compliance ondersteunen — patching, toegangsbeheer, back-ups, monitoring en incidentparaatheid — naast AVG (GDPR) gegevensbescherming. Of NIS2 of de Cyberbeveiligingswet op u van toepassing is, beoordelen we graag samen met u.",
  },
];

export default function ITSupportFAQSection({ locale }: ITSupportFAQSectionProps) {
  const isNl = locale === "nl";
  const faqs = isNl ? FAQS_NL : FAQS_EN;

  // By default, open the first FAQ (index 0 / id 1) as seen in the Figma design
  const [openIds, setOpenIds] = useState<number[]>([1]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  // JSON-LD Schema for rich snippet indexing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-t border-gray-100">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* =====================================================
              LEFT COLUMN: Eyebrow, Heading, Contact Link
          ===================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-[#2B8A99] font-bold text-xs sm:text-sm tracking-wider uppercase inline-block mb-3">
              FAQ
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0D1F23] tracking-tight leading-[1.15] mb-4">
              IT Support
              <br />
              FAQs
            </h2>

            <p className="text-gray-500 text-sm sm:text-base flex flex-wrap items-center gap-1.5 leading-relaxed">
              <span>{isNl ? "Heeft u vragen? Nog onzeker?" : "Got questions? Still unsure?"}</span>
              <Link
                href={`/${locale}/contact-us`}
                className="text-[#0D1F23] hover:text-[#2B8A99] font-semibold inline-flex items-center gap-1 transition-colors group"
              >
                <span>{isNl ? "Neem contact op met ons team" : "Contact our team"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#2B8A99] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </p>
          </div>

          {/* =====================================================
              RIGHT COLUMN: Accordion List (4 initial, expand to 10)
          ===================================================== */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {displayedFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div key={faq.id} className="py-5 sm:py-6 transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-[17px] font-bold text-[#0D1F23] group-hover:text-[#2B8A99] transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-[#2B8A99] transition-transform duration-200">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 pb-1 pr-6 sm:pr-8 animate-fadeIn">
                        <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Read More / Show More Button */}
            <div className="mt-8 flex items-center justify-start">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#2B8A99] text-[#2B8A99] hover:bg-[#2B8A99] hover:text-white transition-all duration-200 font-semibold text-sm shadow-sm"
              >
                <span>
                  {showAll
                    ? isNl
                      ? "Minder bekijken"
                      : "Show less"
                    : isNl
                    ? "Lees meer FAQs (10)"
                    : "Read more FAQs"}
                </span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4 stroke-[2.2]" />
                ) : (
                  <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
