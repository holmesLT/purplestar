import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ziwei Doushu vs Bazi: Which Chinese Astrology System Is Right for You?',
  description: 'A detailed comparison of Ziwei Doushu (Purple Star Astrology) and Bazi (Four Pillars). Learn the differences, strengths, and use cases of each system — and how to choose.',
  keywords: ['ziwei doushu vs bazi', 'ziwei vs bazi', 'chinese astrology comparison', 'four pillars vs purple star'],
  openGraph: {
    title: 'Ziwei Doushu vs Bazi: Which Chinese Astrology System Is Right for You?',
    description: 'A side-by-side comparison of the two most respected Chinese destiny systems.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://purplestar.techhouse.ccwu.cc/learn/ziwei-doushu-vs-bazi/',
  },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-imperial-gold hover:underline text-sm">← PurpleStar Home</Link>
      </div>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Comparison</div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Ziwei Doushu vs Bazi: Which Chinese Astrology System Is Right for You?</h1>
          <p className="text-imperial-parchment/70 text-lg">A side-by-side look at the two most respected Chinese destiny systems — and how to know which one answers your question.</p>
        </header>

        <div className="bg-imperial-purple/40 border-l-4 border-imperial-gold p-4 my-6 rounded">
          <p className="font-semibold text-imperial-gold mb-2">Key Takeaways</p>
          <ul className="text-sm text-imperial-parchment/90 space-y-1 list-disc list-inside">
            <li><strong>Bazi</strong> reads destiny through your birth year/month/day/hour — four "pillars" of heavenly stems and earthly branches.</li>
            <li><strong>Ziwei Doushu</strong> uses the same pillars as a starting point, then maps 14 main stars across 12 life palaces — a chart, not a table.</li>
            <li>Bazi excels at <em>timing</em> (when events happen). Ziwei excels at <em>personality and life themes</em> (what happens, and why).</li>
            <li>Most serious Chinese astrologers use both. For a first reading, choose based on your question.</li>
          </ul>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Two systems, one goal</h2>
        <p className="mb-4 leading-relaxed">
          Both Ziwei Doushu and Bazi come from the same source: classical Chinese cosmology, built on the Heavenly Stems and Earthly Branches (the 60-year cycle known as the Sexagenary cycle). They use identical inputs — your birth year, month, day, and hour — but they answer different questions.
        </p>
        <p className="mb-4 leading-relaxed">
          If you've ever wondered why some Chinese fortune tellers draw a chart with twelve boxes while others write four columns of characters, that's the difference. Bazi is a <em>table</em>. Ziwei Doushu is a <em>map</em>.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Bazi: the four-pillar table</h2>
        <p className="mb-4 leading-relaxed">
          Bazi (八字, "eight characters") records the heavenly stem and earthly branch for each of your four birth pillars:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li><strong>Year pillar</strong> — your ancestral and social context</li>
          <li><strong>Month pillar</strong> — your parents and early environment</li>
          <li><strong>Day pillar</strong> — your core self (the day stem is your "Day Master")</li>
          <li><strong>Hour pillar</strong> — your inner life and later years</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          From these eight characters, an astrologer reads the <strong>Five Elements balance</strong> (Wood, Fire, Earth, Metal, Water) and the <strong>Ten Gods</strong> relationships (wealth, output, power, resource, companion). Strengths: extremely precise for <em>timing</em> — when a wealth cycle opens, when a relationship arrives, when to be cautious.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Ziwei Doushu: the twelve-palace chart</h2>
        <p className="mb-4 leading-relaxed">
          Ziwei Doushu (紫微斗数, "Purple Star Astrology") starts from your birth pillars but does something more elaborate: it constructs a <strong>twelve-palace chart</strong>, mapping each palace to a life domain:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6 text-sm">
          <div className="bg-imperial-purple/30 p-2 rounded">Life Palace (命宫)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Wealth Palace (财帛)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Career Palace (官禄)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Spouse Palace (夫妻)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Children Palace (子女)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Health Palace (疾厄)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Travel Palace (迁移)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Friends Palace (奴仆)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Property Palace (田宅)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Fortune Palace (福德)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Parents Palace (父母)</div>
          <div className="bg-imperial-purple/30 p-2 rounded">Siblings Palace (兄弟)</div>
        </div>
        <p className="mb-4 leading-relaxed">
          Into these palaces, the system places <strong>14 main stars</strong> (紫微, 天机, 太阳, 武曲, 天同, 廉贞, 天府, 太阴, 贪狼, 巨门, 天相, 天梁, 七杀, 破军) plus dozens of minor stars. Each star has a <em>nature</em> (leadership, intellect, romance, wealth, solitude, etc.) that shapes how the palace "feels". Add the <strong>Four Transformations</strong> (四化: Lu 禄, Quan 权, Ke 科, Ji 忌) and you get a nuanced personality map — strengths, weaknesses, hidden patterns.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Side-by-side comparison</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-imperial-gold/30">
                <th className="text-left py-2 text-imperial-gold">Aspect</th>
                <th className="text-left py-2 text-imperial-gold">Bazi</th>
                <th className="text-left py-2 text-imperial-gold">Ziwei Doushu</th>
              </tr>
            </thead>
            <tbody className="text-imperial-parchment/90">
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Input</td><td className="py-2">Birth year/month/day/hour</td><td className="py-2">Same</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Output</td><td className="py-2">4 columns of 2 characters</td><td className="py-2">12-palace chart with stars</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Strength</td><td className="py-2">Timing of life events</td><td className="py-2">Personality and life themes</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Visualization</td><td className="py-2">Abstract (table)</td><td className="py-2">Geometric chart</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Reading speed</td><td className="py-2">Faster for an astrologer</td><td className="py-2">Slower (more variables)</td></tr>
              <tr className="border-b border-imperial-gold/10"><td className="py-2 font-semibold">Western popularity</td><td className="py-2">High (more translators)</td><td className="py-2">Growing (fewer English sources)</td></tr>
              <tr><td className="py-2 font-semibold">Best for</td><td className="py-2">"When will X happen?"</td><td className="py-2">"What kind of person am I?"</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Which one should you start with?</h2>
        <p className="mb-4 leading-relaxed">
          Ask yourself one question: <strong>what do I want to know?</strong>
        </p>
        <p className="mb-4 leading-relaxed">
          If your question is about <em>timing</em> — when will I find a partner, when is the right year to start a business, when should I travel — Bazi gives sharper answers. The Luck Pillars (大运) cycle every 10 years, and annual pillars every year, creating a precise forecast grid.
        </p>
        <p className="mb-4 leading-relaxed">
          If your question is about <em>identity</em> — why do I keep making the same mistakes, what is my natural strength, what kind of career fits me — Ziwei Doushu is richer. The 12-palace chart reads like a personality atlas, with each palace revealing a different facet.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The traditional view: use both</h2>
        <p className="mb-4 leading-relaxed">
          In classical practice, a serious Chinese astrologer reads <strong>Ziwei first to understand the person</strong>, then consults <strong>Bazi for timing</strong>. The two systems triangulate. Ziwei tells you <em>what</em> your life themes are; Bazi tells you <em>when</em> each theme activates.
        </p>
        <p className="mb-4 leading-relaxed">
          If you have to choose one for a first reading, Ziwei Doushu tends to be more accessible to Western readers because of its visual structure — once you see your 12-palace chart, the language clicks faster than reading a Bazi table.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Get your own chart</h2>
        <p className="mb-6 leading-relaxed">
          PurpleStar generates your free Ziwei Doushu chart in seconds — no signup required. To go deeper, our AI astrologer can interpret every star and palace into a personalized reading.
        </p>
        <Link href="/" className="gold-btn inline-block">Generate My Free Chart →</Link>

        <hr className="my-10 border-imperial-gold/20" />

        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related Articles</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          <li><Link href="/learn/how-to-read-purple-star-astrology-chart/" className="hover:text-imperial-gold">How to Read a Ziwei Doushu Chart (Step by Step)</Link></li>
          <li><Link href="/learn/ziwei-doushu-12-palaces-explained/" className="hover:text-imperial-gold">The 12 Life Palaces Explained</Link></li>
          <li><Link href="/learn/ziwei-doushu-vs-western-astrology/" className="hover:text-imperial-gold">Ziwei Doushu vs Western Astrology</Link></li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Ziwei Doushu vs Bazi: Which Chinese Astrology System Is Right for You?',
        description: 'A detailed comparison of Ziwei Doushu and Bazi Chinese astrology systems.',
        author: { '@type': 'Organization', name: 'PurpleStar' },
        publisher: { '@type': 'Organization', name: 'PurpleStar', url: 'https://purplestar.techhouse.ccwu.cc' },
        datePublished: '2026-08-12',
      }) }} />
    </main>
  );
}
