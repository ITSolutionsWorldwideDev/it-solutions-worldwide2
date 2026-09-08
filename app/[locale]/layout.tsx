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

export default async function LocaleLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={lexend.className} suppressHydrationWarning>
      <head>
        {/* Completely clean head - No blocking scripts here */}
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