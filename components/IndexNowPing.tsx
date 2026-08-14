// IndexNow auto-pusher for PurpleStar
// Drops this into layout.tsx or page.tsx to ping IndexNow whenever a visitor lands.
// In production, replace the placeholder key.

import Script from 'next/script';

const INDEXNOW_KEY = 'REPLACE_ME_WITH_YOUR_KEY';
const HOST = 'purplestar.techhouse.ccwu.cc';

const URLS_TO_PING = [
  `https://${HOST}/`,
  `https://${HOST}/learn/`,
  `https://${HOST}/learn/ziwei-doushu-vs-bazi/`,
  `https://${HOST}/learn/how-to-read-purple-star-astrology-chart/`,
  `https://${HOST}/learn/ziwei-doushu-12-palaces-explained/`,
  `https://${HOST}/learn/ziwei-doushu-14-main-stars/`,
  `https://${HOST}/learn/ziwei-doushu-career-wealth-palace/`,
  `https://${HOST}/learn/ziwei-doushu-vs-western-astrology/`,
  `https://${HOST}/learn/is-ziwei-doushu-accurate/`,
  `https://${HOST}/learn/ziwei-doushu-four-transformations-sihua/`,
];

export default function IndexNowPing() {
  return (
    <Script id="indexnow-ping" strategy="afterInteractive">
      {`
        (function() {
          if (typeof window === 'undefined') return;
          if (window.__indexnow_pinged) return;
          window.__indexnow_pinged = true;
          fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              host: '${HOST}',
              key: '${INDEXNOW_KEY}',
              keyLocation: 'https://${HOST}/${INDEXNOW_KEY}.txt',
              urlList: ${JSON.stringify(URLS_TO_PING)}
            })
          }).catch(() => {});
        })();
      `}
    </Script>
  );
}
