import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About PurpleStar — Who We Are & Why We Built This',
  description:
    'Learn about PurpleStar: free Zi Wei Dou Shu birth chart calculation powered by an open-source engine, with AI-powered readings in plain English.',
  alternates: { canonical: 'https://purplestar.cc/about' },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <span>About</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <h1 className="font-display text-4xl md:text-5xl mb-6">About PurpleStar</h1>

        <p className="mb-6 leading-relaxed">
          PurpleStar makes <strong>Zi Wei Dou Shu (紫微斗数)</strong> — the
          &quot;Purple Star Astrology&quot; of Chinese metaphysics — accessible
          to anyone, in English, for free.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Why Zi Wei Dou Shu?</h2>
        <p className="mb-4 leading-relaxed">
          Most Western audiences know Western astrology and, increasingly, BaZi
          (Four Pillars). Zi Wei Dou Shu is older in structure and far more
          granular: it maps 12 life domains — called <strong>palaces</strong> —
          onto your birth chart, from career and wealth to marriage, health,
          and friendships. Instead of one sun sign, you get 14 major stars
          distributed across those palaces, each modifying how that area of
          your life tends to unfold.
        </p>
        <p className="mb-6 leading-relaxed">
          We believe it is the most sophisticated framework Chinese astrology
          ever produced, and it deserves the same accessibility that Western
          astrology already enjoys in the English-speaking world.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">How PurpleStar works</h2>
        <ul className="mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Accurate calculation.</strong> Chart conversion between the
            lunar calendar used by classical Zi Wei Dou Shu and the Gregorian
            calendar is genuinely hard. Our charting engine is open source —
            you can inspect it, audit it, or fork it on{' '}
            <a
              href="https://github.com/Renhuai123/ziwei-doushu"
              target="_blank"
              rel="noopener"
              className="text-imperial-gold hover:underline"
            >
              GitHub
            </a>
            .
          </li>
          <li>
            <strong>AI-powered reading.</strong> A raw chart is a wall of
            Chinese characters even for enthusiasts. We translate your chart
            into a structured reading: what each major star means in the palace
            it occupies, which of the Four Transformations (四化) are
            activated, and what that suggests about your natural tendencies.
          </li>
          <li>
            <strong>Privacy first.</strong> You do not need an account to
            generate a chart. Birth details are used to compute your chart and
            are not sold or shared. See our{' '}
            <Link href="/privacy-policy" className="text-imperial-gold hover:underline">
              Privacy Policy
            </Link>{' '}
            for details.
          </li>
        </ul>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">
          What PurpleStar is — and isn&apos;t
        </h2>
        <p className="mb-6 leading-relaxed">
          PurpleStar is a tool for <strong>self-reflection and
          entertainment</strong>. A birth chart does not determine your future;
          at best, it offers a 1,000-year-old lens for thinking about your
          tendencies, timing, and choices. Please don&apos;t make medical,
          legal, or financial decisions based on a chart — make them with
          qualified professionals, and use astrology as a mirror, not an
          oracle.
        </p>

        <h2 className="font-display text-3xl mt-10 mb-4 text-imperial-gold">Get in touch</h2>
        <p className="mb-6 leading-relaxed">
          Questions, corrections, or feedback? We read everything — reach us
          via the{' '}
          <Link href="/contact" className="text-imperial-gold hover:underline">
            contact page
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
