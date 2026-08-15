import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The 14 Main Stars of Ziwei Doushu: Meanings and Natures',
  description: 'A complete reference for the 14 main stars (主星) of Ziwei Doushu: Ziwei, Tianji, Sun, Wuqu, Tiantong, Lianzheng, Tianfu, Moon, Tanlang, Jumen, Tianxiang, Tianliang, Qisha, Pojun.',
  keywords: ['ziwei 14 main stars', '14 main stars purple star', 'ziwei star meanings', 'tianji wuqu tianfu'],
  openGraph: { title: 'The 14 Main Stars of Ziwei Doushu', type: 'article' },
  alternates: { canonical: 'https://purplestar.cc/learn/ziwei-doushu-14-main-stars/' },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <Link href="/learn/" className="text-imperial-gold hover:underline">Learn</Link>
        <span className="mx-2">›</span>
        <span>The 14 Main Stars</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Star Encyclopedia</div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">The 14 Main Stars of Ziwei Doushu</h1>
          <p className="text-imperial-parchment/70 text-lg">Meet the 14 主星 that shape every Ziwei chart — from the imperial presence of 紫微 to the rebellious fire of 破军.</p>
        </header>

        <p className="mb-6 leading-relaxed">
          Of the hundreds of stars used in classical Chinese astrology, only 14 are considered <strong>main stars</strong> (主星). They are the principal actors in your chart's story. The rest (辅星 auxiliary stars) refine and color their influence.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The Imperial Family (紫微星系)</h2>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">紫微 (Ziwei) — The Emperor</h3>
        <p className="mb-4 leading-relaxed">Authority, leadership, nobility. People with Ziwei in their Life Palace tend to be decisive, dignified, and gravitate toward responsibility. Their shadow: stubbornness and loneliness at the top.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天机 (Tianji) — The Advisor</h3>
        <p className="mb-4 leading-relaxed">Intellect, strategy, planning. Tianji people are quick-minded, analytical, and thrive on solving complex problems. Their shadow: overthinking and anxiety.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">太阳 (Sun) — The Father Star</h3>
        <p className="mb-4 leading-relaxed">Generosity, public visibility, brightness. Sun people radiate warmth and naturally attract followers. Their shadow: burning out from giving too much.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">武曲 (Wuqu) — The General</h3>
        <p className="mb-4 leading-relaxed">Decisiveness, financial acumen, metal energy. Wuqu people are sharp, focused, and excel at wealth-building through action. Their shadow: rigidity and impatience.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天同 (Tiantong) — The Joyful</h3>
        <p className="mb-4 leading-relaxed">Harmony, contentment, childlike nature. Tiantong people are kind, easygoing, and bring peace to those around them. Their shadow: passivity and avoidance of conflict.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">廉贞 (Lianzheng) — The Deputy</h3>
        <p className="mb-4 leading-relaxed">Passion, complexity, transformation. Lianzheng people are magnetic, intense, and often experience dramatic life cycles. Their shadow: impulsiveness and entanglements.</p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The Treasury Family (天府星系)</h2>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天府 (Tianfu) — The Treasury</h3>
        <p className="mb-4 leading-relaxed">Stability, refinement, wealth storage. Tianfu people are tasteful, reliable, and good with resources. Their shadow: conservatism and resistance to change.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">太阴 (Moon) — The Mother Star</h3>
        <p className="mb-4 leading-relaxed">Intuition, nurturing, inner life. Moon people are perceptive, emotionally rich, and excellent at reading rooms. Their shadow: moodiness and withdrawal.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">贪狼 (Tanlang) — The Wolf</h3>
        <p className="mb-4 leading-relaxed">Ambition, desire, multi-talent. Tanlang people are charismatic, driven, and often skilled in many fields. Their shadow: greed and scattered energy.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">巨门 (Jumen) — The Gate</h3>
        <p className="mb-4 leading-relaxed">Eloquence, controversy, investigation. Jumen people are articulate, sharp, and unafraid to ask hard questions. Their shadow: argumentativeness and suspicion.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天相 (Tianxiang) — The Minister</h3>
        <p className="mb-4 leading-relaxed">Support, aesthetics, diplomacy. Tianxiang people are gracious, tasteful, and excel at building bridges. Their shadow: indecisiveness and over-accommodation.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">天梁 (Tianliang) — The Elder</h3>
        <p className="mb-4 leading-relaxed">Protection, wisdom, longevity. Tianliang people are mature, reliable, and naturally mentor others. Their shadow: preachy and overprotective.</p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The Warrior Family (杀破狼系)</h2>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">七杀 (Qisha) — Seven Killings</h3>
        <p className="mb-4 leading-relaxed">Military prowess, independence, courage. Qisha people are bold, decisive, and thrive under pressure. Their shadow: recklessness and isolation.</p>

        <h3 className="font-display text-2xl mt-6 mb-2 text-imperial-gold">破军 (Pojun) — Army Breaker</h3>
        <p className="mb-4 leading-relaxed">Innovation, destruction-rebirth, unpredictability. Pojun people are agents of change, often disrupting established patterns. Their shadow: chaos and instability.</p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Why stars have "natures", not labels</h2>
        <p className="mb-4 leading-relaxed">
          Each star is neither good nor bad — it has a <strong>nature</strong>. A Qisha person isn't "aggressive" in a moral sense; they have martial energy that could become a CEO's drive or a soldier's courage. The palace the star sits in, the Four Transformations touching it, and the surrounding stars determine how that nature manifests.
        </p>
        <p className="mb-6 leading-relaxed">
          A trained astrologer reads stars the way a sommelier reads wine — not "good" or "bad", but "this vintage, this region, this expression".
        </p>
        <Link href="/" className="gold-btn inline-block">See These Stars in My Chart →</Link>

        <hr className="my-10 border-imperial-gold/20" />
        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related Articles</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          <li><Link href="/learn/ziwei-doushu-12-palaces-explained/" className="hover:text-imperial-gold">The 12 Life Palaces Explained</Link></li>
          <li><Link href="/learn/ziwei-doushu-four-transformations-sihua/" className="hover:text-imperial-gold">Four Transformations (Sihua)</Link></li>
          <li><Link href="/learn/how-to-read-purple-star-astrology-chart/" className="hover:text-imperial-gold">How to Read a Ziwei Doushu Chart</Link></li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The 14 Main Stars of Ziwei Doushu: Meanings and Natures',
        description: 'A complete reference for the 14 main stars (主星) of Ziwei Doushu — their meanings, archetypes, and how to interpret them in your chart.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://purplestar.cc/learn/ziwei-doushu-14-main-stars/',
        },
        url: 'https://purplestar.cc/learn/ziwei-doushu-14-main-stars/',
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
        keywords: '14 main stars ziwei doushu, ziwei tianji wuqu tianfu, purple star astrology stars',
        inLanguage: 'en-US',
        about: [
          { '@type': 'Thing', name: '14 Main Stars' },
          { '@type': 'Thing', name: 'Ziwei Doushu' },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'PurpleStar', item: 'https://purplestar.cc/' },
          { '@type': 'ListItem', position: 2, name: 'Learn Ziwei Doushu', item: 'https://purplestar.cc/learn/' },
          { '@type': 'ListItem', position: 3, name: 'The 14 Main Stars', item: 'https://purplestar.cc/learn/ziwei-doushu-14-main-stars/' },
        ],
      }) }} />
    </main>
  );
}
