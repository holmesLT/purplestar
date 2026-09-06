import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Trailing slash on each disallow path so it matches an exact directory,
        // not a prefix. Without it, `/chart` would also match `/chart-overview` etc.
        disallow: [
          '/api/',
          '/chart/',
          '/chart?id=*',
          '/report/',
          '/payment-return/',
          '/payment-return-crypto/',
        ],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://purplestar.cc'}/sitemap.xml`,
  };
}
