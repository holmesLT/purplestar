// Server-component wrapper: see app/chart/page.tsx for rationale.
import type { Metadata } from 'next';
import PaymentReturnClient from './PaymentReturnClient';

export const metadata: Metadata = {
  title: 'Payment Received | PurpleStar',
  description: 'Your payment was received. Your AI reading is being prepared.',
  alternates: {
    canonical: 'https://purplestar.cc/payment-return/',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentReturnPage() {
  return <PaymentReturnClient />;
}
