// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'nl'];
const defaultLocale = 'en';

import i18nConfig from './i18n/i18nConfig';

/* export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl;

  // If pathname has no locale prefix, redirect to default locale or detected locale
  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (loc) => !pathname.startsWith(`/${loc}`),
  );

  if (pathnameIsMissingLocale) {
    // Detect language from cookie or header, fallback to defaultLocale
    const cookieLocale = request.cookies.get(i18nConfig.localeCookie)?.value;
    const detectedLocale = cookieLocale || request.headers.get('accept-language')?.split(',')[0].split('-')[0] || i18nConfig.defaultLocale;

    // Use prefixDefault to decide whether to add default locale prefix or not
    const redirectLocale = i18nConfig.prefixDefault ? detectedLocale : (detectedLocale === i18nConfig.defaultLocale ? '' : detectedLocale);

    return NextResponse.redirect(new URL(`/${redirectLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
} */



export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files and API routes
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes('_next')
  ) {
    return;
  }

  // Already has a locale in path
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}


// Apply middleware on all routes except _next and api
export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
