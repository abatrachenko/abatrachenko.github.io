# P2 — Multi-page architecture

**Date:** 2026-08-25 · **Status:** approved direction (strategic plan Q2 "full expansion" + owner "merge and proceed, autonomously execute"). New long-form copy gated on owner PR review; merge = copy approval.

## Structure

Folder/index.html with trailing-slash canonicals (clean URLs, one retrievable unit per topic — the AI-passage-chunking rationale from the plan):

| URL | Job | JSON-LD |
|---|---|---|
| `/case-studies/` | index of the three engagements | CollectionPage + Breadcrumb |
| `/case-studies/adidas/` | deep dive | Article + Breadcrumb |
| `/case-studies/jcrew/` | deep dive | Article + Breadcrumb |
| `/case-studies/alchemy/` | deep dive | Article + Breadcrumb |
| `/services/enterprise-seo/` | offer page: model, tiers, process, fit | Service + Breadcrumb |
| `/services/geo/` | GEO capability — written as woven-into-engagements, NOT a separate SKU (positioning §5 GEO-integration lock) | Service + Breadcrumb |
| `/about/` | expanded bio | AboutPage/Person ref + Breadcrumb |
| `/contact/` | strategy-call page: what the call is, Calendly, email, LinkedIn | ContactPage + Breadcrumb |

**`/security/` deliberately NOT built** — vendor-readiness content (E&O insurance, legal entity, data-handling/AI-tool policy, continuity plan) requires owner facts that cannot be invented. Questionnaire added to todo; page ships in a later increment.

## Rules applied

- **Claims policy:** every number and factual statement recombines already-published material (homepage copy, the three testimonials, positioning.md, FAQ). No new claims, no invented deliverables, no per-engagement revenue figures (homepage caption reserves revenue as career-aggregate).
- **Chrome:** header/nav/footer duplicated verbatim from index.html with root-absolute links (no build step — duplication accepted; static-stack decision's revisit trigger is now at the ~10-page line, flagged).
- **Nav on subpages:** Case studies → `/case-studies/`, Pricing → `/#consulting`, FAQ → `/#faq`, Book a call → Calendly. Footer gains a page-links row sitewide; footer capture form ships on every page.
- **Homepage:** outcome cards gain "Read the case study →" links; no new nav items (in-context + footer routing).
- **No Calendly widget** anywhere (P1 decision stands — links are instant scheduling; `/contact/` presents the link prominently instead).
- **verify-site:** PAGES list extended to all 8 new pages; "Subscribe" is a form button, not a Calendly CTA, so ALLOWED_CTA_TEXTS unchanged.
- SEO per page: unique title ≤60 / meta 150–160, one h1, canonical, og/twitter, breadcrumbs both visible and structured.
- Entity graph: subpage JSON-LD references `https://resonanceseo.com/#person` / `#organization` by URI.
