"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
const ConsultationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    companyEmail: "",
    phone: "",
    kvk: "",
    hoursPerWeek: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/consultation-form", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        alert("Form submitted successfully!");
        setForm({
          fullName: "",
          companyEmail: "",
          phone: "",
          kvk: "",
          hoursPerWeek: "",
          service: "",
        });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  //   alert("Form submitted! We'll contact you shortly.");

  console.log(form);
  return (
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
          <option value="admin">Virtual Assistant</option>
          <option value="marketing"> Full Stack Developer</option>
          <option value="customer"> Data Engineer</option>
          <option value="data">Ecommerce Assistant</option>
          <option value="research">Electrical Engineer</option>
          <option value="research">AI Engineer</option>
        </select>
      </div>

      {/* Submit */}

      <button
        onClick={handleSubmit}
        className="w-full bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md"
        type="submit"
      >
        Book a Free Consultation
      </button>

      <p className="text-xs text-slate-400 text-center">
        By submitting, you consent to being contacted about our products per our{" "}
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
  );
};

export default ConsultationForm;
