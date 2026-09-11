import type { Metadata } from 'next';
import Link from 'next/link';
import { STARS } from '@/lib/stars-data';

export const metadata: Metadata = {
  title: 'The 14 Main Stars of Zi Wei Dou Shu — Star-by-Star Guide',
  description:
    'In-depth guides to all 14 main stars of Zi Wei Dou Shu: Ziwei, Tianji, Tai Yang, Wu Qu, Tian Tong, Lian Zhen, Tian Fu, Tai Yin, Tan Lang, Ju Men, Tian Xiang, Tian Liang, Qi Sha, and Po Jun.',
  keywords: ['ziwei doushu stars', '14 main stars', 'purple star astrology stars', 'ziwei emperor star meaning'],
  alternates: { canonical: 'https://purplestar.cc/stars/' },
  openGraph: {
    title: 'The 14 Main Stars of Zi Wei Dou Shu',
    description: 'Star-by-star guides to the 14 major stars of Chinese astrology — personality, career, love, and chart meaning.',
    type: 'website',
    url: 'https://purplestar.cc/stars/',
    siteName: 'PurpleStar',
    locale: 'en_US',
    images: [
      {
        url: 'https://purplestar.cc/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The 14 Main Stars of Zi Wei Dou Shu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 14 Main Stars of Zi Wei Dou Shu',
    description: 'Star-by-star guides to the 14 major stars of Chinese astrology.',
    images: ['https://purplestar.cc/og-image.png'],
  },
};

const IMPERIAL = ['zi-wei', 'tian-ji', 'tai-yang', 'wu-qu', 'tian-tong', 'lian-zhen'];
const TREASURY = ['tian-fu', 'tai-yin', 'tan-lang', 'ju-men', 'tian-xiang', 'tian-liang'];
const WARRIOR = ['qi-sha', 'po-jun'];

export default function StarsIndex() {
  const byFamily = (slugs: string[]) => slugs.map((s) => STARS.find((st) => st.slug === s)!);

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <span>The 14 Stars</span>
      </nav>

      <header className="mb-10 text-center">
        <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-3">Star Encyclopedia</div>
        <h1 className="font-display text-4xl md:text-6xl mb-4">The 14 Main Stars</h1>
        <p className="text-imperial-parchment/70 text-lg max-w-2xl mx-auto">
          Every major star of Zi Wei Dou Shu, in depth: personality, career,
          love, and what it means in each palace of your chart.
        </p>
      </header>

      {[
        { title: 'The Imperial Family (紫微星系)', stars: byFamily(IMPERIAL) },
        { title: 'The Treasury Family (天府星系)', stars: byFamily(TREASURY) },
        { title: 'The Warrior Family (杀破狼系)', stars: byFamily(WARRIOR) },
      ].map((family) => (
        <section key={family.title} className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-5 text-imperial-gold">{family.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {family.stars.map((star) => (
              <Link
                key={star.slug}
                href={`/stars/${star.slug}/`}
                className="purple-card rounded-2xl p-6 hover:border-imperial-gold transition-colors block"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-serif text-2xl text-imperial-gold">{star.chinese}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-imperial-parchment/40">
                    {star.element}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-imperial-parchment mb-1">
                  {star.pinyin} — {star.epithet}
                </h3>
                <p className="text-xs text-imperial-parchment/60">{star.role}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="text-center mt-12">
        <Link href="/" className="gold-btn inline-block">Find My Stars — Free Chart →</Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'The 14 Main Stars of Zi Wei Dou Shu',
            itemListElement: STARS.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: `${s.pinyin} (${s.chinese}) — ${s.epithet}`,
              url: `https://purplestar.cc/stars/${s.slug}/`,
            })),
          }),
        }}
      />
    </main>
  );
}
