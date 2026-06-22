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
  heading = "",
  subheading = "",
  cards = [],
}: SectionWhyChooseProps) {
  if (!heading && cards.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-white font-sans w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          {heading && (
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              {heading}
            </h2>
          )}

          {subheading && (
            <p className="text-[#334155] text-base md:text-lg leading-relaxed font-medium">
              {subheading}
            </p>
          )}
        </div>

        {cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#EAF6FF",
                  border: "1px solid #B6DCFF",
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
                    {card.title}
                  </strong>{" "}
                  — {card.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}