"use client";

import { Globe, TrendingUp, Zap, MapPin } from "lucide-react";

const features = [
  {
    icon: Globe,
    badge: "Global & International",
    title: "Global Reach",
    description:
      "We work with international clients across supply chain, IT, and engineering sectors.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: TrendingUp,
    badge: "Career Path",
    title: "Real Growth",
    description: "Career paths with real progression, not just title changes.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Zap,
    badge: "Impact",
    title: "Real Responsibility",
    description:
      "New hires take on meaningful work from day one — not months of shadowing.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: MapPin,
    badge: "Location",
    title: "Rotterdam-Based",
    description:
      "Headquartered in Hoogvliet, Rotterdam, with roles across the Netherlands.",
    colSpan: "lg:col-span-2",
  },
];

export default function CareerGrowthSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">
        
        {/* HEADING SECTION */}
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06282C] sm:text-[38px] lg:text-[44px]">
            A Place Where <span className="text-[#00A896]">Careers</span> Actually{" "}
            <span className="text-[#00A896]">Grow</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-[1.6] text-gray-500 sm:text-[15px]">
            We have built the kind of company we always wanted to work at — and
            we keep raising the bar every year.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1.5 ${item.colSpan}`}
              >
                {/* STATIC LIGHT BORDER */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 transition-opacity duration-300 group-hover:opacity-0" />

                {/* GLOWING GREEN BORDER ON HOVER */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[#00A896] group-hover:shadow-[0_0_20px_rgba(0,168,150,0.3)]" />

                {/* CARD CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[14px] bg-white p-7 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                  <div>
                    {/* ICON & BADGE */}
                    <div className="flex items-center justify-between mb-5">
                      
                      {/* ICON BOX - Always visible with crisp styling */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00A896]/30 bg-teal-50/80 text-[#00A896] transition-all duration-300 group-hover:scale-110 group-hover:border-[#00A896] group-hover:bg-[#00A896] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#00A896]/30">
                        <IconComponent className="h-6 w-6 stroke-[2.2]" />
                      </div>

                      <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold text-[#00A896] transition-colors duration-300 group-hover:bg-[#00A896]/10">
                        {item.badge}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold tracking-tight text-[#06282C] transition-colors duration-300 group-hover:text-[#00A896]">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  {/* BOTTOM LOADING / ACCENT LINE */}
                  <div className="mt-6 h-[2px] w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-0 bg-[#00A896] transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}