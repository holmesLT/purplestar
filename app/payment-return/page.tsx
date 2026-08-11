'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function PaymentReturnContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'redirecting' | 'error'>('redirecting');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sessionId = searchParams.get('session_id');
    const tier = searchParams.get('tier') as 'basic' | 'premium' | null;

    if (!sessionId) {
      setStatus('error');
      setErrorMsg('Missing session_id from Stripe. Please return to the home page and try again.');
      return;
    }
    if (!tier || (tier !== 'basic' && tier !== 'premium')) {
      setStatus('error');
      setErrorMsg('Invalid or missing tier. Please return to the home page and try again.');
      return;
    }

    // 从 sessionStorage 拿之前存的 chartId
    let chartId: string | null = null;
    try {
      const raw = sessionStorage.getItem('pendingChart');
      if (raw) {
        const parsed = JSON.parse(raw);
        chartId = parsed.chartId;
        // 立即清理，避免污染下次访问
        sessionStorage.removeItem('pendingChart');
      }
    } catch {}

    if (!chartId) {
      // Fallback: 没有 sessionStorage（用户开了新窗口/incognito），用 sessionId 让 /report 重新生成时让用户重选
      setStatus('error');
      setErrorMsg('Your chart selection was lost (browser session expired or new window). Please regenerate your chart and try again.');
      return;
    }

    // 跳到 /report，让它从 Stripe API 校验 + 拉 chart + 调 Claude
    router.replace(`/report?chartId=${chartId}&tier=${tier}&session_id=${sessionId}`);
  }, [router, searchParams]);

  if (status === 'error') {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl text-imperial-gold mb-4 font-display">Payment Return Issue</h1>
          <p className="text-imperial-parchment/70 mb-6">{errorMsg}</p>
          <a href="/" className="gold-btn inline-block">Generate New Chart</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-imperial-gold animate-shimmer text-2xl font-display mb-4">
          Payment received · Loading your reading…
        </div>
        <p className="text-imperial-parchment/60 text-sm">
          Verifying payment and generating your cosmic blueprint.
        </p>
      </div>
    </main>
  );
}

export default function PaymentReturnPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-imperial-gold animate-shimmer text-xl font-display">Loading…</div>
      </main>
    }>
      <PaymentReturnContent />
    </Suspense>
  );
}
