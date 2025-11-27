/** @type {import('next-sitemap').IConfig} */
const siteUrl =  process.env.NEXT_PUBLIC_SITE_URL ||  'https://www.itsolutionsworldwide.com';

const locales = ["en", "nl"];
const pages = [
  "", // homepage
  "/about-us",
  "/blogs",
  "/blogs/[slug]",
  "/career",
  "/contact-us",
  "/digital-services",
  "/digital-services/ecommerce-development",
  "/digital-services/ppc-advertising",
  "/digital-services/seo-services",
  "/digital-services/social-media-marketing",
  "/digital-services/website-design-&-development",
  "/it-support",
  "/it-support/automation-services",
  "/it-support/erp-implementation",
  "/it-support/erp-solutions",
  "/it-support/software-development",
  "/job-apply",
  "/logistics",
  "/logistics/lean-&-six-sigma-implementation",
  "/logistics/logistics-&-supply-chain-specialists",
  "/logistics/smart-warehouse-solutions",
  "/logistics/warehouse-design-&-layouts",
  "/oracle-cloud",
  "/oracle-cloud/cloud-data-&-ai-solutions",
  "/oracle-cloud/cloud-transformation-&-migration",
  "/privacy-policy",
  "/profile",
  "/scm-services",
  "/scm-services/business-consultancy",
  "/scm-services/scm-consultancy",
  "/scm-services/scm-execution",
  "/scm-services/supply-chain-optimization-study",
  "/scm-services/supply-chain-performance-check",
  "/staffing-support",
  "/staffing-support/managed-staffing-services",
  "/staffing-support/remote-&-virtual-staffing",
  "/staffing-support/specialized-industry-staffing",
  "/staffing-support/staffing-consulting-services",
  "/staffing-support/temporary-staffing",
  "/supply-health-check",
  "/supply-health-check-info",
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // Disable automatic detection (App Router not supported)
  transform: async () => null,

  additionalPaths: async (config) => {
    const urls = [];

    locales.forEach((locale) => {
      pages.forEach((p) => {
        // Special case: homepage
        const loc = p === "" ? `/${locale}` : `/${locale}${p}`;

        urls.push({
          loc,
          changefreq: "weekly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        });
      });
    });

    // locales.forEach((locale) => {
    //   pages.forEach((p) => {
    //     urls.push({
    //       loc: `/${locale}${p}`,
    //       changefreq: "weekly",
    //       priority: 0.7,
    //       lastmod: new Date().toISOString(),
    //     });
    //   });
    // });

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
