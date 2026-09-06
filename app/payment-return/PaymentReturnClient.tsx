'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.purplestar.cc';

function PaymentReturnContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'redirecting' | 'error'>('redirecting');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      setStatus('error');
      setErrorMsg('Missing session_id from Stripe. Please return to the home page and try again.');
      return;
    }

    // 跳到 /report,让 server 端根据 session_id 反查 chart + tier
    // (不再依赖 sessionStorage,跨窗口/隐私模式都安全)
    router.replace(`/report?session_id=${sessionId}`);
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

export default function PaymentReturnClient() {
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
