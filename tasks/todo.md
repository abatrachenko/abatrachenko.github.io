# Active tasks

_Update as work progresses. Close items when done, don't delete them — we reference completed work in `progress.md`._

## Awaiting user decisions

- [ ] **Strategy call CTA wording** — "Book a strategy call" vs. "Book a working session" vs. "Request a strategy session."
- [ ] **Dark mode** — ship light-only for v1 or design for both.
- [ ] **Analytics stack** — GA4 continues, or add/swap Plausible/Fathom.
- [ ] **Form/lead backend** — Netlify Forms vs. Formspree vs. Tally vs. custom (needs picking before any rebuild phase with the newsletter CTA).
- [ ] **Case-study depth** — keep 3 current length, or expand to linked deep-dives.
- [ ] **Newsletter name + cadence** — interim primary CTA needs a name and commitment. Suggestion: *"Organic growth patterns for enterprise e-commerce. Every other Tuesday."*

## Parallel workstream — GEO Readiness Framework (target: 1–2 weeks)

- [ ] Outline the framework (15-point self-assessment). Recommended sections: visibility audit (which AI engines cite you), content structure (answer-ready formatting), entity/authority signals, technical GEO (embeddings, structured data, knowledge graph), measurement.
- [ ] Write the content — your expertise, vendor-neutral.
- [ ] Design as PDF or interactive page (pick format).
- [ ] Set up email capture + delivery mechanism (tied to Form backend decision).
- [ ] Write initial nurture sequence (3–5 emails).
- [ ] Swap primary CTA on the live site from newsletter → framework; deliver framework to existing list as first nurture email.

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

## P2 — The real redesign (phases 2–4)

- [ ] **Phase 2: Benchmark analysis** — 6–8 sites from `benchmarks/README.md` candidate list via the `researcher` agent. Focus on solo-consultant + premium-agency tiers. One `benchmarks/<slug>/analysis.md` per site.
- [ ] **Phase 3: Design-system audit** — extract current tokens from `styles.css` into `design-system/MASTER.md`, propose direction based on benchmark patterns + positioning brief.
- [ ] **Phase 4a: Hero rebuild** — new H1 + sub-line + visual, per positioning brief §2.
- [ ] **Phase 4b: CTA consolidation** — from 8 CTAs to 2–3 (lead magnet primary, strategy call secondary).
- [ ] **Phase 4c: Section reflow** — proof / process / case-studies / FAQ in the order the positioning brief implies.
- [ ] **Phase 4d: Voice pass** — rewrite every copy block to the locked voice. No listicle-tease or hook-kickers.
- [ ] **Phase 4e: GEO Readiness Framework** — produce the lead magnet content + setup email capture + nurture sequence.

## P3 — Post-launch optimization

- [ ] A/B hypotheses queue — `conversion/ab-hypotheses.md`
- [ ] Lead-magnet alt CTA for mid-funnel capture
- [ ] Blog / resource library decision
- [ ] Proper GA event tracking (scroll milestones, form engage, CTA by placement)

## Done

- [x] Track A tooling setup (`.claude/`, skills, agents, tasks, benchmarks, design-system, conversion scaffolding) — 2026-04-23
- [x] Track B phase 0 audit — `tasks/audit-2026-04-23/AUDIT.md` — 2026-04-23
- [x] Track B P0 stabilization — shipped via PR #72 — 2026-04-23
- [x] Track B phase 1 positioning brief — `conversion/positioning.md` — 2026-04-23
- [x] Track B phase 2 benchmark analysis — six analyses + `benchmarks/SYNTHESIS.md` — 2026-04-23
- [x] GEO Readiness Framework outline drafted — `conversion/geo-readiness-framework-outline.md` (awaits user review) — 2026-04-23
