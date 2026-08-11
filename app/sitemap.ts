import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://purplestar.techhouse.ccwu.cc';
  const now = new Date();

  const learnPages = [
    { slug: 'ziwei-doushu-vs-bazi', priority: 0.9 },
    { slug: 'how-to-read-purple-star-astrology-chart', priority: 0.9 },
    { slug: 'ziwei-doushu-12-palaces-explained', priority: 0.85 },
    { slug: 'ziwei-doushu-14-main-stars', priority: 0.85 },
    { slug: 'ziwei-doushu-career-wealth-palace', priority: 0.8 },
    { slug: 'ziwei-doushu-vs-western-astrology', priority: 0.8 },
    { slug: 'is-ziwei-doushu-accurate', priority: 0.75 },
    { slug: 'ziwei-doushu-four-transformations-sihua', priority: 0.8 },
  ];

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...learnPages.map(({ slug, priority }) => ({
      url: `${baseUrl}/learn/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    })),
  ];
}
