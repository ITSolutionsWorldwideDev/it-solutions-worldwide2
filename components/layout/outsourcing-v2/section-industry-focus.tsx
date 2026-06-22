import React from "react";

export type IndustryCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type SectionIndustryFocusProps = {
  heading: string;
  subheading: string;
  cards: IndustryCard[];
};

export default function SectionIndustryFocus({ heading, subheading, cards }: SectionIndustryFocusProps) {
  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
          {heading}
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          {subheading}
        </p>
      </div>

      {/* Pixel perfect grid setup */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-left flex flex-col justify-start"
          >
            {/* Exact Icon Wrapper Color matching image_571041.png */}
            <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-[#E6F4F4]">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}