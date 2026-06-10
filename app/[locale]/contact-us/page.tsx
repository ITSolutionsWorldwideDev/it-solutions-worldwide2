// app/[locale]/contact-us/page.tsx

export const revalidate = 3600;
import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import ContactCard from "@/components/layout/contact-page-section";
import LocationMap from "@/components/layout/location-map";
// import Herosection from '../../components/Herosection2';
// import ContactSection from '../../components/Contact';
// import LocationMap from '../../components/Location';
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: {
      absolute: "Free IT Consultation in Netherlands | Contact Us",
    },
    description:
      "Get in touch with IT Solutions Worldwide for a free consultation on IT, supply chain, digital services or staffing support in the Netherlands.",
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${params.locale}/contact-us`,
    },
  };
}
export default async function ContactUs(
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
      backgroundImage: "/assets/images/contactus1.webp",
      heading: t("contactus.heading_1"),
      text: t("contactus.text_1"),
    },
  ];
  return (
    <div>
      <BannerSection slides={slides} />
      <ContactCard locale={locale} />
      <LocationMap />

      {/* <Herosection slides={slides} />
      <ContactSection />
      <LocationMap /> */}
    </div>
  );
}
