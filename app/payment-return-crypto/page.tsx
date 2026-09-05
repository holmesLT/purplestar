// Server-component wrapper: see app/chart/page.tsx for rationale.
import type { Metadata } from 'next';
import CryptoPaymentReturnClient from './CryptoPaymentReturnClient';

export const metadata: Metadata = {
  title: 'Crypto Payment | PurpleStar',
  description: 'Complete your crypto payment to receive your AI reading.',
  alternates: {
    canonical: 'https://purplestar.cc/payment-return-crypto/',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CryptoPaymentReturnPage() {
  return <CryptoPaymentReturnClient />;
}
