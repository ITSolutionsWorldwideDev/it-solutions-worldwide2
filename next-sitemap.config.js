/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://itsolutionsworldwide.com';// process.env.NEXT_PUBLIC_SITE_URL || 

module.exports = {
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
    // {
    //   href: `${siteUrl}/de`,
    //   hreflang: 'de',
    // },
  ],
};
