"use client";

import { Globe, TrendingUp, Zap, MapPin } from "lucide-react";

import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";

type CommonTranslations = Record<string, any>;

type CareerGrowthSectionProps = {
  locale: string;
};

export default function CareerGrowthSection({ locale }: CareerGrowthSectionProps) {
  const translations = (
    locale.toLowerCase().startsWith("nl") ? nlCommon : enCommon
  ) as CommonTranslations;

  const growth = translations.career.growth;

  const features = [
    {
      icon: Globe,
      badge: growth.features.global.badge,
      title: growth.features.global.title,
      description: growth.features.global.description,
      colSpan: "lg:col-span-2",
    },
    {
      icon: TrendingUp,
      badge: growth.features.path.badge,
      title: growth.features.path.title,
      description: growth.features.path.description,
      colSpan: "lg:col-span-1",
    },
    {
      icon: Zap,
      badge: growth.features.impact.badge,
      title: growth.features.impact.title,
      description: growth.features.impact.description,
      colSpan: "lg:col-span-1",
    },
    {
      icon: MapPin,
      badge: growth.features.location.badge,
      title: growth.features.location.title,
      description: growth.features.location.description,
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06282C] sm:text-[38px] lg:text-[44px]">
            {growth.headingPrefix}{" "}
            <span className="text-[#00A896]">
              {growth.headingHighlight1}
            </span>{" "}
            {growth.headingMiddle}{" "}
            <span className="text-[#00A896]">
              {growth.headingHighlight2}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-[1.6] text-gray-500 sm:text-[15px]">
            {growth.subtext}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1.5 ${item.colSpan}`}
              >
                <div className="absolute inset-0 rounded-2xl border border-gray-200 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[#00A896] group-hover:shadow-[0_0_20px_rgba(0,168,150,0.3)]" />

                <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[14px] bg-white p-7 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00A896]/30 bg-teal-50/80 text-[#00A896] transition-all duration-300 group-hover:scale-110 group-hover:border-[#00A896] group-hover:bg-[#00A896] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#00A896]/30">
                        <IconComponent className="h-6 w-6 stroke-[2.2]" />
                      </div>

                      <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold text-[#00A896] transition-colors duration-300 group-hover:bg-[#00A896]/10">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#06282C] transition-colors duration-300 group-hover:text-[#00A896]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>

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