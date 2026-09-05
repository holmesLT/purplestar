// Cloudflare Pages Function: /sitemap.xml
//
// Why this exists:
//   Cloudflare Pages automatically adds `x-content-type-options: nosniff` to
//   all static file responses. Google Search Console's sitemap parser is
//   known to silently reject sitemaps when this header is present on an
//   `application/xml` response from Cloudflare Pages (we observed 0 URLs
//   read even though the XML was perfect). Serving the sitemap from a
//   Pages Function lets us omit `nosniff` and set exactly the headers GSC
//   expects.
//
// Headers:
//   - Content-Type: application/xml; charset=utf-8 (GSC requirement)
//   - Cache-Control: public, max-age=3600, must-revalidate (refresh hourly)
//   - X-Robots-Tag: all (in case any intermediate cache strips meta robots)
//
// Pages Functions take precedence over static files at the same path, so
// this overrides `public/sitemap.xml` for everyone (GSC, Bing, users, etc.).
//
// Source of truth: keep in sync with app/sitemap.ts (Next.js build).

const SITE_HOST = 'https://purplestar.cc';

// Lastmod timestamps — fixed (no auto-regeneration per request) so Google
// sees a consistent sitemap across refreshes. Update manually when articles
// are actually edited.
const HOMEPAGE_LASTMOD = '2026-08-13';
const LEARN_HUB_LASTMOD = '2026-08-13';
const ARTICLES_LASTMOD = '2026-08-12';

const LEARN_PAGES = [
  { slug: 'ziwei-doushu-vs-bazi', priority: 0.9 },
  { slug: 'how-to-read-purple-star-astrology-chart', priority: 0.9 },
  { slug: 'ziwei-doushu-12-palaces-explained', priority: 0.85 },
  { slug: 'ziwei-doushu-14-main-stars', priority: 0.85 },
  { slug: 'ziwei-doushu-career-wealth-palace', priority: 0.8 },
  { slug: 'ziwei-doushu-vs-western-astrology', priority: 0.8 },
  { slug: 'is-ziwei-doushu-accurate', priority: 0.75 },
  { slug: 'ziwei-doushu-four-transformations-sihua', priority: 0.8 },
];

function buildSitemap() {
  const urls = [
    {
      loc: `${SITE_HOST}/`,
      lastmod: HOMEPAGE_LASTMOD,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      loc: `${SITE_HOST}/learn/`,
      lastmod: LEARN_HUB_LASTMOD,
      changefreq: 'weekly',
      priority: '0.9',
    },
    ...LEARN_PAGES.map(({ slug, priority }) => ({
      loc: `${SITE_HOST}/learn/${slug}/`,
      lastmod: ARTICLES_LASTMOD,
      changefreq: 'monthly',
      priority: priority.toFixed(1),
    })),
  ];

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function onRequestGet() {
  return new Response(buildSitemap(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      // Intentionally NO `X-Content-Type-Options: nosniff` here.
      // Cloudflare Pages would add it automatically if this were a static
      // file; serving as a function lets us drop it. GSC's strict parser
      // is the trigger for this whole hack.
      'X-Robots-Tag': 'all, index, follow',
    },
  });
}

export function onRequestHead() {
  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
