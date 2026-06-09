import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig from '@/i18n/i18nConfig';
import LayoutWrapper from '../layout-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import CookieConsent from '@/components/CookieConsent';
import '../globals.css';

export default async function LocaleLayout(
  props: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
  }
): Promise<ReactNode> {
  const params = await props.params;

  const {
    children
  } = props;

  const { locale } = params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* PERFORMANCE FIX: Establish early handshakes with external origins to stop render-blocking delays */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetching as a fallback for third-party trackers or scripts */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper locale={locale}>
            {children}
            <CookieConsent />
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}