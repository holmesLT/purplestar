import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ziwei Doushu Career and Wealth Palace: How It Shapes Your Money Path',
  description: 'How to read the Career Palace (官禄) and Wealth Palace (财帛) in your Ziwei Doushu chart. Discover what stars mean for your vocation and financial destiny.',
  keywords: ['career palace ziwei', 'wealth palace ziwei', 'ziwei career reading', 'ziwei money palace'],
  openGraph: { title: 'Ziwei Doushu Career and Wealth Palace', type: 'article' },
  alternates: { canonical: 'https://purplestar.cc/learn/ziwei-doushu-career-wealth-palace/' },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <Link href="/learn/" className="text-imperial-gold hover:underline">Learn</Link>
        <span className="mx-2">›</span>
        <span>Career and Wealth Palace</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Practical Reading</div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Ziwei Doushu Career and Wealth Palace: Reading Your Money Path</h1>
          <p className="text-imperial-parchment/70 text-lg">Two palaces — Career (官禄) and Wealth (财帛) — reveal the deepest patterns of your work and money life. Here's how to read them.</p>
        </header>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Why these two palaces matter most</h2>
        <p className="mb-4 leading-relaxed">
          Money questions dominate most consultations: <em>What should I do for work? When will I be financially stable? Is my current career right for me?</em> The Career and Wealth palaces answer these in concert. The Career Palace is your <strong>public role</strong> — what you do in the world. The Wealth Palace is your <strong>relationship with money</strong> — how it flows to you.
        </p>
        <p className="mb-4 leading-relaxed">
          They are two palaces apart on the chart — a "trine" relationship, meaning they reinforce each other. A strong Career Palace often indicates a strong Wealth Palace, but not always.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The Career Palace (官禄宫)</h2>
        <p className="mb-4 leading-relaxed">
          The Career Palace reveals your ideal vocation, your relationship with authority, and how you operate in a hierarchy. The main star here is the single most important career indicator.
        </p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">紫微 (Ziwei) in Career</h3>
        <p className="mb-4 leading-relaxed">Leadership positions. You thrive as the head, not the staff. Consider executive roles, founding companies, or leading departments. Your shadow: difficulty in subordinate positions.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">武曲 (Wuqu) in Career</h3>
        <p className="mb-4 leading-relaxed">Finance, operations, engineering, military. You're decisive and excel where metal-like precision matters — banking, manufacturing, logistics.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">廉贞 (Lianzheng) in Career</h3>
        <p className="mb-4 leading-relaxed">Transformation-driven careers: law, politics, surgery, crisis management, or any field with high stakes and constant change.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天同 (Tiantong) in Career</h3>
        <p className="mb-4 leading-relaxed">Care, hospitality, education, wellness. You do best in roles where kindness is a feature, not a bug.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">贪狼 (Tanlang) in Career</h3>
        <p className="mb-4 leading-relaxed">Sales, entertainment, multi-business ownership. You have charisma and ambition — use them in roles with variety and reward.</p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The Wealth Palace (财帛宫)</h2>
        <p className="mb-4 leading-relaxed">
          The Wealth Palace tells you how money comes to you — not just whether you'll be rich. Some people earn through effort, others through social capital, others through luck or timing.
        </p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">武曲 (Wuqu) in Wealth</h3>
        <p className="mb-4 leading-relaxed">Money through decisive action. Financial markets, real estate, commodities. You make money when you move, not when you wait.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天府 (Tianfu) in Wealth</h3>
        <p className="mb-4 leading-relaxed">Money through stability. Slow accumulation, conservative investments, savings. You build wealth like a fortress.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">贪狼 (Tanlang) in Wealth</h3>
        <p className="mb-4 leading-relaxed">Money through desire and variety. Multiple income streams, entrepreneurial hustles. Don't put all eggs in one basket.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">紫微 (Ziwei) in Wealth</h3>
        <p className="mb-4 leading-relaxed">Money comes with leadership responsibility. Large sums, but also large obligations. Not a placement for small-time hustlers.</p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Reading the Four Transformations here</h2>
        <p className="mb-4 leading-relaxed">
          The Four Transformations in the Career or Wealth palaces radically shift the meaning:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li><strong>化禄 in Career</strong> — your vocation feels blessed; success comes with grace.</li>
          <li><strong>化忌 in Wealth</strong> — money is a life lesson. Watch for compulsive spending, financial entanglement, or lessons in detachment.</li>
          <li><strong>化权 in Career</strong> — you assert yourself strongly in your vocation; leadership comes naturally.</li>
          <li><strong>化科 in Wealth</strong> — your financial reputation is your asset; integrity pays.</li>
        </ul>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">A worked example</h2>
        <p className="mb-4 leading-relaxed italic bg-imperial-purple/20 p-4 rounded">
          "Career Palace holds 紫微 with 化权. Wealth Palace holds 武曲 with 化禄."
        </p>
        <p className="mb-4 leading-relaxed">
          Reading: a born leader who asserts naturally in their vocation, with sharp financial instincts where money flows with ease. Ideal path: founder, executive, or owner-operator of a financial or industrial enterprise. The combination suggests wealth arrives through leadership, not labor.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">What you can — and can't — learn</h2>
        <p className="mb-4 leading-relaxed">
          Ziwei Doushu reveals <em>inclinations and patterns</em>, not fixed outcomes. A chart with Wealth challenges doesn't mean "you will be poor" — it means "money requires conscious cultivation here". The chart shows the terrain; you choose how to walk it.
        </p>

        <p className="mb-6 leading-relaxed">
          For a personalized reading of your Career and Wealth palaces, PurpleStar's AI astrologer can decode every star and transformation.
        </p>
        <Link href="/" className="gold-btn inline-block">Read My Career & Wealth →</Link>

        <hr className="my-10 border-imperial-gold/20" />
        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related Articles</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          <li><Link href="/learn/ziwei-doushu-12-palaces-explained/" className="hover:text-imperial-gold">The 12 Life Palaces</Link></li>
          <li><Link href="/learn/ziwei-doushu-14-main-stars/" className="hover:text-imperial-gold">The 14 Main Stars</Link></li>
          <li><Link href="/learn/ziwei-doushu-four-transformations-sihua/" className="hover:text-imperial-gold">Four Transformations</Link></li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Ziwei Doushu Career and Wealth Palace: How It Shapes Your Money Path',
        description: 'How to read the Career Palace (官禄) and Wealth Palace (财帛) in your Ziwei Doushu chart — what stars mean for your vocation and financial destiny.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://purplestar.cc/learn/ziwei-doushu-career-wealth-palace/',
        },
        url: 'https://purplestar.cc/learn/ziwei-doushu-career-wealth-palace/',
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
        keywords: 'career palace ziwei, wealth palace ziwei, ziwei career reading, money path',
        inLanguage: 'en-US',
        about: [
          { '@type': 'Thing', name: 'Career Palace' },
          { '@type': 'Thing', name: 'Wealth Palace' },
          { '@type': 'Thing', name: 'Ziwei Doushu' },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'PurpleStar', item: 'https://purplestar.cc/' },
          { '@type': 'ListItem', position: 2, name: 'Learn Ziwei Doushu', item: 'https://purplestar.cc/learn/' },
          { '@type': 'ListItem', position: 3, name: 'Career and Wealth Palace', item: 'https://purplestar.cc/learn/ziwei-doushu-career-wealth-palace/' },
        ],
      }) }} />
    </main>
  );
}
