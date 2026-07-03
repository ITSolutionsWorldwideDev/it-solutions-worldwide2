"use client";

import React, { useState } from "react";

// Fallback static data
const fallbackFaqData = [
  {
    question: "What types of roles can IT Solutions Worldwide fill?",
    answer:
      "We specialize in remote professional roles including Administrative Support, HR Administrative, Customer Support, Data Entry, and more. Our network is growing — reach out if you have a specific role in mind and we'll let you know if we can help.",
  },
  {
    question: "How quickly can I hire someone?",
    answer:
      "Once your requirements are confirmed, we typically match you with qualified candidates within 3–5 business days. Onboarding can begin as soon as both parties are aligned.",
  },
  {
    question: "What is the cost of outsourcing through IT Solutions Worldwide?",
    answer:
      "Pricing depends on the role, experience level, and engagement type. We offer flexible plans to suit startups and enterprises alike. Contact us for a custom quote tailored to your needs.",
  },
  {
    question: "Is this suitable for small businesses?",
    answer:
      "Absolutely. Our flexible engagement models are designed to scale with you, whether you're a small startup or an established enterprise.",
  },
  {
    question: "How do you ensure quality and reliability?",
    answer:
      "Every candidate goes through a rigorous vetting process including skills assessments, background checks, and interviews before being matched with your team.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
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
          className={
            "shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 transition-transform duration-300 " +
            (isOpen ? "rotate-180" : "rotate-0")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        className={
          "grid transition-all duration-300 ease-in-out " +
          (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// Isolated map component — React.memo se yeh accordion ke re-renders se
// completely decouple ho jata hai, isliye ad-blocker jaisi cheezein isko
// disturb nahi karti aur "insertBefore" DOM error nahi aata.
const MapEmbed = React.memo(function MapEmbed() {
  return (
    <div className="relative w-full h-[500px] lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.4664779419377!2d4.3753155!3d51.867517199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44b8a79991dfd%3A0xfeb452cbb689e588!2sIT%20Solutions%20Worldwide%20BV!5e1!3m2!1sen!2s!4v1782289665315!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0, position: "absolute", inset: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="IT Solutions Worldwide BV Location"
      />
    </div>
  );
});

interface FaqsProps {
  faqData?: any[];
}

export default function Faqs({ faqData }: FaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const finalFaqList =
    Array.isArray(faqData) && faqData.length > 0 ? faqData : fallbackFaqData;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 px-4 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-400 text-sm">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-3">
            {finalFaqList.map((item: any, index: number) => {
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

          <MapEmbed />
        </div>
      </div>
    </section>
  );
}