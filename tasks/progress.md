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

## 2026-08-24 — Stale-branch reconciliation + PR #98 (remote session)

**Session trigger:** user asked to fix the hero image / remove gradients, audit the site, apply Claude-config best practices, then resolve PR #98's conflicts.

**What happened:** the session branch was based on pre-redesign main (d79792c). Five commits were built there: JS crash fix + fabricated-widget removal (exit popup / fake social proof), proof-before-price section reorder, pricing tier bullets + guarantee + honest capacity note, CTA standardization, and a root Claude config. Meanwhile PRs #92–#97 (FRESH redesign, navy brand system, rewritten HTML/CSS/JS, image optimization, the `.claude/` setup) superseded ALL of that content on main.

**Resolution:** merged origin/main into the branch, main winning every redesigned file; PR #98 squash-merged to main (8d7c467). Net delta was 5 files / +181 lines:
- `_config.yml`: exclude `test-page/` — it had been publishing live at resonanceseo.com/test-page/
- `.claude/skills/verify-site/` — runnable no-MCP Playwright harness (section order, CTA texts, page-error gate, desktop+mobile screenshots); complements `verify`/`design-review` in remote sessions without Playwright MCP
- `.gitignore` union, real `README.md`
- the branch's stale root CLAUDE.md was dropped (described the pre-redesign site)

Verified pre-merge: zero JS errors on all 3 pages at 1440/390px, section order `case-studies > work > about > testimonials > consulting > process > faq > bio`, CTAs standardized.

## 2026-08-24 — Strategic plan + P0 housekeeping (local session)

**Session trigger:** owner asked for a strategic agentic plan to make the site the best it can be for its purpose, purpose defined from sources.

**Plan:** `tasks/designs/2026-08-24-strategic-plan.md`. Evidence: Lighthouse mobile 98/100/58/100, desktop 100/100/58/100 (BP 58 = LinkedIn Insight cookies via GTM); Ahrefs DR 0 / 0 organic keywords / 0 traffic / 404 junk refdomains; GSC MCP dead (timeouts — data gap); live site had dropped the capture-primary CTA model (4 call CTAs, zero email capture). Researcher pass (cited): multi-page beats one-page for conversion + AI retrieval; enterprise exemplars run call-primary; third-party corroboration is the dominant GEO lever; llms.txt is dead.

**Owner decisions (all recs accepted):** call-primary CTA canon (positioning.md amended), full multi-page expansion approved, pause LinkedIn Insight in GTM (owner task), produce GEO framework. Recorded in `tasks/decisions.md` [2026-08-24].

**P0 shipped (branch staging-p0-housekeeping):** dead CSS purge (~300 lines: capacity/tier/pricing-note/engagement-terms blocks, gradient-text, slide-in/scale-in, btn-ghost/outline; styles.css 1,874 → ~1,570); JSON-LD restructured to @graph with stable Person/Organization @ids + FAQPage schema (6 Q&As, verbatim from visible FAQ); gauge aria-label aligned with visible framing; verify-site playwright resolver made machine-portable; test-page/ deleted (~830KB). Verified: console clean, no horizontal scroll 375/desktop, all live components intact, Lighthouse mobile 99/100/58/100 (perf +1). WebP finding: dekamarkt/KPN PNGs are already smaller than WebP re-encodes — correctly left as PNG.

## 2026-08-25 — P0 merged + P1 built (local session)

P0 merged as PR #100 (squash faa59b2); live-verified: FAQPage JSON-LD serving on resonanceseo.com, /test-page/ 404s (closes the April follow-up). P1 built on staging-p1-capture → draft PR #101: mid-page capture band (unnumbered, between References and Availability) + footer capture, Buttondown plain-form embed with BUTTONDOWN_USERNAME placeholder, featured-tier rationale line, newsletter_signup GA4 event, sr-only utility, mobile flex-basis fix. Verified: Lighthouse mobile 99/100/58/100, no horizontal scroll 375/768/1440, console clean. Draft until owner creates the Buttondown account (username swap) and approves the new copy. privacy.html already covers newsletter processing — checked, no change.

## 2026-08-25 (later) — P1 merged + P2 built (local session, autonomous run)

P1 merged as PR #101 (squash 58e330a) after owner supplied Buttondown username (aleksey; endpoint verified 400-vs-404 control) and approved copy. P2 built on staging-p2-architecture: 8 pages (case-studies index + adidas/jcrew/alchemy deep dives, services/enterprise-seo, services/geo, about, contact), folder/index.html with trailing-slash canonicals, BreadcrumbList + Article/Service/AboutPage/ContactPage JSON-LD referencing the homepage entity graph, subpage CSS primitives, homepage case-study links + sitewide footer page row, sitemap 3→11 URLs, verify-site PAGES extended. Claims policy: strict recombination of already-published material. Verified: 11/11 pages 200, single h1 each, titles ≤60 / metas in range, JSON-LD parses everywhere, 17 internal links resolve, zero horizontal overflow at 375 across all pages, console clean, Lighthouse mobile 99-100/100/58/100. Bugs caught in verification: case-facts table overflowed 375px viewport (fixed with wrapper overflow-x:auto — body clips overflow so it would have been silently cut off); privacy/terms still shipped the pre-redesign emoji data-URI favicon (fixed → /logo.svg). /security page deferred — needs owner facts (insurance, entity, data/AI policy, continuity). GSC still unreachable from this machine.

## 2026-08-25 (evening) — P2 merged + P3 started (autonomous run)

P2 merged (PR #102, squash 04c5e03); live-verified: all 9 pages 200 on production, 11-URL sitemap serving. GSC: property back online, sitemap submitted for the first time ever (then resubmitted post-merge; both graded predictions HIT in the ledger). Indexing baseline captured: homepage PASS-indexed (crawled 2026-08-25), new pages Discovered-not-indexed / unknown — grading horizon for the "indexed within 30 days" prediction starts now. 90-day GSC reality: 6 clicks / 130 impressions, brand queries only — first-party confirmation of the invisibility thesis. P3 work on staging-p3-distribution: ai_referral GA4 event (regex verified in-browser against chatgpt/perplexity/gemini/claude referrers, negative cases pass), GEO framework outline review-prepped (llms.txt check 4.3 flagged stale per research — replacement proposed; all 5 review questions carry recommendations for one-pass approval), corroboration target list research dispatched. gscServer get_sitemaps has a str/int bug on pending sitemaps — verify submits via the submit response instead.

## Where we left off

PR #98 is merged. **Open:** (1) after the Pages rebuild, confirm resonanceseo.com/test-page/ returns 404; (2) decide whether to rebuild the discarded conversion ideas (guarantee/risk-reversal, tier-differentiation bullets) on the NEW design; (3) verify the GTM container (GTM-W5Z6KJ8D) has a GA4 tag defining `gtag`, else `book_call_click` events never fire — matters before PPC spend; (4) consider deleting `test-page/` outright (~830KB stale duplicates, now unpublished).

(Earlier note, pre-phase-4: design system done at `design-system/MASTER.md`; phase 4 copy + hero rebuild has since shipped via PRs #92–#97.)
