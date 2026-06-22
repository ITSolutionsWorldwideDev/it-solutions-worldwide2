import React from "react";

type ServiceCard = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type SectionRelatedServicesProps = {
  heading?: string;
  subheading?: string;
  cards?: ServiceCard[];
};

// Default Fallback Icon if common.json does not provide any graphic element
const DefaultServiceIcon = () => (
  <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v6a2 2 0 012-2m14-6V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export default function SectionRelatedServices({
  heading,
  subheading,
  cards,
}: SectionRelatedServicesProps) {
  // ── Robust Fallbacks ───────────────────────────────────────────────────────
  const finalHeading = heading || "Explore Complementary Support Verticals";
  const finalSubheading = subheading || "Further expand efficiency loops by combining related specialized workflows.";

  const fallbackCards: ServiceCard[] = [
    {
      title: "Administrative Support",
      description: "Manage day-to-day operations, scheduling, and documentation cleanly.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Customer Support Teams",
      description: "Provide high-touch omnichannel communication channels for client retention.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 5.636l3.536 3.536m0 5.656l-3.536 3.536M12 12a1 1 0 100-2 1 1 0 000 2zm0-8v2m0 12v2m8-8h-2M6 12H4" />
        </svg>
      )
    },
    {
      title: "Data Entry Specialists",
      description: "Structure information accurately inside secure production databases.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "HR Outsourcing Solutions",
      description: "Scale internal sourcing pipelines, payroll management, and onboarding systems.",
      icon: (
        <svg className="w-6 h-6 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const finalCards = Array.isArray(cards) && cards.length > 0 ? cards : fallbackCards;

  return (
    <section className="py-20 px-6 bg-white font-sans w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            {finalHeading}
          </h2>
          {finalSubheading && (
            <p className="text-[#334155] text-base md:text-lg leading-relaxed font-medium">
              {finalSubheading}
            </p>
          )}
        </div>

        {/* 4-Column Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalCards.map((card, idx) => {
            const cardTitle = card.title || "";
            // Workarounds if translation data uses 'desc' instead of 'description'
            const cardDesc = card.description || (card as any).desc || "";
            const cardIcon = card.icon || <DefaultServiceIcon />;

            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[220px] hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  {/* Header Row with Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#E6F4F5] flex items-center justify-center shrink-0">
                      {cardIcon}
                    </div>
                    
                    <h3 className="font-bold text-base text-[#0F172A] leading-snug">
                      {cardTitle}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {cardDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}