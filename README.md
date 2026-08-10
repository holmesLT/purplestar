# PurpleStar · 紫宸阁

> **Your destiny, written in the stars of the East.**

A modern, English-language Ziwei Doushu (Purple Star Astrology) SaaS platform. Free birth chart generation + AI-powered personalized life readings.

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Charts**: iztro + lunar-javascript (wrapped in `lib/ziwei.ts`)
- **AI**: Claude Sonnet 4.5 (via @anthropic-ai/sdk)
- **Payments**: Stripe Checkout
- **Hosting**: Oracle Cloud Free Tier ARM + Nginx + Cloudflare

## Quick Start

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your ANTHROPIC_API_KEY, STRIPE_*, etc.
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
# Standalone output at .next/standalone/
# Run: node .next/standalone/server.js
```

## Architecture

```
/
├── app/
│   ├── page.tsx                  # Landing page (Hero + form)
│   ├── chart/[id]/page.tsx       # Free chart view + paywall
│   ├── report/[id]/page.tsx      # Paid AI reading
│   ├── api/
│   │   ├── chart/route.ts        # Generate chart
│   │   ├── interpret/route.ts    # Generate AI reading (Claude)
│   │   ├── checkout/route.ts     # Stripe Checkout
│   │   └── webhook/stripe/       # Payment verification
│   └── ...
├── components/
│   ├── ChartForm.tsx             # Birth details input
│   ├── ChartGrid.tsx             # Classic 4×4 Ziwei chart
│   └── StarField.tsx             # Animated star background
├── lib/
│   └── ziwei.ts                  # Engine + English data layer
└── ...
```

## Data Attribution

This project uses the [Ziwei Doushu Open Source Chart Engine](https://github.com/Renhuai123/ziwei-doushu) (MIT License) and the 518,400-chart sample dataset.

For entertainment and cultural exploration purposes only.

## License

MIT License (code) + Attribution Required (data). See LICENSE.
