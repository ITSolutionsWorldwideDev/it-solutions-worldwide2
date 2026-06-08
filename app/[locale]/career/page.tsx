// app/[locale]/logistics/career/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import ImageSection2 from "@/components/layout/image-section-2";
import BannerSection from "@/components/layout/banner-section";

// import { jobsData } from "@/lib/jobsData";
// import Link from "next/link";
// import PdfViewer from "@/components/ui/pdf-viewer";
import CardSection from "@/components/layout/card-section";
import { Metadata } from "next";
import CareerJobsSection from "@/components/layout/career-jobs";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: {
      absolute: "IT & Supply Chain Jobs in Netherlands | Apply Now",
    },
    description:
      "Looking for IT, supply chain or digital marketing jobs in the Netherlands? Explore career opportunities at IT Solutions Worldwide and grow with us.",
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${params.locale}/career`,
    },
  };
}
export default async function Career(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/career1.webp",
      heading: t("career.heading_1"),
    },
  ];

  return (
    <div>
      <BannerSection slides={slides} />
      <ImageSection
        heading={t("career.heading_2")}
        text={t("career.text_2")}
        imageUrl="/assets/images/career2.webp"
      />
      <ImageSection2
        heading={t("career.heading_3")}
        // subtitle={t("career.subtitle_2")}
        text={t("career.text_3")}
        imageUrl="/assets/images/career3.webp"
      />
      <CardSection heading={t("career.heading_4")} text={t("career.text_4")} />
      <CareerJobsSection />

      {/* <div className="container mt-20 max-w-sm sm:max-w-4xl gap-3 sm:gap-0 mx-auto flex flex-col">
        {jobsData.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-6"
          >
            <div className="md:w-3/4">
              <h3 className="text-lg font-semibold text-left">{job.title}</h3>
              <p className="text-sm font-semibold text-left mt-1 text-gray-700">
                {job.type} -{" "}
                <span className="text-purple-600">{job.location}</span>
              </p>
              <PdfViewer key={index} pdfUrl={job.pdfUrl} />
            </div>
            <div className="md:w-1/4 flex items-end justify-end">
              <Link
                href="/job-apply"
                className="btn mt-2 md:mt-4 inline-block bg-teal-600 text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 transition duration-300 ease-in-out"
              >
                <span>Apply now</span>
              </Link>
            </div>
          </div>
        ))}
        <hr className="mt-4" />
      </div> */}
    </div>
  );
}
