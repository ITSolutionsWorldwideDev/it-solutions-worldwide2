// components/layout/contact-page-section-2.client.tsx

"use client";
import {
  Mail,
  Phone,
  MapPinHouse,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic"; // 1. Import dynamic from next

// 2. Load ReCAPTCHA dynamically with SSR disabled to prevent client-side exception
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  translations: Record<string, string>;
  variant?: "contact" | "about";
  faqs?: FAQItem[];
};

export default function ContactCardClient2({
  translations,
  variant = "contact",
  faqs = [],
}: Props) {
  const t = translations;
  const router = useRouter();

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    acceptedTerms: false,
    captchaToken: "",
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => router.push("/"), 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal, router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setFormData((prev) => ({ ...prev, captchaToken: token || "" }));
    setErrors((prev) => ({ ...prev, captcha: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.acceptedTerms) newErrors.acceptedTerms = "You must accept terms";
    
    if (!formData.captchaToken) {
      newErrors.captcha = "Please complete the CAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setShowModal(true);

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        acceptedTerms: false,
        captchaToken: "",
      });
    } catch (error: any) {
      alert(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-3">Thank You 🎉</h2>
            <p>Your message has been sent!</p>
            <p className="text-sm text-gray-500 mt-2">
              Redirecting to Home page...
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => router.push("/")}
            >
              Go Now
            </button>
          </div>
        </div>
      )}

      <section className="container mx-auto ">
        <div className="mx-auto overflow-hidden rounded-[32px] bg-gradient-to-r from-[#18626c] to-[#2fbfd2] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-8 text-white sm:p-12 lg:p-16">
              {variant === "contact" ? (
                <>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    {t.contactheading}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                    {t.contactdesc}
                  </p>

                  {/* Contact Info */}
                  <div className="mt-12 space-y-8">
                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#236B7A] transition">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm">{t.contactephone}</p>
                        <p className="font-medium">
                          <Link
                            href="https://wa.me/+31107660786"
                            target="_blank"
                            rel="noreferrer"
                          >
                            +31 10 766 0786
                          </Link>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#236B7A] transition">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm">{t.contactemail}</p>
                        <p className="font-medium break-all">
                          <Link
                            href="mailto:info@itsolutionsworldwide.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            info@itsolutionsworldwide.com
                          </Link>
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#29A1B6] p-3 rounded-full hover:bg-[#236B7A] transition">
                        <MapPinHouse className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm">{t.contactaddress}</p>
                        <p className="font-medium break-all">
                          Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Netherlands
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="mt-14">
                    <p className="mb-5 text-lg font-medium">{t.contactconnect}</p>

                    <div className="flex gap-4">
                      {[
                        {
                          href: "https://www.facebook.com/itsolutionsww/",
                          Icon: Facebook,
                          label: "Facebook",
                        },
                        {
                          href: "https://nl.linkedin.com/company/it-solutions-worldwide-bv",
                          Icon: Linkedin,
                          label: "LinkedIn",
                        },
                        {
                          href: "https://www.instagram.com/itsolutionsworldwide/",
                          Icon: Instagram,
                          label: "Instagram",
                        },
                      ].map(({ href, Icon, label }, index) => (
                        <Link
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                        >
                          <button
                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition hover:bg-white/20"
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    FAQ
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                    {t.faqdesc}
                  </p>

                  <dl className="mt-10 space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-white/30 last:border-b-0"
                      >
                        <dt>
                          <button
                            type="button"
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full py-4 text-left focus:outline-none cursor-pointer"
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-${index}`}
                          >
                            <span className="font-medium">{faq.question}</span>
                            <span className="text-xl">
                              {activeIndex === index ? "–" : "+"}
                            </span>
                          </button>
                        </dt>
                        <dd
                          id={`faq-${index}`}
                          hidden={activeIndex !== index}
                          className="py-2 text-white/90"
                        >
                          {faq.answer}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}
            </div>

            {/* RIGHT SIDE — form */}
            <div className="bg-white p-8 sm:p-12 lg:p-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-semibold text-gray-900">
                  {t.contactform}
                </h2>

                <p className="mt-4 text-lg text-gray-600">
                  {t.contactformdesc}
                </p>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  {/* Row 1 */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField
                      label={t.contactformfullname}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      error={errors.name}
                      required
                    />

                    <InputField
                      label={t.contactformcompanyname}
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      error={errors.company}
                      required
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField
                      label={t.contactformphoneno}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      error={errors.phone}
                      required
                    />

                    <InputField
                      label={t.contactformemail}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      error={errors.email}
                      required
                    />
                  </div>

                  {/* Select */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {t.contactformservice} <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-4 text-gray-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                    >
                      <option value="">Select Service</option>
                      <option>Software Development</option>
                      <option>Virtual Assistant</option>
                      <option>Customer Support</option>
                      <option>Social Media Management</option>
                    </select>

                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      {t.contactformmsg}
                      <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                    />

                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Google reCAPTCHA v2 Component Integration */}
                  {/* Google reCAPTCHA v2 Component Integration */}
<div>
  {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      onChange={handleCaptchaChange}
    />
  ) : (
    <p className="text-sm text-red-500">
      CAPTCHA is not configured. Please contact site admin.
    </p>
  )}
  {errors.captcha && (
    <p className="mt-1 text-sm text-red-500">{errors.captcha}</p>
  )}
</div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acceptedTerms"
                      checked={formData.acceptedTerms}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600"
                    />

                    <div className="text-sm leading-6 text-gray-500">
                      By submitting, you consent to being contacted about our
                      products per our{" "}
                      <span className="cursor-pointer text-teal-700 underline">
                        Privacy Policy
                      </span>{" "}
                      &{" "}
                      <span className="cursor-pointer text-teal-700 underline">
                        Terms
                      </span>
                      {errors.acceptedTerms && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.acceptedTerms}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-2xl bg-gradient-to-r from-[#156f76] to-[#194b5a] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Submitting..." : "Request Consultation"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable Input Component */

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function InputField({
  label,
  error,
  className = "",
  required,
  ...props
}: InputFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        {...props}
        required={required}
        className={`
          w-full rounded-xl border px-4 py-4 text-gray-700 outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-red-200 focus:border-red-500"
              : "border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          }
          ${className}
        `}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}