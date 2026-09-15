// components/layout/career-open-application.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import {
  FiClock,
  FiUsers,
  FiAward,
  FiCoffee,
  FiGlobe,
  FiStar,
  FiBookOpen,
  FiSend,
  FiUpload,
  FiX,
  FiFile,
  FiLock,
} from "react-icons/fi";

interface CareerOpenApplicationProps {
  // Pass this when the component is rendered on a specific job's page
  // (e.g. "Warehouse Planner"). When present, the expertise field is
  // locked to this value instead of showing the dropdown.
  jobTitle?: string;
}

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_RESUME_EXT = [".pdf", ".doc", ".docx"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

export default function CareerOpenApplication({ jobTitle }: CareerOpenApplicationProps) {
  const isJobLocked = !!jobTitle;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: jobTitle ?? "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const resumeInputRef = useRef<HTMLInputElement>(null);

  // Keep expertise in sync if jobTitle prop changes (e.g. navigating
  // between different job pages without a full remount)
  useEffect(() => {
    if (jobTitle) {
      setFormData((prev) => ({ ...prev, expertise: jobTitle }));
    }
  }, [jobTitle]);

  const updateField = (field: keyof typeof formData, value: string) => {
    if (errorMessage) setErrorMessage("");
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    const typeOk =
      ALLOWED_RESUME_TYPES.includes(file.type) || ALLOWED_RESUME_EXT.includes(ext);

    if (!typeOk) {
      setErrorMessage("Please upload a PDF, DOC or DOCX file.");
      e.target.value = "";
      setResume(null);
      return;
    }

    if (file.size > MAX_RESUME_BYTES) {
      setErrorMessage("File is too large. Maximum allowed size is 5 MB.");
      e.target.value = "";
      setResume(null);
      return;
    }

    setErrorMessage("");
    setResume(file);
  };

  const removeResume = () => {
    setResume(null);
    setErrorMessage("");
    if (resumeInputRef.current) resumeInputRef.current.value = "";
  };

  // Client-side validation — returns an error string or null
  const validate = (): string | null => {
    const name = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (name.length < 2) return "Please enter your full name.";
    if (!EMAIL_RE.test(email)) return "Please enter a valid email address.";
    if (!PHONE_RE.test(phone)) return "Please enter a valid phone number.";
    if (!formData.expertise) return "Please select your area of expertise.";
    if (message.length < 10)
      return "Please tell us a little more about yourself (at least 10 characters).";
    if (!resume) return "Please upload your resume/CV to continue.";
    return null;
  };

  // Map HTTP status to a safe, generic message — backend ka raw error
  // kabhi bhi client pe show nahi karte (info leakage)
  const messageForStatus = (status: number): string => {
    if (status === 400 || status === 422)
      return "Some details look incorrect. Please review the form and try again.";
    if (status === 413) return "Your file is too large. Please upload a smaller file.";
    if (status === 429)
      return "Too many attempts. Please wait a few minutes and try again.";
    if (status >= 500)
      return "We couldn't submit your application right now. Please try again later.";
    return "Something went wrong. Please try again.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const payload = new FormData();
      payload.append("name", formData.fullName.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      // Always send the resolved expertise value — locked (jobTitle) or
      // user-selected (dropdown) — mail ke andar yehi jayega
      payload.append("expertise", formData.expertise);
      payload.append("message", formData.message.trim());
      payload.append("resume", resume as File);

      // Optional: lets the backend distinguish a job-page application
      // from a generic open application, useful for mail subject/tagging
      if (isJobLocked) {
        payload.append("source", "job-page");
        payload.append("jobTitle", jobTitle as string);
      } else {
        payload.append("source", "open-application");
      }

      const response = await fetch("/api/career-application", {
        method: "POST",
        body: payload,
        signal: controller.signal,
      });

      // Body invalid/empty ho to bhi crash na ho
      let result: { success?: boolean } | null = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        setErrorMessage(messageForStatus(response.status));
        return;
      }

      if (result && result.success === false) {
        setErrorMessage("Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        expertise: jobTitle ?? "",
        message: "",
      });
      setResume(null);
      if (resumeInputRef.current) resumeInputRef.current.value = "";
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Submission error:", err);
      }
      if (err instanceof DOMException && err.name === "AbortError") {
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

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">

        {/* MAIN CONTAINER CARD */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

          {/* LEFT DARK PANEL */}
          <div className="lg:col-span-5 bg-[#06282C] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 bg-white/10 border border-white/10 text-[#5CD2C8] rounded-full mb-6">
                {isJobLocked ? "JOB APPLICATION" : "OPEN APPLICATION"}
              </span>

              {isJobLocked ? (
                <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight leading-[1.15] mb-4">
                  Apply for <br />{jobTitle}
                </h2>
              ) : (
                <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight leading-[1.15] mb-4">
                  Don&apos;t see your <br />perfect role?
                </h2>
              )}

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8">
                {isJobLocked
                  ? `Tell us a bit about yourself and we'll review your profile for the ${jobTitle} position.`
                  : "We hire for talent, not just open headcount. Send us your profile and tell us what you would like to build — we will reach out when the right opportunity opens."}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <FiClock className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">We respond within 5 business days</p>
              </div>
              <div className="flex items-center gap-3">
                <FiUsers className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">Your profile stays active for 6 months</p>
              </div>
              <div className="flex items-center gap-3">
                <FiAward className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">Referral bonus available for successful hires</p>
              </div>
              <div className="flex items-center gap-3">
                <FiCoffee className="w-4 h-4 text-[#5CD2C8] shrink-0" />
                <p className="text-xs text-gray-200">Intro call is always relaxed, no prep needed</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#06282C]">
                {isJobLocked ? "Send your application" : "Send your profile"}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Takes less than 2 minutes.
              </p>
            </div>

            {success ? (
              <div className="bg-teal-50 border border-teal-200 text-teal-800 p-6 rounded-2xl text-center">
                <h4 className="font-bold text-base mb-1">Application Submitted!</h4>
                <p className="text-xs">Thank you for reaching out. We will get back to you soon.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-xs font-semibold underline text-teal-700 cursor-pointer"
                >
                  Send another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {errorMessage && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      disabled={submitting}
                      placeholder="Alexandra Kim"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      disabled={submitting}
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      autoComplete="tel"
                      disabled={submitting}
                      placeholder="+31 6 1234 5678"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Area of Expertise
                    </label>

                    {isJobLocked ? (
                      // Locked view — job page se aaya hai, dropdown ki
                      // zaroorat nahi, value fix hai aur formData mein
                      // already set hai (upar useState + useEffect se)
                      <div className="flex items-center justify-between w-full px-4 py-3 bg-[#EEF8F7] border border-[#2B8A99]/30 rounded-xl text-xs sm:text-sm text-[#06282C] font-semibold">
                        <span className="truncate">{jobTitle}</span>
                        <FiLock className="w-3.5 h-3.5 text-[#2B8A99] shrink-0 ml-2" />
                      </div>
                    ) : (
                      <select
                        required
                        disabled={submitting}
                        value={formData.expertise}
                        onChange={(e) => updateField("expertise", e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition disabled:opacity-60"
                      >
                        <option value="" disabled>Select your field...</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Sales">Sales</option>
                        <option value="Operations">Operations</option>
                        <option value="Support">Support</option>
                      </select>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    rows={4}
                    required
                    maxLength={2000}
                    disabled={submitting}
                    placeholder="Briefly describe your experience, what kind of role you're looking for, and what excites you about IT Solutions Worldwide..."
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B8A99]/20 focus:border-[#2B8A99] transition resize-none disabled:opacity-60"
                  />
                </div>

                {/* RESUME UPLOAD — mandatory, PDF/DOC/DOCX, max 5 MB */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    CV / Resume <span className="normal-case font-normal text-red-500">*required</span>
                  </label>

                  {!resume ? (
                    <label className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-[#FAFAFA] border border-dashed border-gray-300 rounded-xl text-xs sm:text-sm text-gray-500 cursor-pointer hover:border-[#2B8A99] hover:text-[#2B8A99] transition">
                      <FiUpload className="w-4 h-4" />
                      <span>Click to upload your resume (PDF, DOC, DOCX — max 5 MB)</span>
                      <input
                        ref={resumeInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        disabled={submitting}
                        onChange={handleResumeChange}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between w-full px-4 py-3 bg-[#FAFAFA] border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-700">
                      <div className="flex items-center gap-2 truncate">
                        <FiFile className="w-4 h-4 text-[#2B8A99] shrink-0" />
                        <span className="truncate">{resume.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeResume}
                        disabled={submitting}
                        aria-label="Remove resume"
                        className="text-gray-400 hover:text-red-500 transition shrink-0 ml-2 cursor-pointer disabled:opacity-50"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 bg-[#2B8A99] hover:bg-[#237380] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? "Submitting..." : "Submit Application"}</span>
                  {!submitting && <FiSend className="w-4 h-4" />}
                </button>

                <p className="text-[11px] text-center text-gray-400 mt-2">
                  We respect your privacy. Your info is never sold or shared.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM STATS ROW */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm">
            <FiGlobe className="h-5 w-5 shrink-0 text-[#2B8A99]" />
            <span className="text-xs font-semibold text-gray-800">Netherlands</span>
          </div>

          <div className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm">
            <FiUsers className="h-5 w-5 shrink-0 text-[#2B8A99]" />
            <span className="text-xs font-semibold text-gray-800">40+ Employees</span>
          </div>

          <div className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-gray-200/70 bg-white p-4 shadow-sm">
            <FiBookOpen className="h-5 w-5 shrink-0 text-[#2B8A99]" />
            <span className="text-xs font-semibold text-gray-800">Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}