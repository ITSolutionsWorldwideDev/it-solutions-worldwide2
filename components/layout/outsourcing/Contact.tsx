// app/contact/page.tsx

"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Backend ka raw error kabhi client pe show nahi karte — sirf
  // status code ke hisaab se generic safe message
  const messageForStatus = (status: number): string => {
    if (status === 400 || status === 422)
      return "Some details look incorrect. Please review the form and try again.";
    if (status === 429)
      return "Too many attempts. Please wait a few minutes and try again.";
    if (status >= 500)
      return "We couldn't send your message right now. Please try again later.";
    return "Something went wrong. Please try again.";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem("service") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    // Client-side validation
    if (formData.name.length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!EMAIL_RE.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (formData.phone && !PHONE_RE.test(formData.phone)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    if (formData.message.length < 10) {
      setErrorMessage("Please tell us a little more about your project (at least 10 characters).");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");
    setSuccess(false);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      // Body empty/invalid ho to bhi crash na ho
      let data: { success?: boolean } | null = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        setErrorMessage(messageForStatus(response.status));
        return;
      }

      if (data && data.success === false) {
        setErrorMessage("Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Contact form error:", error);
      }
      if (error instanceof DOMException && error.name === "AbortError") {
        setErrorMessage("The request timed out. Please try again.");
      } else {
        setErrorMessage(
          "We couldn't reach the server. Please check your connection and try again."
        );
      }
    } finally {
      clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  const clearFeedback = () => {
    if (errorMessage) setErrorMessage("");
    if (success) setSuccess(false);
  };

  const inputClass =
    "w-full h-12 rounded-xl bg-[#00171b] border border-white/5 px-4 text-white outline-none focus:border-cyan-400 disabled:opacity-60";

  return (
    <section className="w-full min-h-screen bg-linear-to-br from-[#002025] via-[#002A30] to-[#00373F] flex items-center justify-center px-4 py-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-0 right-0"></div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Let&apos;s <span className="text-[#22A3AD]">Connect</span>
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Ready to transform your business? Get in touch with our experts
            today
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>

            <p className="text-gray-300 leading-7 mb-8 max-w-xl">
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div className="bg-[#03272d] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Mail className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <h4 className="text-white font-semibold">
                    info@itsolutionsworldwide.com
                  </h4>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#03272d] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Phone className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <h4 className="text-white font-semibold">+31 10 766 0786</h4>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#03272d] border border-white/5 rounded-2xl p-5 flex items-center gap-4 mt-5">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <MapPin className="text-cyan-400" size={24} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Visit Us</p>
                <h4 className="text-white font-semibold">
                  Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam,
                  Netherlands
                </h4>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>

              <div className="flex items-center gap-4">
                {[
                  <Facebook key="fb" size={18} />,
                  <Twitter key="tw" size={18} />,
                  <Linkedin key="li" size={18} />,
                  <Instagram key="ig" size={18} />,
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-xl bg-[#03272d] border border-white/5 flex items-center justify-center text-white hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-3xl overflow-hidden border border-white/5">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=Rotterdam&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#03272d]/90 border border-white/5 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Feedback */}
              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200"
                >
                  Message sent successfully. We&apos;ll get back to you soon.
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                >
                  {errorMessage}
                </div>
              )}

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    disabled={submitting}
                    onChange={clearFeedback}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={150}
                    autoComplete="email"
                    disabled={submitting}
                    onChange={clearFeedback}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    maxLength={20}
                    autoComplete="tel"
                    disabled={submitting}
                    onChange={clearFeedback}
                    placeholder="+31 xx xxx-xxxx"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-white text-sm mb-2 block">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    maxLength={100}
                    autoComplete="organization"
                    disabled={submitting}
                    onChange={clearFeedback}
                    placeholder="Your Company"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-white text-sm mb-2 block">
                  Service Interested In
                </label>

                <input
                  type="text"
                  name="service"
                  maxLength={120}
                  disabled={submitting}
                  onChange={clearFeedback}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-white text-sm mb-2 block">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  maxLength={2000}
                  disabled={submitting}
                  onChange={clearFeedback}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl bg-[#00171b] border border-white/5 px-4 py-4 text-white outline-none resize-none focus:border-cyan-400 disabled:opacity-60"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-14 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Send Message"}
                {!submitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}