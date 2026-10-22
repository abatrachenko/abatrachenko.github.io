# Visibility + prediction-grading report — 2026-10

**Date run:** 2026-10-01 · **Prior report:** none (first monthly run) · **Grader:** automated session, no live browser/GSC/GA4/Ahrefs access this run.

## 1. Live checks

| Check | Result |
|---|---|
| `https://resonanceseo.com/` loads | **UNVERIFIED THIS RUN** — WebFetch to `resonanceseo.com` returned `EGRESS_BLOCKED` (org network policy denies this host; not a site outage). Per proxy docs, blocked hosts must not be routed around. |
| `/sitemap.xml` loads | Same egress block — fetched the repo's local copy instead (git tree clean, in sync with `origin/main`, so it mirrors what's deployed). **11 `<loc>` entries**: `/`, `/case-studies/`, `/case-studies/{adidas,jcrew,alchemy}/`, `/services/{enterprise-seo,geo}/`, `/about/`, `/contact/`, `/privacy.html`, `/terms.html`. |
| Indirect liveness signal | Google **can** reach the site: `site:resonanceseo.com` search returns the homepage and `/terms.html` live in results (see §2), so the domain is up even though this session couldn't fetch it directly. |

**Action needed:** the egress policy blocking `resonanceseo.com`/`siegemedia.com`/`firstpagesage.com` is new since the last session that touched this repo and breaks step 1 of this routine going forward — flagging for the owner to adjust the environment's network policy if monthly live-fetch checks should continue.

## 2. Visibility table (WebSearch, 2026-10-01)

| Query | resonanceseo.com / Aleksey Batrachenko appears? | Notes |
|---|---|---|
| "best enterprise SEO consultant" | **No** | AI summary names Howser, Schwartz, Indig, Jones, Solis, Enoch. Link results: Siege Media, Taylor Scher SEO, Omniscient, Searchbloom, SEOprofy, First Page Sage. |
| "enterprise GEO consultant AI search" | **No** | Surfaces Writesonic, WebFX, Eric Schwartzman. |
| "Aleksey Batrachenko SEO" | **Partial** | LinkedIn and the GitHub repo rank; `resonanceseo.com` itself does not appear in the link list even for the owner's own name query. AI summary correctly describes him from LinkedIn-sourced data. |
| "resonanceseo.com" / `site:resonanceseo.com` | **Yes** | Homepage + `/terms.html` indexed and returned. |
| `site:resonanceseo.com/case-studies`, `/services`, `/about`, `/contact`, `/privacy.html` | **No** | None of the 9 P2 subpages surfaced in any site: query — only `/` and `/terms.html` show as indexed. |

**Siege Media / First Page Sage roundups** (corroboration-targets.md §3): could not WebFetch either page directly (egress-blocked). `site:siegemedia.com` and `site:firstpagesage.com` searches for "Aleksey Batrachenko" / "Resonance SEO" returned **no matches** — not listed on either roundup as of this run (expected; outreach for these is scheduled for months 2–3 of the 90-day plan, not yet executed).

**Owner's manual step (unchanged):** direct prompt-testing inside ChatGPT/Perplexity/Gemini UIs isn't possible from this session — still the owner's manual monthly check per the corroboration board's measurement section.

## 3. Prediction grades (horizons arrived as of 2026-10-01)

| # | Prediction (source) | Horizon | Grade | Evidence |
|---|---|---|---|---|
| P0 | Dead CSS purge → zero visual diff | Immediate (8/24) | **HIT** | `progress.md` 2026-08-24/25: styles.css 1,874→~1,570, verified no horizontal scroll, Lighthouse mobile 99/100/58/100. |
| P0 | WebP/picture + gauge-aria fix, no perf change | Immediate | **HIT** | Same verification pass; PNGs correctly kept (WebP re-encodes were larger). |
| P0 | `verify-site` path fix runs green | Immediate | **HIT** | Confirmed shipped 2026-08-24. |
| P0 | `test-page/` deleted, no live impact | Immediate | **HIT** | `progress.md` 2026-08-25: `/test-page/` 404s live. |
| P0 | GSC restored within 7 days | 2026-08-31 | **HIT** (carried forward) | `progress.md` 2026-08-25: property back online, sitemap submitted — already logged as graded HIT in the prior session's ledger. |
| P0 | FAQPage/entity-graph rich-result eligible within 2 weeks of GSC restore | ~2026-09-08 | **UNGRADEABLE** | No GSC URL-inspection access this session (no GSC MCP/tool available, and `resonanceseo.com` itself is egress-blocked). |
| P0 | LinkedIn Insight paused in GTM → BP 58→≥95 | Immediate (owner task) | **UNGRADEABLE** | Can't run live Lighthouse (egress-blocked) or check GTM UI. `tasks/todo.md` still lists this task unchecked — suggests it may still be outstanding. |
| P0 | Calendly link manually click-verified | Immediate (owner task) | **UNGRADEABLE** | Still unchecked in `tasks/todo.md`; needs a human click, not checkable by this routine. |
| P2 | All new pages indexed within 30 days of GSC submission | ~2026-09-24/25 | **MISS (leaning)** | `site:` searches (§2) show only `/` and `/terms.html` indexed; none of the 9 P2 pages (case studies, services, about, contact) surfaced. This is WebSearch-operator evidence, not the official GSC Index Coverage report — **recommend the owner confirm directly in GSC** before treating this as final. |
| P1 | Email capture ≥1% of visitors within 60 days of ship | 2026-10-24 | **NOT YET ARRIVED** | Shipped 2026-08-25; horizon is 23 days out. |
| P1 | Embedded-scheduling booked-call rate ≥2× link-out | 60 days of GA data existing | **NOT YET ARRIVED / UNGRADEABLE** | No GA4 access; start date of the GA-data clock unconfirmed. |
| P2 | 90-day ranking/impressions lift from indexing baseline | ~2026-11-23 | **NOT YET ARRIVED** | Indexing baseline captured 2026-08-25. |
| P2 | ≥1 AI-assistant citation within 6 months | ~2027-02-25 | **NOT YET ARRIVED** | — |
| P2 | Forwardable case-study PDF used in a sale within 90 days | N/A | **NOT SHIPPED** | No case-study PDF found in repo; prediction's clock hasn't started. |
| P2 | `/security` page removes a procurement objection | N/A | **NOT SHIPPED** | `/security` still doesn't exist (confirmed: no `security/` path in repo); deferred per `progress.md`, owner facts still needed. |
| P3 | AI-referral GA4 baseline exists within 30 days | ~2026-09-24 | **UNGRADEABLE** | No GA4 access this session. |
| P3 | GEO framework capture-rate lift ≥2× within 60 days of swap | N/A | **NOT SHIPPED** | `conversion/geo-readiness-framework-draft.md` is still "DRAFT for owner edit" — the CTA swap hasn't happened, so the clock hasn't started. |
| P3 | DR 0→≥20 within 6 months | ~2027-02-25 | **NOT YET ARRIVED** | No Ahrefs access this session to spot-check current DR. |

## 4. Deltas vs prior report

None — this is the first `tasks/reports/*-visibility.md`. Future runs should diff against this one.

## 5. Recommended next actions (tied to the 90-day plan)

1. **Fix the egress block** on `resonanceseo.com` / roundup domains for this environment, or move the live-fetch step to a session that has it — this routine can't confirm site liveness or roundup listings on its own until that's resolved.
2. **Verify P2 page indexing directly in GSC** (Index Coverage report) — the WebSearch evidence above suggests the 8 new subpages aren't indexed yet, which would be a real MISS worth root-causing (internal linking, sitemap re-submission, `noindex` check) rather than waiting out the rest of the 90-day ranking horizon on an un-indexed site.
3. **Close the three still-open owner tasks** blocking P0 grading: pause LinkedIn Insight in GTM (BP 58 gate), click-verify the Calendly link, and review the GEO framework draft's `[OWNER: …]` markers so the Stage-2 CTA swap (and its 60-day capture-rate prediction) can start.
4. **Execute month-1 of the corroboration board** (HARO/Qwoted/SOS signups + SEL contributor application + Reddit presence) — confirmed via this run that Resonance doesn't appear on either Siege Media or First Page Sage yet, and outreach for those is scheduled months 2–3; the month-1 free-tier moves haven't shown evidence of starting.
5. **Run the owner's manual ChatGPT/Perplexity prompt-testing** this month and log results against the corroboration board's measurement section — this remains the one signal no automated session can gather.
