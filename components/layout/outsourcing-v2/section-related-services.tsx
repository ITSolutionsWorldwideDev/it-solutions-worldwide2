import Link from "next/link";

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

// Emoji / pictograph symbols ko title/description se strip karne ke liye.
// Covers common ranges: emoticons, symbols, transport, dingbats, variation selectors, etc.
const stripEmoji = (text: string = "") =>
  text
    .replace(
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu,
      ""
    )
    .replace(/\s{2,}/g, " ")
    .trim();

export default function SectionRelatedServices({
  heading,
  subheading,
  cards = {}, // Default empty object
  locale,
  isCategory = false,
}: SectionProps) {

  // FALLBACK: Agar cards khali hain toh ye 3 show honge
  // NOTE: Agar tumhe har page pe DIFFERENT cards chahiye, to har page se
  // apni khud ki `cards` prop pass karo (kam se kam 3 keys ke saath).
  // Jab tak alag prop nahi jayega, ye fallback hi chalega har jagah.
  const finalCards = (cards && Object.keys(cards).length > 0) ? cards : {
    virtual_assistant: { title: "Virtual Assistant", description: "Efficiently manage your administrative tasks and scheduling." },
    full_stack_developer: { title: "Full Stack Developer", description: "Build robust web applications with modern technology stacks." },
    customer_support: { title: "Customer Support", description: "Provide 24/7 dedicated support to your valuable customers." }
  };

  return (
    <section className="py-14 px-4 bg-white" id="roles">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          <span className="text-black-500">{stripEmoji(heading) || "Explore Complementary Support"}</span>
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-900 mb-10">
          {stripEmoji(subheading) || "Further expand efficiency loops by combining related specialized workflows."}
        </p>

 

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {Object.entries(finalCards).slice(0, 3).map(([key, role]) => {
            const predefinedLink = STAFFING_LINKS[key] || `/outsourcing/hire-${key.replace(/_/g, "-")}`;
            const href = isCategory
              ? `/${locale}/outsourcing/${key.replace(/_/g, "-")}`
              : `/${locale}${predefinedLink}`;

            return (
              <Link
                key={key}
                href={href}
                // Removed h-full to allow natural height expansion
                className="group border border-gray-200 rounded-xl p-6 flex flex-col gap-3 bg-white hover:shadow-lg hover:border-teal-500 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {stripEmoji(role.title)}
                </h3>
                {/* Removed line-clamp-3 and flex-1 so text can expand freely */}
                <p className="text-sm text-gray-500">
                  {stripEmoji(role.description)}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}