import Link from "next/link";
import { ChevronRight } from "lucide-react";

type RoleItem = {
  title: string;
  description: string;
  link?: string;
};

type SectionProps = {
  heading: string;
  subheading: string;
  cards?: Record<string, RoleItem>; // Optional kar diya hai
  locale: string;
  isCategory?: boolean;
};

const STAFFING_LINKS: Record<string, string> = {
  virtual_assistant: "/outsourcing/hire-virtual-assistant",
  data_engineer: "/outsourcing/hire-data-engineer",
  full_stack_developer: "/outsourcing/hire-full-stack-developer",
  ai_ml_engineer: "/outsourcing/hire-ai-engineer",
  customer_support: "/outsourcing/hire-customer-support-agent",
  // ... (baqi links wahi rahengi)
};

export default function SectionRelatedServices({ 
  heading, 
  subheading, 
  cards = {}, // Default empty object
  locale, 
  isCategory = false 
}: SectionProps) {
  
  // FALLBACK: Agar cards khali hain toh ye 3 show honge
  const finalCards = (cards && Object.keys(cards).length > 0) ? cards : {
    virtual_assistant: { title: "Virtual Assistant", description: "Efficiently manage your administrative tasks and scheduling." },
    full_stack_developer: { title: "Full Stack Developer", description: "Build robust web applications with modern technology stacks." },
    customer_support: { title: "Customer Support", description: "Provide 24/7 dedicated support to your valuable customers." }
  };

  return (
    <section className="py-14 px-4 bg-white" id="roles">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          <span className="text-teal-500">{heading || "Explore Complementary Support"}</span>
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">
          {subheading || "Further expand efficiency loops by combining related specialized workflows."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(finalCards).map(([key, role]) => {
            const predefinedLink = STAFFING_LINKS[key] || `/outsourcing/hire-${key.replace(/_/g, "-")}`;
            const href = isCategory 
              ? `/${locale}/outsourcing/${key.replace(/_/g, "-")}` 
              : `/${locale}${predefinedLink}`;

            return (
              <div key={key} className="border border-gray-200 rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900">{role.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-3 flex-1">{role.description}</p>
                <Link href={href} className="inline-flex items-center text-sm font-semibold text-teal-500 hover:text-teal-700 mt-2">
                  Explore Service <ChevronRight className="size-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}