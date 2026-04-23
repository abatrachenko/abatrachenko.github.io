# Lessons

Rules learned from user corrections or validated successes. Prevents repeating mistakes and prevents drifting away from approaches the user has already endorsed.

Format per entry:

```
## [YYYY-MM-DD] — short rule

**Context:** what was happening
**Rule:** what to do / not do
**Why:** the reason the user gave
```

---

## [2026-04-23] — Don't inherit the parent CopyEngine CLAUDE.md

**Context:** When setting up tooling for this repo, I offered to port the parent `New Project/.claude/CLAUDE.md` (CopyEngine, Python pipeline) into this project.

**Rule:** Do not inherit that file for this project. Treat it as wrong-domain, wrong-stack, wrong-rules. Build fresh CLAUDE.md from current Anthropic docs + community research.

**Why:** User explicitly said "lets ignore the copyengine claude.md entirely" — the two projects have completely different natures (Python data pipeline vs. static marketing site).

## [2026-04-23] — Hardcoded ≠ fabricated; ask before removing capacity/availability signals

**Context:** In the P0 stabilization pass I proposed removing the "Hours Available This Month: 64 of 160" progress bar, bundling it with the genuinely fabricated social-proof pop-ups (which were legitimately fake and deleted). User pushed back: the availability bar represents his real consulting bandwidth, which he updates manually. He's right — it's a differentiator agencies can't offer.

**Rule:** Don't lump quantified capacity/availability indicators with fabricated urgency just because they're hardcoded. Ask before removing. Distinguish:
- Genuine fabrication (fake testimonials, made-up users, rotating pop-ups) → delete without asking
- Real-data-at-risk-of-going-stale (availability, pricing, status) → question, don't silently delete

User also rejected an "Updated [date]" label I proposed as a trust signal; he prefers minimalist presentation. Offer such additions as optional, not default.

**Why:** Pre-push course correction saved us from shipping a change he didn't want.

## [2026-04-23] — Research current best practices before writing foundational docs

**Context:** User asked for a CLAUDE.md setup; I initially drafted one from memory.

**Rule:** For foundational/keystone documents (CLAUDE.md, positioning, design-system), run Perplexity research first for current Anthropic docs and community practices. Don't rely on training-time assumptions.

**Why:** User said "lets research with perplexity the best .claude file we can make... based on the latest best practices and guidance." He values currency; foundational docs shouldn't be built on stale defaults.
