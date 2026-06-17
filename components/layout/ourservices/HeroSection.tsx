"use client";

import Image from "next/image";
import {
  Database,
  Timer,
  BadgeDollarSign,
  Shield,
  ClipboardList,
} from "lucide-react";

const features = [
  {
    icon: <Database size={28} />,
    title: "Dedicated Data Engineers",
    bg: "bg-cyan-100",
  },
  {
    icon: <Timer size={28} />,
    title: "Start in Days, Not Months",
    bg: "bg-orange-100",
  },
  {
    icon: <BadgeDollarSign size={28} />,
    title: "Save up to 60% on Hiring Costs",
    bg: "bg-green-100",
  },
  {
    icon: <Shield size={28} />,
    title: "Fully Managed Support",
    bg: "bg-pink-100",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Flexible Monthly Plans",
    bg: "bg-blue-100",
  },
];

const challenges = [
  "No centralized data pipeline - data sits in silos across different tools and platforms",
  "Inconsistent or unreliable reporting - teams make decisions based on inaccurate numbers",
  "No real-time analytics capability - you are always looking at yesterday’s data",
  "High cost of senior local data engineers - salaries in the Netherlands are among the highest in Europe",
  "Slow internal hiring cycles - finding the right engineer takes months, not weeks",
  "Data scattered across tools and platforms - no single source of truth for your business",
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f5f7f8]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#111827] leading-tight max-w-5xl mx-auto">
          Hire a Data Engineer in the Netherlands Trusted by Data-Driven
          Businesses Looking to Scale Faster
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-14">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl shadow-md flex items-center justify-center text-cyan-700 ${item.bg}`}
              >
                {item.icon}
              </div>

              <p className="mt-4 text-sm md:text-base font-medium text-gray-700 max-w-[140px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#dfecee] py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
              Is Messy or Unusable Data Slowing Your Business Down?
            </h2>

            <p className="mt-6 text-gray-700 leading-7">
              Many growing companies in the Netherlands reach a point where
              spreadsheets do not scale, reports take too long, and
              decision-making suffers because the data infrastructure is broken
              or missing entirely.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-[#111827]">
              Common challenges businesses face:
            </h3>

            <ul className="mt-6 space-y-4">
              {challenges.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-red-500 font-bold mt-1">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-semibold text-[#111827] leading-8">
              That is why businesses choose to hire data engineers through IT
              Solutions Worldwide. You get experienced, dedicated talent without
              the overhead, delay, or recruitment cost.
            </p>

            <button className="mt-8 bg-cyan-700 hover:bg-cyan-800 transition text-white px-7 py-4 rounded-xl font-medium">
              Hire a Data Engineer Today →
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/data-engineer.webp"
                alt="Data Engineer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
