import { ReactNode } from "react";
import { notFound } from "next/navigation";
import i18nConfig from "@/i18n/i18nConfig";
import LayoutWrapper from "../layout-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/CookieConsent";
import { Lexend } from "next/font/google";
import dynamic from "next/dynamic";
import { MetaPixelNoScript } from "@/components/MetaPixel";
import { GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import DeferredScripts from "@/components/DeferredScripts"; // Import here

const PageUpButton = dynamic(() => import("@/components/ui/PageUpButton"));

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});


function getOrganizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IT Solutions Worldwide", // TODO: confirm exact legal/brand name
    alternateName: "ITWW",
    url: `https://www.itsolutionsworldwide.com/${locale}`, // TODO: confirm base domain
    logo: "https://www.itsolutionsworldwide.com/logo.png", // TODO: absolute URL to logo file
    description:
      "IT Solutions Worldwide provides remote staff outsourcing and IT services.", // TODO: refine wording
   address: {
  "@type": "PostalAddress",
  streetAddress: "Mandenmakerstraat 100C",
  addressLocality: "Hoogvliet Rotterdam",
  postalCode: "3194 DG",
  addressCountry: "NL",
},
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@itsolutionsworldwide.com", // TODO: confirm
      telephone: "31 10 766 0786", // TODO
      areaServed: ["NL", "EN"],
      availableLanguage: ["English", "Dutch"],
    },
    sameAs: [
      // TODO: add real social/profile URLs, e.g.:
      // "https://www.linkedin.com/company/it-solutions-worldwide",
      // "https://www.facebook.com/itsolutionsworldwide",
    ],
  };
}

export default async function LocaleLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  const organizationSchema = getOrganizationSchema(locale);

  return (
    <html lang={locale} className={lexend.className} suppressHydrationWarning>
      <head>
        {/* Completely clean head - No blocking scripts here */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="mx-2 md:mx-0 lg:mx-0">
        <MetaPixelNoScript pixelId="1766535074073515" />
        <GoogleTagManagerNoScript gtmId="GTM-PH8FNRK6" />
        
        {/* Scripts load dynamically after user interaction or delay */}
        <DeferredScripts />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <LayoutWrapper locale={locale}>
            {props.children}
            <CookieConsent />
          </LayoutWrapper>
        </ThemeProvider>
        <PageUpButton />
      </body>
    </html>
  );
}