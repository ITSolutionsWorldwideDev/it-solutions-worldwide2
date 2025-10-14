// app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig from '@/i18n/i18nConfig';
import { ThemeProvider } from '@/components/theme-provider';
import LayoutWrapper from '../layout-wrapper'; // one level up
import { Lexend } from 'next/font/google';
import '../globals.css';

// const lexend = Lexend({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   display: 'swap',
// });

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}


export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {

  const { locale } = params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound(); // Return 404 if locale is unsupported
  }
  /*  className={lexend.className} suppressHydrationWarning */

  return (
    // <html lang={locale} suppressHydrationWarning>
    //   <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper locale={locale}>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
    //   </body>
    // </html>
  );
}

/* import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig  from '@/i18n/i18nConfig';

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  if (!i18nConfig.locales.includes(locale)) {
    // if locale is not supported, show 404 or redirect
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
} */
