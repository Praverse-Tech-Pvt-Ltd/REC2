# REC 2

Marketing site for REC 2 — an innovation platform across renewable energy, carbon credits, recycling, advanced materials, photonic and bio chips, robotics, and sustainable sport, with mechatronics as the connective discipline.

Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

**One gotcha:** `npm run build` overwrites `.next`, which a running dev server is reading from. Running a build while `npm run dev` is live will make the dev server 404 its own stylesheet and the site will render unstyled. Stop the dev server first, or restart it afterwards.

## Structure

| Path | What it is |
|---|---|
| `app/page.tsx` | Home — hero, sector grid, mechatronics. `/mechatronics` re-exports it. |
| `app/[sector]/[slug]/page.tsx` | Sector pages, driven by `PAGES` in `lib/data.ts` via `PageLayout` |
| `app/csr/page.tsx` | CSR — custom composition carrying the Love Paws Foundation case |
| `app/defence`, `app/contact` | Standalone pages |
| `lib/data.ts` | Site content: sectors, people, nav, page copy |
| `components/PageLayout.tsx` | Standard sector page shell |
| `components/lovepaws/` | The CSR case and its interactive coverage model |

Most content edits are `lib/data.ts` rather than JSX. Adding a sub-page means adding a `PAGES` entry plus a `NAV_ITEMS` item; the sitemap picks it up automatically.

## Images

Sector imagery is WebP at 1280px wide, rendered through `next/image` with a responsive `sizes` hint. The originals were 2816px PNGs totalling 33 MB, which is 43× more than the layout can use — if you replace them, resize and convert first rather than dropping in masters.

## Deploying

Zero-config on Vercel: import the repo and accept the defaults. `vercel.json` sets security headers and long-lived caching for static assets.

**Set `NEXT_PUBLIC_SITE_URL` to the production origin** (e.g. `https://rec2.example.com`). Without it, `metadataBase` falls back to `http://localhost:3000` and every Open Graph URL in a shared link points at localhost. It also feeds `sitemap.xml` and `robots.txt`.

```bash
npx vercel --prod
```

## Known issues

- `npm audit` reports vulnerabilities in the dependency tree whose only fix is `next@16`, a major version jump. Deferred deliberately; it needs a migration pass, not an `audit fix --force`.
- Partner logos in `components/SportsInitiatives.tsx` still use `<img>` rather than `next/image`, because they rely on an `onError` fallback. They are small (2–30 KB) and lazy-loaded.
