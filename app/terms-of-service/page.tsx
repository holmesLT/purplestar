import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — PurpleStar',
  description:
    'The terms governing your use of PurpleStar, including chart generation, paid AI readings, payment terms, and our entertainment-only disclaimer.',
  alternates: { canonical: 'https://purplestar.cc/terms-of-service' },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <span>Terms of Service</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <h1 className="font-display text-4xl md:text-5xl mb-2">Terms of Service</h1>
        <p className="text-sm text-imperial-parchment/50 mb-8">Last updated: September 12, 2026</p>

        <p className="mb-6 leading-relaxed">
          By accessing or using PurpleStar (https://purplestar.cc, the
          &quot;Service&quot;), you agree to these Terms. If you do not agree,
          please do not use the Service.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">1. The Service</h2>
        <p className="mb-6 leading-relaxed">
          PurpleStar provides free Zi Wei Dou Shu birth chart calculation and
          optional AI-assisted chart readings, some of which are paid. Charts
          are produced by an open-source calculation engine; readings are
          generated with the assistance of artificial intelligence.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">
          2. Entertainment only — no professional advice
        </h2>
        <p className="mb-6 leading-relaxed">
          <strong>For entertainment and self-reflection purposes only.</strong>{' '}
          PurpleStar does not provide medical, psychological, legal, financial,
          or other professional advice. Astrological readings do not predict
          the future and should not be relied upon for any decision. Always
          consult a qualified professional for such matters.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">3. Accounts</h2>
        <p className="mb-6 leading-relaxed">
          You may use chart generation without an account. If you create an
          account, you are responsible for keeping your credentials secure and
          for all activity under your account. You must be at least 13 years
          old (16 in the EEA) to create an account.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">4. Paid readings and payments</h2>
        <ul className="mb-6 list-disc pl-6 space-y-2 leading-relaxed">
          <li>Prices are displayed at checkout and are charged in the currency shown.</li>
          <li>
            Payments are processed by third-party processors; we never store
            full payment card details.
          </li>
          <li>
            <strong>Digital delivery:</strong> paid readings are digital
            reports generated for you. Because generation begins immediately
            after purchase, <strong>all sales are final once the report has
            been generated and delivered</strong>. If a technical fault
            prevented delivery or the report is materially different from what
            was described, contact us within 14 days and we will make it right
            (re-delivery or refund at our discretion).
          </li>
          <li>
            Cryptocurrency payments, where offered, are final on-chain
            confirmations and cannot be reversed by us.
          </li>
        </ul>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">5. Acceptable use</h2>
        <p className="mb-2 leading-relaxed">You agree not to:</p>
        <ul className="mb-6 list-disc pl-6 space-y-1 leading-relaxed">
          <li>use the Service for any unlawful purpose;</li>
          <li>scrape, resell, or systematically reproduce readings or content without written permission;</li>
          <li>attempt to disrupt, overload, or gain unauthorized access to the Service;</li>
          <li>misrepresent the Service&apos;s output as professional advice to third parties.</li>
        </ul>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">6. Intellectual property</h2>
        <p className="mb-6 leading-relaxed">
          The Service&apos;s design, text, software, and branding are owned by
          PurpleStar or licensed to us. Our charting engine is open source
          under its own license (see our GitHub repository); that license
          governs the code, not this website&apos;s content. You receive a
          personal, non-exclusive right to view and use the readings generated
          for you; we may store and display them to you within your account.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">
          7. Disclaimers and limitation of liability
        </h2>
        <p className="mb-6 leading-relaxed">
          The Service is provided <strong>&quot;as is&quot; and &quot;as
          available&quot;</strong> without warranties of any kind, express or
          implied, including accuracy of astrological calculations,
          availability, or fitness for a particular purpose. To the maximum
          extent permitted by law, PurpleStar and its operators shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits, data, or goodwill, arising
          from your use of the Service. Our total aggregate liability shall
          not exceed the amount you paid us in the 12 months preceding the
          claim.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">8. Termination</h2>
        <p className="mb-6 leading-relaxed">
          We may suspend or terminate access to the Service at any time,
          including for violation of these Terms. You may stop using the
          Service at any time.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">9. Governing law</h2>
        <p className="mb-6 leading-relaxed">
          These Terms are governed by the laws applicable at our place of
          establishment, without regard to conflict-of-law rules. Mandatory
          consumer-protection rights in your country of residence are
          unaffected.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">10. Changes</h2>
        <p className="mb-6 leading-relaxed">
          We may update these Terms; material changes will be posted on this
          page with a new &quot;last updated&quot; date. Continued use after
          changes take effect constitutes acceptance.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">11. Contact</h2>
        <p className="mb-6 leading-relaxed">
          Questions about these Terms? Reach us via the{' '}
          <Link href="/contact" className="text-imperial-gold hover:underline">
            contact page
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
