import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'PurpleStar — Your Destiny Written in the Stars of the East',
  description:
    'Discover your destiny with Ziwei Doushu (Purple Star Astrology), the most sophisticated Chinese birth chart system. Get your free chart and AI-powered life reading.',
  keywords: [
    'ziwei doushu',
    'purple star astrology',
    'chinese birth chart',
    'chinese astrology reading',
    'zi wei dou shu',
    'destiny reading',
    'free birth chart',
  ],
  authors: [{ name: 'PurpleStar' }],
  openGraph: {
    title: 'PurpleStar — Ziwei Doushu Reading',
    description: 'Your destiny, written in the stars of the East.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PurpleStar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PurpleStar — Ziwei Doushu (Purple Star Astrology)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PurpleStar — Ziwei Doushu Reading',
    description: 'Free Ziwei Doushu birth chart + AI-powered life reading.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://purplestar.cc'),
};

// Organization schema — global identity for Google Knowledge Graph and brand searches.
// Renders once in the root layout so every page inherits it.
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PurpleStar',
  alternateName: 'Purple Star Astrology',
  url: 'https://purplestar.cc',
  logo: 'https://purplestar.cc/icon.svg',
  image: 'https://purplestar.cc/og-image.png',
  description:
    'Free Ziwei Doushu (Purple Star Astrology) birth chart generator with AI-powered life readings. The most sophisticated Chinese birth chart system, refined over 1,000 years.',
  foundingDate: '2026',
  sameAs: [
    'https://purplestar.cc',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://purplestar.cc',
    availableLanguage: ['English'],
  },
};

// AdSense Publisher ID — obtained from AdSense account approval.
// Format: always "ca-pub-XXXXXXXXXXXXXXXX" (ca- prefix required by ads.txt & ad tag).
const ADSENSE_PUBLISHER_ID = 'ca-pub-9378214644556482';

// Yandex Metrica counter ID (8-digit number from https://metrica.yandex.com).
// Leave empty string if not configured yet — Yandex tracking will be skipped.
const YANDEX_METRICA_ID = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID || '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* === Bing Webmaster Verification === */}
        <meta name="msvalidate.01" content="EA4AEB907241507BA48762B36249A64C" />

        {/* === Baidu Webmaster Verification === */}
        <meta name="baidu-site-verification" content="codeva-31owVYm7Md" />

        {/* === Google AdSense Auto Ads === */}
        {/* Loads the AdSense library. Must be in <head> and use async + crossOrigin="anonymous". */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {/* Organization schema — site-wide brand identity. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />

        {children}

        {/* === AdSense Auto Ads bootstrap === */}
        {/* Pushes the page-level ads config. Required for Auto Ads to start placing ads.
            Uses native <script> (not next/script) so it runs synchronously during HTML parse
            and registers adsbygoogle.push before AdSense script finishes loading. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "${ADSENSE_PUBLISHER_ID}", enable_page_level_ads: true });`,
          }}
        />

        {/* === Yandex.Metrika counter === */}
        {/* Only renders when NEXT_PUBLIC_YANDEX_METRICA_ID env var is set.
            Uses native <script> with dangerouslySetInnerHTML (NOT next/script) because
            Next.js Script with inline content queues execution behind hydration;
            we need the metrika loader to run as soon as HTML parses so the page-view
            hit reaches Yandex before users navigate away. Get your counter ID from
            https://metrica.yandex.com (8-digit number). */}
        {YANDEX_METRICA_ID && (
          <>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                  ym(${YANDEX_METRICA_ID}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                  });
                `,
              }}
            />
            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${YANDEX_METRICA_ID}`}
                  style={{ position: 'absolute', left: '-9999px' }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
