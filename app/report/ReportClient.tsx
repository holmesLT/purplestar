'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.purplestar.cc';

function ReportContent() {
  const searchParams = useSearchParams();
  const chartId = searchParams.get('chartId') || '';
  const tierParam = searchParams.get('tier');
  const sessionId = searchParams.get('session_id');
  const nowpaymentsPaymentId = searchParams.get('nowpayments_payment_id');
  const selfCryptoOrderId = searchParams.get('self_crypto_order_id');

  const [chart, setChart] = useState<any>(null);
  const [reading, setReading] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 支付来源至少要有一个
    if (!sessionId && !nowpaymentsPaymentId && !selfCryptoOrderId) {
      setError('No payment session. Please complete checkout first.');
      setLoading(false);
      return;
    }

    // 1) 优先从 URL hash 取 chart(老路径,某些 client page 还可能在用)
    const hash = window.location.hash.replace(/^#/, '');
    let chartData: any = null;
    if (hash) {
      try {
        chartData = JSON.parse(decodeURIComponent(atob(hash)));
        setChart(chartData);
      } catch {}
    }

    // 2) 如果没有 hash 但有 session_id,直接从 server 拿(新路径)
    //    server 在 Stripe webhook 里已经把 chart 写到 orders.chart_id 关联的 charts 行
    async function loadChartFromServer(sid: string) {
      const r = await fetch(`${API_BASE}/api/chart/by-session/${sid}`);
      if (!r.ok) throw new Error(`Chart not found for this payment (${r.status})`);
      return r.json();
    }

    const chartPromise = (async () => {
      if (!chartData && sessionId) {
        chartData = await loadChartFromServer(sessionId);
        setChart(chartData);
      }
      return chartData;
    })();

    // 3) 验证支付 + 生成解读(支持 Stripe + NOWPayments + 自托管 XRP)
    chartPromise
      .then((cd) => {
        const body: any = { chart: cd, chartId, tier: tierParam || (cd && cd.tier) };
        if (sessionId) body.sessionId = sessionId;
        if (nowpaymentsPaymentId) body.nowpaymentsPaymentId = nowpaymentsPaymentId;
        if (selfCryptoOrderId) body.selfCryptoOrderId = selfCryptoOrderId;
        return fetch(`${API_BASE}/api/interpret`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      })
      .then(r => {
        if (!r.ok) {
          return r.json().then(body => {
            throw new Error(body?.error || `Server returned ${r.status}`);
          }).catch(() => {
            throw new Error(`Server returned ${r.status}`);
          });
        }
        return r.json();
      })
      .then(data => setReading(data.reading))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [tierParam, sessionId, nowpaymentsPaymentId, selfCryptoOrderId, chartId]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-imperial-gold animate-shimmer text-2xl font-display mb-4">
            Channeling the Stars…
          </div>
          <p className="text-imperial-parchment/60 text-sm">
            Our AI astrologer is composing your reading.
            This usually takes 10-30 seconds.
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl text-imperial-gold mb-4">Reading Unavailable</h1>
          <p className="text-imperial-parchment/70 mb-6">{error}</p>
          <a href="/" className="gold-btn inline-block">
            Start Over
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <div className="text-xs tracking-[0.3em] text-imperial-gold uppercase mb-2">
          Destiny Reading
        </div>
        <h1 className="font-display text-4xl md:text-5xl mb-4">
          Your Destiny Reading
        </h1>
        {chart && (
          <p className="text-imperial-parchment/70">
            Born {chart.solarDate} · {chart.chineseZodiac} Year ·{' '}
            <span className="text-imperial-gold">{chart.fiveElementClass}</span>
          </p>
        )}
      </div>

      {reading && (
        <article className="purple-card rounded-2xl p-8 md:p-12 prose prose-invert prose-headings:font-display prose-headings:text-imperial-gold prose-strong:text-imperial-gold max-w-none">
          <ReactMarkdown>{reading}</ReactMarkdown>
        </article>
      )}

      <section className="mt-12 text-center">
        <p className="text-imperial-parchment/60 text-sm mb-4">
          Want an even deeper reading?
        </p>
        <a href="/" className="gold-btn inline-block">
          Generate Another Chart
        </a>
        <div className="mt-6 text-xs text-imperial-parchment/40">
          Powered by Claude AI · Based on the Ni Haixia Tianji Ziwei Doushu lineage
        </div>
      </section>
    </main>
  );
}

export default function ReportClient() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-imperial-gold animate-shimmer text-xl font-display">
          Loading…
        </div>
      </main>
    }>
      <ReportContent />
    </Suspense>
  );
}
