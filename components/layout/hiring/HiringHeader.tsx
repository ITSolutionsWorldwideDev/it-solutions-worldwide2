"use client";
import Link from "next/link";
import { useState } from "react";
import { HiBolt } from "react-icons/hi2";
import { ArrowRight } from "lucide-react";
import { Users } from "lucide-react";
import { Clock } from "lucide-react";
import { Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ConsultationForm from "./ConsultationForm";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";

type Props = {
  slug: string;
};

export default function HiringHeader({ slug }: Props) {
  return (
    <div className="bg-linear-to-br from-[#FFFFFF] via-[#F9FAFB] to-[#156F76]">
      <div className="container mx-auto  font-sans">
        {/* Top Banner */}
        {/* Hero Section */}
        <main className=" px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#156F761A] border  text-teal-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
              <HiBolt className="" />
              Start in 48 Hours • Save up to 60%
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Hire a Dedicated
              <br />
              Virtual Assistant
              <br />
              in <span className="text-teal-600">Netherlands</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
              Stop spending valuable time on repetitive tasks. Get a
              professional virtual assistant and focus on what truly matters —
              growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/31107660786" className="">
                <button className="bg-teal-800 hover:bg-teal-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md">
                  Book Free Consultation
                  <ArrowRight />
                </button>
              </Link>

              <button
                className="border-2 border-teal-800 text-teal-800 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("pricing");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Pricing Today
              </button>
            </div>

            {/* Stats */}
            <div className="flex  gap-10 pt-4">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-teal-700">
                  <Users />
                </div>
                <span className="text-2xl font-bold text-slate-900">500+</span>
                <span className="text-sm text-slate-500">Dedicated VAs</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-teal-700">
                  <Clock />
                </div>
                <span className="text-2xl font-bold text-slate-900">48hrs</span>
                <span className="text-sm text-slate-500">Start Time</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-teal-700">
                  <Award />
                </div>
                <span className="text-2xl font-bold text-slate-900">60%</span>
                <span className="text-sm text-slate-500">Cost Savings</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <ConsultationForm />
        </main>

        {/* WhatsApp Float Button */}
        <WhatsAppBtn />
        <div className="bg-teal-800 text-white text-sm text-center py-5 px-4">
          ✓ Trusted by 500+ Businesses Looking to Scale Faster Across
          Netherlands &nbsp;
          <span className="text-yellow-400">★ 4.8</span>{" "}
          <span className="text-teal-300">(709 Reviews)</span>
        </div>
      </div>
    </div>
  );
}
