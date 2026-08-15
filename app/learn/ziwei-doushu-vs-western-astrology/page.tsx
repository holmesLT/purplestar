import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ziwei Doushu vs Western Astrology: How Do They Compare?',
  description: 'A clear comparison of Ziwei Doushu (Purple Star Astrology) and Western astrology — origins, structure, philosophy, and which one to choose for your first reading.',
  keywords: ['ziwei vs western astrology', 'purple star vs zodiac', 'chinese vs western astrology', 'which astrology system'],
  openGraph: { title: 'Ziwei Doushu vs Western Astrology', type: 'article' },
  alternates: { canonical: 'https://purplestar.cc/learn/ziwei-doushu-vs-western-astrology/' },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-6"><Link href="/" className="text-imperial-gold hover:underline text-sm">← PurpleStar Home</Link></div>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Comparison</div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Ziwei Doushu vs Western Astrology: How Do They Compare?</h1>
          <p className="text-imperial-parchment/70 text-lg">Two great traditions of star-reading, born a continent apart. Here's where they agree, where they diverge, and how to choose between them.</p>
        </header>

        <div className="bg-imperial-purple/40 border-l-4 border-imperial-gold p-4 my-6 rounded">
          <p className="font-semibold text-imperial-gold mb-2">In a nutshell</p>
          <p className="text-sm text-imperial-parchment/90">Western astrology centers on the <strong>ecliptic and the zodiac</strong>. Ziwei Doushu centers on the <strong>polar sky and the imperial court</strong>. Western astrology is solar and psychological. Ziwei Doushu is polar and structural. They often arrive at similar insights through very different maps.</p>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Where they come from</h2>
        <p className="mb-4 leading-relaxed">
          <strong>Western astrology</strong> emerged in ancient Mesopotamia over 3,000 years ago, codified by the Greeks and Romans. It tracks the apparent path of the Sun (the ecliptic) through twelve zodiac signs over a year. Planets — including the Sun and Moon — move through these signs and form aspects to each other.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Ziwei Doushu</strong> emerged in imperial China around the Tang dynasty, likely formalized during the Song. It tracks the position of stars relative to the <em>celestial north pole</em> — the point around which all visible sky rotates. Instead of zodiac signs, it uses a 12-palace chart mapped to the polar constellations and the imperial court.
        </p>
        <p className="mb-4 leading-relaxed">
          Both systems are sophisticated, multi-millennial traditions with sophisticated internal logic. Neither is "right" or "wrong" — they're different windows onto the same sky.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Core structural differences</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-imperial-gold/30">
                <th className="text-left py-2 text-imperial-gold">Element</th>
                <th className="text-left py-2 text-imperial-gold">Western Astrology</th>
                <th className="text-left py-2 text-imperial-gold">Ziwei Doushu</th>
              </tr>
            </thead>
            <tbody className="text-imperial-parchment/90">
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Center of sky</td><td className="py-2">Ecliptic (Sun's path)</td><td className="py-2">North celestial pole</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">House system</td><td className="py-2">12 houses (varies by system)</td><td className="py-2">12 fixed palaces</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Main actors</td><td className="py-2">10 planets + signs</td><td className="py-2">14 main stars</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Aspect logic</td><td className="py-2">Angles (conjunction, trine, square)</td><td className="py-2">Palace relationships + Four Transformations</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Timing</td><td className="py-2">Transits, progressions, solar returns</td><td className="py-2">Decade luck pillars (大运), annual flows (流年)</td></tr>
              <tr><td className="py-2 font-semibold">Visual</td><td className="py-2">Circular wheel</td><td className="py-2">Square 4×3 grid</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Philosophical differences</h2>
        <p className="mb-4 leading-relaxed">
          <strong>Western astrology</strong> is more psychological in modern practice. A birth chart is read as a map of the psyche: where you're luminous, where you're conflicted, what you project. Many modern Western astrologers emphasize self-understanding over prediction.
        </p>
        <p className="mb-4 leading-relaxed">
          <strong>Ziwei Doushu</strong> is more structural. It's less about "inner child" and more about <em>role and function</em> — what role you play in your family, your workplace, your community. The imperial-court metaphor (Emperor, Minister, General, Advisor) is baked in. You are part of an order.
        </p>
        <p className="mb-4 leading-relaxed">
          Another key difference: Western astrology uses <strong>aspects</strong> (geometric angles between planets) to time events and reveal tensions. Ziwei Doushu uses <strong>Four Transformations</strong> (禄权科忌) flying between stars, which dynamically activate palaces as the decadal luck cycle progresses.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Where they overlap beautifully</h2>
        <p className="mb-4 leading-relaxed">
          Despite different geometries, both systems agree on several patterns:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li><strong>Twelve life themes.</strong> Both have 12 sectors covering self, money, work, partnership, family, health, etc.</li>
          <li><strong>Inner / outer axis.</strong> Western "1st house ↔ 7th house" mirrors Ziwei "Life Palace ↔ Travel Palace".</li>
          <li><strong>Saturn return ≈ major luck pillar shifts.</strong> Around age 29, Western astrology emphasizes the Saturn return; Ziwei Doushu typically flips into a new decadal luck pillar around the same age. Both traditions flag this as a maturity threshold.</li>
          <li><strong>Hard aspects ≈ 化忌.</strong> A Western "Saturn square Sun" feels similar to a Ziwei "化忌 touching the Life Palace" — friction that demands integration.</li>
        </ul>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Which one should you start with?</h2>
        <p className="mb-4 leading-relaxed">
          If you're a complete beginner and you only have time for one: <strong>start with whichever speaks to you visually</strong>. Many Western readers feel instantly at home with a circular wheel. Many readers drawn to structure and Eastern philosophy find Ziwei's grid more readable.
        </p>
        <p className="mb-4 leading-relaxed">
          If your question is about <em>specific events and timing</em>, both systems have answers, but Western transits are generally easier to learn first because software does the math for you. If your question is about <em>life themes and personality structure</em>, Ziwei Doushu's palace system is unusually explicit.
        </p>
        <p className="mb-4 leading-relaxed">
          Most serious astrologers — Western and Chinese — eventually use both. They are complementary languages describing the same mystery.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Try Ziwei for free</h2>
        <p className="mb-6 leading-relaxed">
          PurpleStar generates your free Ziwei Doushu chart in seconds — no signup required. See how the 12-palace chart feels compared to your Western birth chart, and decide for yourself.
        </p>
        <Link href="/" className="gold-btn inline-block">Generate My Free Chart →</Link>

        <hr className="my-10 border-imperial-gold/20" />
        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related Articles</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          <li><Link href="/learn/ziwei-doushu-vs-bazi/" className="hover:text-imperial-gold">Ziwei Doushu vs Bazi</Link></li>
          <li><Link href="/learn/how-to-read-purple-star-astrology-chart/" className="hover:text-imperial-gold">How to Read a Ziwei Doushu Chart</Link></li>
          <li><Link href="/learn/ziwei-doushu-12-palaces-explained/" className="hover:text-imperial-gold">The 12 Life Palaces</Link></li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Ziwei Doushu vs Western Astrology: How Do They Compare?',
        description: 'A clear comparison of Ziwei Doushu (Purple Star Astrology) and Western astrology — origins, structure, philosophy, and which one to choose for your first reading.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://purplestar.cc/learn/ziwei-doushu-vs-western-astrology/',
        },
        url: 'https://purplestar.cc/learn/ziwei-doushu-vs-western-astrology/',
        datePublished: '2026-08-12',
        dateModified: '2026-08-15',
        author: {
          '@type': 'Organization',
          name: 'PurpleStar',
          url: 'https://purplestar.cc',
        },
        publisher: {
          '@type': 'Organization',
          name: 'PurpleStar',
          url: 'https://purplestar.cc',
        },
        keywords: 'ziwei vs western astrology, purple star vs zodiac, chinese vs western astrology',
        inLanguage: 'en-US',
        about: [
          { '@type': 'Thing', name: 'Ziwei Doushu' },
          { '@type': 'Thing', name: 'Western Astrology' },
          { '@type': 'Thing', name: 'Astrology Comparison' },
        ],
      }) }} />
    </main>
  );
}
