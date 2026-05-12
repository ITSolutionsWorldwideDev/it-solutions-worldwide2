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

type Props = {
  translations: Record<string, string>;
};

const contactInfo = [
  {
    title: "Call Us",
    value: "+31 10 766 0786",
    icon: <Phone className="h-6 w-6" />,
    // "/icons/phone.svg",
  },
  {
    title: "Email Us",
    value: "info@itsolutionsworldwide.com",
    icon: <Mail className="h-6 w-6" />,
    // "/icons/mail.svg",
  },
  {
    title: "Visit Us",
    value: "Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Netherlands",
    icon: <Phone className="h-6 w-6" />,
    // "/icons/location.svg",
  },
];

/* const socialIcons = [
  <Facebook className="h-6 w-6" />,
  <Twitter className="h-6 w-6" />,
  <Linkedin className="h-6 w-6" />,
]; */

// const socialIcons = [
//   "/icons/facebook.svg",
//   "/icons/twitter.svg",
//   "/icons/linkedin.svg",
// ];

export default function ContactCardClient2({ translations }: Props) {
  const t = translations;

  const router = useRouter();

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [showModal, setShowModal] = useState(false);

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    acceptedTerms: false,
  });

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = "You must accept terms";
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
        {/* px-4 py-10 sm:px-6 lg:px-8  */}
        <div className="mx-auto overflow-hidden rounded-[32px] bg-gradient-to-r from-[#18626c] to-[#2fbfd2] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-8 text-white sm:p-12 lg:p-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {t.contactheading}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">                
                {t.contactdesc}
              </p>

              {/* Contact Info */}
              <div className="mt-12 space-y-8">
                {/* {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-sm text-white/70">{item.title}</p>

                      <h3 className="mt-1 text-lg font-semibold sm:text-xl">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                ))} */}

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
                    // {
                    //   href: "https://twitter.com/ITSolutionsBV",
                    //   Icon: Twitter,
                    //   label: "Twitter",
                    // },
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
                      className=""
                    >
                      {/* <Icon className="h-5 w-5 text-white" /> */}
                      <button
                        key={index}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition hover:bg-white/20"
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </button>
                    </Link>
                  ))}

                  {/* {socialIcons.map((icon, index) => (
                    <button
                      key={index}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition hover:bg-white/20"
                    >
                      <Image src={icon} alt="social" width={24} height={24} />
                    </button>
                  ))} */}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white p-8 sm:p-12 lg:p-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-semibold text-gray-900">
                  {t.contactform}
                </h2>

                <p className="mt-4 text-lg text-gray-600">
                  {/* Fill out the form to hire your virtual assistant */}
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
                    </label>{/* Service Required */}

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
                      {/* Message / Requirement Details{" "} */}
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

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acceptedTerms"
                      checked={formData.acceptedTerms}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600"
                    />

                    <p className="text-sm leading-6 text-gray-500">
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
                    </p>
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

/* type InputFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

function InputField({ label, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-4 text-gray-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
      />
    </div>
  );
} */

/* 
  <InputField
                      label={t.name}
                      placeholder={`Enter your ${t.name}`}
                    />

                    <InputField
                      label="Company name"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <InputField
                      label="Phone number"
                      placeholder="+31 123456789"
                    />

  <InputField
                      label="Email address"
                      placeholder="Enter your email"
                      type="email"
                    />



                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Service Required <span className="text-red-500">*</span>
                    </label>

                    <select className="w-full rounded-xl border border-gray-300 px-4 py-4 text-gray-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100">
                      <option>Software Development</option>
                      <option>Virtual Assistant</option>
                      <option>Customer Support</option>
                      <option>Social Media Management</option>
                    </select>
                  </div>

       
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Message / Requirement Details
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full rounded-xl border border-gray-300 px-4 py-4 text-gray-700 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>


                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600"
                    />

                    <p className="text-sm leading-6 text-gray-500">
                      By submitting, you consent to being contacted about our
                      products per our{" "}
                      <span className="cursor-pointer text-teal-700 underline">
                        Privacy Policy
                      </span>{" "}
                      &{" "}
                      <span className="cursor-pointer text-teal-700 underline">
                        Terms
                      </span>
                      .
                    </p>
                  </div>

                  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");

      setShowModal(true);
      setStatus("success");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setResponseMessage(err.message);
    } finally {
      setSending(false);
    }
  };

  */
