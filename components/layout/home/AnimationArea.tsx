import dynamic from "next/dynamic";
import initServerI18n from "@/utils/serverTranslation";
import { getServicesData } from "@/lib/commonData";

// ======================
// Dynamic Imports
// ======================

const ExpandingCards = dynamic(() => import("./ExpandingCards"), {
  loading: () => <div className="min-h-[450px]" />,
});

const LogosSlider = dynamic(() => import("./LogosSlider"), {
  loading: () => <div className="min-h-[220px]" />,
});

const HowWeWorkCards = dynamic(
  () => import("@/components/layout/home/HowWeWorkCards"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const StatsCards = dynamic(
  () => import("@/components/layout/home/StatsCards"),
  {
    loading: () => <div className="min-h-[220px]" />,
  }
);

const IndustriesCards = dynamic(
  () => import("@/components/layout/home/IndustriesCards"),
  {
    loading: () => <div className="min-h-[500px]" />,
  }
);

export default async function AnimationArea({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");
  const servicesData = getServicesData(t, locale);

  return (
    <section className="relative z-10 w-full">
      {/* ================= OUR SERVICES ================= */}

      <div className="container xl:max-w-[1200px] mx-auto text-center pt-12 md:pt-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
            {t("homeServices.sectionTitle")}
          </span>
        </h2>

        <ExpandingCards
          servicesData={servicesData}
          learnMoreText={t("homeServices.learnMore")}
          visitServicePageText={t("homeServices.visitServicePage")}
        />
      </div>

      {/* ================= OUR CLIENTS ================= */}

      <section className="w-full pt-6 md:pt-10">
        <div className="container xl:max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
            <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
              {t("homeServices.ourClients")}
            </span>
          </h2>

          <p className="text-center text-lg md:text-2xl lg:text-3xl font-medium text-[#175864] max-w-4xl mx-auto mb-10">
            {t("homeServices.clientsTagline")}
          </p>

          <LogosSlider />
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}

      <section className="container xl:max-w-[1200px] mx-auto text-center pb-12 md:pb-20 px-4">
        <HowWeWorkCards locale={locale} />
      </section>

      {/* ================= STATS ================= */}

      <section
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/backgrounds/clients-section-radial-bg.webp')",
        }}
      >
        <div className="container xl:max-w-[1200px] mx-auto px-4 py-10 md:py-16">
          <StatsCards locale={locale} />
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}

    {/* ================= INDUSTRIES ================= */}

      <section className="pt-6 md:pt-10">
        <IndustriesCards locale={locale} />
      </section>
    </section>
  );
}