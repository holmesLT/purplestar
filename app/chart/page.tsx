// Server-component wrapper that exports the static metadata (noindex + canonical)
// and renders the client-component ChartClient.
//
// Why this split exists:
// Next.js 14 does NOT pick up sibling `metadata.ts` for a `page.tsx` that is a `'use client'`
// component. The fallback is the root layout's `robots.index: true`. To override that for a
// dynamic client page like /chart (millions of `?id=` permutations), we need a SERVER-component
// page.tsx that can export metadata, and a separate client component file that holds the
// 'use client' logic.
import type { Metadata } from 'next';
import ChartClient from './ChartClient';

export const metadata: Metadata = {
  title: 'Your Ziwei Birth Chart | PurpleStar',
  description:
    'View your personalized Ziwei Doushu birth chart with all 12 palaces, 14 main stars, and Four Transformations.',
  alternates: {
    canonical: 'https://purplestar.cc/chart/',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: 'Your Ziwei Birth Chart | PurpleStar',
    description:
      'View your personalized Ziwei Doushu birth chart with all 12 palaces, 14 main stars, and Four Transformations.',
    type: 'website',
    url: 'https://purplestar.cc/chart/',
    siteName: 'PurpleStar',
  },
};

export default function ChartPage() {
  return <ChartClient />;
}
