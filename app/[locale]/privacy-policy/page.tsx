export const dynamic = 'force-static';
// app/[locale]/privacy-policy/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import initServerI18n from "@/utils/serverTranslation";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: {
      absolute: `Privacy Policy | ITWW ${locale === 'nl' ? 'Netherlands' : 'Worldwide'}`,
    },
    description: "Read the privacy policy of IT Solutions Worldwide to understand how we collect, use and protect your personal data in line with GDPR regulations.",
  };
}

export default async function Privacy(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const baseUrl = "https://www.itsolutionsworldwide.com";
  const localizedUrl = `${baseUrl}/${locale}`;

  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");
  const p = (key: string) => t(`privacyPolicy.${key}`);

  return (
    <div className="flex justify-center mt-5 mb-10">
      <div className="container mx-6 md:mx-20">
        <h1 className="text-center text-[26px] md:text-[46px] font-semibold mb-3 text-[#2B8C8C]">
          {p("pageHeading")}
        </h1>
        <p className="mb-4">
          {p("intro1")}{" "}
          <Link href={localizedUrl} className="underline">
            {`itsolutionsworldwide.com/${locale}`}
          </Link>{" "}
          {p("intro2")}
        </p>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section1Title")}
        </h2>
        <p className="mb-4">{p("section1Text")}</p>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section2Title")}
        </h2>
        <p className="mb-2">{p("section2Intro")}</p>
        <p className="font-semibold">{p("section2aTitle")}</p>
        <ul className="list-disc ml-10 mb-4">
          <li>{p("section2aItem1")}</li>
          <li>{p("section2aItem2")}</li>
          <li>{p("section2aItem3")}</li>
          <li>{p("section2aItem4")}</li>
          <li>{p("section2aItem5")}</li>
          <li>{p("section2aItem6")}</li>
        </ul>

        <p className="font-semibold">{p("section2bTitle")}</p>
        <ul className="list-disc ml-10 mb-4">
          <li>{p("section2bItem1")}</li>
          <li>{p("section2bItem2")}</li>
          <li>{p("section2bItem3")}</li>
          <li>{p("section2bItem4")}</li>
          <li>{p("section2bItem5")}</li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section3Title")}
        </h2>
        <p className="mb-2">{p("section3Intro")}</p>
        <ul className="list-disc ml-10 mb-4">
          <li>{p("section3Item1")}</li>
          <li>{p("section3Item2")}</li>
          <li>{p("section3Item3")}</li>
          <li>{p("section3Item4")}</li>
          <li>{p("section3Item5")}</li>
          <li>{p("section3Item6")}</li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section4Title")}
        </h2>
        <p className="mb-4">{p("section4Text")}</p>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section5Title")}
        </h2>
        <p className="mb-2">{p("section5Intro")}</p>
        <ul className="list-disc ml-10 mb-4">
          <li>{p("section5Item1")}</li>
          <li>{p("section5Item2")}</li>
          <li>{p("section5Item3")}</li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section6Title")}
        </h2>
        <p className="mb-4">{p("section6Text")}</p>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section7Title")}
        </h2>
        <p className="mb-2">{p("section7Intro")}</p>
        <ul className="list-disc ml-10 mb-4">
          <li>{p("section7Item1")}</li>
          <li>{p("section7Item2")}</li>
          <li>{p("section7Item3")}</li>
          <li>{p("section7Item4")}</li>
          <li>{p("section7Item5")}</li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section8Title")}
        </h2>
        <p className="mb-2">{p("section8Intro")}</p>
        <ul className="list-disc ml-10 mb-4">
          <li>{p("section8Item1")}</li>
          <li>{p("section8Item2")}</li>
          <li>{p("section8Item3")}</li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section9Title")}
        </h2>
        <p className="mb-4">{p("section9Text")}</p>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section10Title")}
        </h2>
        <p className="mb-4">{p("section10Text")}</p>

        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          {p("section11Title")}
        </h2>
        <p className="mb-4">{p("section11Text")}</p>
      </div>
    </div>
  );
}