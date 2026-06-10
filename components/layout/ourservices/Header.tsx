// app/components/HeroSection.tsx

import React from "react";
import { ArrowRight, Play, Zap } from "lucide-react";
import Link from "next/link";
const heroData = {
  badge: "Growth-Driven Marketing",
  title: "Digital Marketing That Drives Measurable",
  highlight: "Growth",
  description:
    "We help businesses scale through data-driven strategies, performance marketing, and intelligent automation. From SEO to paid media and conversion optimization, our digital marketing services are designed to attract, engage, and convert your ideal customers.",

  buttons: [
    {
      label: "Get Free Marketing Audit",
      link: "#",
      primary: true,
    },
    {
      label: "View Services",
      link: "#",
      primary: false,
    },
  ],

  stats: [
    {
      value: "300%",
      label: "Avg ROI Increase",
    },
    {
      value: "150+",
      label: "Campaigns",
    },
    {
      value: "95%",
      label: "Retention",
    },
  ],

  trustedText:
    "Trusted by 500+ Businesses Looking to Scale Faster Across Netherlands",
};

const Header = () => {
  return (
    <section className="w-full bg-linear-to-r from-white to-cyan-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-4 py-2 text-sm font-medium text-cyan-700 bg-cyan-100 rounded-full border border-cyan-200 flex items-center gap-3">
            <Zap />
            {heroData.badge}
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h2 className="text-4xl sm:text-2xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {heroData.title}
            <br />
            <span className="text-cyan-600 relative inline-block">
              {heroData.highlight}

              {/* underline */}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-cyan-500 rounded-full"></span>
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-4xl mx-auto mt-6 text-slate-600 text-base sm:text-lg leading-7">
            {heroData.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            {/* {heroData.buttons.map((btn, index) => ( */}
            <Link
              // key={index}
              href={"/dsa"}
              className={`px-6 py-3 rounded-xl font-semibold transition duration-300  bg-cyan-600 text-white hover:bg-cyan-700 flex gap-3`}
            >
              Get Free Marketing Audit <ArrowRight/>
            </Link>

            <Link
              // key={index}
              href={"/form"}
              className={`flex  gap-3 items-center px-6 py-3 rounded-xl font-semibold transition duration-300 border border-cyan-600 text-cyan-600 hover:bg-cyan-50
                
                }`}
            >
             <Play /> View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 max-w-2xl mx-auto">
            {heroData.stats.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-cyan-600">
                  {item.value}
                </h3>
                <p className="text-slate-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-cyan-900 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-white text-sm sm:text-base">
            ✔ {heroData.trustedText}
          </p>

          <span className="text-yellow-400 text-sm">⭐ 4.x (xxx Reviews)</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
