import Link from 'next/link';
import ChartForm from '@/components/ChartForm';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.3em] text-imperial-gold uppercase">
              Ziwei Doushu · 紫微斗数
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Destiny,
            <br />
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Written in the Stars
            </span>
            <br />
            of the East
          </h1>
          <p className="text-lg md:text-xl text-imperial-parchment/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            The most sophisticated Chinese birth chart system — refined over 1,000 years.
            Discover your personality, career path, relationships, and life cycles through
            14 Purple Stars and 12 Life Palaces.
          </p>

          {/* 价格提示 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="px-4 py-2 rounded-full border border-imperial-gold/30 bg-imperial-purple/30">
              <span className="text-imperial-gold">Free</span> Birth Chart
            </div>
            <div className="px-4 py-2 rounded-full border border-imperial-gold/30 bg-imperial-purple/30">
              <span className="text-imperial-gold">$9.9</span> AI Reading
            </div>
            <div className="px-4 py-2 rounded-full border border-imperial-gold/30 bg-imperial-purple/30">
              <span className="text-imperial-gold">$29.9</span> Full Report
            </div>
          </div>

          {/* 表单 */}
          <ChartForm />
        </div>
      </section>

      {/* 信任徽章 */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="purple-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-serif text-xl text-imperial-gold mb-2">14 Purple Stars</h3>
            <p className="text-sm text-imperial-parchment/70">
              From the Emperor Star Ziwei to the Army Breaker Pojun —
              each shape your destiny uniquely.
            </p>
          </div>
          <div className="purple-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className="font-serif text-xl text-imperial-gold mb-2">12 Life Palaces</h3>
            <p className="text-sm text-imperial-parchment/70">
              Career, wealth, relationships, health — all revealed
              in your personalized chart.
            </p>
          </div>
          <div className="purple-card rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-serif text-xl text-imperial-gold mb-2">AI Interpretation</h3>
            <p className="text-sm text-imperial-parchment/70">
              Trained on the Ni Haixia Tianji system + 518,000 chart samples
              for authentic, accurate readings.
            </p>
          </div>
        </div>
      </section>

      {/* 三步流程 */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-imperial-gold">
          Three Steps to Your Destiny
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-imperial-purple flex items-center justify-center text-2xl font-display font-bold text-imperial-gold border border-imperial-gold/40">
              1
            </div>
            <h3 className="font-serif text-xl mb-2">Enter Birth Details</h3>
            <p className="text-sm text-imperial-parchment/70">
              Date, time, and city. We handle lunar conversion and true solar time.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-imperial-purple flex items-center justify-center text-2xl font-display font-bold text-imperial-gold border border-imperial-gold/40">
              2
            </div>
            <h3 className="font-serif text-xl mb-2">View Free Chart</h3>
            <p className="text-sm text-imperial-parchment/70">
              See your complete birth chart with all palaces, stars, and four transformations.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-imperial-purple flex items-center justify-center text-2xl font-display font-bold text-imperial-gold border border-imperial-gold/40">
              3
            </div>
            <h3 className="font-serif text-xl mb-2">Unlock AI Reading</h3>
            <p className="text-sm text-imperial-parchment/70">
              Get a personalized, 3,000-word interpretation by our AI astrologer.
            </p>
          </div>
        </div>
      </section>

      {/* 数据来源 attribution（MIT 要求） */}
      {/* Learn hub — internal linking for SEO */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-imperial-gold/20">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-imperial-gold">
          Learn Ziwei Doushu
        </h2>
        <p className="text-center text-imperial-parchment/70 mb-10 max-w-2xl mx-auto">
          Eight in-depth guides to read your own chart — palaces, stars, transformations, and how Ziwei compares to other systems.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/learn/how-to-read-purple-star-astrology-chart/', title: 'How to Read a Ziwei Chart', tag: 'Beginner' },
            { href: '/learn/ziwei-doushu-12-palaces-explained/', title: 'The 12 Life Palaces', tag: 'Foundations' },
            { href: '/learn/ziwei-doushu-14-main-stars/', title: 'The 14 Main Stars', tag: 'Foundations' },
            { href: '/learn/ziwei-doushu-four-transformations-sihua/', title: 'Four Transformations', tag: 'Core' },
            { href: '/learn/ziwei-doushu-career-wealth-palace/', title: 'Career & Wealth Palace', tag: 'Practical' },
            { href: '/learn/ziwei-doushu-vs-bazi/', title: 'Ziwei vs Bazi', tag: 'Comparison' },
            { href: '/learn/ziwei-doushu-vs-western-astrology/', title: 'Ziwei vs Western Astrology', tag: 'Comparison' },
            { href: '/learn/is-ziwei-doushu-accurate/', title: 'Is Ziwei Accurate?', tag: 'Honest' },
          ].map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="purple-card rounded-xl p-5 hover:border-imperial-gold transition-colors block"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase text-imperial-gold/80 mb-2">
                {a.tag}
              </div>
              <div className="font-serif text-base text-imperial-parchment">
                {a.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="px-6 py-8 max-w-6xl mx-auto text-center border-t border-imperial-gold/20 mt-4">
        <p className="text-xs text-imperial-parchment/50">
          This project uses the{' '}
          <a
            href="https://github.com/Renhuai123/ziwei-doushu"
            target="_blank"
            rel="noopener"
            className="text-imperial-gold hover:underline"
          >
            Ziwei Doushu Open Source Chart Engine
          </a>{' '}
          (MIT License) and the 518,400-chart sample dataset.
        </p>
        <p className="text-xs text-imperial-parchment/40 mt-2">
          For entertainment and cultural exploration purposes only.
        </p>
      </footer>
    </main>
  );
}
