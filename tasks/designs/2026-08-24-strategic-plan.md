# Strategic improvement plan — resonanceseo.com

**Date:** 2026-08-24
**Status:** PLAN ONLY — nothing implemented. Awaits owner approval on the batched decisions in §6.
**Method:** Phase 0 purpose-from-sources → Phase 1 evidence baseline (Lighthouse, Ahrefs, code audit, live walkthrough) → Phase 2 external research (researcher agent, cited) → Phase 3 synthesis. Spawn reasoning: researcher + explorer subagents used for parallelizable read-only work; synthesis done single-agent because all inputs were already in-context (per user-level spawn rules).

---

## 1. Purpose — defined and sourced

**The site exists to convert VP/Director-level marketing and e-commerce owners at $50M+ enterprise e-commerce brands into booked strategy calls (and a nurturable email list), by proving one claim: a senior operator with an enterprise-scale track record who embeds SEO + GEO leadership directly in their team.**

| Element | Value | Source |
|---|---|---|
| ICP | VP/Dir Marketing & E-commerce, $50M+ e-comm brands, can sign $6.4K–$12.8K/mo without committee | `conversion/positioning.md §1` (locked 2026-04-23) |
| Offer | Fractional SEO+GEO leadership, 3 tiers $6,400–$12,800/mo, 3-mo minimum | `positioning.md §5` |
| Conversion events | Primary: email capture (staged: newsletter → GEO framework). Secondary: strategy call | `positioning.md §5` — **live site diverges, see Gap G1** |
| Success measure | Qualified booked calls + list growth; CLAUDE.md gates: Lighthouse ≥95 ×4, both form factors | `.claude/CLAUDE.md` mission + quality gates |
| Positioning tier | Enterprise-only (mid-market explicitly excluded) | `tasks/decisions.md` [2026-04-23] |
| Brand | Solo (Aleksey Batrachenko) primary, Resonance as practice tagline | `tasks/decisions.md` [2026-04-23] |

**ASSUMPTION (flagged):** monthly search-driven inbound is currently ~zero (Ahrefs data below), so the site today functions almost purely as a *referral-validation destination* — people who already heard the name. Every strategic priority below follows from closing the gap between that reality and the purpose.

---

## 2. Evidence baseline (2026-08-24, all measured this session)

### Site craft — strong
| Check | Result | Evidence |
|---|---|---|
| Lighthouse mobile | Perf **98** / A11y **100** / BP **58** / SEO **100** — LCP 1.7s, CLS 0.069, TBT 80ms | local run, `%TEMP%\lh-mobile.json` |
| Lighthouse desktop | Perf **100** / A11y **100** / BP **58** / SEO **100** — LCP 0.4s | `%TEMP%\lh-desktop.json` |
| BP 58 root cause | LinkedIn Insight cookies (`bcookie`, `lidc`) + `__cf_bm` via GTM + Attribution Reporting deprecation. Same blocker flagged 2026-04-23, never resolved (GTM-UI task) | lighthouse `third-party-cookies` + `deprecations` audits |
| Console (live) | Clean — zero errors | browser pane, live resonanceseo.com |
| 2026-05-30 S-tier audit | **All 8 mechanical findings FIXED** (Foyer gone, dead-CSS purge, navy scroll bar via `transform`, ripple/pill/gradient/font-size/focus all clean) | explorer agent verification, file:line per item |
| Head/SEO | 1×h1, valid heading order, title 58ch, meta 146ch, canonical present | explorer report |
| CTAs | 4× "Book a (strategy) call" → `calendly.com/alekseybatrachenko/intro-call` (nav, hero, pricing, bio). **Zero email-capture placements** | `index.html:190,208,412,503` |
| Calendly link | HTTP 200 + event content in response; automated browser bot-blocked → **needs one manual click to confirm bookable** | Invoke-WebRequest |

### Residual code debt — small
- **~230–260 lines new dead CSS** (superseded pricing/capacity layout: `.capacity*`, `.consulting-tiers`, `.tier-*` etc., `styles.css:1375–1598` region) — same failure class the May audit flagged, smaller scale.
- `logo-dekamarkt.png`, `logo-kpn.png` — PNG-only, no WebP/`<picture>` (`index.html:224–225`).
- Capacity gauge: visible title "64 of 160 h" vs aria-label "96 of 160 hours retained" — internally consistent numbers, mismatched phrasing.
- No `FAQPage` JSON-LD despite 6 FAQ items (CLAUDE.md SEO baseline requires it). Single `ProfessionalService` block exists; no stable `Person`/`Organization` `@id` entity graph.
- `verify-site` harness hardcodes `/opt/node22/...` playwright path — broken on this Windows machine.
- `test-page/` — ~830KB stale duplicates, unpublished but still in repo (April follow-up, undecided).

### Search reality — the headline problem
| Metric | Value | Source |
|---|---|---|
| Ahrefs organic keywords | **0** | site-explorer-metrics, 2026-08-24 |
| Ahrefs organic traffic | **0** | same |
| Domain Rating | **0.0** (Ahrefs rank ~170.8M) | site-explorer-domain-rating |
| Referring domains | 404 live / DR 0 ⇒ links are near-worthless quality | site-explorer-backlinks-stats |
| GSC | **DATA GAP** — MCP server timed out (WinError 10060) on 3 attempts; indexing status, impressions, and property verification unconfirmed | logged, retry needed |

**The site of an SEO consultant is organically invisible.** Craft is no longer the constraint — distribution is.

---

## 3. External research (researcher agent, mid-2026, cited)

Full findings in agent output; load-bearing conclusions:

1. **Multi-page beats single-page** for both conversion IA and AI-search retrieval (passage-level chunking favors focused pages: `/services/*`, `/case-studies/*`, `/about/`). Single-page isn't excluded from AI citation but is structurally disadvantaged. (digitalapplied.com; nanoglobals.com 2026 review)
2. **Enterprise-tier exemplars (Indig, Schwartz, Solis) run call-primary CTAs with newsletter as secondary/nurture** — the newsletter is the authority engine, not the conversion event. Embedded instant scheduling roughly doubles form→meeting (30–40% → ~67%, Chili Piper).
3. **Buyers are ~61% through the journey before first contact; 95% of winners were on the Day-One shortlist** (6sense 2025). The site's job: get shortlisted + arm the internal champion → case-study depth (methodology, responsibility split, measurement) + a forwardable asset.
4. **Third-party corroboration is the dominant GEO lever** for "best enterprise SEO consultant"-class prompts — LLMs weight editorial roundups, podcasts, bylines, community mentions over the consultant's own copy. Own-site schema alone shows no confirmed citation lift; llms.txt is effectively dead.
5. **Entity graph still worth shipping** (cheap, hygienic): stable `Person` + `Organization` `@id`s, `sameAs` to LinkedIn/publications, consistent identity across the web.
6. **Procurement/trust for solo consultants:** security/vendor-readiness page (data handling, AI-tool policy, insurance, continuity statement) neutralizes the key-person objection. No quantitative study (flagged MEDIUM confidence).
7. **AI referrals: real but small** — <2% of B2B search referrals, 35× growth since 2025, conversion premium ≥1.26×; ChatGPT ≈79% of the channel. Track separately from day one.
8. **Pricing:** enterprise exemplars gate exact pricing; the two public-pricing sites report better lead *quality*. Our public tiers are a deliberate differentiator (`positioning.md §5`, benchmarks SYNTHESIS §2) — keep, but they're not what's holding conversion back.

---

## 4. Gap analysis

| # | Purpose requirement | Current state (evidence) | Gap | Proposed change |
|---|---|---|---|---|
| **G1** | Locked CTA model: email-capture primary, call secondary (`positioning.md §5`) | Live site: call-only, 4 placements, zero capture (explorer) | **Site contradicts locked positioning — OR the positioning is stale.** Research favors call-primary at enterprise tier | **DECISION Q1**: amend positioning.md to call-primary + capture-secondary (recommended), then add the missing secondary capture |
| **G2** | Site must be findable — it *is* the product demo for an SEO consultant | DR 0, 0 keywords, 0 organic traffic (Ahrefs) | Total organic invisibility; undermines the core claim | P2 multi-page architecture + P3 authority/distribution program |
| **G3** | Arm a buyer who's 61% decided pre-contact (research §3.3) | 3 short case cards, no deep-dives, no forwardable asset | Proof depth below enterprise vetting bar | Case-study pages (approved-claims only) + one forwardable PDF |
| **G4** | Survive solo-consultant procurement vetting | No security/vendor page, no continuity statement | Trust gap at the exact tier we target | `/security` (vendor-readiness) page |
| **G5** | Lead magnet differentiator (GEO framework, decided 2026-04-23) | Outline drafted, awaiting owner review since April; no capture mechanism on site | Decision stalled 4 months | **DECISION Q4** — revive or shelve |
| **G6** | Lighthouse BP ≥95 (CLAUDE.md gate) | BP 58, LinkedIn Insight via GTM (April flag, unresolved) | Only failing gate | **User GTM-UI task** (pause tag) or analytics swap |
| **G7** | GSC measurability | MCP dead; property status unknown | Can't measure or grade predictions | Restore GSC access; verify property; submit sitemap |
| **G8** | Clean codebase (CLAUDE.md) | ~250 dead CSS lines, 2 PNG logos, gauge aria mismatch, no FAQPage schema, broken verify-site on Windows, stale test-page/ | Minor debt | P0 housekeeping sprint |

---

## 5. Roadmap — sequenced, each increment independently shippable

Ordering logic: (impact ÷ effort), dependencies honored — housekeeping unblocks gates → conversion fixes capture existing traffic → architecture creates retrievable surface → distribution fills it. Each item carries a falsifiable prediction (seo-graded-predictions discipline; grade at horizon).

### P0 — Housekeeping + measurement restore (hours; no approval needed except starred)
| Item | Prediction (grade at) |
|---|---|
| Delete dead pricing/capacity CSS block (~250 lines) | styles.css → ~1,620 lines; zero visual diff at 375/768/1440 (immediate) |
| WebP + `<picture>` for dekamarkt/KPN logos; fix gauge aria/title phrasing | No Lighthouse perf change (already 98/100) — hygiene only (immediate) |
| Add `FAQPage` JSON-LD + stable `Person`/`Organization` `@id` entity graph with `sameAs` | Rich-result eligible in GSC URL inspection within 2 weeks of GSC restore |
| Fix `verify-site` playwright path (env-aware require) | Harness runs green locally (immediate) |
| Delete `test-page/` ★ (destructive — confirm) | Repo −830KB; no live impact (immediate) |
| ★ **User task:** pause LinkedIn Insight in GTM UI (or Q3 analytics swap) | BP 58 → ≥95 on next Lighthouse run |
| Restore GSC (debug MCP / use web UI); verify property, submit sitemap, inspect indexing | Within 7 days: confirmed indexed pages count; baseline impressions number exists |
| Manually click-verify Calendly link books | Booking page renders (immediate) |

### P1 — Conversion alignment (days; needs Q1 + Q2 answers)
| Item | Prediction |
|---|---|
| Amend `positioning.md` CTA model per Q1; changelog entry | — (doc change) |
| Embed Calendly inline (or keep link + add embedded widget on a `/contact` page in P2) | Booked-call rate per visitor ≥2× the link-out rate within 60 days of GSC/GA data existing (Chili Piper: instant scheduling ~doubles form→meeting) |
| Add secondary email capture (footer + one mid-page placement after References): newsletter interim, framework swap later (Q4) | ≥1% of visitors capture within 60 days (research: 1–3% newsletter norm) |
| Pricing: add one-line rationale to "recommended" tier; keep public tiers | Qualitative: no drop in call bookings (guard) |
| Form backend per Q1 sub-decision (Formspree/Tally/Buttondown-class) | — |

### P2 — Architecture expansion (1–2 weeks; needs Q2 approval — this changes the locked one-page IA)
| Item | Prediction |
|---|---|
| Expand to multi-page: keep `/` as the filter-hero page; add `/case-studies/adidas`, `/jcrew`, `/alchemy` (enterprise depth: methodology, responsibility split, timeframe, measurement — **owner approves every claim**), `/services/enterprise-seo`, `/services/geo`, `/about`, `/security`, `/contact` | Within 90 days of indexing: site ranks for own-name + ≥5 non-brand keyword impressions in GSC (from zero). Within 6 months: ≥1 AI-assistant citation of a case-study or service page (tracked via referral logs / manual prompt checks) |
| One forwardable case-study PDF (champion asset) | Used in ≥1 real sales conversation within 90 days (owner-reported) |
| `/security` vendor-readiness page (data handling, AI-tool policy, insurance, continuity) | Qualitative: removes procurement objection in ≥1 deal cycle (owner-reported) |
| Sitemap/canonical/robots updated for new pages; internal linking pass | All new pages indexed within 30 days of GSC submission |

### P3 — Authority + distribution (ongoing program, not a sprint; the only path to G2)
| Item | Prediction |
|---|---|
| GEO Readiness Framework: owner reviews April outline (5 open questions) → produce → swap primary capture (per Q4) | Capture rate ≥2× newsletter-only rate within 60 days of swap (research: lead magnet 3–8% vs newsletter 1–3%) |
| Third-party corroboration program: 1–2/month — podcast appearances, industry-pub bylines, expert quotes, curated-roundup inclusion (research: dominant GEO lever) | DR 0 → ≥20 in 6 months; first non-brand top-100 rankings; brand mentioned in ≥1 LLM answer for an enterprise-SEO-consultant prompt within 6 months |
| Newsletter as authority engine (Indig/Solis model): every-other-Tuesday cadence per positioning.md | List growth resumes; open rate ≥40% (small-list norm) |
| AI-referral tracking: GA4 channel group / referral filter for chatgpt.com, perplexity.ai, etc. | Baseline exists within 30 days; expect <2% of traffic, disproportionate quality |
| Optional `/insights` content only if cadence is sustainable — **do not add a dead blog** | — |

### Explicitly NOT planned (with reasons)
- **llms.txt** — no platform consumes it (research, HIGH confidence).
- **Schema beyond entity graph + FAQPage** — no confirmed AI-citation lift; avoid stuffing.
- **Framework/build-step migration** — decisions.md lock stands; revisit only if page count exceeds ~10 and duplication hurts (it will be near the line after P2 — flag, don't act).
- **Redesign** — craft is at/near target (Lighthouse 98–100, S-tier items landed). No visual overhaul.
- **Paid ads before P1** — `PPC_STRATEGY.md` exists, but sending paid traffic to a page with an unverified GA4 `gtag` and no capture layer burns budget; sequence after P1 + G7.

---

## 6. Decisions needed (batched — answer these and everything above executes)

| # | Question | Options | Recommendation |
|---|---|---|---|
| **Q1** | CTA model: live site (call-primary) contradicts locked positioning (capture-primary). Which is canon? | (a) Amend positioning.md → call-primary, capture-secondary · (b) Restore capture-primary per April lock | **(a)** — enterprise-tier exemplars + scheduling-friction data support call-primary; the April model predates this research. Sub-decision: form backend for the secondary capture (rec: Tally or Buttondown — zero-backend, free tier) |
| **Q2** | Approve multi-page expansion (P2)? Changes the one-page IA locked in benchmarks/SYNTHESIS §4 | (a) Approve full P2 · (b) Case-study pages only · (c) Stay one-page | **(a)** — single decision serves both conversion depth and AI retrievability; one-page structure is the main structural cause of G2/G3 |
| **Q3** | BP-58 blocker: pause LinkedIn Insight in GTM (your login), or swap analytics (Plausible/Fathom) and drop GTM? | (a) Pause Insight now, decide analytics later · (b) Swap to Plausible now | **(a)** — reversible, 5 minutes, unblocks the gate; (b) is a separate decision with PPC implications |
| **Q4** | GEO Readiness Framework (stalled since April): produce or shelve? | (a) Review outline's 5 questions, produce, use as capture upgrade · (b) Shelve; newsletter only | **(a)** — it's the differentiator-matched magnet and the research shows lead magnets convert 2–4× newsletters; but as *secondary* capture per Q1 |
| **Q5** | Case-study claims: deep-dive pages need methodology/numbers beyond current site copy. Will you supply/approve expanded claims per engagement? | (a) Yes, I'll review drafts claim-by-claim · (b) Restrict pages to already-published claims | **(a)** — depth is the point; every claim gated on your approval per CLAUDE.md |

**Assumptions proceeding without asking** (derivable, noted per protocol): light-only stays for v1 (open todo item — nothing in this plan depends on it); "Book a strategy call" wording stands (already shipped consistently); scarcity gauge stays (positioning.md preserves it) with a manual-update reminder added to the ship checklist.

---

## 7. Data gaps register
- **GSC**: MCP timeouts (3×, WinError 10060) — indexing status, impressions, property verification all UNKNOWN. Highest-priority restore (P0).
- **Calendly bookability**: HTTP-alive, render unverified (bot-blocked) — one manual click.
- **GA4 `gtag` wiring**: April note — GTM container GTM-W5Z6KJ8D may not define `gtag`, in which case `book_call_click` events never fire. Verify during P0/G7.
- Solo-vs-agency vetting benchmarks and consulting-newsletter conversion norms: no published data (research, flagged).
