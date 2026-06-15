// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import i18nConfig from "./i18n/i18nConfig";
import { getLegacyRedirect, isGonePath } from "./lib/legacyRedirects";

const locales = i18nConfig.locales;
const defaultLocale = i18nConfig.defaultLocale;

function isStaticAssetPath(pathname: string): boolean {
  if (pathname.startsWith("/assets/")) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/uploads/")) return true; // ✅ yeh add karo

  if (
    /\.(svg|png|jpe?g|webp|gif|ico|css|js|woff2?|txt|xml|json|pdf)$/i.test(
      pathname,
    )
  ) {
    return true;
  }
  return false;
}

acceptLanguage.languages(locales);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip Next.js RSC query params (should not be indexed)
  if (request.nextUrl.searchParams.has("_rsc")) {
    const clean = request.nextUrl.clone();
    clean.searchParams.delete("_rsc");
    return NextResponse.redirect(clean, 301);
  }

  // Removed URLs → 410 Gone
  if (isGonePath(pathname)) {
    return new NextResponse(null, { status: 410 });
  }

  // Legacy URL → canonical path (before static-file bypass)
  const legacyTarget = getLegacyRedirect(pathname);
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget, request.url), 301);
  }

  if (pathname === "/index" || pathname === "/index/") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  if (pathname.startsWith("/api") || isStaticAssetPath(pathname)) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );

  if (pathnameIsMissingLocale) {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const browserLocale = acceptLanguage.get(
      request.headers.get("accept-language") || "",
    );
    const locale = cookieLocale || browserLocale || defaultLocale;
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
const res = NextResponse.redirect(redirectUrl, 301);
    // 301 permanent redirect for SEO - passes link authority to canonical URL
    res.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=59",
    );
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
