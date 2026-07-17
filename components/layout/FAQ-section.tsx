// components/layout/FAQ-section.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  children?: ReactNode; // Left side content (e.g. <AboutUsContactForm />)
}

const FAQSection = ({ faqs, children }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section
      id="faq"
      className="mx-auto p-6 py-12 max-w-7xl"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section: Contact Form */}
        <div className="w-full">{children}</div>

        {/* Right Section: FAQs */}
        <div className="bg-[#278083] text-white rounded-lg shadow p-6 h-full">
          <h2
            id="faq-heading"
            className="text-3xl font-semibold text-white"
          >
            Frequently Asked Questions
          </h2>

          <dl className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-white last:border-b-0"
              >
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full py-4 text-left focus:outline-none cursor-pointer"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-xl">
                      {activeIndex === index ? "–" : "+"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-${index}`}
                  hidden={activeIndex !== index}
                  className="py-2"
                >
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;