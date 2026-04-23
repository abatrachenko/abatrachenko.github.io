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

## [2026-04-23] — Fresh .claude setup, don't inherit parent CopyEngine config

**Context:** Parent `New Project/` has a `.claude/` with skills/agents/CLAUDE.md for a Python copy-generation pipeline. This repo is a static marketing site.
**Options considered:**
- A: Fresh `.claude/` here, tailored to web work
- B: Symlink to parent `.claude/`
**Decision:** A — fresh `.claude/` in `abatrachenko.github.io/.claude/`.
**Rationale:** Two very different projects; sharing config would mix domains and dilute the rules for each. CLAUDE.md precedence is merging, not replacement, so sharing would actively inject wrong-context instructions.
**Tradeoffs:** Some duplication of skills (brainstorm, verify, ship, debug) across both projects. Acceptable — the skills are small and diverge over time as each project's needs evolve.
**Revisit if:** Skill content starts drifting materially between the two repos in ways that indicate a shared utility worth extracting.
