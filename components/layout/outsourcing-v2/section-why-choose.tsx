import React from "react";

type WhyChooseCard = {
  title: string;
  description: string;
};

type SectionWhyChooseProps = {
  heading?: string;
  subheading?: string;
  cards?: WhyChooseCard[];
};

export default function SectionWhyChoose({
  heading,
  subheading,
  cards,
}: SectionWhyChooseProps) {
  // ── Robust Data Normalization ──────────────────────────────────────────────
  const finalHeading = heading || "Why Businesses Choose Our Resource Extensions";
  const finalSubheading = subheading || "We marry production efficiency with robust service quality validation metrics.";
  
  const fallbackCards: WhyChooseCard[] = [
    { title: "Rapid Scale", description: "Onboard talent within days instead of weeks." },
    { title: "Cost Efficiency", description: "Reduce administrative overhead expenditure by up to 60%." },
    { title: "Pre-Vetted Network", description: "Access strictly validated software and operations experts." },
    { title: "Dedicated Talent", description: "Professionals work aligned directly within your internal business schedules." }
  ];

  const finalCards = Array.isArray(cards) && cards.length > 0 ? cards : fallbackCards;

  return (
    <section className="py-20 px-6 bg-white font-sans w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
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

        {/* Dynamic Card Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalCards.map((card, idx) => {
            // Safety normalize keys if raw structural variations slide through properties
            const cardTitle = card.title || "";
            const cardDesc = card.description || "";

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "#D6F9FA",
                  border: "1.5px solid #6FD8DB",
                }}
                className="rounded-2xl p-6 flex items-start gap-4 shadow-sm min-h-[140px]"
              >
                <div className="shrink-0 text-[#0E6774] mt-1">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12l4 4 5-5" />
                    <path d="M9 16l4 4 9-9" />
                  </svg>
                </div>

                <div className="text-sm leading-relaxed text-[#334155]">
                  <strong className="font-bold text-[#0F172A]">
                    {cardTitle}
                  </strong>{" "}
                  {cardDesc && `— ${cardDesc}`}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}