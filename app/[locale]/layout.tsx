import { ReactNode } from "react";
import { notFound } from "next/navigation";
import i18nConfig from "@/i18n/i18nConfig";
import LayoutWrapper from "../layout-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";

// ✅ Yeh add karo
export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    alternates: {
      canonical: `https://www.itsolutionsworldwide.com/${locale}`,
    },
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

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LayoutWrapper locale={locale}>
        {props.children}
        <CookieConsent />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
