"use client";

import { useState } from "react";

// Fallback static data if common.json doesn't contain faq questions for this slug
const fallbackFaqData = [
  {
    question: "What types of roles can IT Solutions Worldwide fill?",
    answer: "We specialize in remote professional roles including Administrative Support, HR Administrative, Customer Support, Data Entry, and more. Our network is growing — reach out if you have a specific role in mind and we'll let you know if we can help.",
  },
  {
    question: "How quickly can I hire someone?",
    answer: "Once your requirements are confirmed, we typically match you with qualified candidates within 3–5 business days. Onboarding can begin as soon as both parties are aligned.",
  },
  {
    question: "What is the cost of outsourcing through IT Solutions Worldwide?",
    answer: "Pricing depends on the role, experience level, and engagement type. We offer flexible plans to suit startups and enterprises alike. Contact us for a custom quote tailored to your needs.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold text-gray-900 leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs({ faqData }: any) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Normalize: Use localization data if present and filled; fallback if empty
  const finalFaqList = Array.isArray(faqData) && faqData.length > 0 ? faqData : fallbackFaqData;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-400 text-sm">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {finalFaqList.map((item: any, index: number) => {
            // Normalizing different variations of keys (.q/.a vs .question/.answer)
            const questionText = item.question || item.q || "";
            const answerText = item.answer || item.a || "";

            return (
              <FAQItem
                key={index}
                question={questionText}
                answer={answerText}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}