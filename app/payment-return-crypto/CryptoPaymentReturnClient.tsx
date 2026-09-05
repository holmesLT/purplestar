'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.purplestar.cc';

interface PendingCrypto {
  order_id: string;
  pay_address?: string;
  pay_amount?: number;
  pay_currency?: string;
  amount_usd?: number;
  tier?: 'basic' | 'premium';
  expires_at?: number;
}

function CryptoPaymentReturnContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'waiting' | 'polling' | 'redirecting' | 'pending' | 'error'>('waiting');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [pending, setPending] = useState<PendingCrypto | null>(null);
  const [blockchainStatus, setBlockchainStatus] = useState<string>('waiting');
  const [secondsLeft, setSecondsLeft] = useState<number>(1200); // 20 min default
  const pollTimerRef = useRef<any>(null);

  // Load pending payment info from URL or sessionStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const orderIdFromQuery = searchParams.get('order_id');
    const tierFromQuery = searchParams.get('tier') as 'basic' | 'premium' | null;

    let loaded: PendingCrypto | null = null;
    if (orderIdFromQuery) {
      try {
        const raw = sessionStorage.getItem('pendingCryptoPayment');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.order_id === orderIdFromQuery) {
            loaded = parsed;
            if (tierFromQuery && !parsed.tier) loaded.tier = tierFromQuery;
          }
        }
      } catch {}
      if (!loaded) {
        loaded = { order_id: orderIdFromQuery, tier: tierFromQuery || undefined };
      }
    } else {
      try {
        const raw = sessionStorage.getItem('pendingCryptoPayment');
        if (raw) loaded = JSON.parse(raw);
      } catch {}
    }

    if (!loaded || !loaded.order_id) {
      setStatus('error');
      setErrorMsg('Missing payment info. Please return to the chart page and try again.');
      return;
    }

    setPending(loaded);

    // Set initial countdown from expires_at
    if (loaded.expires_at) {
      const remaining = loaded.expires_at - Math.floor(Date.now() / 1000);
      if (remaining > 0) setSecondsLeft(remaining);
      else setSecondsLeft(0);
    }

    // Clean sessionStorage
    try {
      sessionStorage.removeItem('pendingCryptoPayment');
    } catch {}
  }, [searchParams]);

  // Countdown timer (20 min from creation, but we just visually estimate)
  useEffect(() => {
    if (status !== 'polling' && status !== 'waiting') return;
    const tick = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(tick);
  }, [status]);

  // Poll worker for payment status
  useEffect(() => {
    if (!pending || (status !== 'waiting' && status !== 'polling')) return;

    let attempts = 0;
    const maxAttempts = 360; // 360 × 5s = 30 min — covers full expiration window

    const queryId = pending.order_id;
    if (!queryId) return;

    setStatus('polling');

    const poll = async () => {
      attempts++;
      try {
        const resp = await fetch(`${API_BASE}/api/crypto/payment/${encodeURIComponent(queryId)}`);
        if (resp.ok) {
          const data: any = await resp.json();
          setBlockchainStatus(data.status || 'unknown');
          if (['finished', 'confirmed'].includes(data.status)) {
            // resolve tier and chartId for redirect
            const tier = pending.tier || data.tier || 'basic';
            let chartId: string | null = null;
            if (data.chart_id) chartId = data.chart_id;
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
              setErrorMsg('Chart context lost. Please return to the chart page and try again.');
              return;
            }
            setStatus('redirecting');
            // Clear poll and redirect
            if (pollTimerRef.current) clearTimeout(pollTimerRef.current);
            setTimeout(() => {
              router.replace(`/report?chartId=${chartId}&tier=${tier}&self_crypto_order_id=${queryId}`);
            }, 800);
            return;
          }
          if (['failed', 'expired'].includes(data.status)) {
            setStatus('error');
            setErrorMsg(`Payment ${data.status}. Please return to the chart page and try a new payment.`);
            return;
          }
        }
      } catch {
        // ignore network blip
      }
      if (attempts < maxAttempts) {
        pollTimerRef.current = setTimeout(poll, 5000);
      } else {
        setStatus('pending');
        setErrorMsg('Blockchain confirmation is taking longer than 30 minutes. You can safely close this page — once your payment is confirmed on-chain, we will email your reading within the next hour.');
      }
    };

    poll();

    return () => {
      if (pollTimerRef.current) clearTimeout(pollTimerRef.current);
    };
  }, [pending, status, router]);

  if (status === 'error') {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl text-imperial-gold mb-4 font-display">Payment Issue</h1>
          <p className="text-imperial-parchment/70 mb-6">{errorMsg}</p>
          <Link href="/" className="gold-btn inline-block">Generate New Chart</Link>
        </div>
      </main>
    );
  }

  if (status === 'pending') {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-imperial-gold font-display text-2xl mb-4">
            ⏳ Confirmation in progress
          </div>
          <p className="text-imperial-parchment/70 text-sm">{errorMsg}</p>
        </div>
      </main>
    );
  }

  const mm = Math.floor(secondsLeft / 60);
  const ss = (secondsLeft % 60).toString().padStart(2, '0');
  const payAddr = pending?.pay_address || '';
  const payAmt = pending?.pay_amount?.toFixed(6) || '';
  const payCcy = (pending?.pay_currency || 'xrp').toUpperCase();

  return (
    <main className="min-h-screen px-6 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="font-display text-3xl text-imperial-gold text-center mb-2">
          🪙 Complete Your Crypto Payment
        </h1>
        <p className="text-center text-imperial-parchment/60 text-sm mb-8">
          Send exactly the amount below to the address. Your reading unlocks automatically once the blockchain confirms.
        </p>

        <div className="rounded-xl border-2 border-imperial-gold/40 bg-imperial-purple/30 p-6 mb-6">
          {/* Amount */}
          <div className="text-center mb-6">
            <div className="text-imperial-parchment/60 text-xs uppercase tracking-wider mb-1">Amount Due</div>
            <div className="font-display text-5xl text-imperial-gold mb-1">
              {payAmt} <span className="text-2xl">{payCcy}</span>
            </div>
            <div className="text-imperial-parchment/50 text-xs">
              ≈ ${pending?.amount_usd?.toFixed(2) || '—'} USD · Order ID: {pending?.order_id?.slice(0, 8)}…
            </div>
          </div>

          {/* QR Code (auto-generated from address) */}
          {payAddr && (
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg">
                <img
                  alt={`${payCcy} payment QR code`}
                  width={208}
                  height={208}
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=208x208&data=${encodeURIComponent(pending?.pay_currency === 'usdt_trc20' ? `tron:${payAddr}` : payAddr)}&color=000000&bgcolor=ffffff&margin=1`}
                  className="block"
                />
              </div>
            </div>
          )}

          {/* Address */}
          {payAddr && (
            <div className="mb-4">
              <div className="text-imperial-parchment/60 text-xs uppercase tracking-wider mb-2 text-center">
                Send to this {pending?.pay_currency === 'usdt_trc20' ? 'Tron (TRC20)' : 'XRP'} address
              </div>
              <div className="bg-imperial-ink/60 border border-imperial-gold/30 rounded-lg p-3 flex items-center gap-2">
                <code className="flex-1 text-imperial-parchment text-xs break-all font-mono">
                  {payAddr}
                </code>
                <button
                  onClick={() => navigator.clipboard?.writeText(payAddr)}
                  className="text-imperial-gold hover:text-imperial-gold/80 text-xs px-2 py-1 border border-imperial-gold/40 rounded shrink-0"
                  aria-label="Copy address"
                >
                  Copy
                </button>
              </div>
              {pending?.pay_currency === 'xrp' && (
                <p className="text-imperial-parchment/50 text-xs mt-2 text-center">
                  ⚠ Include the <strong>Destination Tag</strong> if your wallet asks for one (Memo field). Tag: <strong>none needed</strong> for this payment.
                </p>
              )}
              {pending?.pay_currency === 'usdt_trc20' && (
                <p className="text-imperial-parchment/50 text-xs mt-2 text-center">
                  ⚠ Network: <strong>Tron (TRC20)</strong> only. Sending USDT on a different chain (ERC20, BEP20, etc.) will result in permanent loss of funds.
                </p>
              )}
            </div>
          )}

          {/* Status row */}
          <div className="flex items-center justify-between text-xs text-imperial-parchment/60 border-t border-imperial-gold/20 pt-4">
            <div>
              Blockchain status: <span className="text-imperial-gold">{blockchainStatus}</span>
            </div>
            <div>
              ⏳ {mm}:{ss}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-imperial-parchment/70 text-sm space-y-2 mb-6">
          <div className="font-semibold text-imperial-gold mb-2">How to pay:</div>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>Open your {pending?.pay_currency === 'usdt_trc20' ? 'Tron' : 'XRP'} wallet (Trust Wallet, Ledger, Exodus, Uphold, etc.)</li>
            <li>Paste the address above or scan the QR code</li>
            <li>Send <strong>exactly {payAmt} {payCcy}</strong> (smallest deviation may delay confirmation)</li>
            <li>
              Wait for blockchain confirmation (usually{' '}
              {pending?.pay_currency === 'usdt_trc20' ? '60-180 seconds on Tron' : '30-90 seconds on XRP'})
            </li>
            <li>This page will automatically detect the payment and load your reading</li>
          </ol>
        </div>

        <div className="text-center">
          <div className={`inline-block px-4 py-2 rounded-full text-sm ${status === 'redirecting' ? 'bg-green-600 text-white' : 'bg-imperial-gold/20 text-imperial-gold animate-pulse'}`}>
            {status === 'redirecting'
              ? '✓ Payment confirmed — Loading your reading…'
              : '🔄 Watching blockchain for your payment…'}
          </div>
          <p className="text-imperial-parchment/40 text-xs mt-4">
            You can close this tab and return later — we'll email your reading once confirmed.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function CryptoPaymentReturnClient() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-imperial-gold animate-shimmer text-xl font-display">Loading payment…</div>
      </main>
    }>
      <CryptoPaymentReturnContent />
    </Suspense>
  );
}
