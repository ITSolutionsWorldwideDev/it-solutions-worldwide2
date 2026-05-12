// components/layout/hiring/ConsultationForm.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const ConsultationForm = ({
  slug,
  consultation_form,
}: {
  slug: string;
  consultation_form: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const params = useParams();
  const router = useRouter();

  const locale = (params.locale as string) || "en";

  const formLabels = consultation_form;

  const [form, setForm] = useState({
    fullName: "",
    companyEmail: "",
    phone: "",
    kvk: "",
    hoursPerWeek: "",
    service: slug || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* =========================
     VALIDATION
  ========================== */

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full Name
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email
    if (!form.companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.companyEmail)
    ) {
      newErrors.companyEmail = "Please enter a valid email address";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length < 7) {
      newErrors.phone = "Phone number is invalid";
    }

    // Hours
    if (!form.hoursPerWeek) {
      newErrors.hoursPerWeek = "Hours per week is required";
    } else if (Number(form.hoursPerWeek) <= 0) {
      newErrors.hoursPerWeek = "Hours must be greater than 0";
    }

    // Service
    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/consultation-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit form");
      }

      // Reset Form
      setForm({
        fullName: "",
        companyEmail: "",
        phone: "",
        kvk: "",
        hoursPerWeek: "",
        service: slug || "",
      });

      router.push(`/${locale}/thank-you?service=${encodeURIComponent(slug)}`);
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  bg-white rounded-2xl shadow-xl p-8 space-y-5 border border-slate-100">
      <div>
        <p className="text-2xl font-bold text-slate-900">{formLabels.title}{/* Get Started */}</p>
        <p className="text-slate-500 text-sm mt-1">{formLabels.desc}{/* Fill out the form to hire */}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField
            label={formLabels.name}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            error={errors.fullName}
            required
          />

          <InputField
            label={formLabels.company_email}
            type="email"
            name="companyEmail"
            value={form.companyEmail}
            onChange={handleChange}
            placeholder="Enter your company email"
            error={errors.companyEmail}
            required
          />

          <InputField
            label={formLabels.phone_no}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+31 123456789"
            error={errors.phone}
            required
          />

          <InputField
            label="KVK"
            name="kvk"
            value={form.kvk}
            onChange={handleChange}
            placeholder="KVK number"
          />
        </div>

        {/* Hours */}
        <InputField
          label={formLabels.no_of_hours}
          type="number"
          name="hoursPerWeek"
          value={form.hoursPerWeek}
          onChange={handleChange}
          placeholder="e.g. 20"
          min={1}
          error={errors.hoursPerWeek}
          required
        />

        {/* Service */}
        <SelectField
          label={formLabels.service}
          name="service"
          value={form.service}
          onChange={handleChange}
          error={errors.service}
          required
          options={[
            {
              label: "Select a service",
              value: "",
            },
            {
              label: slug,
              value: slug,
            },
          ]}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-teal-800 py-3 font-semibold text-white shadow-md transition hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Submitting..." : formLabels.form_btn}
        </button>
      </form>
      <p className="text-xs text-slate-400 text-center">
        By submitting, you consent to being contacted about our products per our{" "}
        <Link
          href="/privacy-policy"
          className="text-teal-600 underline hover:text-teal-800"
        >
          Privacy Policy
        </Link>{" "}
        &amp;&nbsp;Terms.
      </p>
    </div>
  );
};

export default ConsultationForm;

/* ===================================================
   REUSABLE INPUT FIELD
=================================================== */

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
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
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}

        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        {...props}
        required={required}
        className={`
          rounded-lg border px-3 py-3 text-sm text-slate-800
          placeholder-slate-400 outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-slate-200 focus:border-transparent focus:ring-2 focus:ring-teal-500"
          }
          ${className}
        `}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

/* ===================================================
   REUSABLE SELECT FIELD
=================================================== */

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
}

function SelectField({
  label,
  error,
  options,
  className = "",
  required,
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}

        {required && <span className="text-red-500"> *</span>}
      </label>

      <select
        {...props}
        required={required}
        className={`
          rounded-lg border bg-white px-3 py-3 text-sm text-slate-800
          outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-slate-200 focus:border-transparent focus:ring-2 focus:ring-teal-500"
          }
          ${className}
        `}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

/* <Link
          href="/terms-and-conditions"
          className="text-teal-600 underline hover:text-teal-800"
        >
          Terms
        </Link>
        
        

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/consultation-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        console.log(data);

        // alert("Form submitted successfully!");

        setForm({
          fullName: "",
          companyEmail: "",
          phone: "",
          kvk: "",
          hoursPerWeek: "",
          service: "",
        });
        const locale = (params.locale as string) || "en";
        router.push(`/${locale}/thank-you?service=${encodeURIComponent(slug)}`);
        // setLoading(false);
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }; 

  <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">
              Company email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="companyEmail"
              value={form.companyEmail}
              required
              onChange={handleChange}
              placeholder="Enter your company email"
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+31 123456890"
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>


          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">KVK</label>
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


        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">
            How many hours per week do you need?
          </label>
          <input
            type="number"
            name="hoursPerWeek"
            required
            value={form.hoursPerWeek}
            onChange={handleChange}
            placeholder="e.g. 20"
            min={1}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>


        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Service</label>
          <select
            name="service"
            value={form.service}
            required
            onChange={handleChange}
            className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          >
            <option value="">Select a service</option>
            <option value={`${slug}`}>{slug}</option>

          </select>
        </div>

        <button
          type="submit"
          className={`w-full bg-teal-800 text-white font-semibold py-3 rounded-lg ${loading ? "disabled:opacity-50 cursor-not-allowed " : " hover:bg-teal-900  transition-colors duration-200 shadow-md cursor-pointer"}`}
        >
          {loading ? "Submitting..." : " Book a Free Consultation"}
        </button>
      </form>
  */
