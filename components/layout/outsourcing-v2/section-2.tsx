"use client";

import React from "react";
import { Users, Timer, CircleDollarSign, ShieldCheck, Layers } from "lucide-react";

interface Section2Props {
  heading: string;
  slug: string;
}

const Section2 = ({ heading, slug }: Section2Props) => {
  // Configuration map for features based on slug
  const featuresBySlug: Record<string, { icon: React.ComponentType<any>; label: string; bgColor: string }[]> = {
    "marketing-analytics": [
      { icon: Users, label: "Dedicated Marketers", bgColor: "#e6f4f4" },
      { icon: Timer, label: "Start in Days, Not Months", bgColor: "#fdf0ed" },
      { icon: CircleDollarSign, label: "Save up to 60% on Costs", bgColor: "#edf7ed" },
      { icon: ShieldCheck, label: "Fully Managed Support", bgColor: "#fbf0fc" },
      { icon: Layers, label: "Flexible Monthly Plans", bgColor: "#edf5fd" },
    ],
    "it-development": [
      { icon: Users, label: "Dedicated Developers", bgColor: "#e6f4f4" },
      { icon: Timer, label: "Agile Sprints Faster", bgColor: "#fdf0ed" },
      { icon: CircleDollarSign, label: "Reduce Technical Debt", bgColor: "#edf7ed" },
      { icon: ShieldCheck, label: "Enterprise Security Built-in", bgColor: "#fbf0fc" },
      { icon: Layers, label: "Scalable Dedicated Teams", bgColor: "#edf5fd" },
    ],
    "design-services": [
      { icon: Users, label: "Senior UI/UX Designers", bgColor: "#e6f4f4" },
      { icon: Timer, label: "Fast Asset Turnaround", bgColor: "#fdf0ed" },
      { icon: CircleDollarSign, label: "No Overhead Freelance Fees", bgColor: "#edf7ed" },
      { icon: ShieldCheck, label: "Consistent Brand Identity", bgColor: "#fbf0fc" },
      { icon: Layers, label: "On-Demand Resource Access", bgColor: "#edf5fd" },
    ],
    "business-support": [
      { icon: Users, label: "Professional VA Staff", bgColor: "#e6f4f4" },
      { icon: Timer, label: "24/7 Operations Coverage", bgColor: "#fdf0ed" },
      { icon: CircleDollarSign, label: "Drastically Cut Overhead", bgColor: "#edf7ed" },
      { icon: ShieldCheck, label: "SLA Guaranteed Work", bgColor: "#fbf0fc" },
      { icon: Layers, label: "Custom Modular Schedules", bgColor: "#edf5fd" },
    ],
    "hire-roles": [
      { icon: Users, label: "Pre-Vetted Global Experts", bgColor: "#e6f4f4" },
      { icon: Timer, label: "Onboard Within 48 Hours", bgColor: "#fdf0ed" },
      { icon: CircleDollarSign, label: "Zero Recruiting Expenses", bgColor: "#edf7ed" },
      { icon: ShieldCheck, label: "End-to-End Compliance", bgColor: "#fbf0fc" },
      { icon: Layers, label: "Risk-Free Trial Contracts", bgColor: "#edf5fd" },
    ]
  };

  const defaultFeatures = [
    { icon: Users, label: "Dedicated Remote Experts", bgColor: "#e6f4f4" },
    { icon: Timer, label: "Start in Days, Not Months", bgColor: "#fdf0ed" },
    { icon: CircleDollarSign, label: "Save up to 60% on Hiring Costs", bgColor: "#edf7ed" },
    { icon: ShieldCheck, label: "Fully Managed Support", bgColor: "#fbf0fc" },
    { icon: Layers, label: "Flexible Monthly Plans", bgColor: "#edf5fd" },
  ];

  const currentFeatures = featuresBySlug[slug] || defaultFeatures;

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        
        {/* Heading - bold removed, using medium weight */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#05262C] text-center max-w-4xl tracking-tight leading-[1.25] mb-10">
          {heading}
        </h2>

        {/* Features Row - forced single line, square icons matching reference */}
      {/* Features Row - gap increased for better spacing */}
<div className="flex flex-row flex-nowrap items-start justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 w-full max-w-6xl px-2 overflow-x-auto">
  {currentFeatures.map((item, index) => {
    const IconComponent = item.icon;
    return (
      <div 
        key={index} 
        className="flex flex-col items-center text-center w-[120px] sm:w-[140px] md:w-[160px] shrink-0 px-1"
      >
        {/* Square rounded icon box */}
        <div 
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
          style={{ backgroundColor: item.bgColor }}
        >
          <IconComponent 
            size={28} // Slightly increased icon size to balance the extra gap
            strokeWidth={1.5}
            style={{ color: "#146970" }} 
          />
        </div>

        {/* Label text */}
        <span className="text-[13px] sm:text-[14px] font-normal text-[#143237] leading-snug tracking-tight">
          {item.label}
        </span>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default Section2;