'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.purplestar.cc';
// Fallback 链:新域名 DNS 未生效时,自动回落到老域名(过渡期)
// 客户端先试新域名,失败后试老域名
const API_FALLBACKS = [
  API_BASE,
  'https://api.purplestar.techhouse.ccwu.cc', // 老域名(过渡)
].filter((v, i, a) => a.indexOf(v) === i); // 去重

function ReportContent() {
  const searchParams = useSearchParams();
  const chartId = searchParams.get('chartId') || '';
  const tier = (searchParams.get('tier') as 'basic' | 'premium') || 'basic';
  const sessionId = searchParams.get('session_id');

  const [chart, setChart] = useState<any>(null);
  const [reading, setReading] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1) 从 URL hash 取 chart（如果用户在生成页面跳转过来）
    const hash = window.location.hash.replace(/^#/, '');
    let chartData: any = null;
    if (hash) {
      try {
        chartData = JSON.parse(decodeURIComponent(atob(hash)));
        setChart(chartData);
      } catch {}
    }

    // 2) 验证支付 + 生成解读(支持多 endpoint fallback,过渡期 DNS 不稳时仍可用)
    if (!sessionId) {
      setError('No payment session. Please complete checkout first.');
      setLoading(false);
      return;
    }

    const tryEndpoints = async (): Promise<any> => {
      let lastErr: Error | null = null;
      for (const base of API_FALLBACKS) {
        try {
          const r = await fetch(`${base}/api/interpret`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chart: chartData, tier, sessionId }),
          });
          if (r.ok) return await r.json();
          lastErr = new Error(`Server returned ${r.status}`);
        } catch (e: any) {
          lastErr = new Error(`${base}: ${e.message}`);
        }
      }
      throw lastErr ?? new Error('All endpoints failed');
    };

    tryEndpoints()
      .then(data => setReading(data.reading))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [tier, sessionId]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-imperial-gold animate-shimmer text-2xl font-display mb-4">
            Channeling the Stars…
          </div>
          <p className="text-imperial-parchment/60 text-sm">
            Our AI astrologer is composing your {tier === 'premium' ? 'comprehensive' : 'focused'} reading.
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
          {tier === 'premium' ? 'Premium Full Report' : 'AI Reading'}
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
        {tier === 'basic' && (
          <a href="/" className="gold-btn inline-block">
            Generate Another Chart
          </a>
        )}
        <div className="mt-6 text-xs text-imperial-parchment/40">
          Powered by Claude AI · Based on the Ni Haixia Tianji Ziwei Doushu lineage
        </div>
      </section>
    </main>
  );
}

export default function ReportPage() {
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
