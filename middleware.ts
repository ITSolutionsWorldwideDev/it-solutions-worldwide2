import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import i18nConfig from "./i18n/i18nConfig";
import { getLegacyRedirect, isGonePath } from "./lib/legacyRedirects";

const locales = i18nConfig.locales;
const defaultLocale = i18nConfig.defaultLocale;

const PRODUCTION_HOST = "www.itsolutionsworldwide.com";
const BARE_HOST = "itsolutionsworldwide.com";

function isStaticAssetPath(pathname: string): boolean {
  if (pathname.startsWith("/assets/")) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/uploads/")) return true;

  if (/\.(svg|png|jpe?g|webp|gif|ico|css|js|woff2?|txt|xml|json|pdf)$/i.test(pathname)) {
    return true;
  }
  return false;
}

function isTestHost(host: string): boolean {
  const normalizedHost = host.split(":")[0].toLowerCase();
  return (
    normalizedHost === PRODUCTION_HOST || normalizedHost === BARE_HOST
      ? false
      : normalizedHost.includes("test.")
  );
}

acceptLanguage.languages(locales);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  if (isTestHost(host)) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
        "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
        "Cache-Control": "no-store",
      },
    });
  }

  if (pathname.startsWith("/api") || isStaticAssetPath(pathname)) {
    return;
  }

  // --- Gone paths: hard 404, NO redirect at all ---
  // Wrong-case / duplicate / retired URLs live here (see lib/legacyRedirects.ts)
  if (isGonePath(pathname)) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-store",
      },
    });
  }

  const needsHostFix = host === BARE_HOST;

  if (request.nextUrl.searchParams.has("_rsc")) {
    const clean = request.nextUrl.clone();
    clean.searchParams.delete("_rsc");
    clean.hostname = PRODUCTION_HOST;
    return NextResponse.redirect(clean, 301);
  }

  const legacyTarget = getLegacyRedirect(pathname);
  if (legacyTarget) {
    const url = new URL(legacyTarget, request.url);
    if (needsHostFix) url.hostname = PRODUCTION_HOST;
    return NextResponse.redirect(url, 301);
  }

  // --- Determine target path (root or missing-locale) ---
  let targetPath: string | null = null;

  if (pathname === "/") {
    targetPath = "/en";
  } else {
    const pathnameIsMissingLocale = locales.every(
      (locale) => !pathname.startsWith(`/${locale}`)
    );
    if (pathnameIsMissingLocale) {
      const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
      const browserLocale = acceptLanguage.get(request.headers.get("accept-language") || "");
      const locale = cookieLocale || browserLocale || defaultLocale;
      targetPath = `/${locale}${pathname}`;
    }
  }

  if (needsHostFix || targetPath) {
    const url = request.nextUrl.clone();
    if (needsHostFix) url.hostname = PRODUCTION_HOST;
    if (targetPath) url.pathname = targetPath;
    const res = NextResponse.redirect(url, 301);
    if (targetPath) {
      res.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=59");
    }
    return res;
  }

  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};