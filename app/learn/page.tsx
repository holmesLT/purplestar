import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn Ziwei Doushu — Free Guides for Beginners & Beyond',
  description: 'In-depth, beginner-friendly guides to Ziwei Doushu (Purple Star Astrology). Learn to read the 12 palaces, 14 main stars, and Four Transformations in your own chart.',
  keywords: ['learn ziwei doushu', 'ziwei doushu guide', 'purple star astrology tutorial'],
  alternates: { canonical: 'https://purplestar.cc/learn/' },
};

const ARTICLES = [
  { href: '/learn/how-to-read-purple-star-astrology-chart/', title: 'How to Read a Ziwei Chart (Step by Step)', tag: 'Beginner', desc: 'A 5-step walkthrough for absolute beginners.' },
  { href: '/learn/ziwei-doushu-12-palaces-explained/', title: 'The 12 Life Palaces Explained', tag: 'Foundations', desc: 'Each palace and what it governs in your life.' },
  { href: '/learn/ziwei-doushu-14-main-stars/', title: 'The 14 Main Stars', tag: 'Foundations', desc: 'Ziwei, Tianji, Sun, Wuqu, and all the rest.' },
  { href: '/learn/ziwei-doushu-four-transformations-sihua/', title: 'The Four Transformations (Sihua)', tag: 'Core', desc: 'Lu, Quan, Ke, Ji — the engine of the chart.' },
  { href: '/learn/ziwei-doushu-career-wealth-palace/', title: 'Career & Wealth Palace', tag: 'Practical', desc: 'Read your money path and vocational destiny.' },
  { href: '/learn/ziwei-doushu-vs-bazi/', title: 'Ziwei Doushu vs Bazi', tag: 'Comparison', desc: 'Two Chinese systems, side by side.' },
  { href: '/learn/ziwei-doushu-vs-western-astrology/', title: 'Ziwei vs Western Astrology', tag: 'Comparison', desc: 'Chinese and Western star-reading compared.' },
  { href: '/learn/is-ziwei-doushu-accurate/', title: 'Is Ziwei Doushu Accurate?', tag: 'Honest', desc: 'A clear-eyed look at what the system can and can\'t do.' },
];

export default function LearnIndex() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-imperial-gold hover:underline text-sm">← PurpleStar Home</Link>
      </div>

      <header className="mb-10 text-center">
        <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-3">Learn</div>
        <h1 className="font-display text-4xl md:text-6xl mb-4">Master Your Ziwei Doushu Chart</h1>
        <p className="text-imperial-parchment/70 text-lg max-w-2xl mx-auto">
          Eight free guides to the most sophisticated Chinese birth chart system.
          Read them in order, or jump to the topic that interests you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-5">
        {ARTICLES.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="purple-card rounded-2xl p-6 hover:border-imperial-gold transition-colors block"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-imperial-gold/80 mb-2">
              {a.tag}
            </div>
            <h2 className="font-serif text-xl mb-2 text-imperial-parchment">{a.title}</h2>
            <p className="text-sm text-imperial-parchment/70">{a.desc}</p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="gold-btn inline-block">Generate My Free Chart →</Link>
      </div>
    </main>
  );
}
