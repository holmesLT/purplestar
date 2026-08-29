'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function CryptoPaymentReturnContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'polling' | 'redirecting' | 'pending' | 'error'>('polling');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // NOWPayments 跳回带:order_id / payment_id / chartId / tier
    // 注意:跳回时链上确认可能还没完成(payment_status = waiting/confirming)
    // 所以这里要 poll,直到 status = finished 才跳转 /report
    const orderId = searchParams.get('order_id');
    const paymentIdFromQuery = searchParams.get('payment_id');
    const tier = searchParams.get('tier') as 'basic' | 'premium' | null;
    const chartIdFromQuery = searchParams.get('chartId');

    if (!tier) {
      setStatus('error');
      setErrorMsg('Missing payment tier. Please return to the chart page and try again.');
      return;
    }

    // chartId 优先用 URL 参数,否则从 sessionStorage 拿
    let chartId = chartIdFromQuery;
    if (!chartId) {
      try {
        const raw = sessionStorage.getItem('pendingChart');
        if (raw) {
          const parsed = JSON.parse(raw);
          chartId = parsed.chartId;
          sessionStorage.removeItem('pendingChart');
        }
      } catch {}
    }

    if (!chartId) {
      setStatus('error');
      setErrorMsg('Your chart selection was lost (browser session expired or new window). Please regenerate your chart and try again.');
      return;
    }

    // 确定用哪个 ID 查 payment:URL 的 payment_id 优先,其次 sessionStorage,最后用 order_id
    let queryId = paymentIdFromQuery;
    if (!queryId) {
      try {
        queryId = sessionStorage.getItem('pendingCryptoPayment') || undefined;
        if (queryId) sessionStorage.removeItem('pendingCryptoPayment');
      } catch {}
    }
    if (!queryId && orderId) {
      queryId = orderId; // DB 端会按 payment_id 或 order_id 查
    }

    if (!queryId) {
      setStatus('error');
      setErrorMsg('Missing payment ID. Please return to the chart page and try again.');
      return;
    }

    // Poll worker 查询支付状态
    const API_BASE = 'https://api.purplestar.cc';
    let attempts = 0;
    const maxAttempts = 30; // 30 次 × 2 秒 = 60 秒

    const poll = async () => {
      attempts++;
      try {
        const resp = await fetch(`${API_BASE}/api/nowpayments/payment/${encodeURIComponent(queryId!)}`);
        if (resp.ok) {
          const data: any = await resp.json();
          // finished = 钱已到账,可以直接生成解读
          // confirmed / sending = 链上确认中(给用户提前进入,后端会再校验)
          if (['finished', 'confirmed', 'sending'].includes(data.status)) {
            setStatus('redirecting');
            const finalPaymentId = data.payment_id || queryId;
            router.replace(`/report?chartId=${chartId}&tier=${tier}&nowpayments_payment_id=${finalPaymentId}`);
            return;
          }
          if (['failed', 'refunded'].includes(data.status)) {
            setStatus('error');
            setErrorMsg(`Payment ${data.status}. Please try again or contact support.`);
            return;
          }
          // waiting / confirming → 继续 poll
        }
      } catch {
        // 网络问题继续重试
      }

      if (attempts < maxAttempts) {
        setTimeout(poll, 2000);
      } else {
        // 超时但还没 finished — 链上确认可能慢,告诉用户耐心等
        setStatus('pending');
        setErrorMsg('Payment detected but blockchain confirmation is taking longer than expected. Your reading will be available once confirmed (usually within 30 min). You can close this page; we will email you when ready.');
      }
    };

    poll();
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

  if (status === 'pending') {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-imperial-gold font-display text-2xl mb-4">
            🪙 支付确认中 · Payment Confirming
          </div>
          <p className="text-imperial-parchment/70 text-sm">
            {errorMsg}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-imperial-gold animate-shimmer text-2xl font-display mb-4">
          {status === 'redirecting'
            ? '✓ 支付完成 · Loading your reading…'
            : '⏳ 正在确认区块链交易 · Confirming blockchain transaction…'}
        </div>
        <p className="text-imperial-parchment/60 text-sm">
          {status === 'redirecting'
            ? 'Verifying payment and generating your cosmic blueprint.'
            : '等待矿工确认区块,通常 1-10 分钟 · Usually takes 1-10 minutes'}
        </p>
      </div>
    </main>
  );
}

export default function CryptoPaymentReturnPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-imperial-gold animate-shimmer text-xl font-display">Loading…</div>
      </main>
    }>
      <CryptoPaymentReturnContent />
    </Suspense>
  );
}
