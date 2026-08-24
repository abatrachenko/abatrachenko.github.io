# CLAUDE.md — Resonance SEO

## What this is

Marketing site for **Resonance SEO** (Resonance Consulting Group) — Aleksey Batrachenko's solo fractional SEO consultancy for e-commerce brands. Live at **https://resonanceseo.com** via GitHub Pages (custom domain in `CNAME`).

- GitHub Pages deploys from **`main`**. Work on a feature branch is invisible on the live site until merged.
- Jekyll processes the repo on deploy (`_config.yml` present). There is no local Jekyll setup and none is needed — pages are plain HTML.

## Architecture

- **3 published pages**: `index.html` (the site), `privacy.html`, `terms.html`.
- **One shared stylesheet** (`styles.css`, ~3k lines) and **one shared script** (`scripts.js`) loaded by all 3 pages — a CSS/JS change hits every page.
- **No build step.** No package.json, no bundler, no npm scripts. Edit files directly.
- `sitemap.xml`, `robots.txt`, `CNAME` are maintained **by hand** — update `sitemap.xml` `lastmod` when pages change.

## Publish gotchas (important)

- Jekyll publishes **everything** not listed under `exclude:` in `_config.yml` — including `.md` files (converted to HTML). Any new file that shouldn't be public **must** be added to that exclude list. Currently excluded: `test-page/`, `PPC_STRATEGY.md`, `SECURITY.md`, `README.md`, `CLAUDE.md`, `.claude/`.
- `test-page/` is a **stale, unpublished fork** of the site with its own copies of everything. Never edit it; never mistake it for the live page.

## Content integrity rules

This is a consultancy selling trust. A prior cleanup removed fabricated widgets; do not reintroduce that class of problem:

- **No fabricated anything**: no fake social-proof notifications, fake live metrics/availability meters, fake countdowns/scarcity, or forms that collect data without a real backend.
- **No self-serving or non-visible Schema.org rating markup** (`aggregateRating` was removed deliberately — Google policy violation; don't re-add).
- Unverifiable claims (client capacity, guarantees, chart captions, review counts) get an `<!-- EDIT ME -->` comment so the owner confirms them before merge.
- Copy voice: **first-person singular** ("I", never "we" — the site's pitch is anti-agency). Experience claim is "**15+ years**" everywhere.

## Key business facts (keep consistent)

- Pricing: $200/hr — tiers 32/48/64 hrs per month = **$6,400 / $9,600 / $12,800 per month**; 3-month minimum; invoiced monthly.
- All CTAs link to `https://calendly.com/alekseybatrachenko/intro-call`.
- Standard CTA text: **"Book Your Free Intro Call"** (`fa-calendar-check` icon). Only the nav CTA and floating mobile button use the short "Book a Call".
- Section order on index.html (proof before price — deliberate): hero → client logos → testimonials → case studies → about → pricing/availability → process → FAQ. Nav link order matches, on all 3 pages.
- Clients referenced: Adidas, Samsung, Ethereum Foundation, Alchemy, J.Crew, Madewell, HBS, Dirk, Dekamarkt, KPN. Headline results: Adidas 240K daily clicks, J.Crew +95%, Alchemy +315%.

## scripts.js caveats

- `styles.css` sets `img { opacity: 0 }` until scripts.js adds `.loaded` — **an uncaught JS error blanks parts of the site**. This happened before (widget code referenced non-existent DOM and killed DOMContentLoaded).
- scripts.js runs on all 3 pages with **different DOMs** — every `querySelector` result must be null-guarded before use.
- Scroll fade-ins are IntersectionObserver-driven: full-page screenshots show blank sections unless you scroll through the page first.
- The stat counters (`animateCounter`) rewrite `textContent` over 2s — screenshots can catch partial values; that's normal.

## Verification

Run the **`verify-site`** project skill before committing any HTML/CSS/JS change. It serves the repo locally, loads all 3 pages in headless Chromium (Playwright is pre-installed globally), fails on any page error, asserts section order and CTA consistency, and captures desktop + mobile screenshots. External CDN failures (Google Fonts, Font Awesome, GTM) are expected noise in the sandbox; `pageerror` is not.

## Known backlog (deferred, in rough priority order)

- Real GA4/GTM conversion IDs — `scripts.js` still has placeholder `G-XXXXXXXXXX/CONVERSION_ID`; CTA tracking is a silent no-op.
- Dead-CSS purge: ~950 of ~3k lines unused (incl. a ~600-line multi-step form system with no form).
- Image optimization: `logo-ethereum-2.png` is 206KB for an 85px logo; headshot is 241KB; no `loading="lazy"` or width/height anywhere.
- WCAG AA contrast: `--accent #FF3366` on white is ~3.6:1 (fails) on buttons/links; `--accent-dark #E6194B` passes.
- Accessibility sweep: ~38 icons missing `aria-hidden`, skip-link doesn't move focus, duplicate `role="banner"`, `role="img"` misuse on the logo link.
- FAQPage schema for the 6 FAQ items (rich-result opportunity).
- Orphan files: `logo-ethereum.png`, `logo-alchemy.png`, `logo-harvard.svg`, `adidas-blog-performance-2.png`, and all of `test-page/`.
