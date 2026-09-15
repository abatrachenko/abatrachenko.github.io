# Monthly visibility + prediction report — 2026-09

**Run date:** 2026-09-01 · **First report** (no prior `tasks/reports/*-visibility.md` found — no deltas this cycle).
**Sources read:** `tasks/designs/2026-08-24-strategic-plan.md`, `conversion/corroboration-targets.md`, `tasks/progress.md`.

## 1. Live checks

| Check | Result |
|---|---|
| resonanceseo.com direct fetch | **BLOCKED** — WebFetch and `curl` both hit `EGRESS_BLOCKED` / `CONNECT tunnel failed, 403` for `resonanceseo.com` this session. Could not load the page directly. |
| sitemap.xml direct fetch | **BLOCKED** — same egress block. Could not count `<loc>` entries this cycle (progress.md records 11 URLs as of the 2026-08-25 P2 merge; unverified this run). |
| Indirect liveness check | `site:resonanceseo.com` search returns the homepage and `/terms.html` with current, correct copy (fractional SEO consulting, $200/hr terms, 3-mo minimum) — site is indexed and serving up-to-date content, but this is not a substitute for a direct load/status check. |

**Process gap, not a site problem:** `siegemedia.com` and `firstpagesage.com` were also egress-blocked (see §2). This routine could not directly fetch any of the three target URLs this cycle. Next run: retry direct fetch; if still blocked, this needs an environment fix (proxy allowlist) or a manual owner check.

## 2. Visibility search results

| Query | resonanceseo.com / Aleksey Batrachenko appears? | Who does |
|---|---|---|
| "best enterprise SEO consultant" | **No** | Mark Howser, Michael King/iPullRank, WebFX, Seer Interactive, Searchbloom, Directive |
| "enterprise GEO consultant" | **No** | Vincent DeCastro, First Page Sage |
| "Aleksey Batrachenko SEO" | Partial — LinkedIn profile ranks top result, correctly describes him as "Fractional GEO/SEO Growth Lead" for enterprise e-comm; resonanceseo.com not in this result set | — |
| "Aleksey Batrachenko Resonance SEO" | **Yes** — homepage ranks directly, with an accurate AI-summary (Founder/Lead Consultant, J.Crew/Ethereum/Alchemy/adidas, $700M+ revenue) | — |
| Siege Media "24 Best Enterprise SEO Consultants" | **Unconfirmed** — page fetch blocked (§1); WebSearch snippet of the article names Tom [surname cut off], Matt Bowers, Michael King, no mention of Batrachenko — suggestive but not a full-page check | — |
| First Page Sage top enterprise SEO consultants | **Unconfirmed** — page fetch blocked (§1); search snippets describe First Page Sage's own agency ranking, not an individual-consultant list — could not verify inclusion/exclusion | — |

Direct ChatGPT/Perplexity prompt-testing is not available in this environment — remains the owner's manual monthly step per `corroboration-targets.md` §"Monthly measurement".

**Ahrefs baseline (context, not part of the requested steps):** Domain Rating 0.0, organic keywords 0, organic traffic 0 — unchanged from the 2026-08-24 baseline. Expected at 8 days post-launch of the distribution program; not yet a signal either way.

## 3. Prediction grading

Only predictions whose horizon has arrived as of 2026-09-01 (7–8 days post-shipping) are graded. Everything on a 30/60/90-day or 6-month clock is not due yet — listed in §5 for next month.

| # | Prediction | Grade | Evidence |
|---|---|---|---|
| P0 | Dead CSS purge → ~1,620 lines, zero visual diff | **HIT** | `styles.css` 1,874 → ~1,570 lines per `progress.md` 2026-08-24 entry; verified no horizontal scroll / console clean at merge |
| P0 | WebP + `<picture>` for dekamarkt/KPN logos | **N/A** (superseded by correct finding) | Investigation found the existing PNGs are already smaller than WebP re-encodes; kept as PNG. Not a failure — the underlying "no perf regression" goal holds, but the literal action wasn't taken |
| P0 | Gauge aria-label/title mismatch fix | **HIT** | `progress.md`: "gauge aria-label aligned with visible framing" |
| P0 | Fix `verify-site` playwright path | **HIT** | `progress.md`: "made machine-portable" |
| P0 | Delete `test-page/` | **HIT** | `progress.md` 2026-08-25: "/test-page/ 404s (closes the April follow-up)" |
| P0 | Restore GSC within 7 days: indexed count + baseline impressions exist | **HIT** | GSC restored same day (2026-08-25), property verified, sitemap submitted, baseline captured: 6 clicks / 130 impressions, homepage PASS-indexed, new pages Discovered-not-indexed |
| P0 | ★ Pause LinkedIn Insight in GTM → Best Practices 58 → ≥95 on next Lighthouse run | **MISS** | Last recorded Lighthouse run (2026-08-25, per `progress.md`) still shows BP 58/100 — unchanged since the 2026-08-24 baseline. Owner task appears not yet done. |
| P0 | Manually click-verify Calendly renders/books | **UNGRADEABLE** | No completion evidence recorded in session logs either way |
| P0 | FAQPage JSON-LD → rich-result eligible in GSC within 2 weeks of GSC restore | *not due* | Restored 2026-08-25 → horizon 2026-09-08. Check next report. |

## 4. Deltas vs prior report

None — this is the first report in `tasks/reports/`.

## 5. Watch list for next report (2026-10)

- FAQPage rich-result eligibility (horizon 2026-09-08)
- AI-referral GA4 baseline exists (horizon ~2026-09-24, 30 days from ship)
- All P2 pages indexed within 30 days of sitemap submission (horizon ~2026-09-24)
- Email capture ≥1% of visitors within 60 days (horizon ~2026-10-24)
- Booked-call rate ≥2× link-out rate within 60 days of GSC/GA data existing (horizon ~2026-10-24)

## 6. Recommended next actions (tied to the 90-day plan in `corroboration-targets.md`)

1. **Close the BP-58 gap.** The LinkedIn Insight/GTM pause (owner task, Q3 decision) is now 8+ days overdue and is the only failing CLAUDE.md Lighthouse gate. Five minutes in the GTM UI.
2. **Start Month-1 of the corroboration board now.** HARO + Qwoted + Source of Sources signups, the Search Engine Land contributor application, and a consistent r/TechSEO identity are all zero-cost and are the prerequisite footprint the Siege Media / First Page Sage roundup outreach (Month 3) depends on — neither editorial page currently lists Aleksey per this month's check.
3. **Manually confirm Calendly bookability** and that the GTM container fires `gtag`/`book_call_click` — both flagged open since 2026-08-24 and matter before any PPC spend.
4. **Manually spot-check the Siege Media and First Page Sage pages** this month — this routine's egress access to both domains (and to resonanceseo.com itself) was blocked, so inclusion/exclusion is unconfirmed rather than a negative result.
5. **Keep running the owner's manual ChatGPT/Perplexity prompt tests** per `corroboration-targets.md` §"Monthly measurement" — still the only way to check AI-answer citation, which this routine cannot do.
