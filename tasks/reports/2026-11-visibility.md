# resonanceseo.com — Monthly Visibility + Prediction Report — 2026-11

**Date run:** 2026-11-01 · **Report type:** first monthly report — `tasks/reports/` did not exist before this run, so there is no prior report to diff against.

## 0. Routine blocker — live checks failed (session network policy)

This session's egress is blocked for `resonanceseo.com` — confirmed via both `WebFetch` and raw `curl` (`ENOTFOUND` / proxy `connect_rejected`, "host not allowed for this session"). The same block hit `siegemedia.com` and `firstpagesage.com`, so neither roundup page could be fetched directly. **Action needed:** add these three hosts to this environment's Allowed domains (environment settings → Network access) so next month's run can do real live checks instead of failing closed. Nothing below was invented to paper over this — gaps are marked UNGRADEABLE.

## 1. Live checks

| Check | Result |
|---|---|
| `https://resonanceseo.com/` loads | **NOT CHECKED** — network-blocked this session |
| `https://resonanceseo.com/sitemap.xml` loads, `<loc>` count | **NOT CHECKED** — same block. Local repo copy of `sitemap.xml` has **11** `<loc>` entries (/, /case-studies/, /case-studies/{adidas,jcrew,alchemy}/, /services/{enterprise-seo,geo}/, /about/, /contact/, /privacy.html, /terms.html) — unverified against the live file this session |

## 2. Visibility search results (2026-11-01)

| Query / target | resonanceseo.com or Aleksey Batrachenko appears? | Notes |
|---|---|---|
| "best enterprise SEO consultant" | No | Dominated by agency roundups (Siege Media, Reboot Online, SEOProfy, Zyppy…); named individuals surfaced: Aleyda Solís, Tom Critchlow |
| "enterprise GEO consultant" | No | Agency-centric (First Page Sage, eSEOspace, Onely); one cited source flags "GEO consultant" as an unregulated, self-printed title |
| "Aleksey Batrachenko SEO" | No | Only hit: a self-authored Twine freelancer profile (unverifiable); every other result is a different person with a similar name |
| "resonanceseo.com" (direct) | Indirect anomaly, not a confirmed hit | Domain didn't surface directly. A third-party listing, `village.ai/company/resonance-seo`, describes "Resonance SEO Consulting," founded 2017, 15+ yrs experience — those facts don't match the known practice. **Needs owner check:** mislabeled namesake, or a stale/wrong auto-generated profile of this practice (matters for the entity-consistency goal in the strategic plan) |
| Siege Media roundup (corroboration-targets §3) | Not found | Page itself blocked; search snippet of it names Eli Schwartz and Derek Sakamoto, not Batrachenko |
| First Page Sage roundup (corroboration-targets §3) | Not found | Page itself blocked; search snippets didn't surface the ranked name list at all |

Direct ChatGPT/Perplexity prompt-testing is not possible from this session (no such tool here) and remains the owner's manual monthly step per `corroboration-targets.md`'s measurement section.

## 3. Prediction grades (strategic-plan.md, horizons arrived as of 2026-11-01)

| Prediction | Horizon date | Grade | Evidence |
|---|---|---|---|
| Confirmed indexed count + baseline impressions exist within 7 days of GSC restore (2026-08-25) | 2026-09-01 | **HIT** (per prior session record, not re-verified) | `progress.md` 2026-08-25: baseline captured same day — 6 clicks / 130 impressions, brand-only queries |
| Rich-result eligible in GSC URL inspection within 2 weeks of restore | 2026-09-08 | **UNGRADEABLE** | No GSC access this session |
| BP 58 → ≥95 on next Lighthouse run after LinkedIn Insight paused | — | **UNGRADEABLE / blocked** | `todo.md` still lists the GTM pause unchecked — precondition unmet; live site unreachable anyway |
| Booked-call rate ≥2× link-out rate within 60 days of GA/GSC data existing | 2026-10-24 | **UNGRADEABLE** | No GA4 access this session |
| ≥1% of visitors capture within 60 days of P1 merge (2026-08-25) | 2026-10-24 | **UNGRADEABLE** | No GA4 access. Note: `progress.md` says P1 merged 2026-08-25, but `todo.md` still shows it "in review" — doc drift flagged in §5 |
| All new pages indexed within 30 days of GSC submission (2026-08-25) | 2026-09-24 | **UNGRADEABLE** | No GSC access this session |
| `ai_referral` GA4 baseline exists within 30 days of shipping (2026-08-25) | 2026-09-24 | **UNGRADEABLE** | No GA4 access this session |
| ≥5 non-brand keyword impressions within 90 days of indexing | 2026-11-23 | Not yet due | — |
| Forwardable PDF used in a sales conversation / security page removes a procurement objection | ≈2026-11-23 | Not applicable yet | `/security` page still deferred per `todo.md` (owner facts needed); PDF status unconfirmed |
| DR 0→≥20, first non-brand rankings, ≥1 LLM citation within 6 months (from 2026-08-25) | 2027-02-25 | Not yet due | Early signal only — this round's searches found zero mentions (§2) |
| Capture rate ≥2× newsletter-only within 60 days of GEO-framework swap | — | **Not applicable** | Framework review still an open `todo.md` item; swap hasn't happened |
| Newsletter list growth resumes, open rate ≥40% | — | **Not applicable** | Newsletter name/cadence decision still open |

**Pattern:** nearly every dated prediction past its horizon is UNGRADEABLE this run — this session has no GSC or GA4 read access and the live site is network-blocked, so there is no first-party data to grade against. Only one grade above is even recordable, and it rests on the owner's own 2026-08-25 session notes rather than a fresh pull.

## 4. Deltas vs prior report

None — first report.

## 5. Recommended next actions (tied to the 90-day plan in `corroboration-targets.md`)

1. **Fix the environment network block.** Add `resonanceseo.com`, `siegemedia.com`, and `firstpagesage.com` to this environment's Allowed domains so the next run's live checks and roundup fetches execute instead of failing closed.
2. **Give this routine a GSC/GA4 read path.** Without one, every dated prediction in the strategic plan will keep grading UNGRADEABLE month after month. Connect a GSC/GA4 tool to this environment, or paste the month's numbers into the next run's prompt.
3. **Reconcile `tasks/todo.md` with `tasks/progress.md`.** `todo.md` still shows P1 "in review" and the GTM LinkedIn-Insight pause unchecked, while `progress.md` records P1 as merged 2026-08-25. Stale preconditions make future grading unreliable.
4. **Verify the `village.ai` "Resonance SEO Consulting" listing** (§2) — confirm whether it is this practice (and correct the 2017/15-years claims) or an unrelated namesake.
5. **Execute the Month-3 corroboration moves now.** Per the 90-day sequence, Siege Media and First Page Sage outreach is timed for Nov/Dec ahead of the January refresh; this run confirms zero current presence in either roundup, so there's nothing to protect yet — outreach is still the open move.

---
*Generated by an automated monthly routine. No data was invented to fill the network/data gaps in §0, §1, and §3 — everything marked UNGRADEABLE needs the owner's input or a reconnected data source next cycle.*
