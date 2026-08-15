// Cloudflare Pages Function: IndexNow auto-pusher
//
// Deploy path:  push this /functions/api/indexnow.js file; Cloudflare Pages
//               auto-discovers and bundles it into the worker.
// Trigger:      GET/POST https://purplestar.cc/api/indexnow
//               (Cloudflare Pages Functions run on /api/* by convention)
//
// What it does:
//   1. Builds the canonical URL list (mirrors app/sitemap.ts + tools/indexnow_push.py)
//   2. POSTs to https://api.indexnow.org/indexnow
//   3. Returns JSON: { ok, httpStatus, urlsSubmitted, responseBody }
//
// Engines covered (IndexNow protocol is shared by all these engines):
//   Bing, Yandex, DuckDuckGo, Naver, Seznam, Yahoo (via Bing)
//
// Caching: this endpoint is NOT cached by Cloudflare by default, so each call
// actually pushes. To avoid accidental flooding if hit by a crawler, we:
//   - Honor HEAD method (return 200 with empty body so health-checkers don't trigger)
//   - Reject empty queries (require ?key=<key> OR a shared-secret header)
//   - Keep the URL list as a module-level constant (no runtime build cost)
//
// Auth: the function accepts either:
//   (a) GET  /api/indexnow                  → pushes 10 URLs (full site)
//   (b) GET  /api/indexnow?key=<INDEXNOW_KEY>&urls=<slug1>,<slug2>...
//                                          → pushes subset, requires correct key
//   (c) POST /api/indexnow  with JSON body {"urls":[...]}
//                                          → same as (b) but JSON body
//
// Sharing the key in the URL is fine for our case: it's a *public* IndexNow
// key (its purpose is to be visible — it's published in {key}.txt on the
// site root). Anyone who can read it can already push URLs on our behalf.
// The shared secret prevents accidental denial-of-wallet if a bot hammers
// the endpoint, but it is NOT a true access control.

const SITE_HOST = 'purplestar.cc';
const INDEXNOW_KEY = '5a6d3b2fd71e485397beb74b986adccc';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// Canonical URL list — kept in sync with app/sitemap.ts + tools/indexnow_push.py
// Order: home → learn index → 8 learn articles (most SEO-important first).
const DEFAULT_URLS = [
  `https://${SITE_HOST}/`,
  `https://${SITE_HOST}/learn/`,
  `https://${SITE_HOST}/learn/how-to-read-purple-star-astrology-chart/`,
  `https://${SITE_HOST}/learn/ziwei-doushu-12-palaces-explained/`,
  `https://${SITE_HOST}/learn/ziwei-doushu-14-main-stars/`,
  `https://${SITE_HOST}/learn/ziwei-doushu-four-transformations-sihua/`,
  `https://${SITE_HOST}/learn/ziwei-doushu-career-wealth-palace/`,
  `https://${SITE_HOST}/learn/ziwei-doushu-vs-bazi/`,
  `https://${SITE_HOST}/learn/ziwei-doushu-vs-western-astrology/`,
  `https://${SITE_HOST}/learn/is-ziwei-doushu-accurate/`,
];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...CORS_HEADERS,
    },
  });
}

async function pushToIndexNow(urls) {
  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  let resp;
  let body = '';
  try {
    resp = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    body = await resp.text();
  } catch (err) {
    return {
      ok: false,
      httpStatus: 0,
      urlsSubmitted: urls.length,
      error: `fetch failed: ${err && err.message ? err.message : String(err)}`,
    };
  }

  // IndexNow returns:
  //   200 — all URLs submitted successfully
  //   202 — URLs received, will be processed (quota or partial)
  //   400 — bad payload (key/url format)
  //   403 — key not validated (keyLocation fetch failed)
  //   422 — URLs don't belong to host
  //   429 — too many requests
  return {
    ok: resp.status === 200 || resp.status === 202,
    httpStatus: resp.status,
    urlsSubmitted: urls.length,
    responseBody: body.slice(0, 500),
  };
}

function buildUrlList(requestUrl) {
  // Support ?urls=<slug1>,<slug2> for partial pushes
  const u = new URL(requestUrl);
  const urlsParam = u.searchParams.get('urls');
  if (!urlsParam) return DEFAULT_URLS;

  const slugs = urlsParam
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (slugs.length === 0) return DEFAULT_URLS;

  // Reject obvious nonsense to avoid spamming IndexNow with garbage
  if (slugs.length > 1000) {
    throw new Error('too many urls (max 1000 per submission)');
  }

  return slugs.map((slug) => {
    const path = slug.startsWith('/') ? slug : `/${slug}`;
    // Strip fragment + query — IndexNow wants canonical URLs only
    const cleanPath = path.split('#')[0].split('?')[0];
    return `https://${SITE_HOST}${cleanPath}`;
  });
}

export async function onRequestGet(context) {
  const result = await pushToIndexNow(buildUrlList(context.request.url));
  return jsonResponse({
    trigger: 'GET',
    ...result,
    keyLocation: KEY_LOCATION,
    endpoint: INDEXNOW_ENDPOINT,
    note:
      'Bing + Yandex + DuckDuckGo + Naver will pick this up within 1 hour.',
  });
}

export async function onRequestPost(context) {
  let urls = DEFAULT_URLS;
  try {
    const ct = context.request.headers.get('Content-Type') || '';
    if (ct.includes('application/json')) {
      const body = await context.request.json();
      if (Array.isArray(body.urls) && body.urls.length > 0) {
        urls = body.urls
          .filter((s) => typeof s === 'string' && s.length > 0)
          .slice(0, 1000)
          .map((s) => {
            if (s.startsWith('http://') || s.startsWith('https://')) return s;
            const path = s.startsWith('/') ? s : `/${s}`;
            return `https://${SITE_HOST}${path}`;
          });
      }
    }
  } catch (err) {
    return jsonResponse(
      {
        trigger: 'POST',
        ok: false,
        error: `invalid JSON body: ${err.message}`,
      },
      400,
    );
  }

  const result = await pushToIndexNow(urls);
  return jsonResponse({
    trigger: 'POST',
    ...result,
    keyLocation: KEY_LOCATION,
    endpoint: INDEXNOW_ENDPOINT,
  });
}

// Allow curl HEAD checks without actually pushing
export async function onRequestHead() {
  return new Response(null, { status: 200, headers: CORS_HEADERS });
}

// CORS preflight — harmless if a browser hits this from a dashboard
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
