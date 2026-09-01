"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";

type FaqItem = {
  question: string;
  answer: string;
};

type CareerFaqSectionProps = {
  locale: string;
};

type CommonTranslations = typeof enCommon;

export default function CareerFaqSection({
  locale,
}: CareerFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const translations = (
  locale.toLowerCase().startsWith("nl") ? nlCommon : enCommon
) as unknown as CommonTranslations;

  const faq = translations.career.faq;

  const faqs = faq.items as FaqItem[];

  const toggleFaq = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="w-full border-t border-gray-100 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A896] sm:text-[12px]">
            {faq.eyebrow}
          </p>

          <h2 className="mt-2 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06282C] sm:text-[38px] lg:text-[44px]">
            {faq.headingPrefix}
            <span className="text-[#00A896]">
              {faq.headingHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-[1.6] text-gray-500 sm:text-[15px]">
            {faq.subtext}
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="mx-auto mt-12 flex max-w-[860px] flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${item.question}-${index}`}
                className={`group relative rounded-2xl p-[1.5px] transition-all duration-300 ${
                  isOpen
                    ? "bg-[#00A896] shadow-lg shadow-[#00A896]/10"
                    : "bg-gray-200/80 hover:bg-[#00A896]/40 hover:shadow-md"
                }`}
              >
                <div className="relative overflow-hidden rounded-[14px] bg-white">

                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                    aria-controls={`career-faq-answer-${index}`}
                  >
                    <span
                      className={`text-[15px] font-bold tracking-tight transition-colors duration-200 sm:text-[16px] ${
                        isOpen
                          ? "text-[#00A896]"
                          : "text-[#06282C] group-hover:text-[#00A896]"
                      }`}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#00A896] text-white shadow-md shadow-[#00A896]/30"
                          : "border border-[#00A896]/20 bg-teal-50 text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5 stroke-[2.2]" />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    id={`career-faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "pointer-events-none grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 pt-0 text-[13px] leading-[1.7] text-gray-600 sm:px-6 sm:text-[14px]">
                        <div className="mb-4 h-[1px] w-full bg-gray-100" />
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BANNER */}
        <div className="mx-auto mt-12 flex max-w-[860px] flex-col items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-teal-50/50 p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A896] text-white">
              <HelpCircle className="h-5 w-5" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#06282C]">
                {faq.banner.title}
              </h4>

              <p className="text-xs text-gray-500">
                {faq.banner.subtext}
              </p>
            </div>
          </div>

          <a
            href="mailto:careers@itsolutionsworldwide.com"
            className="rounded-xl bg-[#06282C] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#00A896]"
          >
            {faq.banner.button}
          </a>
        </div>
      </div>
    </section>
  );
}