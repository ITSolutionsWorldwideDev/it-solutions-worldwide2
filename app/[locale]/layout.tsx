import { ReactNode } from "react";
import { notFound } from "next/navigation";
import i18nConfig from "@/i18n/i18nConfig";
import LayoutWrapper from "../layout-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/CookieConsent";
import { Lexend } from "next/font/google";
import dynamic from "next/dynamic";
import { MetaPixelScript, MetaPixelNoScript } from "@/components/MetaPixel";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
// 1. Import the Clarity component
import Clarity from "@microsoft/clarity";

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

  // 2. Initialize Clarity (This handles the script injection correctly)
  if (typeof window !== "undefined") {
    Clarity.init("wgjwbc5ugr");
  }

  return (
    <html lang={locale} className={lexend.className} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <MetaPixelScript pixelId="1766535074073515" enabled={true} />
        <GoogleTagManagerScript gtmId="GTM-PH8FNRK6" />
      </head>
      <body className="mx-2 md:mx-0 lg:mx-0">
        <MetaPixelNoScript pixelId="1766535074073515" />
        <GoogleTagManagerNoScript gtmId="GTM-PH8FNRK6" />
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
        {/* 3. The manual <Script> tag for Clarity is removed entirely */}
        <PageUpButton />
      </body>
    </html>
  );
}