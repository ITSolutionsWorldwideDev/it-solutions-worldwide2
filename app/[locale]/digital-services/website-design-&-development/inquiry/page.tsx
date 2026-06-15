// app/[locale]/digital-services/ecommerce-development/inquiry/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import MarketingInquiryBanner from "@/components/ui/marketing-inquiry-banner";
import WebsiteInquiryForm from "@/components/layout/inquiry/website-inquiry-form";

export default async function EcommerceDevelopment(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  // Extract only what you need
  const translations = {
    heading: t("jobApply.heading", "Apply Now"),
    submit: t("jobApply.submit", "Send Now"),
    success: t("jobApply.success", "Application submitted successfully!"),
    requiredFieldsError: t(
      "jobApply.errorRequired",
      "Please fill in all required fields."
    ),
  };

  return (
    <div>
      <MarketingInquiryBanner
        title="Let's discuss your project"
        description="We are commited to understanding your requirements and crafting a tailored solution that align with your goals."
        textColor="#fff"
        bgColor="#278083"
      />

      <section className="max-w-6xl mx-auto text-[#278083] text-center items-stretch justify-between p-8 lg:p-12 rounded-lg py-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t("home.contactheading")}
          </h2>
          <p className="mt-2 text-sm md:text-base">Enter you details and someone from our team will reach out to find a time to connect with you</p>
        </div>
      </section>

      <WebsiteInquiryForm translations={translations} locale={locale} />
      
    </div>
  );
}
