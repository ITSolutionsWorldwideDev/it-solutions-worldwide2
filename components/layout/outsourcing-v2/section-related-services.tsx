import React from "react";

type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type SectionRelatedServicesProps = {
  heading: string;
  subheading: string;
  cards: ServiceCard[];
};

export default function SectionRelatedServices({
  heading,
  subheading,
  cards,
}: SectionRelatedServicesProps) {
  return (
    <section className="py-20 px-6 bg-white font-sans w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            {heading}
          </h2>
          <p className="text-[#334155] text-base md:text-lg leading-relaxed font-medium">
            {subheading}
          </p>
        </div>

        {/* 4-Column Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[220px] hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Header Row with Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon Box Container with exact light teal background */}
                  <div className="w-14 h-14 rounded-xl bg-[#E6F4F5] flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  
                  <h3 className="font-bold text-base text-[#0F172A] leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-sm leading-relaxed text-[#475569]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}