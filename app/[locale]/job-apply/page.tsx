// app/[locale]/job-apply/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import { Metadata } from "next";
import JobApplyForm from "@/components/layout/job-apply-form";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: {
      absolute: "Apply for IT & Supply Chain Jobs in Netherlands",
    },
    description:
      "Submit your job application to IT Solutions Worldwide. We're hiring IT, supply chain, digital marketing and staffing professionals in the Netherlands.",
  };
}

export default async function JobApplyPage(
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
      "Please fill in all required fields.",
    ),
    fileTooLarge: t(
      "jobApply.errorFileSize",
      "Resume file is too large (max 10MB).",
    ),
  };

  return (
    <main className="bg-gray-50 py-8">
      <h1 className="sr-only">{t("jobApply.heading", "Apply Now")}</h1>
      <JobApplyForm translations={translations} locale={locale} />
    </main>
  );
}