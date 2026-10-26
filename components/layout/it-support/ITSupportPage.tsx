import HeroSection from "@/components/layout/it-support/HeroSection";
import SupportModelsSection from "@/components/layout/it-support/SupportModelsSection";
import WhyChooseAndOverviewSection from "@/components/layout/it-support/WhyChooseAndOverviewSection";
import TransformITBannerSection from "@/components/layout/it-support/TransformITBannerSection";
import ITSupportFAQSection from "@/components/layout/it-support/ITSupportFAQSection";

type Props = {
  translationKey: string;
  locale: string;
  t?: (key: string, opts?: any) => any;
};

export default function ITSupportPage({
  locale,
}: Props) {
  return (
    <div className="w-full bg-white">
      {/* =====================================================
          1. HERO SECTION (With it1.png)
      ===================================================== */}
      <HeroSection locale={locale} />

      {/* =====================================================
          2. IT SUPPORT MODELS & PRICING
      ===================================================== */}
      <SupportModelsSection locale={locale} />

      {/* =====================================================
          3. WHY CHOOSE US & OVERVIEW (With it2.png)
      ===================================================== */}
      <WhyChooseAndOverviewSection locale={locale} />

      {/* =====================================================
          4. CONTACT / TRANSFORM IT BANNER
      ===================================================== */}
      <TransformITBannerSection locale={locale} />

      {/* =====================================================
          5. FAQ SECTION (4 FAQs initial, "Read more" toggle to 10)
      ===================================================== */}
      <ITSupportFAQSection locale={locale} />
    </div>
  );
}
