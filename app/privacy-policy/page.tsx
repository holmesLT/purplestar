import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — PurpleStar',
  description:
    'How PurpleStar collects, uses, and protects your information, including birth data used for chart calculation, advertising, and payment data.',
  alternates: { canonical: 'https://purplestar.cc/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <span>Privacy Policy</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <h1 className="font-display text-4xl md:text-5xl mb-2">Privacy Policy</h1>
        <p className="text-sm text-imperial-parchment/50 mb-8">Last updated: September 12, 2026</p>

        <p className="mb-6 leading-relaxed">
          PurpleStar (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          operates https://purplestar.cc (the &quot;Service&quot;). This policy
          explains what information we collect, why, and the choices you have.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">1. Information we collect</h2>
        <p className="mb-3 leading-relaxed">
          <strong>Birth information you provide.</strong> To generate a Zi Wei
          Dou Shu chart, you provide a birth date, time, location, and
          (optionally) gender. We use this data solely to calculate and render
          your chart and reading.
        </p>
        <p className="mb-3 leading-relaxed">
          <strong>Account information (if you create one).</strong> Email
          address and password or OAuth identifiers, used to save your charts
          and purchases.
        </p>
        <p className="mb-3 leading-relaxed">
          <strong>Payment information.</strong> Paid readings are processed by
          third-party payment processors (including cryptocurrency payment
          providers). We do not store full card numbers; we retain only a
          transaction reference and the email used for the purchase.
        </p>
        <p className="mb-6 leading-relaxed">
          <strong>Automatically collected data.</strong> Like most websites, we
          collect standard log data (IP address, browser type, pages visited,
          timestamps) and use cookies and similar technologies for analytics,
          security, and advertising.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">2. How we use information</h2>
        <ul className="mb-6 list-disc pl-6 space-y-1 leading-relaxed">
          <li>To calculate your chart and generate your AI-assisted reading</li>
          <li>To save charts to your account (if requested)</li>
          <li>To process payments and deliver purchased reports</li>
          <li>To display advertising (see Section 4)</li>
          <li>To improve the Service, fix bugs, and prevent abuse</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          We do <strong>not</strong> sell your personal information, and we do
          not use your birth data for advertising profiles.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">3. AI processing</h2>
        <p className="mb-6 leading-relaxed">
          Readings are generated with the assistance of artificial intelligence
          models operated by third-party providers. Birth details and chart
          data are sent to these providers to produce your reading. We instruct
          providers not to use such inputs to train their models where those
          controls are available. Do not enter information you would not want
          processed for this purpose.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">4. Advertising and cookies</h2>
        <p className="mb-6 leading-relaxed">
          We use Google AdSense to display ads. Google and its partners may use
          cookies (such as the DoubleClick cookie) to serve ads based on your
          prior visits to this and other websites. You can opt out of
          personalized advertising at{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener" className="text-imperial-gold hover:underline">
            google.com/settings/ads
          </a>{' '}
          or via{' '}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener" className="text-imperial-gold hover:underline">
            aboutads.info
          </a>
          .
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">5. Data retention &amp; deletion</h2>
        <p className="mb-6 leading-relaxed">
          Generated charts are retained as follows: anonymous charts are kept
          in temporary storage and automatically deleted within 30 days;
          charts saved to an account are kept until you delete them or close
          your account. You may request deletion of your data at any time via
          our{' '}
          <Link href="/contact" className="text-imperial-gold hover:underline">
            contact page
          </Link>
          .
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">6. Data sharing</h2>
        <p className="mb-6 leading-relaxed">
          We share data only with: payment processors (to complete
          transactions), AI providers (to generate readings), advertising and
          analytics partners (as described above), and infrastructure
          providers (hosting and CDN). We may disclose information when
          required by law.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">7. Security</h2>
        <p className="mb-6 leading-relaxed">
          We use HTTPS for all traffic, encrypt sensitive credentials, and
          restrict access to production data. No method of transmission is
          100% secure, but we review our practices regularly.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">8. Your rights</h2>
        <p className="mb-6 leading-relaxed">
          Depending on your jurisdiction (e.g., the EU/EEA, UK, California),
          you may have rights to access, correct, export, or delete your
          personal data, and to object to certain processing. Contact us to
          exercise these rights.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">9. Children&apos;s privacy</h2>
        <p className="mb-6 leading-relaxed">
          The Service is not directed to children under 13 (or 16 in the EEA),
          and we do not knowingly collect their data.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">10. Changes &amp; contact</h2>
        <p className="mb-6 leading-relaxed">
          We will post any changes to this policy on this page with an updated
          date. Questions? Contact us via the{' '}
          <Link href="/contact" className="text-imperial-gold hover:underline">
            contact page
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
