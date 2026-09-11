import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact PurpleStar — Support, Feedback & Data Requests',
  description:
    'Get in touch with the PurpleStar team about chart questions, paid reading support, corrections, feedback, or data deletion requests.',
  alternates: { canonical: 'https://purplestar.cc/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-imperial-parchment/60">
        <Link href="/" className="text-imperial-gold hover:underline">PurpleStar</Link>
        <span className="mx-2">›</span>
        <span>Contact</span>
      </nav>

      <article className="purple-card rounded-2xl p-8 md:p-12">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Contact Us</h1>
        <p className="mb-8 leading-relaxed">
          We read every message and usually reply within 1–2 business days.
        </p>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">Email</h2>
        <ul className="mb-6 space-y-2 leading-relaxed">
          <li>
            <strong>General support &amp; feedback:</strong>{' '}
            <a href="mailto:rkotsvm@gmail.com" className="text-imperial-gold hover:underline">
              rkotsvm@gmail.com
            </a>
          </li>
          <li>
            <strong>Payment &amp; billing issues:</strong>{' '}
            <a href="mailto:rkotsvm@gmail.com" className="text-imperial-gold hover:underline">
              rkotsvm@gmail.com
            </a>{' '}
            (subject line: &quot;Payment&quot; + your order reference)
          </li>
          <li>
            <strong>Privacy &amp; data requests (access, export, deletion):</strong>{' '}
            <a href="mailto:rkotsvm@gmail.com" className="text-imperial-gold hover:underline">
              rkotsvm@gmail.com
            </a>{' '}
            (subject line: &quot;Privacy Request&quot;)
          </li>
        </ul>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">Before you write</h2>
        <ul className="mb-6 list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            <strong>Chart looks wrong?</strong> Double-check your birth time
            and whether you were born during a period using daylight saving
            time — those account for the vast majority of &quot;unexpected
            chart&quot; reports. Include your exact birth date, time, and city
            so we can reproduce the chart.
          </li>
          <li>
            <strong>Payment succeeded but no report?</strong> Include the
            email used at checkout and the transaction reference; we&apos;ll
            re-deliver the report manually if needed.
          </li>
        </ul>

        <h2 className="font-display text-2xl mt-8 mb-3 text-imperial-gold">Corrections</h2>
        <p className="mb-6 leading-relaxed">
          Zi Wei Dou Shu has many schools, and classical texts disagree with
          each other. If you believe an interpretation on the site is wrong
          under your school&apos;s tradition, tell us the source — we genuinely
          update content based on cited corrections.
        </p>
      </article>
    </main>
  );
}
