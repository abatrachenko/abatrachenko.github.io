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

## [2026-04-23] — Design system direction locked (Track B phase 3)

**Context:** Phase 3 codification of `design-system/MASTER.md`. Three decisions framed from `benchmarks/SYNTHESIS.md §5`.
**Decisions:**
- **Accent:** Deep navy `#1E3A5F` on warm off-white `#FAFAF9` surface, near-black `#0F172A` text. Single accent only — drop the current multi-color palette (`#FF3366` hot pink + `#4F46E5` indigo + `#10B981` green + `#F59E0B` amber all removed).
- **Typography:** Inter (body + display) + Geist Mono (numbers band, pricing, scarcity bar, case-study metrics). Four weights total (400/500/700/900). Display H1 at `clamp(3rem, 6vw + 1rem, 6.5rem)` (48–104px).
- **Editorial moment — compound:** large display H1 + numbers-as-design in stats band + instrument-grade scarcity bar. All three together create the "2026 signature" without any single element being extravagant.

**Rationale:**
- Navy is defensible at enterprise tier and works with all existing client logos. Terracotta was the close second but carries "trend color" risk. Near-monochrome was judged too austere given the CTA visibility requirement.
- Inter is table stakes per every benchmark. Geist Mono for numerics is the cheap Stripe-pattern adoption — gives numbers design weight without touching the rest of the type system.
- The editorial compound solves the Orainti critique (her site reads forgettable because there's no "2026 signal") without a single element being a high-risk bet. Each element reinforces a different credibility angle: display H1 = tier, numbers-as-design = outcome emphasis, instrument scarcity bar = honest precision.

**Tradeoffs:**
- Dropping multi-color = less visual "variety" per viewport; compensated by typography and whitespace doing the hierarchy work.
- Pill-shaped CTAs → 8px radius loses the "soft / friendly" feel but gains the enterprise-tier signal.
- Static number rendering (no count-up animation) forfeits a common engagement hook; trade accepted because SYNTHESIS flagged it as a kitschy tier-mismatch.

**Revisit if:** Three benchmarks in our tier shift to a different visual direction in a way that makes ours feel stale, or A/B testing shows any single element dragging conversion materially.

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

## [2026-04-23] — Modify the typography lock: add Instrument Serif for hero H1

**Context:** Benchmark gap analysis (`tasks/designs/2026-04-23-benchmark-gap-analysis.md`) identified that the April 2026 bar-setters for premium-consultant sites (Orainti, Tom Critchlow, Amanda Natividad, Anthropic) all use an editorial serif display for the H1. Inter-only reads as 2022-era SaaS. Research agent pass confirmed Instrument Serif / Fraunces / GT Super as the current winning trio.

**Options considered:**
- A: Keep Inter-only — preserve the prior design-system lock; accept "2022 SaaS" visual read
- B: Add Fraunces — more magazine personality, variable-font with optical size axis
- C: Add Instrument Serif — cleanest, most restrained, free Google Font, one weight + italic
- D: Add GT Super — commercial-grade but paid license

**Decision:** C — add Instrument Serif, apply to `.hero__headline` only. Accent span inside the H1 uses the italic variant as the signature editorial flourish. Section eyebrows stay in Geist Mono (unchanged).

**Rationale:**
- Instrument Serif's restraint matches the locked brand personality ("editorial, technical, restrained") better than Fraunces's magazine-forward character — Fraunces carries more personality than the enterprise buyer tier wants.
- One weight + italic keeps the total font-face download small and aligns with the locked "four-weight discipline" principle (now five, across three families).
- Italic accent span on "embedded directly in your team." (the final clause of the H1) is the one editorial move that earns the serif's presence — it's doing a job, not decoration.
- Keeping eyebrows in Geist Mono preserves the instrument/technical register that distinguishes us from pure editorial-magazine sites (Orainti lookalikes). The mix of display-serif + mono-eyebrow + sans-body is deliberate.

**Tradeoffs:**
- One additional Google Fonts family = ~40KB additional CSS + font-file payload. Acceptable; served via Google Fonts' own CDN with long cache.
- Brief FOUT on first load (font-display: swap). LCP still fires on fallback Georgia, so Core Web Vitals unchanged.
- Two font families now on the critical typographic path (plus mono for numerics). Small increase in visual complexity; offset by the tier-appropriate editorial signal.

**Revisit if:**
- Three bar-setter sites shift away from serif-display in the next 6 months.
- A/B testing shows H1 comprehension dropping (unlikely — Instrument Serif is highly legible at display sizes).
- The italic accent span reads gimmicky on the live site (watch during the design-review pass).
