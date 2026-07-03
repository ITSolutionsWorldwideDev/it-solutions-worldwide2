import { TrendingUp, Target, Headphones, UserCheck, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";

type RoleItem = {
  title: string;
  description: string;
  link?: string;
};

// Yeh props ka naya interface hai
type SectionProps = {
  heading: string;
  subheading: string;
  cards: Record<string, RoleItem>;
  locale: string;
  isCategory?: boolean;
};

const ROLE_ICONS = [TrendingUp, Target, Headphones, UserCheck, Mail];

const ROLE_SLUGS: Record<string, string> = {
  hire_roles: "hire-roles",
  business_support: "business-support",
  design_services: "design-services",
  it_development: "it-development",
  marketing_analytics: "marketing-analytics",
};

const STAFFING_LINKS: Record<string, string> = {
  virtual_assistant: "/outsourcing/hire-virtual-assistant",
  data_engineer: "/outsourcing/hire-data-engineer",
  full_stack_developer: "/outsourcing/hire-full-stack-developer",
  ai_ml_engineer: "/outsourcing/hire-ai-engineer",
  ecommerce_assistant: "/outsourcing/hire-ecommerce-assistant",
  electrical_engineer: "/outsourcing/hire-electrical-engineer",
  admin: "/outsourcing/hire-admin-accounting-assistant",
  hr: "/outsourcing/hire-hr-assistant",
  customer_support: "/outsourcing/hire-customer-support-agent",
  data_entry: "/outsourcing/hire-data-entry-specialist",
  web_designer: "/outsourcing/hire-webdesigner-developer",
  graphics_designer: "/outsourcing/hire-graphic-designer",
  graphic_designer: "/outsourcing/hire-graphic-designer",
  front_end: "/outsourcing/hire-front-end-developer",
  back_end: "/outsourcing/hire-back-end-developer",
  app_dev: "/outsourcing/hire-app-developer",
  it_support: "/outsourcing/hire-it-support-specialist",
  qa_tester: "/outsourcing/hire-software-tester-qa",
  social_media: "/outsourcing/hire-social-media-manager",
  content_creator: "/outsourcing/hire-content-creator",
  online_marketer: "/outsourcing/hire-online-marketer",
  ga_specialist: "/outsourcing/hire-google-analytics-specialist",
  power_bi: "/outsourcing/hire-power-bi-tableau-specialist",
  data_analyst: "/outsourcing/hire-data-analyst",
};

export default function Roles({ heading, subheading, cards, locale, isCategory = false }: SectionProps) {
  // Data ko us structure mein convert kar rahe hain jo neeche use ho raha hai
  const roles = {
    title: heading,
    intro: subheading,
    roles: cards,
  };

  if (!roles?.roles || Object.keys(roles.roles).length === 0) return null;

  return (
    <section className="py-14 px-4 bg-white" id="roles">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        <span className="text-teal-500">{roles.title}</span>
      </h2>
      <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">{roles.intro}</p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(roles.roles).map(([key, role], index) => {
          const Icon = ROLE_ICONS[index % ROLE_ICONS.length];
          
    const predefinedLink = STAFFING_LINKS[key];

const customLink =
  role.link && role.link.startsWith("/")
    ? role.link
    : null;

const href = isCategory
  ? `/${locale}/outsourcing/${ROLE_SLUGS[key] || key.replace(/_/g, "-")}`
  : predefinedLink
    ? `/${locale}${predefinedLink}`
    : customLink
      ? `/${locale}${customLink}`
      : "#";
          const label = isCategory 
            ? "Explore Service" 
            : `Hire a ${role.title} Specialist`;

          return (
            <div key={key} className="border border-gray-200 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-gray-900 flex items-center gap-3">
                <div className="text-white p-3 rounded-xl bg-gradient-to-br from-[#22A3AD] to-[#1A8D96]">
                  <Icon className="w-6 h-6" />
                </div>
                {role.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3 flex-1">{role.description}</p>
              <Link href={href} className="inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-700">
                {label} <ChevronRight className="size-4 ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}