import type { MetadataRoute } from "next";
import { headers } from "next/headers";

const PRODUCTION_HOST = "www.itsolutionsworldwide.com";
const BARE_HOST = "itsolutionsworldwide.com";

function isTestHost(host: string): boolean {
  const normalizedHost = host.split(":")[0].toLowerCase();
  if (normalizedHost === PRODUCTION_HOST || normalizedHost === BARE_HOST) return false;
  return normalizedHost.includes("test.");
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const hostHeader = headersList.get("host") || "";

  // Defense in depth: even though middleware already 404s the entire test
  // host before this can run, if robots.ts is ever hit directly on a test
  // deployment, it still disallows everything and skips the sitemap.
  if (isTestHost(hostHeader)) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/.well-known/", "/*?_rsc=", "/job/"],
    },
    sitemap: "https://www.itsolutionsworldwide.com/sitemap.xml",
  };
}