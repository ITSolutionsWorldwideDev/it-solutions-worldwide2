// components/layout/hiring/HiringHeader.tsx

// "use client";
import Link from "next/link";
import { HiBolt } from "react-icons/hi2";
import { notFound } from "next/navigation";
import ConsultationForm from "./ConsultationForm";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import { serviceData } from "@/lib/serviceData";
import { ArrowRight, Users, Clock, Award } from "lucide-react";
import HiringPricing2 from "./HiringPricing-2";

import initServerI18n from "@/utils/serverTranslation";
import ScrollPricingButton from "./ScrollPricingButton";

type Props = {
  slug: string;
  locale: string;
};

export default async function HiringHeader({ slug, locale }: Props) {
  // 🔥 fallback if slug not found
  // const data = contentMap[slug as keyof typeof contentMap];

  const data = serviceData({ slug: slug as string });

  if (!data) {
    return notFound();
  }
  // const { heading, subText, service, services, plans } = data;
  const { service } = data;

  const i18n = await initServerI18n(locale);
  const t = i18n.getFixedT(locale, "common");

  const translationKey = slug.replace(/-/g, "_");

  const pageContent = t(translationKey, {
    returnObjects: true,
  }) as any;

  // contentMap[slug as keyof typeof contentMap] ||
  // contentMap["hire-virtual-assistant"];

  return (
    <div>
      <div className="bg-linear-to-br from-[#FFFFFF] via-[#F9FAFB] to-[#156F76]">
        <div className="container mx-auto font-sans">
          <main className="px-4 sm:px-6 py-12 sm:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#156F761A] border text-teal-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <HiBolt />
                {/* Save up to 60% */}
                {pageContent.features?.item_3}
              </div>

              <h1 className="max-w-xl mx-auto lg:mx-0 text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                {/* Hire a Dedicated {service} */}
                {/* <span className="text-[#156F76]"> in Netherlands</span> */}
                {pageContent.hero?.heading}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-md sm:max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {/* {subText} */}
                {pageContent.hero?.text}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href={`https://wa.me/31107660786?text=Hi%20there!%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20hiring%20a%20dedicated%20${service}.`}
                  target="_blank"
                >
                  <button className="w-full sm:w-auto bg-teal-800 hover:bg-teal-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md">
                    {/* Book Free Consultation */}
                    {pageContent.hero?.button_primary}
                    <ArrowRight />
                  </button>
                </Link>

                {/* <button
                  className="w-full sm:w-auto border-2 border-teal-800 text-teal-800 hover:bg-teal-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {pageContent.hero.button_secondary}
                  Get Pricing Today
                </button> */}

                <ScrollPricingButton
                  btntext={pageContent.hero?.button_secondary}
                />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-4">
                <div className="flex flex-col items-center gap-1">
                  <Users className="text-teal-700" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    500+
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    {/* Dedicated VAs */}
                    {pageContent.hero?.stats?.stat_1}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Clock className="text-teal-700" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    24hrs
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    {/* Start Time */}
                    {pageContent.hero?.stats?.stat_2}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Award className="text-teal-700" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    60%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    {/* Cost Savings */}
                    {pageContent.hero?.stats?.stat_3}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-auto flex-1 ">
              <ConsultationForm
                slug={slug}
                consultation_form={pageContent?.consultation_form}
              />
            </div>
          </main>

          <WhatsAppBtn />

          <div className="bg-teal-800 text-white text-xs sm:text-sm text-center py-4 sm:py-5 px-4">
            {/* ✓ Trusted by 500+ Businesses Looking to Scale Faster Across
            Netherlands &nbsp; */}
            ✓ {pageContent.features_ribbon?.text}
            <span className="text-yellow-400">★ 5.0</span>{" "}
            {/* <span className="text-teal-300">(709 Reviews)</span> */}
          </div>
        </div>
      </div>
      {/* <HiringHeroSection
        slug={slug}
        service={service}
        // features={features}
        services={services}
      /> */}
      {/* <HiringPricing slug={slug} plans={plans} service={service} /> */}
      {/* <HiringPricing2 plans={plans} service={service} locale={locale} /> */}
      <HiringPricing2
        pricing={pageContent.pricing_section}
        service={data.service}
        locale={locale}
      />
      {/* slug={slug}  */}
      {/* <HiringCTA slug={slug} service={service} /> */}
    </div>
  );
}

// import HiringHeroSection from "./HiringHeroSection";
// import HiringPricing from "./HiringPricing";
// import HiringCTA from "./HiringCTA";
