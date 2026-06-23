// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true, // 🔥 Yeh perfectly configured hai!
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
    ];
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/favicon-:size.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;