// components/layout/hiring/HiringPricing.tsx

import { Check } from "lucide-react";
import Link from "next/link";

type Props = {
  slug: string;
};

export default function HiringPricing({ plans, service }: any) {
  return (
    <section className=" bg-white py-20 px-4" id="pricing">
      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Affordable {service}
        </h3>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We offer flexible packages based on your workload and business needs.
          All plans include full management and support.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan: any) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 flex flex-col justify-between shadow-md transition-transform hover:-translate-y-1 duration-200 ${
              plan.highlighted
                ? "bg-teal-800 text-white"
                : "bg-white border border-gray-200 text-gray-900"
            }`}
          >
            {/* Top */}
            <div>
              <h2
                className={`text-xl font-bold mb-1 ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h2>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-teal-200" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-1 grid sm:flex items-baseline">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                 {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-base font-medium ml-1  ${
                      plan.highlighted ? "text-teal-200" : "text-gray-500"
                    }`}
                  >
                    {plan.period} hours/day
                  </span>
                )}
              </div>

              {plan.note && (
                <p className="text-xs text-gray-400 mb-6">{plan.note}</p>
              )}

              {/* Features */}
              <ul className="space-y-3 mt-6">
                {plan.features.map((feature: any) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${
                        plan.highlighted
                          ? "border-teal-300 text-teal-200"
                          : "border-teal-600 text-teal-600"
                      }`}
                    >
                      <Check
                        size={12}
                        strokeWidth={3}
                        className={`font-bold ${plan.highlighted ? "text-white" : "text-[#156F76]"}`}
                      />
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-teal-100" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}

            <Link href={`https://wa.me/31107660786?text=Hi%20there!%20I%20would%20like%20to%20book%20a%20${plan.name}%20plan%20for%20%20a%20dedicated%20${service}.`} target="_blank">
              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold text-sm transition-colors duration-200 cursor-pointer ${
                  plan.highlighted
                    ? "bg-white text-teal-800 hover:bg-teal-50"
                    : "bg-teal-800 text-white hover:bg-teal-700"
                }`}
              >
                {plan.cta}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Money-back guarantee */}
      <div className="max-w-3xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 text-center text-gray-600 text-sm">
        💰{" "}
        <span className="font-semibold text-gray-800">
          Money-Back Guarantee:
        </span>{" "}
        Not satisfied in the first 14 days? Get a full refund.
      </div>
    </section>
  );
}
