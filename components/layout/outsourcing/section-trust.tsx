// components/layout/outsourcing/section-trust.tsx
"use client";
import { useParams } from "next/navigation";
import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";

const companies = [
  "Microsoft",
  "Amazon",
  "Google",
  "IBM",
  "Oracle",
  "SAP",
  "Salesforce",
  "Adobe",
  "Intel",
  "Cisco",
  "Dell",
  "HP",
  "Accenture",
  "Deloitte",
  "PwC",
];

const TrustSection = () => {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = locale === "nl" ? nlCommon.trustSection : enCommon.trustSection;

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#002025,#002228_11.11%,#00252b_22.22%,#00272d_33.33%,#002a30_44.44%,#002d33_55.56%,#002f36_66.67%,#003239_77.78%,#00343c_88.89%,#00373f)] py-16 text-white">
      {/* Glow Effect */}
      <div className="absolute left-1/2 top-80 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-700 opacity-20 blur-[220px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t.headingPart1}{" "}
            <span className="bg-linear-to-r from-[#22a3ad] to-[#156f76] bg-clip-text text-transparent">
              {t.headingHighlight}
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-400 md:text-base">
            {t.subheading}
          </p>
        </div>

        {/* Company Marquee */}
        <div className="relative mt-14 w-full overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-[#002025] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-[#00373f] to-transparent" />

          <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-16">
            {[...companies, ...companies].map((item, index) => (
              <div
                key={index}
                className="flex h-16 items-center justify-center text-2xl font-bold text-gray-500"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          {t.testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[14px] border border-teal-700 bg-[#10292d]/70 p-6"
            >
              <div className="text-4xl leading-none text-[#22a3ad]">"</div>

              <p className="mt-8 text-[16px] leading-[26px] text-gray-300">
                {item.desc}
              </p>

              <div className="mt-8">
                <h4 className="text-base font-semibold text-white">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;