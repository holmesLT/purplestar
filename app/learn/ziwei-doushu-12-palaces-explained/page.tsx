import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The 12 Life Palaces of Ziwei Doushu Explained',
  description: 'A complete guide to the 12 palaces in Ziwei Doushu: Life, Wealth, Career, Spouse, Children, Health, Travel, Friends, Property, Fortune, Parents, and Siblings.',
  keywords: ['ziwei 12 palaces', 'life palace ziwei', 'wealth palace career palace ziwei', '12 palaces purple star astrology'],
  openGraph: { title: 'The 12 Life Palaces of Ziwei Doushu', type: 'article' },
  alternates: { canonical: 'https://purplestar.cc/learn/ziwei-doushu-12-palaces-explained/' },
};

export default function Article() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-6"><Link href="/" className="text-imperial-gold hover:underline text-sm">← PurpleStar Home</Link></div>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">Foundations</div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">The 12 Life Palaces of Ziwei Doushu Explained</h1>
          <p className="text-imperial-parchment/70 text-lg">The 12 palaces are the rooms of your cosmic house. Each one governs a different life domain — and the stars inside reveal how that domain feels for you.</p>
        </header>

        <div className="bg-imperial-purple/40 border-l-4 border-imperial-gold p-4 my-6 rounded">
          <p className="font-semibold text-imperial-gold mb-2">In this guide</p>
          <ul className="text-sm text-imperial-parchment/90 list-disc list-inside space-y-1">
            <li>What is a "palace" in Ziwei Doushu?</li>
            <li>The 12 palaces, one by one</li>
            <li>How palaces relate to each other</li>
            <li>What an "empty" palace means</li>
          </ul>
        </div>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">What is a palace?</h2>
        <p className="mb-4 leading-relaxed">
          In Ziwei Doushu, a palace is a <strong>sector of your birth chart</strong> tied to one life theme. The 12 palaces cover the full territory of a human life — from money to marriage, parents to property, body to beyond.
        </p>
        <p className="mb-4 leading-relaxed">
          Each palace contains stars, transformations, and a Heavenly Stem + Earthly Branch. The combination is what gives your life its texture.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">The 12 palaces</h2>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">1. Life Palace (命宫) — your core self</h3>
        <p className="mb-4 leading-relaxed">The most important palace. Holds your main star(s), defines your temperament, your life path, and the central theme of your existence. Read this one first.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">2. Wealth Palace (财帛) — your money</h3>
        <p className="mb-4 leading-relaxed">How you earn, save, and lose money. The main star here reveals whether wealth comes through effort, intellect, social skill, or risk. 武曲 (Wuqu) here = strong money instincts; 紫微 (Ziwei) here = wealth that comes with leadership responsibility.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">3. Career Palace (官禄) — your vocation</h3>
        <p className="mb-4 leading-relaxed">Your public role, career path, and how you interface with authority. 廉贞 (Lianzheng) here = leadership in transformation; 天相 (Tianxiang) here = diplomatic or support-oriented roles.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">4. Spouse Palace (夫妻) — your partner</h3>
        <p className="mb-4 leading-relaxed">Marriage, romantic partners, and close one-on-one bonds. The star here reveals what kind of partner suits you — and what patterns to watch in love.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">5. Children Palace (子女) — your offspring</h3>
        <p className="mb-4 leading-relaxed">Children, creativity, and what you produce. Also reveals the energy of your inner child and how you nurture.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">6. Health Palace (疾厄) — your body</h3>
        <p className="mb-4 leading-relaxed">Physical constitution, vulnerabilities, and where to focus preventive care. The Five Element imbalance here points to specific body systems.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">7. Travel Palace (迁移) — your public face</h3>
        <p className="mb-4 leading-relaxed">How others see you when you leave home — at work, abroad, in unfamiliar settings. Opposite the Life Palace; reflects your social mask.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">8. Friends Palace (奴仆) — your circle</h3>
        <p className="mb-4 leading-relaxed">Your social network, friends, and the people who support your goals. Also called "Servants Palace" in older translations.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">9. Property Palace (田宅) — your home</h3>
        <p className="mb-4 leading-relaxed">Real estate, household stability, family roots. The energy here tells you how settled or restless your domestic life will be.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">10. Fortune Palace (福德) — your inner life</h3>
        <p className="mb-4 leading-relaxed">Spirituality, mental state, hobbies, and inner peace. The star here shapes how you recharge and what brings you joy.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">11. Parents Palace (父母) — your upbringing</h3>
        <p className="mb-4 leading-relaxed">Your relationship with parents, inheritance (literal and figurative), and the patterns you absorbed as a child.</p>

        <h3 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">12. Siblings Palace (兄弟) — your peers</h3>
        <p className="mb-4 leading-relaxed">Siblings, cousins, peers, and your early social life. Also reflects how you cooperate in teams.</p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">How palaces relate to each other</h2>
        <p className="mb-4 leading-relaxed">
          Palaces are not isolated. Each one has two key relationships:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-imperial-parchment/90">
          <li><strong>Opposite palace</strong> — your mirror. The palace directly across the chart reflects an aspect of the original (e.g., Wealth ↔ Friends; Career ↔ Travel).</li>
          <li><strong>Trine palaces</strong> (every 4 palaces) — supporting energies. These three palaces reinforce each other.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          When you read a chart, you read the main palace, then its opposite, then its trines. This is the "spider's web" pattern.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Empty palaces: not what you think</h2>
        <p className="mb-4 leading-relaxed">
          An empty palace (no main star) is not "bad". It just means the palace is quieter — its theme is shaped mostly by <em>auxiliary</em> stars and the Four Transformations flying through. Many successful people have empty Wealth palaces (they build wealth slowly) or empty Career palaces (they reinvent careers).
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Try it on your own chart</h2>
        <p className="mb-6 leading-relaxed">
          Now that you know what each palace means, open your free Ziwei chart and read each palace one at a time. Don't rush. The chart rewards patient attention.
        </p>
        <Link href="/" className="gold-btn inline-block">Generate My Free Chart →</Link>

        <hr className="my-10 border-imperial-gold/20" />
        <h2 className="font-display text-2xl mb-4 text-imperial-gold">Related Articles</h2>
        <ul className="space-y-2 text-imperial-parchment/80">
          <li><Link href="/learn/how-to-read-purple-star-astrology-chart/" className="hover:text-imperial-gold">How to Read a Ziwei Doushu Chart</Link></li>
          <li><Link href="/learn/ziwei-doushu-14-main-stars/" className="hover:text-imperial-gold">The 14 Main Stars</Link></li>
          <li><Link href="/learn/ziwei-doushu-four-transformations-sihua/" className="hover:text-imperial-gold">Four Transformations (Sihua)</Link></li>
        </ul>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The 12 Life Palaces of Ziwei Doushu Explained',
        description: 'A complete guide to the 12 palaces in Ziwei Doushu: Life, Wealth, Career, Spouse, Children, Health, Travel, Friends, Property, Fortune, Parents, and Siblings.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://purplestar.cc/learn/ziwei-doushu-12-palaces-explained/',
        },
        url: 'https://purplestar.cc/learn/ziwei-doushu-12-palaces-explained/',
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
        keywords: '12 palaces ziwei doushu, life palace, wealth palace, career palace, purple star astrology',
        inLanguage: 'en-US',
        about: [
          { '@type': 'Thing', name: '12 Life Palaces' },
          { '@type': 'Thing', name: 'Ziwei Doushu' },
        ],
      }) }} />
    </main>
  );
}
