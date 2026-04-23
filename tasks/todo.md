# Active tasks

_Update as work progresses. Close items when done, don't delete them — we reference completed work in `progress.md`._

## Awaiting user decisions (blocks all downstream work)

- [ ] **D1. Positioning tier** — enterprise (matches logos) vs. mid-market ($1M–$10M, matches FAQ). Recommended: enterprise.
- [ ] **D2. Brand structure** — solo-brand (Aleksey Batrachenko) vs. firm-brand (Resonance Consulting Group). Recommended: solo-brand with Resonance as tagline.
- [ ] **D3. Scope of next pass** — (a) stabilize only, (b) stabilize + P1, or (c) full redesign after stabilize. Recommended: (a) today, then (c).

## P0 — Ship blockers (execute as soon as D3 is decided; any option includes these)

- [ ] **B1** Fix JS crash at `scripts.js:294` — guard exit-popup block or delete it
- [ ] **B2** Delete fake social-proof notification code from `scripts.js`
- [ ] **B5** Remove or replace "Hours Available This Month" fabricated progress bar
- [ ] **B7/S4** Remove `aggregateRating` from JSON-LD; remove or justify "Most Popular" badge
- [ ] **B3** Wire real GA/Ads conversion IDs (or remove placeholder)
- [ ] **B6** Delete `<meta name="keywords">` — deprecated
- [ ] **S6/A1** Fix heading order (h2 → h3 → h4, no skipping h3)

## P1 — High-impact quick wins (performance + SEO + trust)

- [ ] **D3** Replace Font Awesome with inline SVG icons (Heroicons or Lucide)
- [ ] **S2** Shorten `<title>` to ≤60 chars
- [ ] **S3** Rewrite meta description — remove "Welcome to…" filler
- [ ] **S5** Add `FAQPage` JSON-LD schema for rich result
- [ ] **S7** Replace emoji-SVG logo in JSON-LD with a hosted logo file
- [ ] **B4** Design and ship a real SVG favicon
- [ ] Image optimization: convert logos/portrait/chart to WebP + `srcset` + explicit `width`/`height`
- [ ] **A2/A3** Fix menu-button aria mismatch and star-rating accessibility
- [ ] **A5** Add `prefers-reduced-motion` guards to scroll animations and counter

## P2 — The real redesign (gated by positioning decision)

- [ ] Positioning brief — fill `conversion/positioning.md` based on D1/D2 decisions
- [ ] Benchmark analysis — 8–12 sites from `benchmarks/README.md` candidate list
- [ ] Design-system audit — extract current tokens into `design-system/MASTER.md`, propose direction
- [ ] Hero redesign — new copy + new visual (see audit P5)
- [ ] CTA consolidation — from 8 CTAs to 2–3
- [ ] Section reflow decision (Process placement)
- [ ] Dark mode decision

## P3 — Post-launch optimization

- [ ] A/B hypotheses queue — `conversion/ab-hypotheses.md`
- [ ] Lead-magnet alt CTA for mid-funnel capture
- [ ] Blog / resource library decision
- [ ] Proper GA event tracking (scroll milestones, form engage, CTA by placement)

## Done

- [x] Track A tooling setup (`.claude/`, skills, agents, tasks, benchmarks, design-system, conversion scaffolding) — 2026-04-23
- [x] Track B phase 0 audit — `tasks/audit-2026-04-23/AUDIT.md` — 2026-04-23
