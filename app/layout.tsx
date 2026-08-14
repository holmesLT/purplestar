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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PurpleStar — Ziwei Doushu Reading',
    description: 'Free Ziwei Doushu birth chart + AI-powered life reading.',
  },
  robots: {
    index: true,
    follow: true,
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
        {children}

        {/* === AdSense Auto Ads bootstrap === */}
        {/* Pushes the page-level ads config. Required for Auto Ads to start placing ads. */}
        <Script id="adsense-auto-ads" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "${ADSENSE_PUBLISHER_ID}",
              enable_page_level_ads: true
            });
          `}
        </Script>

        {/* === Yandex.Metrika counter === */}
        {/* Only renders when NEXT_PUBLIC_YANDEX_METRICA_ID env var is set.
            Get your counter ID from https://metrica.yandex.com (8-digit number). */}
        {YANDEX_METRICA_ID && (
          <>
            <Script id="yandex-metrika" type="text/javascript" strategy="afterInteractive">
              {`
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
              `}
            </Script>
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
