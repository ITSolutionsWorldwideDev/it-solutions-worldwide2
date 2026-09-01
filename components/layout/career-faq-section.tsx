"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How long does it take to hear back after applying to IT Solutions Worldwide?",
    answer:
      "We respond within 5 business days of receiving your application, whether you've applied to an open role or submitted an open application.",
  },
  {
    question: "What happens to my profile if there's no open role matching my skills right now?",
    answer:
      "Your profile stays active in our system for 6 months. We reach out proactively when a role opens that matches your background, so you don't need to keep reapplying.",
  },
  {
    question: "Does IT Solutions Worldwide offer a referral bonus?",
    answer:
      "Yes. We offer a referral bonus for successful hires made through employee or candidate referrals — ask your contact for current terms.",
  },
  {
    question: "What should I expect from the first interview?",
    answer:
      "A relaxed introductory call with no preparation required. We want to understand your experience, what kind of role you're looking for, and whether there's a mutual fit — not test you cold.",
  },
  {
    question: "What types of employment does IT Solutions Worldwide offer?",
    answer:
      "We hire for full-time, part-time, contract, and internship positions across supply chain, warehousing, IT support, software engineering, data, finance, marketing, and administrative roles.",
  },
  {
    question: "Where is IT Solutions Worldwide based, and where are roles located?",
    answer:
      "Our headquarters is at Mandenmakerstraat 100C, 3194 DG Hoogvliet, Rotterdam, Netherlands. Open roles are located across the country, including Rotterdam, Delft, Spijkenisse, Hoogeveen, Capelle aan den IJssel, Heinkenszand, and Roosendaal, alongside on-site and remote-eligible positions.",
  },
  {
    question: "Is IT Solutions Worldwide a certified, verifiable employer?",
    answer:
      "Yes. We are registered with the KVK (Dutch Chamber of Commerce), operate in compliance with Dutch AVG (GDPR) data protection requirements, and are rated 4.8 on Glassdoor by current and former employees.",
  },
  {
    question: "Can I apply if I don't see a role that matches my skills?",
    answer:
      "Yes. We accept open applications year-round. Send us your profile and tell us what you'd like to build — we hire for talent and potential, not only for open headcount.",
  },
  {
    question: "How is my CV and personal data handled once I apply?",
    answer:
      "All applicant data is processed in line with Dutch AVG (GDPR) requirements. Your CV and profile information are used solely for recruitment purposes, stored securely, and never sold or shared with third parties without your consent.",
  },
  {
    question: "Does IT Solutions Worldwide hire internationally or only within the Netherlands?",
    answer:
      "The majority of our current openings are based in the Netherlands, spanning on-site and hybrid arrangements. As an international outsourcing partner, we also support select remote and cross-border roles depending on client and project needs.",
  },
];

export default function CareerFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-t border-gray-100">
      {/* Container exact baki sections jesa (1180px width) */}
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-0">
        
        {/* HEADING SECTION */}
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A896] sm:text-[12px]">
            Got Questions?
          </p>
          <h2 className="mt-2 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06282C] sm:text-[38px] lg:text-[44px]">
            Frequently Asked <span className="text-[#00A896]">Questions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[650px] text-[13px] leading-[1.6] text-gray-500 sm:text-[15px]">
            Everything candidates ask us before applying to IT Solutions Worldwide.
          </p>
        </div>

        {/* ACCORDION CARDS - CENTER ALIGNED WITH MAX-WIDTH */}
        <div className="mx-auto mt-12 flex max-w-[860px] flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-[1.5px] transition-all duration-300 ${
                  isOpen
                    ? "bg-[#00A896] shadow-lg shadow-[#00A896]/10"
                    : "bg-gray-200/80 hover:bg-[#00A896]/40 hover:shadow-md"
                }`}
              >
                <div className="relative overflow-hidden rounded-[14px] bg-white transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] font-bold tracking-tight transition-colors duration-200 sm:text-[16px] ${
                        isOpen ? "text-[#00A896]" : "text-[#06282C] group-hover:text-[#00A896]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-[#00A896] text-white rotate-180 shadow-md shadow-[#00A896]/30"
                          : "bg-teal-50 text-[#00A896] border border-[#00A896]/20 group-hover:bg-[#00A896] group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5 stroke-[2.2]" />
                    </div>
                  </button>

                  {/* ANIMATED ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 pt-0 text-[13px] leading-[1.7] text-gray-600 sm:px-6 sm:text-[14px]">
                        <div className="h-[1px] w-full bg-gray-100 mb-4" />
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM HELP BANNER */}
        <div className="mx-auto mt-12 flex max-w-[860px] items-center justify-between rounded-2xl border border-teal-100 bg-teal-50/50 p-6 flex-col sm:flex-row gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A896] text-white">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#06282C]">Still have questions?</h4>
              <p className="text-xs text-gray-500">We are here to help you with your application process.</p>
            </div>
          </div>
          <a
            href="mailto:careers@itsolutionsworldwide.com"
            className="rounded-xl bg-[#06282C] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#00A896]"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}