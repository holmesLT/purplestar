import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STARS, getStar } from '@/lib/stars-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return STARS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const star = getStar(slug);
  if (!star) return {};
  const url = `https://purplestar.cc/stars/${star.slug}/`;
  return {
    title: star.metaTitle,
    description: star.metaDescription,
    keywords: [
      `${star.pinyin} star`,
      `${star.pinyin} zi wei dou shu`,
      `${star.chinese} star meaning`,
      'chinese astrology star',
    ],
    alternates: { canonical: url },
    openGraph: {
      title: star.metaTitle,
      description: star.metaDescription,
      type: 'article',
      url,
      siteName: 'PurpleStar',
      locale: 'en_US',
      images: [
        {
          url: 'https://purplestar.cc/og-image.png',
          width: 1200,
          height: 630,
          alt: star.metaTitle,
        },
      ],
      publishedTime: '2026-09-12T00:00:00.000Z',
      authors: ['PurpleStar'],
    },
    twitter: {
      card: 'summary_large_image',
      title: star.metaTitle,
      description: star.metaDescription,
      images: ['https://purplestar.cc/og-image.png'],
    },
  };
}

export default async function StarPage({ params }: Props) {
  const { slug } = await params;
  const star = getStar(slug);
  if (!star) notFound();

  const url = `https://purplestar.cc/stars/${star.slug}/`;

  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <Link href="/stars/" className="text-imperial-gold hover:underline">The 14 Stars</Link>
        <span className="mx-2">›</span>
        <span>{star.pinyin}</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-serif text-5xl text-imperial-gold">{star.chinese}</span>
            <span className="text-xs tracking-[0.25em] uppercase text-imperial-parchment/40">
              {star.element} · {star.role}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            The {star.pinyin} Star: {star.epithet}
          </h1>
          <p className="text-imperial-parchment/70 text-lg">{star.intro}</p>
        </header>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Personality</h2>
        <p className="mb-4 leading-relaxed">{star.personalityIntro}</p>
        <p className="mb-2 leading-relaxed">
          <strong>Strengths:</strong> {star.strengths.join(' ')}
        </p>
        {star.watchouts.map((w, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            <strong>Watch-outs:</strong> {w}
          </p>
        ))}

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Career</h2>
        {star.career.map((c, i) => (
          <p key={i} className="mb-4 leading-relaxed">{c}</p>
        ))}

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Love &amp; Relationships</h2>
        {star.love.map((l, i) => (
          <p key={i} className="mb-4 leading-relaxed">{l}</p>
        ))}

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">
          {star.pinyin} in the 12 Palaces
        </h2>
        <p className="mb-4 leading-relaxed">{star.palacesIntro}</p>
        <ul className="mb-6 space-y-3">
          {star.palaces.map((p, i) => (
            <li key={i} className="leading-relaxed">
              <strong>{star.pinyin} in the {p.palace}</strong> — {p.meaning}
            </li>
          ))}
        </ul>

        <div className="text-center my-10">
          <Link href="/" className="gold-btn inline-block">
            Where Is Your {star.pinyin} Star? Free Chart →
          </Link>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">
          Frequently Asked Questions
        </h2>
        {star.faq.map((f, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-display text-xl mb-2 text-imperial-parchment">{f.q}</h3>
            <p className="leading-relaxed">{f.a}</p>
          </div>
        ))}

        <hr className="my-10 border-imperial-gold/20" />
        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          {star.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="hover:text-imperial-gold">{r.label}</Link>
            </li>
          ))}
        </ul>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: star.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: star.metaTitle,
            description: star.metaDescription,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            url,
            datePublished: '2026-09-12',
            dateModified: '2026-09-12',
            author: { '@type': 'Organization', name: 'PurpleStar', url: 'https://purplestar.cc' },
            publisher: { '@type': 'Organization', name: 'PurpleStar', url: 'https://purplestar.cc' },
            inLanguage: 'en-US',
            about: [
              { '@type': 'Thing', name: `${star.pinyin} (${star.chinese})` },
              { '@type': 'Thing', name: 'Zi Wei Dou Shu' },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'PurpleStar', item: 'https://purplestar.cc/' },
              { '@type': 'ListItem', position: 2, name: 'The 14 Stars', item: 'https://purplestar.cc/stars/' },
              { '@type': 'ListItem', position: 3, name: star.pinyin, item: url },
            ],
          }),
        }}
      />
    </main>
  );
}
