import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/chart/'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://purplestar.techhouse.ccwu.cc'}/sitemap.xml`,
  };
}
