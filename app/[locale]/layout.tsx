// app/[locale]/layout.tsx

import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig from '@/i18n/i18nConfig';
import LayoutWrapper from '../layout-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import CookieConsent from '@/components/CookieConsent';

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
  );
}
