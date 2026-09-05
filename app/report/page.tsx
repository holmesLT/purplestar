// Server-component wrapper: exports static metadata (noindex + canonical) and renders the client
// component. See app/chart/page.tsx for the full rationale.
import type { Metadata } from 'next';
import ReportClient from './ReportClient';

export const metadata: Metadata = {
  title: 'Your Destiny Reading | PurpleStar',
  description:
    'Your personalized AI-generated Ziwei Doushu reading, based on your unique birth chart.',
  alternates: {
    canonical: 'https://purplestar.cc/report/',
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
    title: 'Your Destiny Reading | PurpleStar',
    description:
      'Your personalized AI-generated Ziwei Doushu reading.',
    type: 'article',
    url: 'https://purplestar.cc/report/',
    siteName: 'PurpleStar',
  },
};

export default function ReportPage() {
  return <ReportClient />;
}
