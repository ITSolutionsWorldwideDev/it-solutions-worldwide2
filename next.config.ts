// next.config.ts
import type { NextConfig } from "next";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// --- Content-Security-Policy ---
// Adjust the domains below to match whatever you actually load:
// analytics scripts, fonts, embedded iframes (maps/video), API hosts, etc.
// Keep this in sync with next.config's `images.remotePatterns` and any
// third-party script tags in your layout/head.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.itsolutionsworldwide.com https://images.unsplash.com https://www.google-analytics.com https://www.gstatic.com;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com;
  frame-src 'self' https://www.google.com https://maps.google.com;
  frame-ancestors 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`
  // NOTE: use \s+ (not \s{2,}) so a single stray newline (e.g. from a line
  // with no leading indentation) still gets collapsed into a space instead
  // of leaking a raw \n into the header value, which crashes Node with
  // "Invalid character in header content".
  .replace(/\s+/g, " ")
  .trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    // Forces HTTPS for 2 years, including subdomains.
    // NOTE: only send this once you're 100% sure the site is always served
    // over HTTPS everywhere (including subdomains) — it's hard to undo
    // quickly for users who already received it.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Prevents the site from being embedded in an <iframe> elsewhere (clickjacking).
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Stops browsers from MIME-sniffing a response away from the declared Content-Type.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Controls how much referrer info is sent on cross-origin navigations/requests.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Disables powerful browser features/APIs you're not using.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Legacy XSS filter header — mostly a no-op in modern browsers but
    // harmless to keep for older clients.
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.itsolutionsworldwide.com",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      { source: "/contact-us", destination: "/en/contact-us", permanent: true },
      { source: "/privacy-policy", destination: "/en/privacy-policy", permanent: true },
      { source: "/blogs", destination: "/en/blogs", permanent: true },
      { source: "/career", destination: "/en/career", permanent: true },
      { source: "/about-us", destination: "/en/about-us", permanent: true },
      { source: "/oracle-cloud", destination: "/en/oracle-cloud", permanent: true },
      { source: "/scm-services", destination: "/en/scm-services", permanent: true },
      { source: "/supply-health-check-info", destination: "/en/supply-health-check-info", permanent: true },
      { source: "/supply-health-check", destination: "/en/supply-health-check", permanent: true },
      { source: "/staffing-support", destination: "/en/staffing-support", permanent: true },
      { source: "/digital-services", destination: "/en/digital-services", permanent: true },
      { source: "/iso-certified", destination: "/en/iso-certified", permanent: true },
      { source: "/profile", destination: "/en/profile", permanent: true },
      { source: "/it-support", destination: "/en/it-support", permanent: true },
      { source: "/terms-and-conditions", destination: "/en/terms-and-conditions", permanent: true },
      {
        source: "/en/digital-services/website-design-%26-development",
        destination: "/en/digital-services/website-design-development",
        permanent: true,
      },
      {
        source: "/nl/digital-services/website-design-%26-development",
        destination: "/nl/digital-services/website-design-development",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Applies to every route — security headers should be global.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/favicon-:size.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);