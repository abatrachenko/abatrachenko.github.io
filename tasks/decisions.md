# Architectural & design decisions

Prevents re-litigating choices. Each entry explains context, decision, rationale, and tradeoffs.

Format per entry:

```
## [YYYY-MM-DD] — Short decision title

**Context:** what triggered the choice
**Options considered:** A, B, C
**Decision:** chosen option
**Rationale:** why
**Tradeoffs:** what we give up
**Revisit if:** what would change the decision
```

---

## [2026-04-23] — Static HTML/CSS/JS stack, no framework

**Context:** Starting the site redesign; need to choose the stack.
**Options considered:**
- A: Keep plain HTML/CSS/JS
- B: Migrate to Astro (static export, MDX, component islands)
- C: Migrate to Next.js (overkill for a marketing site)
**Decision:** A — keep plain HTML/CSS/JS.
**Rationale:** The site is already static, deploys via GitHub Pages with zero build friction, and marketing sites rarely need framework complexity. Keeps performance ceiling high (no JS bundle to ship). Faster to iterate on copy/design without build steps.
**Tradeoffs:** No component reuse (but a one-page marketing site doesn't need it). Manual duplication risk if site grows to many pages — revisit then.
**Revisit if:** We expand to 10+ pages, add dynamic content, or need an MDX blog system.

## [2026-04-23] — Positioning tier: enterprise

**Context:** Audit found tension between the FAQ ("sweet spot: brands doing $1M–$10M/year") and the client logos (Adidas, Samsung, Ethereum, J.Crew, HBS, KPN — all enterprise). Pricing ($6.4K–$12.8K/mo) also maps to enterprise.
**Options considered:**
- A: Enterprise only — align copy to the logos
- B: Mid-market ($1M–$10M) — align logos as historical proof
- C: Dual-tier — keep both
**Decision:** A — enterprise only. Remove the $1M–$10M framing; rewrite the FAQ, hero, and offer language around enterprise buyers (VP/CMO/CSO at established brands).
**Rationale:** The proof is strongest at enterprise tier. Enterprise has larger budgets, longer retainers, and better reference value. Dual-tier positioning reads as hedging — sophisticated buyers interpret it as "will take anything."
**Tradeoffs:** Smaller prospect pool. But higher LTV per prospect and better word-of-mouth inside buying committees.
**Revisit if:** Pipeline dries up at enterprise tier for 3+ months, or a product (not just consulting) enters the mix that serves mid-market economics.

## [2026-04-23] — Brand structure: solo-brand with Resonance as practice tagline

**Context:** Site currently brands as "Resonance Consulting Group" but reads as solo (first-person copy, single photo, hourly pricing by Aleksey specifically, all testimonials address one person).
**Options considered:**
- A: Keep firm brand, add team members, switch to plural copy
- B: Solo brand primary (Aleksey Batrachenko · SEO Consultant) with Resonance as tagline
- C: Pure solo, drop Resonance entirely
**Decision:** B — solo primary, Resonance as practice tagline.
**Rationale:** At enterprise tier, a senior operator directly embedded is a *stronger* story than an agency ("no middlemen, direct senior access"). The site already reads solo; the firm veneer looks like hiding. Honest framing closes more enterprise deals than manufactured polish. Keeping Resonance as tagline preserves SEO equity and URL/domain coherence.
**Tradeoffs:** Scales only as far as Aleksey's hours. Accepted — that's already the reality. If scale becomes the goal, revisit with a proper team-building plan.
**Revisit if:** A second consultant joins long-term, or the product/IP (e.g., CopyEngine) becomes the primary offer instead of Aleksey's time.

## [2026-04-23] — Scope: stabilize now, then full redesign (skip interim P1)

**Context:** Audit identified 7 P0 ship-blockers (JS crash, fabricated social proof, fake availability bar, placeholder GA ID, etc.) and 9 P1 quick wins (Font Awesome removal, image optimization, heading order, SVG favicon, etc.).
**Options considered:**
- A: Stabilize P0 only, ship, stop (4–6 hrs)
- B: Stabilize P0 + P1 together (~1.5 days)
- C: Stabilize P0 today, then go directly to full redesign (P2) skipping interim P1
**Decision:** C. Stabilize today. Then positioning + benchmarks + full rebuild.
**Rationale:** Most P1 items (Font Awesome removal, image optimization, heading re-structure, favicon) get solved for free during the redesign. Doing them as a separate pass is wasted motion. However P0 trust hazards (JS crash, fake social proof, placeholder GA) can't wait for redesign — every sophisticated prospect who opens devtools sees them today.
**Tradeoffs:** Performance wins (mobile perf 60 → 95+) arrive weeks later than option B would have them. Accepted because the redesign is blocked on positioning + benchmarks anyway, so we'd pay those hours twice.
**Revisit if:** Redesign slips past 4 weeks — then P1 becomes its own sprint to claim wins in the interim.

## [2026-04-23] — Staged CTA launch: newsletter now, GEO framework in parallel

**Context:** The two-layer CTA strategy (lead magnet primary, strategy call secondary) depends on a production asset — the GEO Readiness Framework — that doesn't exist yet. Shipping the rebuild waiting on it delays conversion wins. Shipping without any first-touch capture leaks prospects.
**Options considered:**
- A: Produce the framework in 1–2 weeks, ship the rebuild with it live on launch
- B: Ship the rebuild with a "launching [date]" waitlist capture
- C: Interim newsletter signup as first-touch CTA until the framework exists
**Decision:** C now, work toward A in parallel. When the framework is ready, swap the primary CTA and deliver the framework to the existing newsletter list as the first nurture email.
**Rationale:** Unblocks the rebuild on the critical path (phases 2–4 don't need to wait). Newsletter becomes a durable list-building asset regardless of the framework timeline. No prospects lost to "coming soon" friction. Framework production gets to be done well rather than rushed.
**Tradeoffs:** Slightly less differentiated first-touch CTA at launch (every consultant has a newsletter). Mitigated because the *copy* around the newsletter and the list content itself can still be high-signal.
**Revisit if:** Newsletter signup rate is very low (under 2% of hero views) — might indicate the interim CTA needs stronger hook, not just a newsletter.

## [2026-04-23] — Positioning brief locked (one session, brainstorm protocol)

**Context:** Track B phase 1 — positioning brief. Ran through the brainstorm skill one question at a time over a single session. All strategic decisions now captured in `conversion/positioning.md`.

**Decisions locked in sequence:**

| # | Decision | Value |
|---|---|---|
| 1 | ICP anchor | Enterprise e-commerce specialist |
| 2 | Buyer persona | VP/Director Marketing or E-commerce |
| 3 | Primary trigger | Plateau / stalled growth (C capability-gap and E growth-acceleration woven below-fold) |
| 4 | GEO integration | Anchor SEO, include GEO — not core identity |
| 5 | Promise style | Position-first (names what the consultant *is*) |
| 6 | Differentiators | Embedded senior + enterprise track record + GEO capability |
| 7 | CopyEngine visibility | Private operational leverage (not publicly named) |
| 8 | CTA strategy | Two-layer: lead magnet primary, strategy call secondary |
| 9 | Lead magnet | GEO Readiness Framework (vendor-neutral) |
| 10 | Voice | B+E blend (technical-plainspoken + research-led), no listicle-tease, no hook-kickers |
| 11 | Anti-positioning | Not an agency · Not for <$50M brands · Not a generalist marketing consultant |
| 12 | Brand | Solo-brand primary with Resonance as practice tagline |
| 13 | GEO implementation | Integrated into engagements (not separate service pillar) |
| 14 | Reach LLM framing | Credential in bio, not differentiator pillar — user wants it as a light recommendation, not core to identity |

**Rationale summary:** The enterprise-scale logo cluster (Adidas, Samsung, J.Crew, Madewell) is the strongest single proof asset. Position the consultant to match. Downplay price-anchored positioning (the old "50% of agency cost") and agency-contrast framing — both anchor the buyer on the wrong comparison. Downplay product associations (Reach LLM) to keep the consulting brand clean. Lead the site with a value-giving first-touch CTA (GEO Readiness Framework) and reserve the high-commitment strategy call for call-ready prospects deeper in the page.

**Tradeoffs accepted:**
- Enterprise-only ICP → smaller pool; accepted for LTV and referability
- Two-layer CTA → requires producing a real lead magnet; accepted as phase-2 blocker
- No listicle-tease voice → harder to write "scroll-stopping" hooks; accepted because the ICP has immunity to them
- GEO implementation integrated rather than productized → can't advertise a separate GEO line; accepted to protect the consulting brand

**Revisit if:**
- Enterprise inbound dries up and pipeline leans mid-market
- The GEO conversation in the market matures past zeitgeist-novelty
- Reach LLM becomes a material revenue driver that justifies its own positioning

## [2026-04-23] — Fresh .claude setup, don't inherit parent CopyEngine config

**Context:** Parent `New Project/` has a `.claude/` with skills/agents/CLAUDE.md for a Python copy-generation pipeline. This repo is a static marketing site.
**Options considered:**
- A: Fresh `.claude/` here, tailored to web work
- B: Symlink to parent `.claude/`
**Decision:** A — fresh `.claude/` in `abatrachenko.github.io/.claude/`.
**Rationale:** Two very different projects; sharing config would mix domains and dilute the rules for each. CLAUDE.md precedence is merging, not replacement, so sharing would actively inject wrong-context instructions.
**Tradeoffs:** Some duplication of skills (brainstorm, verify, ship, debug) across both projects. Acceptable — the skills are small and diverge over time as each project's needs evolve.
**Revisit if:** Skill content starts drifting materially between the two repos in ways that indicate a shared utility worth extracting.
