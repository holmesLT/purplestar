# IndexNow Auto-Pusher (Cloudflare Pages Function)

## What is this?

`/functions/api/indexnow.js` is a Cloudflare Pages Function that automatically
pushes PurpleStar URLs to the **IndexNow** protocol whenever you hit it.

IndexNow is shared by **Bing, Yandex, DuckDuckGo, Naver, Seznam** — one push
covers all of them. Engines pick up submissions within ~1 hour (vs. 7-30 days
for normal crawl discovery).

## Why a Functions endpoint instead of the Python script?

The existing `tools/indexnow_push.py` works fine for manual/scheduled pushes
from a server. The Function is for **just-in-time pushes**:
- Right after a deploy: visit the URL once, all new/changed URLs get re-indexed
- After editing a learn article: visit with `?urls=<slug>` to push just that one
- No SSH, no script execution — just open a browser

## Usage

### 1. Push everything (recommended after a deploy)

```
https://purplestar.cc/api/indexnow
```

GET, POST, or HEAD all work. Returns JSON with the IndexNow HTTP status.

### 2. Push specific URLs only

```
https://purplestar.cc/api/indexnow?urls=learn/how-to-read-purple-star-astrology-chart/,learn/ziwei-doushu-14-main-stars/
```

Slugs are joined onto `https://purplestar.cc/`. Both `/foo/` and `foo/` work.

### 3. Push via JSON (programmatic)

```bash
curl -X POST https://purplestar.cc/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls":["learn/how-to-read-purple-star-astrology-chart/"]}'
```

## Response format

```json
{
  "trigger": "GET",
  "ok": true,
  "httpStatus": 200,
  "urlsSubmitted": 10,
  "responseBody": "",
  "keyLocation": "https://purplestar.cc/5a6d3b2fd71e485397beb74b986adccc.txt",
  "endpoint": "https://api.indexnow.org/indexnow",
  "note": "Bing + Yandex + DuckDuckGo + Naver will pick this up within 1 hour."
}
```

HTTP status from IndexNow:
- `200` — all URLs accepted
- `202` — URLs received, queued (partial / quota)
- `400` — bad payload (key format, host mismatch)
- `403` — key validation failed (the `{key}.txt` file isn't reachable)
- `422` — a URL doesn't belong to the host
- `429` — too many requests (IndexNow caps at ~10k/day per key)

## What it actually does

1. Builds the canonical URL list (mirrors `app/sitemap.ts`)
2. POSTs `{ host, key, keyLocation, urlList }` to `https://api.indexnow.org/indexnow`
3. Returns the upstream HTTP status

That's it. No DB, no auth tokens, no scheduling — just an on-demand pusher.

## IndexNow key

The key is **public by design** — it's published in
`public/5a6d3b2fd71e485397beb74b986adccc.txt` (required by the protocol so
IndexNow can fetch it and verify ownership).

If you ever need to rotate the key:
1. Get a new one from https://www.bing.com/indexnow/getkey
2. Update `INDEXNOW_KEY` in `functions/api/indexnow.js`
3. Replace `public/<oldkey>.txt` with `public/<newkey>.txt` (same content = the new key)
4. Remove the old `.txt` file
5. Deploy — Cloudflare Pages will detect the new file
6. Hit `/api/indexnow` once to verify

## URL list kept in sync

The `DEFAULT_URLS` constant in the Function is the canonical list. If you add a
new `/learn/<slug>` article:

1. Add it to `app/sitemap.ts`
2. Add it to `DEFAULT_URLS` in `functions/api/indexnow.js`
3. Add it to `URLS` in `tools/indexnow_push.py`
4. Deploy
5. Hit `/api/indexnow` once

All three places should match.

## Cloudflare Pages Functions — how it works here

- File location: `functions/api/indexnow.js` (Pages auto-discovers `functions/`)
- Routing: file path under `functions/` maps directly to URL path
  - `functions/api/indexnow.js` → `/api/indexnow`
- No `_routes.json` override needed — Pages defaults route `/api/*` to
  Functions when no static asset matches
- `out/` (the Next.js static export) ships independently; Functions run as
  an overlay on top
- Cold start: ~50ms (V8 isolate spinup), warm: <10ms

## Cost

Zero. Cloudflare Pages Functions come with the Pages plan — 100,000 requests/day
included. Even if we push 50× per day at 10 URLs each, that's well under the cap.

## When NOT to hit this endpoint

- During Bing Webmaster's manual URL Inspection — that's a different tool
- For URLs that haven't changed — IndexNow is for *new or changed* URLs only
- More than ~10k times/day — IndexNow will rate-limit (429)
