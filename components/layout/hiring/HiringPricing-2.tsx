// components/layout/hiring/HiringPricing-2.tsx

import { Check } from "lucide-react";
import Link from "next/link";

type Props = {
  slug: string;
};

import Image from "next/image";
// const spacingClasses = ["md:mt-10 lg:mt-20", "md:mt-5 lg:mt-10", "mt-0"];

// export default function HiringPricing2({ plans, service, locale }: any) {
export default function HiringPricing2({ pricing, service }: any) {
  const getSpacingClass = (index: number) => {
    switch (index) {
      case 0:
        return "lg:mt-20";
      case 1:
        return "lg:mt-10";
      default:
        return "lg:mt-0";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f7f7] py-20"  id="pricing">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/pricing-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* locale === {locale} */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {/* Affordable Virtual Assistant Plans */}
            {pricing?.heading}
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            {pricing?.description}
            {/* We offer flexible packages based on your workload and business
            needs. All plans include full management and support. */}
          </p>
        </div>

        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {[pricing?.plan_1, pricing?.plan_2, pricing?.plan_3]?.map(
            (plan: any, index: any) => (
              <div
                key={index}
                className={`rounded-3xl border-2 border-[#194b5a] p-8 text-[#194b5a] bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-teal-900/20 
                flex flex-col 
                ${getSpacingClass(index)}
                ${plan?.featured ? "scale-105 ring-2 ring-white/30" : ""}
                `}
              >
                {/* h-full */}
                <h3 className="text-2xl font-bold">{plan?.title}</h3>

                <p className="mt-3 text-sm ">
                  {plan?.desc}
                  {/* Dedicated assistant for daily operations. */}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-bold">{plan?.price}</span>
                  <span className="mb-1 text-lg ">{plan?.unit}</span>
                  {/* <span className="mb-1 text-lg ">/month</span> */}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan?.features?.map((feature: any, i: any) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                        <span
                          className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center border border-white-300  text-white-200`}
                        >
                          <Check
                            size={12}
                            strokeWidth={3}
                            className={`font-bold text-[#156F76] `}
                          />
                        </span>
                      </div>

                      <span className="text-sm ">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  // className="bottom-0 relative"
                  className="mt-auto block"
                  href={`https://wa.me/31107660786?text=Hi%20there!%20I%20would%20like%20to%20book%20a%20${plan?.name}%20plan%20for%20%20a%20dedicated%20${service}.`}
                  target="_blank"
                >
                  <button
                    className={`mt-10 w-full py-3 rounded-xl font-semibold text-sm transition-colors duration-200 cursor-pointer bg-teal-800 text-white hover:text-teal-800 hover:bg-white border-2 border-teal-800`}
                  >
                    {plan?.button}
                  </button>
                </Link>
              </div>
            ),
          )}
        </div>

        {/* Money-back guarantee */}
        <div className="max-w-3xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 text-center text-gray-600 text-sm">
          {pricing?.guarantee}
          {/* 💰
          <span className="font-semibold text-gray-800">
            Money-Back Guarantee:
          </span>{" "}
          Not satisfied in the first 14 days? Get a full refund. */}
        </div>
      </div>
    </section>
  );
}

//  ${
//                         plan.highlighted
//                           ? "border-teal-300 text-teal-200"
//                           : "border-teal-600 text-teal-600"
//                       }`}

{
  /* border-white bg-linear-to-br from-[#156f76] to-[#194b5a] text-white */
}
{
  /* Title */
}

{
  /* ${plan.highlighted ? "text-white" : "text-[#156F76]"} */
}

/* import Image from "next/image";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "€1,600",
    description:
      "Dedicated assistant for daily operations.",
    features: [
      "Full-time support (160hrs)",
      "All Starter features",
      "Customer support",
      "Social media management",
      "Priority support",
      "Dedicated account manager",
    ],
  },
  {
    name: "Growth Plan",
    price: "€1,600",
    description:
      "Dedicated assistant for daily operations.",
    popular: true,
    features: [
      "Full-time support (160hrs)",
      "All Starter features",
      "Customer support",
      "Social media management",
      "Priority support",
      "Dedicated account manager",
      "Scale Plan Feature #1",
    ],
  },
  {
    name: "Scale Plan",
    price: "€1,600",
    description:
      "Dedicated assistant for daily operations.",
    features: [
      "Full-time support (160hrs)",
      "All Starter features",
      "Customer support",
      "Social media management",
      "Priority support",
      "Dedicated account manager",
      "Scale Plan Feature #1",
      "Scale Plan Feature #2",
    ],
  },
];

export default function HiringPricing2() {
  return (
    <section className="relative overflow-hidden py-20">
      
      <div className="absolute inset-0">
        <Image
          src="/assets/images/pricing-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

      </div>


      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">

        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight  md:text-5xl lg:text-6xl">
            Affordable Virtual Assistant Plans
          </h2>

          <p className="mt-6 text-base leading-7  md:text-xl">
            We offer flexible packages based on your workload
            and business needs. All plans include full
            management and support.
          </p>
        </div>


        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border border-white/20 bg-gradient-to-br from-[#156f76] to-[#194b5a] p-8 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
                plan.popular
                  ? "lg:scale-105 ring-4 ring-teal-300"
                  : ""
              }`}
            >

              {plan.popular && (
                <div className="mb-6 inline-flex rounded-full bg-teal-300 px-4 py-1 text-sm font-semibold text-teal-950">
                  Most Popular
                </div>
              )}

      
              <h3 className="text-2xl font-bold md:text-3xl">
                {plan.name}
              </h3>

          
              <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base">
                {plan.description}
              </p>

     
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold md:text-5xl">
                  {plan.price}
                </span>

                <span className="mb-1 text-base text-gray-300">
                  /month
                </span>
              </div>


              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-300 text-teal-950">
                      <Check className="h-3.5 w-3.5" />
                    </div>

                    <span className="text-sm leading-6 text-gray-100 md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

    
              <button className="mt-10 w-full rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-teal-700 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl md:text-base">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} */
