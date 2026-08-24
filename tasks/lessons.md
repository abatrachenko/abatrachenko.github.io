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

## [2026-04-23] — Voice: no listicle-tease, no "Here's what…" kickers, no content-marketing patterns

**Context:** When proposing voice examples I wrote *"Most SEO audits miss the three things that actually move revenue. Here's what I check first."* — user called it cringe and specifically called out that structure as wrong.

**Rule:** For resonanceseo.com copy, avoid:
- Numbered-list teasers ("3 things," "5 mistakes," "the one question...")
- "Here's what..." or "Here's how..." kickers
- Any LinkedIn/Twitter hook formulas
- Content-marketing conventions designed to drive engagement over demonstrating expertise

**Why:** He wants to sound like a senior operator describing the work, not a content marketer optimizing for clicks. His ICP (VPs/Directors at enterprise e-com) reads hundreds of those hook patterns a day and has built immunity to them; they signal "amateur" at his tier.

**How to apply:** Write copy that sounds like someone who actually does the work describing it to a peer. Specifics and qualifiers, not teases. Example of the right B+E blend: *"Organic revenue at enterprise scale compounds when the strategy is senior and execution is embedded. Most brands lose it in handoffs — between agency and team, between strategist and implementer, between SEO and the rest of the marketing stack."*

## [2026-04-23] — Never push in a background Bash task (credential prompts stall silently)

**Context:** First attempt to `git push origin main` used `run_in_background: true`. The push stalled indefinitely because Windows `git-credential-manager` needs a TTY/UI to prompt, and a background Bash shell provides neither. No visible error — just a hung process and 0 bytes of stdout.

**Rule:** Run `git push` in foreground (`run_in_background: false`, default). Consider setting `GIT_TERMINAL_PROMPT=0` to fail fast if credentials aren't cached — better a clear error than a silent stall.

**Why:** Cost us ~90s of useless polling and required stopping two background tasks. User had to correct direction.

## [2026-04-23] — Default to pushing a staging branch, not main, for review-worthy changes

**Context:** User requested pushing to `staging` instead of directly to `main` for the P0 stabilization work. Preserves production (GitHub Pages deploys from main only) and forces a review step.

**Rule:** For changes that warrant review — even internal ones — push to a feature/staging branch and offer a PR URL. Reserve direct `main` pushes for trivial, already-reviewed commits or when explicitly told to push main.

**Why:** Even when I'm confident, the PR step gives the user a moment to catch things I missed (e.g., the availability bar removal on this pass). Cheap insurance against deploying the wrong thing to production.

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
