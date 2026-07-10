/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.itsolutionsworldwide.com';
const enCommon = require("./public/locales/en/common.json");

const locales = ["en", "nl"];

// Detail/hire pages ke slugs — common.json se automatically extract
const outsourcingSlugs = Object.keys(enCommon)
  .filter((key) => key.startsWith("outsource-") || key.startsWith("staffing-"))
  .map((key) => key.replace(/^outsource-/, "").replace(/^staffing-/, ""));

// Category listing pages (business-support, design-services, etc.)
const outsourcingCategorySlugs = [
  "business-support",
  "design-services",
  "hire-roles",
  "marketing-analytics",
  "it-development",
];

const pages = [
  "", // homepage
  "/about-us",
  "/blogs",
  // "/blogs/[slug]",
  "/career",
  "/contact-us",
  "/digital-services",
  "/digital-services/ecommerce-development",
  "/digital-services/ppc-advertising",
  "/digital-services/seo-services",
  "/digital-services/social-media-marketing",
  "/digital-services/website-design-&-development",
  "/digital-services/website-design-&-development/inquiry",
  "/it-support",
  "/it-support/automation-services",
  "/it-support/erp-implementation",
  // "/it-support/erp-solutions",
  "/it-support/software-development",
  "/job-apply",
  "/logistics",
  // "/logistics/lean-&-six-sigma-implementation",
  // "/logistics/logistics-&-supply-chain-specialists",
  "/logistics/smart-warehouse-solutions",
  // "/logistics/warehouse-design-&-layouts",
  "/oracle-cloud",
  "/outsourcing",
  "/privacy-policy",
  "/profile",
  "/scm-services",
  "/scm-services/business-consultancy",
  "/scm-services/scm-consultancy",
  "/scm-services/supply-chain-performance-check",
  "/staffing-support",
  "/staffing-support/managed-staffing-services",
  "/staffing-support/remote-&-virtual-staffing",
  "/staffing-support/specialized-industry-staffing",
  "/staffing-support/staffing-consulting-services",
  "/staffing-support/temporary-staffing",
  // "/staffing-support/[slug]",
  "/supply-health-check",
  "/supply-health-check-info",
  "/thank-you",
];

// async function fetchBlogSlugs() {
//   const res = await fetch(`${siteUrl}/api/sitemap-slugs`);
//   const data = await res.json();
//   console.log(data)
//   return data.map((item) => item.slug); // ["seo-tips-2025", "webflow-guide", ...]
// }

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/.well-known/", "/*?_rsc=", "/job/"],
      },
    ],
  },

  // Disable automatic detection (App Router not supported)
  transform: async () => null,

  additionalPaths: async (config) => {
    const urls = [];

    //   const [blogSlugs, staffingSlugs] = await Promise.all([
    //   fetchBlogSlugs(),
    //   // fetchStaffingSlugs(),
    // ]);

    locales.forEach((locale) => {
      pages.forEach((p) => {
        // Special case: homepage
        if (p.includes("[slug]")) return;
        const loc = p === "" ? `/${locale}` : `/${locale}${p}`;

        urls.push({
          loc,
          changefreq: "weekly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        });
      });

      // Detail / hire pages (dynamic [slug] route)
      outsourcingSlugs.forEach((slug) => {
        urls.push({
          loc: `/${locale}/outsourcing/${slug}`,
          changefreq: "weekly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      });

      // Category listing pages
      outsourcingCategorySlugs.forEach((slug) => {
        urls.push({
          loc: `/${locale}/outsourcing/${slug}`,
          changefreq: "weekly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      });
    });

    return urls;
  },
};

/* module.exports = {
  siteUrl,
  generateRobotsTxt: true, // Generate robots.txt file
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500', '/privacy-policy'], // Optional
  alternateRefs: [
    {
      href: `${siteUrl}/en`,
      hreflang: 'en',
    },
    {
      href: `${siteUrl}/nl`,
      hreflang: 'nl',
    },
  ],
}; */