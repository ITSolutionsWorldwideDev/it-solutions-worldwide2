import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/.well-known/',
        '/*?_rsc=',
        '/job/',
      ],
    },
    sitemap: 'https://www.itsolutionsworldwide.com/sitemap.xml',
  };
}
