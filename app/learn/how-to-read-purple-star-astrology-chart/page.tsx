import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
   title: 'How to Read & Calculate a Ziwei Doushu Chart: Step-by-Step Guide',
   description: 'Learn to read and calculate a Ziwei Doushu chart step by step: palaces, main stars, and the Four Transformations, plus how the chart is calculated.',
   keywords: ['how to read ziwei doushu', 'how to calculate ziwei doushu chart', 'ziwei doushu calculation', 'ziwei chart reading', 'purple star astrology chart explained', 'ziwei chart for beginners'],
  openGraph: {
     title: 'How to Read & Calculate a Ziwei Doushu Chart',
     description: 'A beginner-friendly walkthrough — reading steps plus how the chart is calculated.',
    type: 'article',
    url: 'https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/',
    siteName: 'PurpleStar',
    locale: 'en_US',
    images: [
      {
        url: 'https://purplestar.cc/og-image.png',
        width: 1200,
        height: 630,
        alt: 'How to Read a Ziwei Doushu Chart',
      },
    ],
    publishedTime: '2026-08-12T00:00:00.000Z',
    authors: ['PurpleStar'],
  },
  twitter: {
    card: 'summary_large_image',
     title: 'How to Read & Calculate a Ziwei Doushu Chart',
     description: 'A beginner-friendly walkthrough — reading steps plus how the chart is calculated.',
    images: ['https://purplestar.cc/og-image.png'],
  },
  alternates: { canonical: 'https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/' },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <Link href="/learn/" className="text-imperial-gold hover:underline">Learn</Link>
        <span className="mx-2">›</span>
        <span>How to Read a Ziwei Chart</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Beginner Guide</div>
           <h1 className="font-display text-4xl md:text-5xl mb-4">How to Read and Calculate a Ziwei Doushu Chart: A Step-by-Step Guide</h1>
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
             <li>How a Ziwei chart is calculated from your birth data</li>
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

         <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">How is a Ziwei Doushu chart calculated?</h2>
         <p className="mb-4 leading-relaxed">
           Reading and calculating a Ziwei chart are two different jobs — and you only need the first one. But if you've wondered how to calculate a Ziwei Doushu chart step by step, here is the pipeline every chart calculator follows:
         </p>
         <ol className="list-decimal list-inside mb-4 space-y-1 text-imperial-parchment/90">
           <li><strong>Your birth data goes in</strong> — birth date, birth time, and gender are the only inputs.</li>
           <li><strong>Conversion to the Chinese calendar</strong> — the date converts to its lunar equivalent, producing a Heavenly Stem (甲–癸) and Earthly Branch (子–亥) pair.</li>
           <li><strong>The Life Palace is located</strong> — the birth month and hour branch fix which of the twelve squares becomes the Life Palace.</li>
           <li><strong>The 14 main stars are placed</strong> — the Ziwei (Emperor) star's position is computed from the Life Palace's day stem, and the other 13 stars fall into fixed relative positions.</li>
           <li><strong>The Four Transformations fly in</strong> — the birth year's stem assigns Lu, Quan, Ke, and Ji to specific stars, activating them.</li>
         </ol>
         <p className="mb-4 leading-relaxed">
           That's the full Ziwei Doushu calculation. Done by hand it takes a practiced astrologer 20–30 minutes — <Link href="/" className="text-imperial-gold hover:underline">PurpleStar's free calculator</Link> does it in about three seconds, so you can spend your time on the fun part: reading the story.
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
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'How to Read a Ziwei Doushu Chart: A Step-by-Step Beginner Guide',
        description: 'A practical walkthrough — from a blank chart to understanding your life themes, in 5 steps.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/',
        },
        url: 'https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/',
        datePublished: '2026-08-12',
         dateModified: '2026-09-25',
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
         keywords: 'how to read ziwei chart, how to calculate ziwei doushu chart, ziwei doushu beginner, purple star astrology tutorial',
        inLanguage: 'en-US',
        about: [
          { '@type': 'Thing', name: 'Ziwei Doushu' },
          { '@type': 'Thing', name: 'Chart Reading' },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I read my Ziwei Doushu chart for the first time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start with these 5 steps: (1) Understand the 4x3 grid shape with 12 palaces. (2) Find your Life Palace — it shows your main star and core personality. (3) Find your Body Palace — it shows how you actually live. (4) Identify your main star (Ziwei, Tianji, Wuqu, etc.) — each has a distinct archetype. (5) Look at the Four Transformations (Lu, Quan, Ke, Ji) flying through your chart — they show what energy is currently active.',
            },
          },
           {
             '@type': 'Question',
             name: 'How do you calculate a Ziwei Doushu chart?',
             acceptedAnswer: {
               '@type': 'Answer',
               text: 'A Ziwei Doushu chart is calculated from your birth date, birth time, and gender. The date converts to a Chinese stem-branch pair, the birth month and hour fix the Life Palace position, the 14 main stars are placed relative to the computed Ziwei star position, and the year stem assigns the Four Transformations (Lu, Quan, Ke, Ji). By hand this takes 20-30 minutes; a free online Ziwei calculator like PurpleStar generates the full chart in seconds.',
             },
           },
          {
            '@type': 'Question',
            name: 'What is the Life Palace in Ziwei Doushu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Life Palace (命宫) is the most important palace in your Ziwei chart. It represents your core personality, your default mode of being in the world, and your overall life direction. The main star in your Life Palace (called your Ming Zhu) is the headline of your personality archetype. Look for it first — it sets the tone for everything else.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does an empty palace mean in Ziwei?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An empty palace (no main star) is not weak or bad — it means the palace is led by auxiliary stars and the Four Transformations. Empty palaces often represent areas of life where you have freedom and flexibility, themes you can shape rather than themes that shape you. Many successful people have empty Wealth or Career palaces.',
            },
          },
          {
            '@type': 'Question',
            name: 'How accurate is PurpleStar chart generator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PurpleStar uses the open-source Renhuai123/ziwei-doushu chart engine (MIT licensed) and the 518,400-chart sample dataset for accurate star placement calculations. The chart structure (12 palaces, 14 main stars, Four Transformations, decade luck pillars) is computed algorithmically — the math is reliable. Interpretation varies by practitioner.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need exact birth time to read my Ziwei chart?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, exact birth time matters more in Ziwei Doushu than in Western astrology. The chart structure depends on your month and hour of birth. Even a 30-minute difference can shift palace positions. Use your true solar time (the local clock time adjusted for longitude and daylight saving) for the most accurate chart.',
            },
          },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'PurpleStar', item: 'https://purplestar.cc/' },
          { '@type': 'ListItem', position: 2, name: 'Learn Ziwei Doushu', item: 'https://purplestar.cc/learn/' },
          { '@type': 'ListItem', position: 3, name: 'How to Read a Ziwei Chart', item: 'https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/' },
        ],
      }) }} />
    </main>
  );
}
