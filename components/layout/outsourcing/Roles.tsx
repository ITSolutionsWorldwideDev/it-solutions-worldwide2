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

export default function Roles({
  roles,
  isCategory = false,
  locale,
}: {
  roles: RolesData;
  isCategory?: boolean;
  locale: string;
}) {
  if (!roles || typeof roles.roles !== "object" || roles.roles === null) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Roles] Missing or invalid `roles` prop:", roles);
    }
    return null;
  }

  return (
    <section className="py-14 px-4 bg-white" id="roles">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        <span className="text-teal-500">{roles.title}</span>
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12">
        {roles.intro}
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Object.entries(roles.roles).map(([key, role]) => {
          const typedRole = role as RoleItem;

          // Resolve paths
          const categorySlug = ROLE_SLUGS[key] || key.replace(/_/g, "-");
          const categoryHref = `/${locale}/outsourcing/${categorySlug}`;
          
          const staffingPath = STAFFING_LINKS[key] || typedRole.link;
          const staffingHref = staffingPath ? `/${locale}${staffingPath.startsWith('/') ? '' : '/'}${staffingPath}` : null;

          // Force a fallback: if staffingHref is missing, use categoryHref
          const href = isCategory ? categoryHref : (staffingHref || categoryHref);
          const label = isCategory 
            ? (ROLE_LINK_LABELS[key] || `Explore ${typedRole.title}`) 
            : `Hire a ${typedRole.title} Specialist`;

          return (
            <div
              key={key}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 w-full max-w-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {typedRole.title}
              </h3>

              <p
                className="text-gray-500 leading-relaxed flex-1"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {typedRole.description}
              </p>

              <Link
                href={href}
                className="inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-700 transition-colors mt-2"
              >
                {label}
                <ChevronRight className="size-4 ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}