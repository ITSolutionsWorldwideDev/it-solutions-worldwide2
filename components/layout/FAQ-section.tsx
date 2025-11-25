// components/layout/FAQ-section.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
  helpCenterLink: string;
  privacyPolicyLink: string;
}

const FAQSection = ({
  title,
  description,
  faqs,
  helpCenterLink,
  privacyPolicyLink,
}: FAQSectionProps) => {
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
      className=" mx-auto p-6 py-12"
      aria-labelledby="faq-heading"
    >
      {/* max-w-6xl */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-[50.4px]">
          <div className="shadow-[0px_0px_1.05px_rgba(44,_58,_114,_0.05),_0px_2.098883628845215px_6.3px_rgba(44,_58,_114,_0.05),_0px_10.494418144226074px_18.89px_rgba(58,_76,_146,_0.1)] rounded-[20.99px] bg-white border-lightsteelblue border-solid border flex items-center py-[8.4px] px-[12.6px] gap-[8.4px] text-center">
            <Image
              className="h-[21px] w-[21px] relative object-cover"
              width={21}
              height={21}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/small-eyebrow-tag-label-icon-ai.svg"
            />
            <div className="relative leading-[160%] font-medium">FAQ</div>
          </div>
          <div className="mb-8">
            <h1
              id="faq-heading"
              className="text-3xl font-bold mb-2 flex flex-col items-start gap-[33.6px] text-[50.37px] text-gray relative tracking-[-0.02em] leading-[62.97px]"
            >
              {title}
            </h1>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href={helpCenterLink}
              className="flex items-center gap-2 px-4 py-2 bg-[#278083] text-white rounded hover:bg-opacity-90"
              aria-label="Go to Help Center"
            >
              Help Center
            </Link>
            <Link
              href={privacyPolicyLink}
              className="px-4 py-2 border-2 border-[#278083] text-[#278083] rounded hover:bg-[#f0fdfc]"
              aria-label="Read Privacy Policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Right Section: FAQs */}
        <div className="bg-[#278083] text-white rounded-lg shadow p-6">
          <dl className="space-y-4">
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
