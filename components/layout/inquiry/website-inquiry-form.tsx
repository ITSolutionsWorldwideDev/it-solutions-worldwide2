// components/layout/inquiry/website-inquiry-form.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Package, Phone, Sparkles, User } from "lucide-react";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type WebsiteInquiryFormProps = {
  translations: {
    heading: string;
    submit: string;
    success: string;
    requiredFieldsError: string;
  };
  locale: string;
};

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  services: string[];
  customWebsiteDesign: string[];
  ecommerceSpecifics: string[];
  package: string;
  budget: string;
  projectDescription: string;
}

export default function WebsiteInquiryForm({
  translations,
}: WebsiteInquiryFormProps) {
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const [sending, setSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      services: [],
      customWebsiteDesign: [],
      ecommerceSpecifics: [],
    },
  });

  const watchedValues = watch();

  const services = watchedValues.services ?? [];
  const customWebsiteDesign = watchedValues.customWebsiteDesign ?? [];
  const ecommerceSpecifics = watchedValues.ecommerceSpecifics ?? [];

  //   const services = watch("services") || [];
  //   const customWebsiteDesign = watch("customWebsiteDesign") || [];
  //   const ecommerceSpecifics = watch("ecommerceSpecifics") || [];

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const onSubmit = async (data: FormData) => {
    try {
      setSending(true);
      setResponseMessage("");

      const res = await fetch("/api/send-enquiry/website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setResponseMessage("Application submitted successfully!");
      setShowModal(true);
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setSending(false);
    }
  };

  const toggleArrayValue = (
    fieldName: "services" | "customWebsiteDesign" | "ecommerceSpecifics",
    value: string,
  ) => {
    const currentValues = watch(fieldName) || [];

    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    setValue(fieldName, newValues, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const serviceOptions = [
    "New Website Development",
    "UI/UX Redesign",
    "E-commerce Solution (Shopify/WooCommerce)",
    "Web Application (SaaS/Custom)",
    "Maintenance & Performance Optimization",
  ];

  const customWebsiteOptions = [
    "Custom Website Design (UI/UX)",
    "Corporate Business Website",
    "Landing Page / Single Page Application",
    "CMS Development (WordPress/Headless)",
    "Full-Stack Web Application",
    "Website Redesign & Modernization",
  ];

  const ecommerceOptions = [
    "Shopify Development",
    "WooCommerce (WordPress)",
    "Magento (Adobe Commerce)",
    "Custom MERN/MEAN Stack Store",
    "Marketplace Development (Multi-vendor)",
  ];

  const packageOptions = [
    "Basic / Starter (Best for Small Businesses/Informational sites)",
    "Professional / Growth (Best for mid-sized companies/Lead gen)",
    "Enterprise / Custom (Best for complex integrations & high traffic)",
    "E-commerce Starter (Standard store setup)",
    "E-commerce Advanced (Scalable store with ERP/CRM integration)",
  ];

  const budgetOptions = [
    "Under $1,500 (Low Budget)",
    "$1,500 - $3,000",
    "$3,000 - $7,000",
    "$7,000 - $15,000",
    "$15,000+ (Enterprise Level)",
  ];

  if (loading) {
    return <Loader message="Submitting your enquiry..." />;
  }

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-3">Thank You 🎉</h2>
            <p>{responseMessage}</p>

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
      <div className="flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto px-4 py-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="fullName"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className="pl-4 h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Professional Email <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="pl-11 h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="companyName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="companyName"
                      {...register("companyName", {
                        required: "Company name is required",
                      })}
                      className="pl-11 h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  {errors.companyName && (
                    <p className="text-sm text-red-500">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phoneNumber"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="phoneNumber"
                      type="tel"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                      className="pl-11 h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Services Selection Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Service Required <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceOptions.map((service) => (
                  <div
                    key={service}
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all ${
                      services.includes(service)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/50"
                    }`}
                  >
                    <Checkbox
                      id={`service-${service}`}
                      checked={services.includes(service)}
                      onCheckedChange={() =>
                        toggleArrayValue("services", service)
                      }
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor={`service-${service}`}
                      className="font-medium cursor-pointer text-gray-700 leading-snug"
                    >
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Website Design Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Custom Website Design Options
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Select the type of website you need
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {customWebsiteOptions.map((option) => (
                  <div
                    key={option}
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all ${
                      customWebsiteDesign.includes(option)
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 bg-gray-50 hover:border-indigo-200 hover:bg-indigo-50/50"
                    }`}
                  >
                    <Checkbox
                      id={`custom-${option}`}
                      checked={customWebsiteDesign.includes(option)}
                      onCheckedChange={() =>
                        toggleArrayValue("customWebsiteDesign", option)
                      }
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor={`custom-${option}`}
                      className="font-medium cursor-pointer text-gray-700 leading-snug"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* E-commerce Specifics Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                E-commerce Platform
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                If applicable, choose your preferred platform
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ecommerceOptions.map((option) => (
                  <div
                    key={option}
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all ${
                      ecommerceSpecifics.includes(option)
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 bg-gray-50 hover:border-purple-200 hover:bg-purple-50/50"
                    }`}
                  >
                    <Checkbox
                      id={`ecommerce-${option}`}
                      checked={ecommerceSpecifics.includes(option)}
                      onCheckedChange={() =>
                        toggleArrayValue("ecommerceSpecifics", option)
                      }
                      className="mt-0.5"
                    />
                    <Label
                      htmlFor={`ecommerce-${option}`}
                      className="font-medium cursor-pointer text-gray-700 leading-snug"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Package & Budget Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Package className="w-4 h-4 text-green-600" />
                </div>
                Package & Budget Selection
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="package"
                    className="text-sm font-medium text-gray-700"
                  >
                    Choose Your Package <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue("package", value)}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packageOptions.map((pkg) => (
                        <SelectItem
                          key={pkg}
                          value={pkg}
                          className="cursor-pointer"
                        >
                          {pkg}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="budget"
                    className="text-sm font-medium text-gray-700"
                  >
                    Estimated Project Budget{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue("budget", value)}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((budget) => (
                        <SelectItem
                          key={budget}
                          value={budget}
                          className="cursor-pointer"
                        >
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Project Description Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Description <span className="text-red-500">*</span>
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Tell us about your vision and requirements
              </p>
              <Textarea
                id="projectDescription"
                {...register("projectDescription", {
                  required: "Project description is required",
                })}
                className="min-h-40 bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                placeholder="Describe your project goals, target audience, key features, timeline, and any specific requirements..."
              />
              {errors.projectDescription && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.projectDescription.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 text-lg font-semibold bg-linear-to-r from-[#1f6f69] to-[#278083]  hover:from-[#278083] hover:to-[#1f6f69] shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {loading ? "Submitting..." : "Get My Custom Quote"}
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                We'll respond within 24 hours with a detailed proposal
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
