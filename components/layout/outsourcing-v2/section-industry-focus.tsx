import React from "react";

export type IndustryCard = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  desc?: string; // Included to capture both schema variations safely
};

type SectionIndustryFocusProps = {
  heading?: string;
  subheading?: string;
  cards?: IndustryCard[];
};


const stripEmoji = (text: string = "") =>
  text
    .replace(
      /(\p{Extended_Pictographic}|[\u{1F1E6}-\u{1F1FF}]|[\u{1F3FB}-\u{1F3FF}]|\u{FE0F}|\u{200D}|\u{20E3})/gu,
      ""
    )
    .replace(/\s{2,}/g, " ")
    .trim();

// ── Icon set (same style: w-5 h-5, stroke, teal color) ──────────────────
// Har icon alag shape lekin exact same visual language (outline, 2px stroke, #0E6774).
const iconProps = { className: "w-5 h-5 text-[#0E6774]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 };

const CartIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
);
const CurrencyIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m9-6a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const LaptopIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PulseIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2-5 3 10 2-7 2 2h5" /></svg>
);
const TruckIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h4m-6 0a1 1 0 001-1m-6 0H9" /></svg>
);
const MegaphoneIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
);
const BriefcaseIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
);
const GraduationCapIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0118 15.5c0 2.485-2.686 4.5-6 4.5s-6-2.015-6-4.5c0-1.207.591-2.302 1.84-3.922L12 14z" /></svg>
);
const BuildingIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const FactoryIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 21V10l6 4v-4l6 4V6l6 4v11H3z" /></svg>
);
const GlobeIcon = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18M3 12a9 9 0 0118 0 9 9 0 01-18 0z" /></svg>
);

// Keyword => icon mapping. Title mein keyword milte hi wo icon assign ho jata hai.
// Order matters: pehla match jeetega.
const ICON_RULES: { keywords: string[]; icon: React.ReactNode }[] = [
  { keywords: ["ecommerce", "e-commerce", "retail"], icon: <CartIcon /> },
  { keywords: ["finance", "fintech", "banking", "accounting"], icon: <CurrencyIcon /> },
  { keywords: ["saas", "software", "technology", "tech", "ai", "it "], icon: <LaptopIcon /> },
  { keywords: ["healthcare", "health", "medical", "life sciences", "pharma"], icon: <PulseIcon /> },
  { keywords: ["logistics", "supply chain", "transport", "shipping"], icon: <TruckIcon /> },
  { keywords: ["marketing", "media", "advertising", "agency", "agencies"], icon: <MegaphoneIcon /> },
  { keywords: ["professional services", "consulting", "legal", "law"], icon: <BriefcaseIcon /> },
  { keywords: ["education", "edtech", "learning"], icon: <GraduationCapIcon /> },
  { keywords: ["real estate", "property", "construction"], icon: <BuildingIcon /> },
  { keywords: ["manufacturing", "industrial", "production"], icon: <FactoryIcon /> },
];

const getIndustryIcon = (title: string = ""): React.ReactNode => {
  const t = title.toLowerCase();
  const match = ICON_RULES.find((rule) => rule.keywords.some((kw) => t.includes(kw)));
  return match ? match.icon : <GlobeIcon />;
};

export default function SectionIndustryFocus({ 
  heading, 
  subheading, 
  cards 
}: SectionIndustryFocusProps) {
  
  // ── Robust Data Fallbacks ───────────────────────────────────────────────
  const finalHeading = stripEmoji(heading) || "Domain Capabilities Integrated Across Key Sectors";
  const finalSubheading = stripEmoji(subheading) || "Adapting execution rules to conform perfectly with specific business environments.";

  const fallbackCards: IndustryCard[] = [
    {
      title: "E-Commerce & Retail",
      description: "Optimized for processing product inventories, high-volume order entry, and handling multichannel customer resolution lifecycles.",
    },
    {
      title: "Logistics & Supply Chain",
      description: "Streamlining delivery tracking routes, supply data management, freight manifests, and international customs clearance documents.",
    },
    {
      title: "Professional Services & Tech",
      description: "Supporting consulting ecosystems, high-tech groups, and agencies with organized project metrics and technical system operations.",
    }
  ];

  const finalCards = Array.isArray(cards) && cards.length > 0 ? cards : fallbackCards;

  return (
    <section className="pt-6 pb-16 px-4 bg-white font-sans w-full">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
          {finalHeading}
        </h2>
        {finalSubheading && (
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            {finalSubheading}
          </p>
        )}
      </div>

      {/* Grid Layout Setup */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {finalCards.map((card, index) => {
          const cardTitle = stripEmoji(card.title) || "";
          
          // Fallback parsing handles either key configuration seamlessly (.description OR .desc)
          const cardText = stripEmoji(card.description || card.desc) || "";
          // Priority: card.icon (agar CMS/props se aaya) > title-based smart icon
          const cardIcon = card.icon || getIndustryIcon(cardTitle);

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left flex flex-col justify-start"
            >
              {/* Icon + Title same row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#E6F4F4] shrink-0">
                  {cardIcon}
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  {cardTitle}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {cardText}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}