// app/[locale]/supply-health-check-info/page.tsx

export const revalidate = 3600;
export const dynamic = 'force-static';

import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: {
      absolute: "Supply Chain Health Check Information | ITWW",
    },
    description:
      "Learn about our comprehensive Supply Chain Health Check service. Evaluate efficiency, cost, resilience, and discover improvement opportunities.",
  };
}

export default async function SupplyHealth({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");
  const h = (key: string) => t(`supplyHealthCheck.${key}`);

  const slides = [
    {
      backgroundImage: "/assets/images/Supply_check_background_Image.webp",
      heading: h("bannerHeading"),
    },
  ];

  const sections = [
    { content: h("s0Content") },
    { title: h("s1Title"), content: h("s1Content") },
    { title: h("s2Title"), content: h("s2Content") },
    { title: h("s3Title"), content: h("s3Content") },
    { title: h("s4Title"), content: h("s4Content") },
    { title: h("s5Title"), content: h("s5Content") },
    { title: h("s6Title"), content: h("s6Content") },
    { title: h("s7Title"), content: h("s7Content") },
    { title: h("s8Title"), content: h("s8Content") },
    { title: h("s9Title"), content: h("s9Content") },
  ];

  return (
    <div>
      <main>
        <section>
          <BannerSection slides={slides} />
          <div className="max-w-7xl mx-auto p-6 space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white">
                {section.title && (
                  <h2 className="text-2xl font-semibold text-[#278083]">
                    {section.title}
                  </h2>
                )}
                <p className="text-gray-700 mt-2 mb-4">{section.content}</p>
              </div>
            ))}
            <div className="mt-10 flex justify-center">
              <Link
                href={`/${locale}/supply-health-check`}
                className="bg-[#278083] text-white py-3 px-6 rounded-full text-lg items-center gap-2 shadow-md hover:bg-[#1f6460] transition"
              >
                {h("ctaButton")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}