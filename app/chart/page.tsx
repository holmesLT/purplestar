'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ChartGrid from '@/components/ChartGrid';
import type { ChartResult } from '@/lib/ziwei';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.purplestar.techhouse.ccwu.cc';

function ChartContent() {
  const searchParams = useSearchParams();
  const chartId = searchParams.get('id') || '';
  const [chart, setChart] = useState<ChartResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !chartId) {
      setError('No chart ID provided');
      setLoading(false);
      return;
    }

    // 1) 优先从 URL hash 取（用户带着数据跳转）
    const hash = window.location.hash.replace(/^#/, '');
    if (hash) {
      try {
        const decoded = JSON.parse(decodeURIComponent(atob(hash)));
        setChart(decoded);
        setLoading(false);
        return;
      } catch {}
    }

    // 2) 兜底：从 API 取
    fetch(`${API_BASE}/api/chart/${chartId}`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error('Chart not found')))
      .then(data => setChart(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [chartId]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-imperial-gold animate-shimmer text-xl font-display">
          Reading the stars…
        </div>
      </main>
    );
  }

  if (error || !chart) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl text-imperial-gold mb-4">Chart Not Found</h1>
          <p className="text-imperial-parchment/70 mb-6">
            Charts are not persisted. Please regenerate yours.
          </p>
          <Link href="/" className="gold-btn inline-block">
            Generate New Chart
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-imperial-gold hover:underline text-sm">
          ← New Chart
        </Link>
        <div className="text-xs text-imperial-parchment/50">
          Chart ID: {chartId}
        </div>
      </div>

      <h1 className="font-display text-3xl md:text-5xl text-center mb-4 text-imperial-gold">
        Your Ziwei Birth Chart
      </h1>
      <p className="text-center text-imperial-parchment/70 mb-10">
        Five Element: <span className="text-imperial-gold">{chart.fiveElementClass}</span> ·
        Born in {chart.chineseZodiac} Year · Destiny Palace: {chart.destinyPalaceBranch}
      </p>

      <ChartGrid chart={chart} />

      {/* 宫位详细列表 */}
      <section className="mt-12">
        <h2 className="font-display text-2xl mb-6 text-imperial-gold">
          The 12 Life Palaces
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {chart.palaces.map((palace, idx) => (
            <details key={idx} className="purple-card rounded-lg p-4 group">
              <summary className="cursor-pointer flex justify-between items-center">
                <div>
                  <span className="font-serif text-lg text-imperial-gold">
                    {palace.palaceNameEN}
                  </span>
                  <span className="text-xs text-imperial-parchment/50 ml-2">
                    {palace.palaceNameCN} · {palace.earthlyBranch}
                  </span>
                </div>
                <span className="text-imperial-gold group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="mt-3 text-sm space-y-2">
                {palace.mainStars.length > 0 ? (
                  <div>
                    <span className="text-imperial-parchment/50">Main Stars:</span>{' '}
                    <span className="text-imperial-parchment">
                      {palace.mainStars.map(s => `${s.nameEN} (${s.nameCN})`).join(', ')}
                    </span>
                  </div>
                ) : (
                  <div className="text-imperial-parchment/40 italic">No main stars in this palace.</div>
                )}
                {palace.minorStars.length > 0 && (
                  <div>
                    <span className="text-imperial-parchment/50">Minor Stars:</span>{' '}
                    <span className="text-imperial-parchment/80">
                      {palace.minorStars.join(', ')}
                    </span>
                  </div>
                )}
                {palace.sihua.length > 0 && (
                  <div>
                    <span className="text-imperial-parchment/50">Four Transformations:</span>{' '}
                    <span className="text-imperial-gold">
                      {palace.sihua.map(s => `${s.star} → ${s.type}`).join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA：付费解读 */}
      <section className="mt-16 purple-card rounded-2xl p-8 md:p-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4">
          What Does This Chart <span className="text-imperial-gold">Actually Mean</span> for You?
        </h2>
        <p className="text-imperial-parchment/70 mb-8 max-w-2xl mx-auto">
          The chart above shows your cosmic blueprint. Our AI astrologer, trained on the
          Ni Haixia Tianji system and 518,000 chart samples, will interpret every star,
          palace, and transformation into practical guidance for your life.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <PayCard tier="basic" price={9.9} chartId={chartId} chart={chart} />
          <PayCard tier="premium" price={29.9} chartId={chartId} chart={chart} highlight />
        </div>
      </section>
    </main>
  );
}

export default function ChartPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-imperial-gold animate-shimmer text-xl font-display">
          Loading…
        </div>
      </main>
    }>
      <ChartContent />
    </Suspense>
  );
}

function PayCard({
  tier,
  price,
  chartId,
  chart,
  highlight,
}: {
  tier: 'basic' | 'premium';
  price: number;
  chartId: string;
  chart: ChartResult;
  highlight?: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chartId, tier, chart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Checkout failed');
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`rounded-xl p-6 border-2 ${
        highlight
          ? 'border-imperial-gold bg-imperial-gold/10'
          : 'border-imperial-gold/30 bg-imperial-purple/30'
      } relative`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-imperial-gold text-imperial-ink text-xs font-bold rounded-full">
          BEST VALUE
        </div>
      )}
      <h3 className="font-display text-2xl mb-2 text-imperial-gold">
        {tier === 'premium' ? 'Premium Full Report' : 'AI Reading'}
      </h3>
      <div className="text-4xl font-bold mb-4">
        ${price}
        <span className="text-base font-normal text-imperial-parchment/50"> USD</span>
      </div>
      <ul className="text-sm text-left text-imperial-parchment/80 space-y-2 mb-6">
        {tier === 'premium' ? (
          <>
            <li>✓ 3,000-5,000 word reading</li>
            <li>✓ 13 life themes covered</li>
            <li>✓ Major luck periods (next 10 years)</li>
            <li>✓ Annual fortune outlook</li>
            <li>✓ Classical patterns & remedies</li>
            <li>✓ Actionable life guidance</li>
          </>
        ) : (
          <>
            <li>✓ 500-800 word reading</li>
            <li>✓ 5 essential themes</li>
            <li>✓ Core personality insight</li>
            <li>✓ Career, money, relationships</li>
            <li>✓ One key takeaway</li>
          </>
        )}
      </ul>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="gold-btn w-full disabled:opacity-50"
      >
        {loading ? 'Loading…' : 'Get My Reading'}
      </button>
    </div>
  );
}
