import {
  TrendingUp,       // For Administrative Support (Arrow pointing up-right)
  Target,           // For HR Administrative (Target/Bullseye)
  Headphones,       // For Customer Support (Headset)
  UserCheck,        // For the 4th card (Unique Customer/Contact variant)
  Mail,             // For Contact variant
} from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type RoleItem = {
  title: string;
  description: string;
  link?: string;
};

type RolesData = {
  title: string;
  intro: string;
  roles: Record<string, RoleItem>;
};

// Exact matching icons based on your image layout (No repeats!)
const ROLE_ICONS = [
  <TrendingUp className="w-6 h-6" />,   // 1st Card: Admin Support
  <Target className="w-6 h-6" />,       // 2nd Card: HR Admin
  <Headphones className="w-6 h-6" />,   // 3rd Card: Customer Support
  <UserCheck className="w-6 h-6" />,    // 4th Card: Clean Contact/User Support
  <Mail className="w-6 h-6" />,         // 5th Card: Additional Contact fallback
];

const ROLE_SLUGS: Record<string, string> = {
  hire_roles: "hire-roles",
  business_support: "business-support",
  design_services: "design-services",
  it_development: "it-development",
  marketing_analytics: "marketing-analytics",
};

const ROLE_LINK_LABELS: Record<string, string> = {
  hire_roles: "Explore Hire Roles",
  business_support: "Explore Business Support",
  design_services: "Explore Design Services",
  it_development: "Explore IT & Development",
  marketing_analytics: "Explore Marketing & Analytics",
};

const STAFFING_LINKS: Record<string, string> = {
  virtual_assistant: "/staffing-support/hire-virtual-assistant",
  data_engineer: "/staffing-support/hire-data-engineer",
  full_stack_developer: "/staffing-support/hire-full-stack-developer",
  ai_ml_engineer: "/staffing-support/hire-ai-engineer",
  ecommerce_assistant: "/staffing-support/hire-ecommerce-assistant",
  electrical_engineer: "/staffing-support/hire-electrical-engineer",
  admin: "/staffing-support/hire-admin-accounting-assistant",
  hr: "/staffing-support/hire-hr-assistant-remote",
  customer_support: "/staffing-support/hire-customer-support-agent",
  data_entry: "/staffing-support/hire-data-entry-specialist",
  web_designer: "/staffing-support/hire-webdesigner-developer",
  graphics_designer: "/staffing-support/hire-graphic-designer",
  graphic_designer: "/staffing-support/hire-graphic-designer",
  front_end: "/staffing-support/hire-front-end-developer",
  back_end: "/staffing-support/hire-back-end-developer",
  app_dev: "/staffing-support/hire-app-developer",
  it_support: "/staffing-support/hire-it-support-specialist",
  qa_tester: "/staffing-support/hire-software-tester-qa",
  social_media: "/staffing-support/hire-social-media-manager",
  content_creator: "/staffing-support/hire-content-creator",
  online_marketer: "/staffing-support/hire-online-marketer",
  ga_specialist: "/staffing-support/hire-google-analytics-specialist",
  power_bi: "/staffing-support/hire-power-bi-tableau-specialist",
  data_analyst: "/staffing-support/hire-data-analyst",
};

export default function Roles({
  roles,
  isCategory = false,
}: {
  roles: RolesData;
  isCategory?: boolean;
}) {
  return (
    <section className="py-14 px-4 bg-white" id="roles">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Explore Our <span className="text-teal-500">{roles.title}</span>
      </h2>

      <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">
        {roles.intro}
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(roles.roles).map(([key, role], index) => {
          // Safeguard to make sure it doesn't break if you have more cards than icons
          const icon = ROLE_ICONS[index % ROLE_ICONS.length];
          const typedRole = role as RoleItem;

          const categorySlug = ROLE_SLUGS[key] || key.replace(/_/g, "-");
          const categoryLabel = ROLE_LINK_LABELS[key] || `Explore ${typedRole.title}`;
          const categoryHref = `outsourcing/${categorySlug}`;

          const staffingHref = STAFFING_LINKS[key] || typedRole.link || null;
          const staffingLabel = `Hire a ${typedRole.title} Specialist`;

          const href = isCategory ? categoryHref : staffingHref;
          const label = isCategory ? categoryLabel : staffingLabel;

          return (
            <div
              key={key}
              className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-base font-semibold text-gray-900 leading-snug">
                <div className="flex space-x-3 items-center">
                  <div
                    className="text-white p-3 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #22A3AD 0%, #21A1AA 11.11%, #209EA8 22.22%, #1F9CA5 33.33%, #1E99A3 44.44%, #1E97A0 55.56%, #1D949E 66.67%, #1C929B 77.78%, #1B8F99 88.89%, #1A8D96 100%)",
                    }}
                  >
                    {icon}
                  </div>
                  <span>{typedRole.title}</span>
                </div>
              </h3>

              <p
                className="text-sm text-gray-500 leading-relaxed flex-1"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {typedRole.description}
              </p>

              {href && (
                <Link
                  href={href}
                  className="inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors mt-auto"
                >
                  {label}
                  <ChevronRight className="size-4 ml-1" />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}