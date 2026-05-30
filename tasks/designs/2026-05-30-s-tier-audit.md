# S-Tier Design Audit — resonanceseo.com

**Date:** 2026-05-30
**Method:** 4-lens parallel critique against locked BRIEF (positioning, single-navy system, voice rules, no-invented-claims). Live site captured at 375/768/1440. Lenses: dimensional scoring, designer-who-codes, creative director, conversion psychology + copy.
**Status:** Findings only. Nothing ported. User vets before any change touches `main`.

> Note on evidence: full-page screenshots rendered mid-page sections blank — a scroll-reveal timing artifact (`.fade-in` baseline is `opacity:1`; capture fired before `animation-timeline: view()` completed), NOT a live bug. Reviewers critiqued against source, which is authoritative.

---

## Headline

Two separate things are called "the gap":

1. **The claimed A tier (7.83) over-credits the live site.** Color-discipline and motion/craft were scored as if the legacy CSS were already clean. It isn't — ~700 lines (~23% of `styles.css`) of dead/contradictory code still ships, carrying every non-navy literal in the codebase and several locked-rule violations. Re-scored against what actually ships, the page sits ~7.7. **This half-point is pure deletion to recover.**

2. **The real A→S work is memorability** — and two independent lenses (dimensional + creative director) landed on the *same* answer without coordinating: stop treating your real enterprise numbers like a SaaS pricing page; typeset them as a **financial ledger / operator's dossier**. That convergence is the strongest signal in the audit.

---

## Tier 0 — Live bug, fix first (not a design question)

- **Foyer chat widget is broken AND in the way.**
  - Console: `widget-config` fetch 404s in production (`api.foyer.ink/.../tl_90bd5f1b1beb`) — 2 console errors on every page load. The widget installed across all pages can't load its config.
  - Conversion lens independently found it **overlaps the hero newsletter form** (your declared *primary* CTA) at all three breakpoints — an unplanned fourth CTA occluding the one that matters most.
  - **Action:** fix the Foyer agent ID / config, or pull the widget until it works. Either way it cannot sit on top of the primary CTA. Highest impact, lowest effort.

---

## Tier 1 — Pure deletions / lock violations (high-confidence, reversible)

Both code lenses converged on these. All are deletions or single-token swaps; none carry layout risk.

- **Delete the dead legacy CSS block (~700 lines).** `.trust-*`, `.metrics-*`/`.metric-card` (pink glow + `pulse`), `.qualifier`, `.form-*`/`.form-steps` (green/red/blue literals), `.exit-popup*`, `.social-proof-notification`, `.urgency-badge` (`#ff6b6b` + `pulse-urgent`), `.skeleton`, `.btn.loading` spinner, `.floating-cta`, `.sticky-cta-bar`, `.parallax`, stale `.about-*`/`.hero-*`/`.testimonial` (singular) rules. None match live BEM markup. Removes **every** pink/green/blue/red literal at once; file drops ~3024 → ~2300 lines. Single highest-leverage change.
- **Scroll-progress bar** (`styles.css:1686`, live node `index.html:168`): pink neon glow (`rgba(255,51,102,…)`) + `shimmer` (animates `background-position`) + JS-driven `width` (animates `width`). Triple violation, pinned to the top of the viewport on every scroll — the single most off-brand element for a hype-immune VP. Reduce to a flat 2px navy bar; ideally drive with `transform: scaleX()` / CSS `animation-timeline: scroll()` and drop the JS.
- **Button ripple `.btn::after`** (`styles.css:1712`): off-system Material leftover AND a real bug — `.btn` has no `position:relative`/`overflow:hidden`, so the 300px circle isn't clipped and paints outside the button on `:active`. Also animates `width`/`height`. Delete.
- **Mobile nav-CTA pill** (`~styles.css:2447`): `border-radius:50px; border:none` overrides the locked 8px radius. The one element breaking the radius system. → `var(--radius-md)`, keep the 1px accent border.
- **`.section h2:after` gradient underline** (`styles.css:1234`): renders under Results/Pricing/Process H2s but not the others — inconsistent, leftover. Remove (eyebrow + centered H2 already carry hierarchy).
- **`html { font-size }` overrides** (15→14→13.5px across breakpoints): brute-force rem rescaling that fights the tuned `clamp()` type scale; at 480px pushes `--text-micro` to ~11.8px. Remove; let the clamps do the responsive work. Same for the redundant mobile `h1/h2/h3` fixed-px overrides.
- **Stale blue focus shadows** (skip-link `rgba(0,123,255,…)`, line 177): swap to navy.

### Tier 1 craft polish (lower priority, same pass)
- Global `a:hover { opacity:0.8 }` double-dims elements that already have hovers — scope it.
- `.nav-menu a:hover { padding-left:24px }` reflows on hover → `transform: translateX(4px)`.
- FAQ answer text indented `3rem` for an icon that was removed → left padding 0.
- Stats band collapses to 1 column at 480px (very tall) → keep 2×2.
- `.container` width math: mobile `width:92%`+padding double-insets → let `--container-pad` clamp govern.

---

## Tier 2 — The A→S memorability bet (strategic; needs approval, higher risk)

The page is correct, restrained, and **unownable** — strip logos and copy and nothing identifies it. The Instrument Serif italic H1 is the only ownable moment, and it's a now-common move (serif-display + italic pivot). Below the fold the page is the default triple-triple grid (3 pillars / 3 cards / 3 tiers / 3 steps). You hold the rarest asset in the category — **real enterprise numbers tied to real enterprise logos** — and present it like a SaaS pricing page.

**The convergent direction: build the visual language out of the data itself.** You sell revenue → the site should look set in a finance system, paginated like a board dossier.

1. **Mono-numeral ledger (low risk, do first).** Unify every number — stats band, case metrics, availability, pricing — into one recurring treatment: Geist Mono, tabular/right-aligned digits, a hairline rule above, a small mono label in the same column width. Reads like an audited P&L, not a marketing page. Ownable because no SEO/consulting competitor typesets proof as a financial statement, and it's the perfect semantic match.
2. **Numbered section rail / "operator coordinates" (low–med).** Promote the existing `— 01 ·` eyebrows to load-bearing Geist Mono numerals in a left margin-rail (≥1024px), collapsing to inline below. Turns the scroll into a bound engagement brief — the exact artifact this buyer reads all day. Restraint-as-signature, expressed through numeration (so it's yours, not Anthropic's type move).
3. **Hairline ledger spine (low, pairs with 1+2).** Make the existing pillar/card `border-top` hairline the page's structural spine the eye tracks down, with section indices hanging off it. Unifies the stack into one measured-instrument motif; matches the scarcity bar's "instrument-grade" intent.
4. **Logos as a numbered evidence column, not a carousel (medium — touches locked section order).** Kill the auto-scroll carousel; pair each enterprise logo with the specific number it earned (`adidas · +240K daily clicks`, `J.Crew · +95% organic`). Welds your two strongest assets into one artifact no competitor can replicate. **Risk:** loses the "wall of logos" gestalt for brands without a public number, and reworks the locked clients/stats sections — flag for explicit sign-off.
5. **One motion signature: numbers tally to value on reveal (swing, highest risk).** Mono numerals count up to 240K / 315% / $700M over ~600ms, hard ease-out, hairline draws beneath; nothing else animates beyond fades; instant final state for reduced-motion. The thing you want remembered (the numbers) is the only thing that moves. **Risk:** counters are a growth-hack cliché if bouncy/over-eased — discipline required, enterprise-scale numbers only.

**Recommended sequence:** 1 → 3 → 2 → (4, 5 only with explicit approval). Moves 1+3 alone create the missing "second layout-level moment" without touching color or voice.

---

## Tier 3 — Conversion / copy (within locked voice; no invented claims)

- **CTA hierarchy is inverted in execution.** Model is newsletter-primary, call-secondary. But "Book a strategy call" appears ~5× (nav, case footer, pricing, bio, hero) vs newsletter 2× (hero, footer), and the widget occludes the hero newsletter. Add **one mid-page newsletter re-capture** (after case studies, where interest peaks) so the primary CTA gets a second at-bat.
- **Newsletter value-exchange is underpowered (highest-leverage copy edit).** "Organic growth patterns for enterprise e-commerce. Every other Tuesday." promises a *category*. → "What's actually moving organic and AI search for enterprise e-commerce — from inside the engagements. Every other Tuesday." Promises a vantage no competitor newsletter can claim (you're embedded) and threads GEO in.
- **GEO is buried at Pillar 03 with abstract language** ("not as a trend, as an implementation"). It's your most board-relevant, timely differentiator. Move to Pillar 01/02; sharpen: "Classical SEO execution and GEO strategy run by the same senior operator — so AI-search readiness isn't a separate vendor or a slide deck."
- **Solo-as-feature is stated as negation at the fold** ("Not an agency. No account managers…"); the affirmative frame is 1,500px down. Add the positive twin to the hero: "The senior who owns the strategy is the one doing the work."
- **Pricing anchors low.** Tiers ascend $6,400 → $9,600 → $12,800 L-to-R, so the cheapest number anchors and deflates the $700M pre-anchor. Re-anchor high (lead with/visually dominate the top tier). Give the featured middle tier a *reason* ("Where most enterprise teams land — enough hours to own the roadmap, not just advise on it"). Make tier descriptions concrete value ladders, not abstractions ("your team executes" → "embedded ownership end to end" → "+ exec-level reporting"). **Verify scope before shipping — don't invent deliverables.**
- **Keep (already strong, senior voice done right):** the FAQ disqualifier ("not right for brands under $50M"), the bio ("organic growth plateaus when nobody senior is watching the system… in-house teams take the blame for gaps that start one org layer up"), "Named outcomes" eyebrow, "Minimum engagement: 3 months" terms, the `$200/hour` FAQ de-anchor.

---

## AI-slop / generic-template tells (all CSS/markup, no copy)
Pink-glow scroll bar · gradient H2 underline · button ripple · card-lift-on-hover-with-glow (dormant) · `html{font-size}` rem hack · mobile pill nav-CTA · ~700 lines of dead conversion-template sections (exit-popup, social-proof "X just subscribed", urgency badge, multi-step form, skeleton). Clearing these recovers color-discipline and motion/craft to ~8.5 and removes every undifferentiated tell.

---

## Suggested execution order
1. **Tier 0** — fix/pull Foyer widget (live bug).
2. **Tier 1** — delete dead CSS + lock violations (pure deletion, atomic commits, design-review gate). Recovers the over-credited half-point.
3. **Tier 3** — copy/conversion edits (newsletter value, GEO elevation, hero affirmative line, pricing anchor + featured rationale, mid-page re-capture). User approves copy — his voice.
4. **Tier 2** — memorability: moves 1+3 first (low risk), then 2; moves 4+5 only with explicit sign-off (touch locked section order / motion).
