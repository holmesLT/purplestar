import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Read a Ziwei Doushu Chart: Step-by-Step Guide for Beginners',
  description: 'Learn how to read a Ziwei Doushu (Purple Star Astrology) birth chart in 5 simple steps. Understand palaces, main stars, the Four Transformations, and what they mean for your life.',
  keywords: ['how to read ziwei doushu', 'ziwei chart reading', 'purple star astrology chart explained', 'ziwei chart for beginners'],
  openGraph: {
    title: 'How to Read a Ziwei Doushu Chart',
    description: 'A beginner-friendly walkthrough of the Ziwei Doushu birth chart.',
    type: 'article',
  },
  alternates: { canonical: 'https://purplestar.techhouse.ccwu.cc/learn/how-to-read-purple-star-astrology-chart/' },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-imperial-gold hover:underline text-sm">← PurpleStar Home</Link>
      </div>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Beginner Guide</div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">How to Read a Ziwei Doushu Chart: A Step-by-Step Guide</h1>
          <p className="text-imperial-parchment/70 text-lg">Ziwei Doushu looks intimidating at first — twelve squares, dozens of stars. After this guide, you'll know exactly where to look first.</p>
        </header>

        <div className="bg-imperial-purple/40 border-l-4 border-imperial-gold p-4 my-6 rounded">
          <p className="font-semibold text-imperial-gold mb-2">What you'll learn</p>
          <ol className="text-sm text-imperial-parchment/90 space-y-1 list-decimal list-inside">
            <li>The basic structure of a Ziwei chart</li>
            <li>How to identify your Life Palace</li>
            <li>What the 14 main stars mean</li>
            <li>How the Four Transformations shift meaning</li>
            <li>How to read your chart as a story, not a list</li>
          </ol>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Step 1: Understand the layout</h2>
        <p className="mb-4 leading-relaxed">
          A Ziwei Doushu chart is a 4×3 grid of twelve palaces, arranged in a fixed sequence around your birth chart. The <strong>Life Palace</strong> (命宫) — your core self — is the anchor. Once you find it, every other palace's position is relative to it.
        </p>
        <p className="mb-4 leading-relaxed">
          Each palace has:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li>A <strong>name</strong> (e.g., Wealth Palace, Spouse Palace)</li>
          <li>An <strong>Earthly Branch</strong> (子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥)</li>
          <li>A <strong>Heavenly Stem</strong> (甲 乙 丙 丁 戊 己 庚 辛 壬 癸)</li>
          <li><strong>Main stars</strong> (up to ~3 per palace)</li>
          <li><strong>Minor stars</strong> (sometimes called "auxiliary" stars)</li>
          <li><strong>Four Transformations</strong> flying in or out</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Don't try to memorize all of this. Read the chart section by section, like chapters of a book.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Step 2: Locate your Life Palace</h2>
        <p className="mb-4 leading-relaxed">
          The Life Palace is determined by your birth month and the hour branch of your birth. If you don't want to calculate by hand, PurpleStar generates your chart automatically — find the palace labeled <strong>"Life Palace"</strong> or <strong>"命宫"</strong>.
        </p>
        <p className="mb-4 leading-relaxed">
          Once you've found it, ask: <em>which main star is sitting here?</em>
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li><strong>紫微 (Ziwei)</strong> — leadership, authority, a sense of destiny</li>
          <li><strong>太阳 (Sun)</strong> — generosity, public visibility, warmth</li>
          <li><strong>武曲 (Wuqu)</strong> — decisiveness, financial acumen, metal energy</li>
          <li><strong>贪狼 (Tanlang)</strong> — desire, multi-talent, charisma</li>
          <li><strong>天同 (Tiantong)</strong> — gentle, content, childlike</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          This is your <strong>basic personality type</strong> — the foundation of your chart.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Step 3: Read the surrounding palaces</h2>
        <p className="mb-4 leading-relaxed">
          The Life Palace has neighbors that shape it. In Ziwei, <strong>opposite palaces</strong> are linked (the palace directly across the chart is its "mirror") and <strong>adjacent palaces</strong> are its "supporting cast":
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li>The palace <strong>opposite</strong> your Life Palace shows how others see you (often the Travel Palace 迁移).</li>
          <li>The palace <strong>two steps counter-clockwise</strong> is your Wealth Palace (财帛) — your relationship with money.</li>
          <li>The palace <strong>two steps clockwise</strong> is your Career Palace (官禄).</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          For each palace, note the main star (if any), the Four Transformation present, and any obvious pattern (empty palace vs crowded).
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Step 4: Decode the Four Transformations</h2>
        <p className="mb-4 leading-relaxed">
          The Four Transformations (四化) are the most dynamic part of a Ziwei chart. They are activated by your birth year's Heavenly Stem and fly to specific stars:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li><strong>化禄 (Lu)</strong> — bloom, expansion, ease. Where life flows naturally.</li>
          <li><strong>化权 (Quan)</strong> — power, control, focus. Where you assert yourself.</li>
          <li><strong>化科 (Ke)</strong> — clarity, reputation, refinement. Where you shine socially.</li>
          <li><strong>化忌 (Ji)</strong> — attachment, lesson, shadow. Where you struggle and grow.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          If 化忌 lands in your Wealth Palace, money is a life lesson — not a curse, but a place where you must learn discipline. If 化禄 lands in your Career Palace, your vocation feels naturally blessed.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Step 5: Read the chart as a story</h2>
        <p className="mb-4 leading-relaxed">
          A chart is not a list of facts. It's a <strong>narrative</strong>. Here's a worked example:
        </p>
        <p className="mb-4 leading-relaxed italic bg-imperial-purple/20 p-4 rounded">
          "Life Palace holds 紫微 (Ziwei, the Emperor). Wealth Palace holds 武曲 (Wuqu, financial steel). The Four Transformations send 化禄 into the Career Palace — your vocation flows with grace. But 化忌 falls into the Spouse Palace — relationships require careful tending."
        </p>
        <p className="mb-4 leading-relaxed">
          The reading: a natural leader with financial strength, destined for a public role, but who must learn patience in love. That's a story — not a forecast of doom, and not a fairy tale either.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">What you should NOT do</h2>
        <p className="mb-4 leading-relaxed">
          Avoid the common beginner traps:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li>Don't read a single star in isolation. Stars only mean something in context.</li>
          <li>Don't panic if 化忌 lands somewhere. It's a lesson, not a punishment.</li>
          <li>Don't compare your chart to someone else's. Different charts, different paths.</li>
          <li>Don't skip the auxiliary stars. They refine the picture.</li>
        </ul>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Practice with your own chart</h2>
        <p className="mb-6 leading-relaxed">
          The fastest way to learn is to read your own chart repeatedly over a week. Each day, focus on one palace. After a month, the chart will feel like a familiar map.
        </p>
        <Link href="/" className="gold-btn inline-block">Generate My Free Chart →</Link>

        <hr className="my-10 border-imperial-gold/20" />
        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related Articles</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          <li><Link href="/learn/ziwei-doushu-12-palaces-explained/" className="hover:text-imperial-gold">The 12 Life Palaces Explained</Link></li>
          <li><Link href="/learn/ziwei-doushu-14-main-stars/" className="hover:text-imperial-gold">The 14 Main Stars of Ziwei Doushu</Link></li>
          <li><Link href="/learn/ziwei-doushu-vs-bazi/" className="hover:text-imperial-gold">Ziwei Doushu vs Bazi</Link></li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'How to Read a Ziwei Doushu Chart', datePublished: '2026-08-12',
        author: { '@type': 'Organization', name: 'PurpleStar' },
      }) }} />
    </main>
  );
}
