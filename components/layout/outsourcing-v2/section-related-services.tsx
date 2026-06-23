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

// Unique Icons
const BarChartIcon = () => (
  <svg className="w-7 h-7 text-[#0E6774]" viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="13" width="3.5" height="7" rx="1" /><rect x="10.25" y="8" width="3.5" height="12" rx="1" /><rect x="16.5" y="4" width="3.5" height="16" rx="1" />
  </svg>
);

const TrendChartIcon = () => (
  <svg className="w-7 h-7 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const RobotIcon = () => (
  <svg className="w-7 h-7 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 10h18M7 10l1.292-6.46a.5.5 0 01.48-.4h6.456a.5.5 0 01.48.4L17 10M9 14h6" />
  </svg>
);

const LaptopIcon = () => (
  <svg className="w-7 h-7 text-[#0E6774]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17H9l-2 3H5l4-10h6l4 10h-2l-2-3h-.75M12 10v4" />
    <path strokeLinecap="round" d="M4 10h16v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8z" />
  </svg>
);

export default function SectionRelatedServices({
  heading,
  subheading,
  cards,
}: SectionRelatedServicesProps) {
  const finalHeading = heading || "Explore Complementary Support Verticals";
  const finalSubheading = subheading || "Further expand efficiency loops by combining related specialized workflows.";

  // Utility to remove emojis from string
  const cleanTitle = (text: string) => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
  };

  const finalCards = Array.isArray(cards) && cards.length > 0 ? cards : [
    { title: "Administrative Support", description: "Manage day-to-day operations and scheduling.", icon: <BarChartIcon /> },
    { title: "Customer Support Teams", description: "High-touch communication for client retention.", icon: <TrendChartIcon /> },
    { title: "Data Engineering", description: "Build scalable pipelines for your data architecture.", icon: <RobotIcon /> },
    { title: "Tech Development", description: "Scale software projects with dedicated talent.", icon: <LaptopIcon /> }
  ];

  return (
    <section className="pt-6 pb-20 px-6 bg-white font-sans w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">{finalHeading}</h2>
          {finalSubheading && <p className="text-[#334155] text-base md:text-lg leading-relaxed font-medium">{finalSubheading}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#E6F4F5] flex items-center justify-center shrink-0">
                  {card.icon || <BarChartIcon />}
                </div>
                <h3 className="font-bold text-base text-[#0F172A] leading-snug">
                  {cleanTitle(card.title)}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#475569]">
                {(card as any).description || (card as any).desc || ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}