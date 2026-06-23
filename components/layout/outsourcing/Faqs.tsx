"use client";

import { useState } from "react";

// Fallback static data if common.json doesn't contain faq questions for this slug
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
            Got questions? We&apos;ve got answers.
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

          <div className="relative w-full h-[500px] lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39253.91733507426!2d4.4397!3d51.9244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434efef3f7ff5%3A0xb6d40fe25a4ed0a!2sRotterdam%2C+Netherlands!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rotterdam Location Map"
            />

            <a
              href="https://wa.me/your-number-here"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-3 bg-white rounded-2xl shadow-md px-4 py-3 hover:shadow-lg transition-shadow duration-200"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.39 1.26 4.81L2.05 22l5.46-1.31a9.86 9.86 0 0 0 4.53 1.1h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.21 0 4.29.86 5.85 2.42a8.2 8.2 0 0 1 2.43 5.84c0 4.55-3.71 8.26-8.27 8.26a8.2 8.2 0 0 1-4.18-1.15l-.3-.17-3.12.75.76-3.04-.2-.32a8.2 8.2 0 0 1-1.26-4.36c0-4.56 3.71-8.27 8.29-8.27z" />
                  <path d="M9.16 7.34c-.18-.4-.37-.41-.55-.41h-.47c-.16 0-.43.06-.59.27-.16.21-.62.6-.62 1.47s.64 1.7.73 1.82c.09.12 1.5 2.41 3.78 3.28 1.96.76 2.36.61 2.79.57.43-.04 1.38-.56 1.57-1.1.19-.54.19-1 .13-1.1-.06-.1-.22-.16-.46-.28-.24-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.24-.6.76-.74.91-.13.15-.27.16-.5.06-.23-.1-.99-.36-1.88-1.16-.7-.62-1.16-1.39-1.3-1.62-.13-.23-.01-.36.1-.49.11-.13.25-.33.37-.49.12-.16.16-.27.24-.45.08-.18.04-.34-.05-.46z" />
                </svg>
              </span>
           
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}