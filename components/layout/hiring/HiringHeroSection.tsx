"use client";

import { Users } from "lucide-react";

import React, { ReactNode } from "react";
import { Clock } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Bookmark } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Mail } from "lucide-react";
import { Calendar } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { ChartColumnDecreasing } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Link from "next/link";


type Props = {
  slug: string;
};
// ── Types ────────────────────────────────────────────────────────────────────
interface Feature {
  icon: ReactNode;
  label: string;
  bg: string;
}

interface Service {
  icon: ReactNode;
  title: string;
  bg: string;
  items: string[];
}

// ── Data ─────────────────────────────────────────────────────────────────────
// const features: Feature[] = [
//   { icon: <Users />, label: "Dedicated Virtual Assistants", bg: "bg-blue-500" },
//   { icon: <Clock />, label: "Start in 48 Hours", bg: "bg-green-500" },
//   { icon: <DollarSign />, label: "Save up to 60%", bg: "bg-emerald-500" },
//   { icon: <Bookmark />, label: "Fully Managed Support", bg: "bg-purple-500" },
//   {
//     icon: <TrendingUp />,
//     label: "Flexible Monthly Plans",
//     bg: "bg-orange-500",
//   },
// ];

// const services: Service[] = [
//   {
//     icon: <Mail />,
//     title: "Administrative Support",
//     bg: "bg-blue-500",
//     items: [
//       "Inbox management",
//       "Data entry",
//       "File organization",
//       "Document formatting",
//     ],
//   },
//   {
//     icon: <Calendar />,
//     title: "Calendar & Scheduling",
//     bg: "bg-purple-500",
//     items: [
//       "Appointment booking",
//       "Meeting coordination",
//       "Reminders and follow-ups",
//       "Calendar management",
//     ],
//   },
//   {
//     icon: <MessageSquare />,
//     title: "Customer Support",
//     bg: "bg-green-500",
//     items: [
//       "Live chat support",
//       "Email support",
//       "CRM updates",
//       "Client communication",
//     ],
//   },
//   {
//     icon: <ChartColumnDecreasing />,
//     title: "Marketing Support",
//     bg: "bg-orange-500",
//     items: [
//       "Social media scheduling",
//       "Lead research",
//       "Competitor research",
//       "Basic reporting",
//     ],
//   },
//   {
//     icon: <ShoppingCart />,
//     title: "Ecommerce Support",
//     bg: "bg-pink-500",
//     items: [
//       "Product uploads",
//       "Order processing",
//       "Inventory updates",
//       "Customer replies",
//     ],
//   },
//   {
//     icon: <User />,
//     title: "Personal Assistance",
//     bg: "bg-violet-500",
//     items: [
//       "Travel booking",
//       "Personal scheduling",
//       "Online research",
//       "Lifestyle admin tasks",
//     ],
//   },
// ];

// const service='vu'

const trust='Hire Virtual Assistants in the Netherlands Trusted by Businesses Looking to Scale Faster'
const help='What Your Virtual Assistant Can Help With'
const dedication='Our dedicated virtual assistants are trained professionals who can support your business or personal workload immediately.'
// ── Main Page Component ───────────────────────────────────────────────────────
export default function HiringHeroSection({services,features,service}:any) {
  return (
    <main className=" font-sans">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-12 px-4">
        <div className="mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Hire {service} in the Netherlands Trusted by Businesses Looking to Scale Faster
          </h1>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-10">
            {features.map((f:any) => (
              <FeatureCard key={f.label} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              'What Your {service} Can Help With'
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Our dedicated {service} are trained professionals who can support your business or personal workload immediately.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s:any) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center ">
        <Link href={"/contact-us"}>
          <button
            className="
          bg-teal-700
          hover:bg-teal-800
          text-white
          font-semibold
          text-lg
          px-10
          py-4
          rounded-xl
          transition-colors
          duration-200
          cursor-pointer
        "
          >
            Tell Us What You Need →
          </button>
        </Link>
      </div>
    </main>
  );
}


// ── Sub-components ────────────────────────────────────────────────────────────
function FeatureCard({ icon, label, bg }: Feature) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-[120px]">
      <div
        className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl`}
      >
        {icon}
      </div>
      <span className="text-xs text-gray-600 text-center font-medium leading-snug">
        {label}
      </span>
    </div>
  );
}


function ServiceCard({ icon, title, bg, items }: Service) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`${bg} w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg shrink-0`}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
      </div>
      {/* Items */}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CircleCheck className="text-[#156F76]" />
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}