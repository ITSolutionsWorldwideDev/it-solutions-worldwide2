import Link from "next/link";

type RoleItem = {
  title: string;
  description: string;
  link: string;
};

type SectionProps = {
  heading?: string;
  subheading?: string;
  cards?: Record<string, RoleItem>; // agar page se manually override karna ho
  locale: string;
  slug?: string; // NEW: current page ka slug — isi se cards seed/rotate honge
  maxCards?: number;
};

const stripEmoji = (text: string = "") =>
  text
    .replace(
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu,
      ""
    )
    .replace(/\s{2,}/g, " ")
    .trim();

const DIGITAL_BUSINESS_CARDS: Record<string, RoleItem> = {
  website_design_development: {
    title: "Website Design & Development",
    description: "Build high-performing, responsive websites tailored to your brand.",
    link: "/digital-services/website-design-development",
  },
  ecommerce_development: {
    title: "Ecommerce Development",
    description: "Launch and scale conversion-focused online stores.",
    link: "/digital-services/ecommerce-development",
  },
  seo_services: {
    title: "SEO Services",
    description: "Improve your search engine rankings and drive organic traffic.",
    link: "/digital-services/seo-services",
  },
  ppc_advertising: {
    title: "PPC Advertising",
    description: "Run high-ROI paid campaigns across major ad platforms.",
    link: "/digital-services/ppc-advertising",
  },
  social_media_marketing: {
    title: "Social Media Marketing",
    description: "Grow your brand presence with data-driven social strategies.",
    link: "/digital-services/social-media-marketing",
  },
  software_development: {
    title: "Software Development",
    description: "Custom software solutions built around your business logic.",
    link: "/it-support/software-development",
  },
  scm_consultancy: {
    title: "SCM Consultancy",
    description: "Optimize your supply chain workflows for maximum efficiency.",
    link: "/scm-services/scm-consultancy",
  },
  business_consultancy: {
    title: "Business Consultancy",
    description: "Strategic guidance to streamline operations and growth.",
    link: "/scm-services/business-consultancy",
  },
  supply_chain_performance_check: {
    title: "Supply Chain Performance Check",
    description: "Audit and benchmark your supply chain end-to-end.",
    link: "/scm-services/supply-chain-performance-check",
  },
  automation_services: {
    title: "Automation Services",
    description: "Automate repetitive workflows to cut operational overhead.",
    link: "/it-support/automation-services",
  },
  erp_implementation: {
    title: "ERP Implementation",
    description: "Deploy and configure ERP systems built around your processes.",
    link: "/it-support/erp-implementation",
  },
  smart_warehouse_solutions: {
    title: "Smart Warehouse Solutions",
    description: "Modernize warehouse operations with smart logistics tooling.",
    link: "/logistics/smart-warehouse-solutions",
  },
};

// Simple deterministic string hash (FNV-1a style) — same slug hamesha same number dega
function hashString(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash);
}

// Seeded shuffle — Fisher-Yates but seeded by slug hash instead of Math.random
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let currentSeed = seed;

  const nextRandom = () => {
    // simple LCG (linear congruential generator)
    currentSeed = (currentSeed * 1103515245 + 12345) & 0x7fffffff;
    return currentSeed / 0x7fffffff;
  };

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(nextRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function SectionRelatedServicesDigital({
  heading,
  subheading,
  cards,
  locale,
  slug = "default",
  maxCards = 3,
}: SectionProps) {
  // Agar page se manually cards pass hue hain, unhi ko use karo (override)
  if (cards && Object.keys(cards).length > 0) {
    return renderSection(cards);
  }

  // Current slug (dashes -> underscore) ko current page ki service maan kar exclude karo,
  // taake apna hi service card khud ke page pe na dikhe
  const currentKey = slug.replace(/-/g, "_");
  const pool = Object.entries(DIGITAL_BUSINESS_CARDS).filter(([key]) => key !== currentKey);

  const seed = hashString(slug || "default");
  const shuffled = seededShuffle(pool, seed);
  const picked = shuffled.slice(0, maxCards);

  const finalCards: Record<string, RoleItem> = {};
  picked.forEach(([key, val]) => {
    finalCards[key] = val;
  });

  return renderSection(finalCards);

  function renderSection(finalCardsToRender: Record<string, RoleItem>) {
    const entries = Object.entries(finalCardsToRender).slice(0, maxCards);
    const gridColsClass = entries.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";

return (
<section className="py-14 pl-[22px] pr-6 bg-white" id="related-digital-services">
        <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        <span className="text-black-500">
          {stripEmoji(heading || "") || "Explore Digital & Business Solutions"}
        </span>
      </h2>
      <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">
        {stripEmoji(subheading || "") ||
          "Pair this service with our digital and business transformation solutions."}
      </p>

      <div className={`grid grid-cols-1 ${gridColsClass} gap-6 items-stretch`}>
        {entries.map(([key, item]) => {
          const href = `/${locale}${item.link}`;
          return (
            <Link
              key={key}
              href={href}
              className="group border border-gray-200 rounded-xl p-6 flex flex-col gap-3 bg-white hover:shadow-lg hover:border-teal-500 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                {stripEmoji(item.title)}
              </h3>
              <p className="text-sm text-gray-500">{stripEmoji(item.description)}</p>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);
  }
}