"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBolt } from "react-icons/hi2";
import { ArrowRight } from "lucide-react";
import { Users } from "lucide-react";
import { Clock } from "lucide-react";
import { Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HiringHeader() {
  const [form, setForm] = useState({
    fullName: "",
    companyEmail: "",
    phone: "",
    kvk: "",
    hoursPerWeek: "",
    service: "",
  });

  console.log(form);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Form submitted! We'll contact you shortly.");
  };

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
          <div className="w-full lg:w-[420px] bg-white rounded-2xl shadow-xl p-8 space-y-5 border border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get Started</h2>
              <p className="text-slate-500 text-sm mt-1">
                Fill out the form to hire your virtual assistant
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              {/* Company Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">
                  Company email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={form.companyEmail}
                  onChange={handleChange}
                  placeholder="Enter your company email"
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+31 123456890"
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              {/* KVK */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">
                  KVK <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="kvk"
                  value={form.kvk}
                  onChange={handleChange}
                  placeholder="KVK number"
                  className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Hours per week */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700">
                How many hours per week do you need?
              </label>
              <input
                type="number"
                name="hoursPerWeek"
                value={form.hoursPerWeek}
                onChange={handleChange}
                placeholder="e.g. 20"
                min={1}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Choose Service */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-700">
                Choose Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
              >
                <option value="">Select a service</option>
                <option value="admin">Administrative Support</option>
                <option value="marketing">Digital Marketing</option>
                <option value="customer">Customer Service</option>
                <option value="data">Data Entry</option>
                <option value="research">Research & Analysis</option>
              </select>
            </div>

            {/* Submit */}

            <button
              onClick={handleSubmit}
              className="w-full bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md"
            >
              Book a Free Consultation
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting, you consent to being contacted about our products
              per our{" "}
              <Link
                href="/privacy-policy"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Privacy Policy
              </Link>{" "}
              &amp;{" "}
              <Link
                href="/terms-and-conditions"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Terms
              </Link>
              .
            </p>
          </div>
        </main>

        {/* WhatsApp Float Button */}
        <Link
          href="https://wa.me/31107660786"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-white border border-slate-200 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-xl transition-shadow duration-200"
        >
          <div className="bg-green-500 p-2 rounded-lg">
            <FaWhatsapp className="text-white" size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Direct Chat</p>
            <p className="text-xs text-slate-500">Contact us on WhatsApp</p>
          </div>
        </Link>
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
