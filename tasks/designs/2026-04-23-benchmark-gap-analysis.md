# Benchmark gap analysis — is this the best the site can be?

**Date:** 2026-04-23
**Trigger:** User asked "are we done? is this the best the site can be?" after phase 4 rebuild shipped.
**Method:** Fresh Playwright audit (3 breakpoints + console + DOM + Lighthouse mobile/desktop) + fresh benchmark research against April 2026 bar-setters (Orainti, iPullRank, Linear, Attio, Stripe, Anthropic, Vercel, PostHog, Rauno, Kevin Indig, Eli Schwartz, SearchPilot, SparkToro, Graphite, Tom Critchlow, Amanda Natividad, Resend).

## Headline answer

**No, we're not done.** The rebuild got us to parity on structure (hero, proof, pillars, availability, pricing, testimonials, process, case studies, FAQ, bio) and positioning (solo brand, enterprise ICP, embedded senior operator). Two categories of gap remain:

1. **Hygiene failures that would embarrass a $12.8K/mo buyer who opens devtools.** Lighthouse gates are failing, head metadata is pre-rebuild stale, client logos are 10-15× oversized. These are invisible to a casual visitor but mandatory for the tier we're positioning for.

2. **The 2026 bar-setter tier has three patterns we're not yet running.** Editorial serif display typography, single-named-testimonial-with-number-in-pull-quote, and native craft signals (View Transitions API + scroll-driven reveals). None are expensive; all are now baseline at the tier we claim.

Everything else is optional — genuine taste calls, not gaps.

---

## P0 — Hygiene / ship-blockers

Every item here is objectively broken today and violates the quality gates in [`.claude/CLAUDE.md`](../../.claude/CLAUDE.md). These should ship before any P1 work.

### P0-1 · Head metadata is pre-rebuild stale (1 file, ~10 lines)

[index.html:32-49](../../index.html#L32-L49) — title, meta description, OG + Twitter tags all still reference "Resonance Consulting Group" and start with "Welcome to…". The copy body got updated in phase 4; the head did not.

- `<title>` currently: `Fractional SEO Consulting for E-Commerce Brands | Resonance Consulting Group`
- `<meta name="description">` currently: `Welcome to Resonance Consulting Group. I'm here to untangle your SEO and get you to stable organic growth without agency overhead.`
- OG/Twitter tags: same stale copy on both, OG image points to [`adidas-blog-performance-3.png`](../../adidas-blog-performance-3.png) (verify exists)

Per [positioning.md §8](../../conversion/positioning.md#L158) and [lessons.md](../lessons.md#L25) voice rules, these should:
- Use "Aleksey Batrachenko · SEO Consultant" brand frame
- Not start with "Welcome to…" (voice violation)
- Title ≤ 60 chars, description 150–160 chars

**Impact:** Every SERP impression, LinkedIn share, Slack unfurl, Twitter card shows the old brand. Primary search surface contradicts the site itself.
**Effort:** S (~15 min). **Priority:** ship immediately.

### P0-2 · Lighthouse gates failing (2 of 4 categories)

| Category | Mobile | Desktop | Gate | Status |
|---|---|---|---|---|
| Performance | **66** | 94 | 95 | FAIL (both) |
| Accessibility | 96 | 96 | 95 | pass |
| Best Practices | **58** | **58** | 95 | FAIL (both) |
| SEO | 100 | 100 | 95 | pass |

**Mobile Core Web Vitals:** LCP **8.1s** (target <2.5s) · FCP 2.8s · TTI 8.2s · CLS 0.000 ✓

### P0-3 · Client logos 10-15× oversized (381 KiB wasted)

[index.html:223-232](../../index.html#L223-L232). All 10 logos are raw PNG, no WebP, no `srcset`, no `width`/`height` attrs.

| File | Dimensions | Size | Display | Waste |
|---|---|---|---|---|
| `logo-ethereum-2.png` | 5000×1536 | 201 KB | ~120px | 200 KB |
| `logo-hbs-3.png` | 1205×677 | 49 KB | ~120px | 49 KB |
| `logo-alchemy-2.png` | 2000×424 | 46 KB | ~120px | 46 KB |
| `logo-jcrew.png` | 2000×561 | 36 KB | ~120px | 36 KB |
| `logo-samsung.png` | 1600×425 | 29 KB | ~120px | 29 KB |
| `logo-madewell.png` | 1200×675 | 13 KB | ~120px | 13 KB |

**Fix:** Right-size to 2× display width (~240px), convert to WebP with PNG fallback, add explicit `width`/`height` attributes. Est. mobile LCP recovery: 3-5s.
**Effort:** M (~1hr). **Priority:** this is the biggest single perf lever.

### P0-4 · Consultant portrait 241 KB JPG for 200×200 display

[aleksey-batrachenko-seo-consultant.jpg](../../aleksey-batrachenko-seo-consultant.jpg) rendered at 200×200 per [index.html:504](../../index.html#L504). Convert to WebP at 400×400 (2× retina) with JPG fallback; target ≤30 KB.
**Effort:** S (~15 min).

### P0-5 · LinkedIn Insight Tag (via GTM) tanks Best Practices

Lighthouse flags:
- **Third-party cookies:** `bcookie`, `lidc` from `px.ads.linkedin.com`
- **Deprecated API:** Attribution Reporting API in `snap.licdn.com/li.lms-analytics/insight.min.js`

Tag is loaded via GTM (not hardcoded in HTML). **Requires user decision** — options:
1. **Keep** LinkedIn Insight Tag for LinkedIn Ads attribution (tanks BP to 58 forever)
2. **Drop** the tag; lose LI Ads retargeting/conversion but recover BP to ~95+
3. **Conditional load** (only fire on actual ad-click sessions) — complex, marginal win

**Effort:** S once decided. **Blocker:** user preference on LI Ads attribution.

### P0-6 · Render-blocking stylesheet (61 KB, 903 ms wait)

[styles.css](../../styles.css) loads synchronously in `<head>`. Options:
1. Inline critical CSS (hero + above-the-fold), lazy-load rest
2. Just `media="print" onload` trick (crude but effective)
3. Let CDN/HTTP2 handle it (does nothing for first paint)

**Recommended:** option 1 for the hero; keep full stylesheet lazy-loaded. ~2-3s mobile LCP win.
**Effort:** M (~1-2hr).

### P0-7 · Mobile H1 wraps to 6 lines at 375px

[audit-2026-04-23/mobile-375-viewport.png](../../audit-2026-04-23/mobile-375-viewport.png). H1 clamp is `clamp(3rem, 6vw + 1rem, 6.5rem)` — at 375px it lands at ~3rem/48px, producing 6 lines. Editorial moment should be bold, but 6 lines reads aggressive/shouty on mobile, not premium.

**Fix:** Tighten the mobile floor to `~2.25rem` (36px), or shorten the H1 at the `<br>` points for mobile via responsive hidden spans.
**Effort:** S (~10 min).

### P0-8 · One WCAG link fails "link-in-text-block"

[index.html:514](../../index.html#L514) — LinkedIn link in bio distinguishable only by color. Add underline (`text-decoration: underline`) or distinct weight.
**Effort:** S (<5 min).

---

## P1 — Close the 2026 bar-setter gaps

These are the three gaps vs. April 2026 best-in-class (Stripe, Anthropic, Orainti, iPullRank, Linear). None are expensive. All land at the tier we claim.

### P1-1 · Editorial serif display H1

**What:** Pair Inter (body) + Geist Mono (numbers) + **one editorial serif** (Fraunces / Instrument Serif / GT Super) for the H1 and section eyebrows.

**Why:** Inter-only reads 2022-SaaS. The premium-consultant calling card in April 2026 is the editorial serif display. Orainti, Tom Critchlow, Amanda Natividad, Anthropic all run some variant. This is the single highest-impact visual move available.

**Effort:** S (one Google Font load + ~6 CSS lines). **Cost:** +1 font request. Use `font-display: swap`.

**Risk:** Deviates from the [design-system/MASTER.md](../../design-system/MASTER.md) lock. Revisiting a locked token needs explicit approval. Options:
- (a) Keep Inter-only (maintains the lock; accept 2022-SaaS read)
- (b) Add serif for H1 + eyebrows only (modifies the lock; 80% of the lift)
- (c) Full editorial replacement (bigger change; untested)

**Recommendation:** (b). Brainstorm before executing.

### P1-2 · Tighten one testimonial to `[Named person] @ [enterprise logo] + number in quote`

**What:** Orainti, iPullRank, and Linear all lead with a single punchy quote of the shape: *"[specific outcome, e.g. 500% organic traffic growth]"* — **Name, Title @ Enterprise Logo**.

**Why:** One number-bearing testimonial above the fold outperforms a row of generic quotes. We have strong testimonials — need to audit whether any already has a number-in-quote shape and surface it. If not, ask the user if we can get one.

**Effort:** S if data exists, else blocked on client permission.

**Action required:** Inventory existing testimonials for ones with quantified outcomes; if none, user decides whether to ask a past client for a quote that names the number.

### P1-3 · Native craft signals (View Transitions + scroll-driven reveals)

**What:** Two small CSS additions that are now production-default on Stripe and Vercel dashboards:

```css
/* View Transitions — smooth cross-fade between pages */
@view-transition { navigation: auto; }

/* Scroll-driven reveal — pure CSS, no JS */
.reveal {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
@keyframes reveal { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
```

**Why:** Browser support is now high enough (Firefox 144+ for scroll-driven; universal-ish for View Transitions). Signals "sweated the details" without heavy motion libraries. Zero build-step cost.

**Effort:** S (~30 min) including `prefers-reduced-motion` gates and Firefox fallbacks.

---

## P2 — Bigger bets (design direction shifts, need brainstorm)

These are genuine design/strategy decisions, not gaps. Each deserves a brainstorm session before any code.

### P2-1 · Bento grid for case studies

Bento layouts (one hero card + asymmetric supporting cards) are the 2026 pattern for showcasing outcomes. Reported 47% dwell-time lift / 38% CTR lift on conversion-focused pages. Currently we have a 3-column equal-height grid at [Results section].
**Effort:** M (~2-3hr). **Risk:** tier-read — could land as "flashy" if overdone. Keep restrained.

### P2-2 · "Currently advising" live logo strip

Kevin Indig surfaces 3-4 logos of active engagements under the hero. Would compound with our existing scarcity bar as "real operator, live data."
**Effort:** S once user confirms which logos are current. **Risk:** requires ongoing manual maintenance.

### P2-3 · Proprietary term that re-frames the category

iPullRank's "Relevance Engineering" is the 2026 high-impact positioning move. Does the user have something (internal framework, repeatable process) that could carry a proprietary name? This is a **positioning brainstorm, not a design exercise.**
**Effort:** L. **Gate:** only if genuine, never invented.

### P2-4 · Anti-positioning language on the hero

Orainti: *"We're not a typical SEO agency."* Kevin: *"I don't respond to service pitches."* Our current hero ("Senior SEO and AI search leadership for enterprise e-commerce, embedded directly in your team.") is position-first but lacks the confident negation. We already have three anti-positioning statements ready in [positioning.md §7](../../conversion/positioning.md#L143) — surfacing one above the fold would land.
**Effort:** S copy edit. **Risk:** low if voice-gated.

### P2-5 · Press strip / third-party cert row

iPullRank, Eli Schwartz, SearchPilot all run a "As seen in" press strip. We have HBS as a client; if the user has press mentions or speaking credits, they belong on the page. Also: SearchPilot's Gartner/G2/ISO row is powerful at enterprise tier.
**Effort:** S if assets exist, else N/A.

### P2-6 · Process handbook / transparent operator doc

PostHog-style linked public handbook ("how I run an engagement") signals operator confidence. Would be a separate page or Notion/public-doc link.
**Effort:** L (content creation). **Value:** high — turns passive visitors into informed buyers.

### P2-7 · Rauno-style closing imperatives

*"Make it fast. Make it beautiful. Make it consistent…"* — radical-minimalist closing. Would be bold; risks looking derivative if surfaced without deep operator voice. Skip unless user specifically wants.
**Effort:** S copy but high taste bar.

---

## Explicit don'ts — verified from 2026 research

Per the research agent pass against live sites and April 2026 trend synthesis, these are all **tier-inappropriate** for enterprise consultancy and should be skipped:

| Pattern | Verdict | Why |
|---|---|---|
| WebGL / shader hero backgrounds | SKIP | Agency-flex aesthetic, not operator-advising-Adidas |
| Magnetic buttons | SKIP | Indie-maker aesthetic |
| Heavy grain / texture overlays (>10%) | SKIP | Retro/Y2K signal |
| Terminal / code-editor aesthetic as primary | SKIP | Wrong persona (targets devs, not VP E-com) |
| Dark-as-default | SKIP | Enterprise C-suite mix favors light |
| "12 people viewing now" / fabricated live feeds | CATASTROPHIC | Already removed in P0 stabilization; stay removed |
| 3D card tilts > ±5° | SKIP | Reads flashy |
| Animated count-ups on numbers | SKIP | Already decided against in [decisions.md](../decisions.md) |

---

## Priority execution order (recommended)

Assuming user wants to ship the best possible version:

**Wave 1 — Hygiene (half-day, zero risk):**
- P0-1 (head metadata rewrite)
- P0-3 (logo right-size + WebP)
- P0-4 (portrait WebP)
- P0-7 (mobile H1 clamp)
- P0-8 (link WCAG fix)

**Wave 2 — Perf push (half-day):**
- P0-6 (critical CSS inline)
- P0-5 (LinkedIn Insight Tag decision — blocker on user)

**Wave 3 — 2026 upgrades (half-day, needs brainstorm on P1-1):**
- P1-1 (editorial serif H1 — brainstorm first)
- P1-3 (View Transitions + scroll reveals)
- P1-2 (testimonial audit + tighten if data exists)

**Wave 4 — Strategic (needs positioning brainstorm):**
- Pick from P2 set based on user priorities

---

## Open questions / user decisions needed

1. **LinkedIn Insight Tag** — keep (BP stays at 58) or drop (BP recovers to 95+)?
2. **Editorial serif** — modify the typography lock, or stay with Inter-only?
3. **Testimonial audit** — do you have a past-client quote with a specific number in it we can surface?
4. **"Currently advising"** — which 2-3 current engagements can be publicly named?
5. **Proprietary framework name** — do you have an internal name for your process that could carry the iPullRank "Relevance Engineering"-style re-framing?
6. **Scope** — do all four waves in one push, or stage them?

---

## Confidence notes

- All P0 items verified directly via Playwright/Lighthouse/DOM inspection — high confidence.
- P1-1 (editorial serif) and P1-3 (View Transitions / scroll-driven) verified via research agent's 12 live-site fetches and caniuse data — high confidence on trend, medium confidence on specific taste calls.
- P2-1 (bento grid) 47%/38% figures are medium-confidence (single-source, likely self-reported) — use directional, don't quote.
- P2-3 (proprietary term) deeply depends on whether one already exists organically; verify before executing.

## Attachments / evidence

- Desktop screenshot: [audit-2026-04-23/desktop-1440-full.png](../../audit-2026-04-23/desktop-1440-full.png)
- Tablet screenshot: [audit-2026-04-23/tablet-768-full.png](../../audit-2026-04-23/tablet-768-full.png)
- Mobile screenshot: [audit-2026-04-23/mobile-375-full.png](../../audit-2026-04-23/mobile-375-full.png)
- Lighthouse mobile JSON: [audit-2026-04-23/lighthouse-mobile.json](../../audit-2026-04-23/lighthouse-mobile.json)
- Lighthouse desktop JSON: [audit-2026-04-23/lighthouse-desktop.json](../../audit-2026-04-23/lighthouse-desktop.json)
