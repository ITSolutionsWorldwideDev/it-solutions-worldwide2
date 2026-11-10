"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface PortfolioContactSectionProps {
  locale?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  getInTouch?: string;
  getInTouchSubtext?: string;
  emailUs?: string;
  callUs?: string;
  visitUs?: string;
  followUs?: string;
  yourName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  company?: string;
  serviceInterested?: string;
  yourMessage?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  companyPlaceholder?: string;
  servicePlaceholder?: string;
  messagePlaceholder?: string;
  sendMessage?: string;
  sending?: string;
  successMsg?: string;
  errorMsg?: string;
}

export default function PortfolioContactSection({
  headerTitle = "Let's Connect",
  headerSubtitle = "Ready to transform your business? Get in touch with our experts today",
  getInTouch = "Get in Touch",
  getInTouchSubtext = "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  emailUs = "Email Us",
  callUs = "Call Us",
  visitUs = "Visit Us",
  followUs = "Follow Us",
  yourName = "Your Name",
  emailAddress = "Email Address",
  phoneNumber = "Phone Number",
  company = "Company",
  serviceInterested = "Service Interested In",
  yourMessage = "Your Message",
  namePlaceholder = "John Doe",
  emailPlaceholder = "john@example.com",
  phonePlaceholder = "+1 (555) 000-0000",
  companyPlaceholder = "Your Company",
  servicePlaceholder = "Select a service...",
  messagePlaceholder = "Tell us about your project...",
  sendMessage = "Send Message",
  sending = "Sending...",
  successMsg = "Thank you! Your message has been sent successfully. We'll be in touch soon.",
  errorMsg = "Failed to send message. Please try again or email us directly.",
}: PortfolioContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          subject: formData.service
            ? `Portfolio Enquiry: ${formData.service}`
            : "Portfolio Project Enquiry",
          message: formData.message,
          website: formData.website, // honeypot protection
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || errorMsg);
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        website: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || errorMsg);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#041418] py-16 sm:py-20 lg:py-28 text-white">
      {/* Ambient background glow matching Image 1 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_15%,rgba(0,168,150,0.18)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_15%_85%,rgba(0,168,150,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[44px] text-[#00A896]">
            {headerTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            {headerSubtitle}
          </p>
        </div>

        {/* Content Two-Column Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards + Socials + Map */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {getInTouch}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                {getInTouchSubtext}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Email Us */}
              <div className="rounded-2xl border border-white/10 bg-[#082025]/80 p-4 transition-all duration-300 hover:border-[#00A896]/40 hover:bg-[#0a272d]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A896]/15 text-[#00A896]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-gray-400 font-medium">
                      {emailUs}
                    </span>
                    <a
                      href="mailto:info@itsolutionsworldwide.com"
                      className="mt-0.5 block truncate text-xs sm:text-[13px] font-semibold text-white hover:text-[#00A896] transition-colors"
                    >
                      info@itsolutionsworldwide.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Call Us */}
              <div className="rounded-2xl border border-white/10 bg-[#082025]/80 p-4 transition-all duration-300 hover:border-[#00A896]/40 hover:bg-[#0a272d]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A896]/15 text-[#00A896]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-gray-400 font-medium">
                      {callUs}
                    </span>
                    <a
                      href="tel:+31107660786"
                      className="mt-0.5 block truncate text-xs sm:text-[13px] font-semibold text-white hover:text-[#00A896] transition-colors"
                    >
                      +31 10 766 0786
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us (Full Width Card) */}
            <div className="rounded-2xl border border-white/10 bg-[#082025]/80 p-4 transition-all duration-300 hover:border-[#00A896]/40 hover:bg-[#0a272d]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A896]/15 text-[#00A896]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-gray-400 font-medium">
                    {visitUs}
                  </span>
                  <span className="mt-0.5 block text-xs sm:text-[13px] font-semibold text-white">
                    Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-1">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                {followUs}
              </span>
              <div className="mt-3 flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/itsolutionsww"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-[#00A896] hover:bg-[#00A896] hover:text-white"
                >
                  <FaFacebookF className="h-4 w-4" />
                </Link>
                <Link
                  href="https://twitter.com/itsolutionsww"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-[#00A896] hover:bg-[#00A896] hover:text-white"
                >
                  <FaXTwitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/it-solutions-worldwide-bv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-[#00A896] hover:bg-[#00A896] hover:text-white"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/itsolutionsworldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-[#00A896] hover:bg-[#00A896] hover:text-white"
                >
                  <FaInstagram className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Rotterdam Map View */}
            <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#082025] shadow-lg">
              <iframe
                title="IT Solutions Worldwide Rotterdam Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.4664779419377!2d4.3753155!3d51.867517199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44b8a79991dfd%3A0xfeb452cbb689e588!2sIT%20Solutions%20Worldwide%20BV!5e1!3m2!1sen!2s!4v1782289665315!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#071d22]/90 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Honeypot field (hidden from users, catches spam bots) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-gray-300 mb-1.5"
                    >
                      {yourName} <span className="text-[#00A896]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-[#041417]/90 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-[#00A896] focus:outline-none focus:ring-1 focus:ring-[#00A896]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-300 mb-1.5"
                    >
                      {emailAddress} <span className="text-[#00A896]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-[#041417]/90 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-[#00A896] focus:outline-none focus:ring-1 focus:ring-[#00A896]"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-gray-300 mb-1.5"
                    >
                      {phoneNumber}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={phonePlaceholder}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-[#041417]/90 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-[#00A896] focus:outline-none focus:ring-1 focus:ring-[#00A896]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium text-gray-300 mb-1.5"
                    >
                      {company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={companyPlaceholder}
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/15 bg-[#041417]/90 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-[#00A896] focus:outline-none focus:ring-1 focus:ring-[#00A896]"
                    />
                  </div>
                </div>

                {/* Row 3: Service Interested In */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-medium text-gray-300 mb-1.5"
                  >
                    {serviceInterested}
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    placeholder={servicePlaceholder}
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-[#041417]/90 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-[#00A896] focus:outline-none focus:ring-1 focus:ring-[#00A896]"
                  />
                </div>

                {/* Row 4: Your Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-300 mb-1.5"
                  >
                    {yourMessage} <span className="text-[#00A896]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-[#041417]/90 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-[#00A896] focus:outline-none focus:ring-1 focus:ring-[#00A896] resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-3.5 text-xs sm:text-sm text-emerald-400">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{successMsg}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-rose-500/15 border border-rose-500/30 p-3.5 text-xs sm:text-sm text-rose-400">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{errorMessage || errorMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full cursor-pointer rounded-xl bg-[#00A896] hover:bg-[#008f80] py-3.5 px-6 font-semibold text-white shadow-lg shadow-[#00A896]/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{status === "submitting" ? sending : sendMessage}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

