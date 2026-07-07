import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import i18nConfig from "./i18n/i18nConfig";
import { getLegacyRedirect, isGonePath } from "./lib/legacyRedirects";

const locales = i18nConfig.locales;
const defaultLocale = i18nConfig.defaultLocale;

const PRODUCTION_HOST = "www.itsolutionsworldwide.com";
const BARE_HOST = "itsolutionsworldwide.com";
const TEST_HOST = "test.itsolutionsworldwide.com";
const TEST_HOST_WWW = "www.test.itsolutionsworldwide.com";

function isStaticAssetPath(pathname: string): boolean {
  if (pathname.startsWith("/assets/")) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/uploads/")) return true;

  if (/\.(svg|png|jpe?g|webp|gif|ico|css|js|woff2?|txt|xml|json|pdf)$/i.test(pathname)) {
    return true;
  }
  return false;
}

acceptLanguage.languages(locales);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // --- Handle test subdomain ---
  const isTestDomain = host === TEST_HOST || host === TEST_HOST_WWW || host.includes("test.");

  if (isTestDomain) {
    // Special case: serve robots.txt for test domain with Disallow: /
    if (pathname === '/robots.txt') {
      return new NextResponse('User-agent: *\nDisallow: /\n', {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }

    // Special case: serve sitemap.xml for test domain (empty)
    if (pathname === '/sitemap.xml') {
      return new NextResponse('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
        status: 200,
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    }

    // Everything else gets 404
    return new NextResponse("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  }

  if (pathname.startsWith("/api") || isStaticAssetPath(pathname)) {
    return;
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

  if (pathname === "/index" || pathname === "/index/") {
    const url = new URL("/", request.url);
    if (needsHostFix) url.hostname = PRODUCTION_HOST;
    return NextResponse.redirect(url, 301);
  }

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