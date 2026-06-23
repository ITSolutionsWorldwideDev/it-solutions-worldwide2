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

// Default industry vertical icon (Globe/Network style)
const DefaultIndustryIcon = () => (
  <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default function SectionIndustryFocus({ 
  heading, 
  subheading, 
  cards 
}: SectionIndustryFocusProps) {
  
  // ── Robust Data Fallbacks ───────────────────────────────────────────────
  const finalHeading = heading || "Domain Capabilities Integrated Across Key Sectors";
  const finalSubheading = subheading || "Adapting execution rules to conform perfectly with specific business environments.";

  const fallbackCards: IndustryCard[] = [
    {
      title: "E-Commerce & Retail",
      description: "Optimized for processing product inventories, high-volume order entry, and handling multichannel customer resolution lifecycles.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Logistics & Supply Chain",
      description: "Streamlining delivery tracking routes, supply data management, freight manifests, and international customs clearance documents.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h4m-6 0a1 1 0 001-1m-6 0H9" />
        </svg>
      )
    },
    {
      title: "Professional Services & Tech",
      description: "Supporting consulting ecosystems, high-tech groups, and agencies with organized project metrics and technical system operations.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
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
          const cardTitle = card.title || "";
          
          // Fallback parsing handles either key configuration seamlessly (.description OR .desc)
          const cardText = card.description || card.desc || "";
          const cardIcon = card.icon || <DefaultIndustryIcon />;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left flex flex-col justify-start"
            >
              {/* Icon Container Wrapper */}
              <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E6F4F4] shrink-0">
                {cardIcon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {cardTitle}
              </h3>
              
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