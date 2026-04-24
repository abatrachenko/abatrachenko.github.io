# Session progress

Last updated: 2026-04-23 (continuing session)

## Current state

Track A (tooling) complete. Track B phase 0 (audit) complete. Track B P0 stabilization fixes shipped to production (PR #72 merged, live verified). Track B phase 1 (positioning brief) complete — see `conversion/positioning.md`. Track B phase 2 (benchmark analysis) complete — six analyses in `benchmarks/` with synthesis at `benchmarks/SYNTHESIS.md`. Track B phase 3 (design system reset) complete — see `design-system/MASTER.md`. GEO Readiness Framework outline drafted at `conversion/geo-readiness-framework-outline.md` awaiting user review.

### Audit headline findings
- Mobile Lighthouse: Perf 60 / A11y 98 / Best Prac 54 / SEO 100 (targets all 95+)
- Desktop Lighthouse: Perf 89 / A11y 94 / Best Prac 54 / SEO 100
- 7 ship-blockers (including a JS crash on load and fabricated social-proof code)
- 3 positioning tensions (price-led headline vs. premium logos; $1M–$10M FAQ vs. enterprise logos; solo vs. firm brand)
- Visual identity is hot-pink/2022-SaaS when the client tier implies restrained/editorial

### Decisions blocking next work
1. Positioning tier (enterprise vs. mid-market)
2. Brand structure (solo vs. firm)
3. Scope of next pass (stabilize / stabilize+P1 / full redesign)

Track A originals:
- `.claude/CLAUDE.md` — website-focused, research-grounded memory file
- `.claude/settings.json` — permissions allowlist for routine bash and MCP calls
- `.claude/skills/` — `brainstorm`, `verify`, `ship`, `debug`, `design-review` (new), `ui-ux-pro-max` (ported with scripts + data)
- `.claude/agents/` — `explorer`, `planner`, `researcher`, `reviewer`
- `tasks/` — `todo.md`, `lessons.md`, `decisions.md`, `progress.md`, `designs/`
- `benchmarks/` — scaffold (empty, awaiting Track B phase 2)
- `design-system/MASTER.md` — skeleton, awaiting Track B phase 3
- `conversion/positioning.md` — skeleton, awaiting Track B phase 1 (though the live site has more positioning than the skeleton implies — see audit)

## 2026-04-23 — Benchmark gap analysis + hygiene + 2026 upgrades push

**Session trigger:** user asked "are we done? is this the best it can be?" after phase 4 polish shipped.

**Work done:** fresh Playwright audit at 3 breakpoints + Lighthouse mobile/desktop + research-agent pass against April 2026 bar-setters (Orainti, iPullRank, Linear, Attio, Stripe, Anthropic, Vercel, PostHog, etc.). Gap analysis at `tasks/designs/2026-04-23-benchmark-gap-analysis.md`.

**Shipped to staging (7 commits):**
1. `fix: rewrite stale head metadata to solo-brand + positioning-aligned` — title, meta, OG, Twitter, JSON-LD all pre-rebuild stale
2. `fix: tighten mobile H1 clamp — no 6-line wrap at 375px` — clamp floor 2.5rem → 2rem
3. `a11y: underline inline links within paragraphs (WCAG 1.4.1)` — global `p a` rule
4. `perf: right-size + WebP all client logos (−339 KiB wasted)` — new `scripts/optimize_images.py` + `<picture>` elements
5. `perf: right-size + WebP consultant portrait (236→7 KB)` — 97% reduction
6. `feat: Instrument Serif display on hero H1 — editorial 2026 tier signal` — typography lock updated in `design-system/MASTER.md` + decision record
7. `feat: View Transitions + scroll-driven reveals (native craft signals)` — `animation-timeline: view()` + `@view-transition` + removed dead IntersectionObserver JS

**Lighthouse delta:**
- Mobile Perf 66 → 82 (+16), LCP 8.1s → 3.2s (−4.9s)
- Desktop Perf 94 → 80 (−14), LCP 0.9s → 2.0s (+1.1s) — Instrument Serif adds to LCP; fix in next push via font-file preload
- A11y both 96 → 100
- BP both 58 → 58 (unchanged; LinkedIn Insight Tag in GTM is the blocker — user to pause in GTM web UI)

**Follow-ups for next push:**
- Critical CSS inlining (P0-6) — big remaining perf lever
- Preload Instrument Serif woff2 directly to recover desktop LCP
- Testimonial tightening with named-person + number (user sourcing)
- LinkedIn Insight Tag paused in GTM UI (user task)

## Next up (Track B phase 4)

**Copy + hero rebuild.** Implement the IA proposed in `benchmarks/SYNTHESIS.md §4` against the token system in `design-system/MASTER.md`. Ten sections in order: hero → numbers band → case-study cards → why-Resonance (3-pillar) → testimonials → process → pricing + scarcity + secondary CTA → FAQ (trimmed to 3–4) → bio (placed LAST) → footer. Voice guardrails from `conversion/positioning.md §6` (B+E blend, no listicle-tease, no hook-kickers). Migration scope in `design-system/MASTER.md §12`.

**Parallel (user-facing):** review the GEO Readiness Framework outline at `conversion/geo-readiness-framework-outline.md` and answer the 5 structural questions at the bottom. Framework content writing unblocks after review.

**Staged CTA reminder:** Stage 1 (newsletter capture) ships with the rebuild. Stage 2 (framework swap) ships when the framework is ready.

## Where we left off

Phase 3 design system done — `design-system/MASTER.md` fully specs tokens, components, migration plan. Ready to start phase 4 (copy + hero rebuild) whenever user wants to continue, or take a break here — everything staged is safe to merge regardless.
