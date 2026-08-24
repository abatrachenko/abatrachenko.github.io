# Design-tier assessment — resonanceseo.com

**Date:** 2026-04-23  
**Branch:** staging (8 commits from 2026-04-23)  
**Method:** Playwright screenshots (desktop 1440 / tablet 768 / mobile 375 / full-page) + six local benchmark analysis files (Orainti, Linear, Stripe, Kevin Indig, Julian Shapiro, Ahrefs) + gap analysis synthesis. Live WebFetch blocked 403 on all seven benchmark sites; scores for Anthropic, iPullRank, Tom Critchlow derived from prior analysis notes and training-data knowledge.

---

## 1. TL;DR

**B+ tier. Weighted score: 7.35/10.** Not top-tier.

The phase-4 rebuild is structurally correct and typographically ahead of every direct SEO-consultant peer. But a 7.35 is still B (threshold for A is 7.5), and the delta is not spread evenly — it concentrates in three dimensions: memorability (6.5), proof density (7.0), and CTA hierarchy (7.0). All three are S/M-effort fixes. The Instrument Serif italic is the best design decision in the build; the site needs two or three supporting moves that are comparably distinctive before a buyer could describe this page a week later.

---

## 2. Scorecard

Scores 1–10. Weight: 1.5× for proof density (dim 3), tier signaling (dim 8), memorability (dim 10). Weighted average = (7×1.0 + 3×1.5) = 11.5 total weight.

| # | Dimension | Wt | Orainti | iPullRank | K. Indig | T. Critchlow | Linear | Anthropic | Stripe | **Us** |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Hero clarity | 1× | 5.5 | 7.0 | 6.5 | 6.0 | 8.0 | 8.0 | 8.5 | **7.5** |
| 2 | Typographic system | 1× | 6.0 | 7.0 | 6.0 | 7.5 | 9.5 | 8.5 | 8.5 | **8.0** |
| 3 | Proof density | 1.5× | 6.5 | 8.5 | 7.0 | 3.5 | 6.0 | 6.0 | 9.5 | **7.0** |
| 4 | Motion / craft signals | 1× | 3.5 | 6.0 | 4.5 | 5.0 | 9.0 | 8.5 | 7.5 | **7.5** |
| 5 | Whitespace / rhythm | 1× | 7.0 | 6.5 | 7.5 | 8.5 | 9.0 | 8.5 | 7.5 | **7.5** |
| 6 | Color discipline | 1× | 6.0 | 6.5 | 6.5 | 8.0 | 9.0 | 9.0 | 7.5 | **8.5** |
| 7 | CTA hierarchy | 1× | 5.0 | 6.5 | 5.5 | 5.0 | 8.0 | 7.0 | 9.0 | **7.0** |
| 8 | Tier signaling | 1.5× | 6.5 | 7.5 | 6.5 | 6.5 | 7.5 | 8.5 | 9.0 | **7.5** |
| 9 | Narrative flow | 1× | 6.0 | 7.0 | 6.5 | 7.0 | 8.0 | 7.5 | 9.0 | **7.0** |
| 10 | Visual memorability | 1.5× | 5.0 | 6.5 | 5.5 | 6.0 | 9.5 | 8.0 | 8.5 | **6.5** |
| | **Wtd. avg** | | **5.74** | **7.11** | **6.22** | **6.17** | **8.33** | **8.04** | **8.52** | **7.35** |
| | **Tier** | | C+ | B+ | B | B | A | A | A | **B+** |

### Evidence behind our scores

- **Hero clarity 7.5:** H1 answers who/what/why in one read. Sub-line carries $700M+ + named brands. Gap: "Resonance SEO" in nav, not "Aleksey Batrachenko" — the personal brand frame from positioning.md §8 is invisible above fold. [desktop-1440-viewport.png]
- **Typography 8.0:** Instrument Serif italic on "embedded directly in your team." is a genuine 2026-tier move and visually distinct from every direct peer. Inter body + Geist Mono numerics system is clean. Gap: italic flourish is isolated — no serif echo anywhere else on the page to anchor it. [desktop-1440-viewport.png]
- **Proof density 7.0:** Logo strip, numbers band ($700M+ / +240K / +95% / +315%), case studies, testimonials — all exist. Gap: no named testimonial with a stat anywhere near the fold; logo strip is below the fold on desktop 1440. The sub-line does name Adidas/Samsung/J.Crew/Madewell in text, which helps, but it's not visual. [desktop-1440-viewport.png, desktop-1440-full.png]
- **Motion/craft 7.5:** View Transitions + scroll-driven reveals (animation-timeline: view()) are genuine 2026 craft signals ahead of all SEO peers. Scarcity bar is distinctive at mid-page. [staging commits]
- **Whitespace 7.5:** Hero breathing room solid; section padding follows design system (128px desktop). One-thought-per-viewport structure visible at desktop 1440.
- **Color 8.5:** Best discipline in the peer set. Single navy accent, warm off-white surface, no gradients. Every navy pixel is either interactive or editorially deliberate. Ahead of Linear for our use case (consulting vs. SaaS-dark-UI).
- **CTA hierarchy 7.0:** Subscribe (filled, primary) + "Or book a strategy call →" (inline text link, secondary). The hierarchy intention is right; the execution is off — a text link is too weak for the secondary conversion action. Compared to Stripe (ghost button co-equal with primary) and Linear (secondary carries real visual weight), ours reads like an afterthought. [desktop-1440-viewport.png]
- **Tier signaling 7.5:** Logo cluster earns the price point. Instrument Serif + scarcity bar signal "person who cares about precision." Gap: pricing section comes before the testimonials section, which means the buyer sees the price before being fully convinced. Enterprise buyers stall on price when proof hasn't landed yet. [desktop-1440-full.png]
- **Narrative flow 7.0:** Hero → Numbers → Why Resonance → Pricing/Availability → Testimonials → Process → Results → FAQ → Bio. Mostly follows SYNTHESIS §4, but the placement of Pricing before Results and Testimonials is a sequencing problem. Stripe/Linear pattern is: build proof depth first, reveal the ask after conviction. [desktop-1440-full.png]
- **Memorability 6.5:** The Instrument Serif italic is genuinely distinctive. Everything else — navy + off-white, Inter, clean grid — is correct but not ownable. A buyer recalling the page a week later would say "very clean navy site, big bold headline" but could confuse it with three other "enterprise consultant redesigns." The scarcity bar is the second most distinctive element, but it's mid-page. No above-fold moment that's uniquely ours.

---

## 3. Tier-by-tier gap analysis

### Gap to A tier (7.5+): 0.15 points on the weighted scale

A-tier sites (iPullRank 7.11, us 7.35) diverge from us on two axes:

**1. Above-fold named proof with a number.** iPullRank leads with specific outcome claims and named client logos that immediately signal "this is what working with us produces." Our $700M+ in the sub-line is strong but it's career-cumulative — a buyer's eye skims it as a résumé line, not a result for them. One quote shaped as: *"[Outcome number]" — [Name, Title @ [Enterprise Logo]* placed between hero and logo strip would close most of the proof-density gap. Cost: S effort if a qualifying testimonial exists; blocked on client permission if not.

**2. Personal brand above fold.** The A-tier solo sites (Anthropic for editorial register, Kevin Indig for solo-brand model) make the named person present in the hero viewport. "Resonance SEO" in the nav anonymizes the offer. At $10K/month, the buyer is paying for Aleksey — his name should appear above the fold. One line under the eyebrow or a "by Aleksey Batrachenko" attribution near the H1 closes this. Cost: S effort, ~5 lines of HTML/CSS.

**3. Secondary CTA visual weight.** "Or book a strategy call →" as a text link is A/B testably worse than a ghost button. Stripe's co-equal CTA pair is the bar. A `.btn-ghost` treatment at the same visual scale as the subscribe button closes the gap. Cost: S effort.

### Gap to S tier (9.0+): substantial

Linear (8.33), Anthropic (8.04), Stripe (8.52) operate with:
- Custom or licensed type (Sohne, proprietary grotesque, GT Super-tier display) — not Google Fonts
- Multi-page experiences with deep case studies that create memorability through depth
- Design-org production polish (custom illustration, motion direction, systematic art direction)
- Press strips, G2/Gartner badges, or speaking-circuit social proof that creates third-party validation
- A proprietary visual language (Linear's dark-UI screenshots, Stripe's gradient wave, Anthropic's restrained editorial grid) that is non-imitable

None of these are achievable in a single sprint. S-tier requires a second full design phase focused on visual language differentiation, not system refinement. The Instrument Serif direction is the correct foundation; it needs time to be built into a full visual language rather than a single H1 flourish.

---

## 4. Top 5 highest-leverage moves

Ranked by (impact × effort efficiency). All assume current design system stays locked.

| # | Move | Effort | Impact | Notes |
|---|---|---|---|---|
| 1 | Named testimonial with a stat in the pull-quote, placed above/near the logo strip | S | High | Single biggest proof-density + tier-signal move. "500% traffic growth" (Orainti model). Blocked on client permission if no qualifying quote exists. |
| 2 | Personal brand name visible in hero viewport — "Aleksey Batrachenko" above fold | S | High | One line under the eyebrow or attribution below H1. Aligns to positioning.md §8. Takes "Resonance SEO" from anonymous firm to named senior operator. |
| 3 | One anti-positioning statement above the fold | S | High | "Not an agency. Embedded directly, no account managers." between sub-line and CTA pair. Sharpens ICP filter, reinforces tier signal, distinguishes from every agency's site immediately. positioning.md §7 has the locked language. |
| 4 | Ghost button secondary CTA to replace "Or book a strategy call →" text link | S | Med | `.btn-ghost` at same height as Subscribe button. Stripe's co-equal CTA pair model. Improves CTA hierarchy from 7.0 toward 8.0. |
| 5 | Resequence: move Results (case studies) before Pricing; move Pricing after Testimonials | M | Med | Current: Numbers → Why Resonance → Pricing → Testimonials → Results. Better: Numbers → Why Resonance → Results → Testimonials → Pricing. Proof-first, ask-second is the Stripe/SYNTHESIS-recommended sequence. Costs a section reorder in index.html; no CSS changes. |

---

## 5. Explicit don'ts

Moves that would actively degrade the tier read at our positioning:

| Pattern | Verdict | Why |
|---|---|---|
| WebGL / shader hero backgrounds | Hard skip | Agency-tech aesthetic, wrong for "embedded senior operator advising Adidas" |
| Magnetic cursor / magnetic buttons | Hard skip | Indie-maker aesthetic; enterprise VP reads it as toy |
| Grain/texture overlays | Skip | Retro signal; conflicts with "technical, restrained" brand personality |
| Animated count-up on stats | Hard skip | Already decided in decisions.md; kitschy tier-mismatch confirmed |
| Adding a second accent color to "add variety" | Hard skip | Color discipline (8.5) is our joint-highest score; any chromatic noise tanks it |
| Dark mode by default | Skip | Enterprise C-suite mixed light/dark; light-only is the safer call at this ICP |
| Serif display on section H2s or testimonial pull-quotes | Caution | Instrument Serif's power comes from restraint — H1 only. Spreading it dilutes the editorial moment. |
| Press strip with no actual press | Hard skip | Empty "As seen in" strips are a C-tier tell; only add if press assets exist |
| Case-study PDFs behind email gate on the homepage | Skip | Adds friction before the buyer is convinced; use the main CTA captures for that |

---

## 6. Confidence notes

**High confidence (evidence-direct):**
- Scores for dims 1, 2, 4–7, 9 for resonanceseo.com — derived directly from Playwright screenshots
- Scores for Orainti, Kevin Indig, Linear, Stripe — derived from analysis files captured 2026-04-23 by the research agent
- Narrative flow gap — visible in full-page screenshot structure (dim 9)
- CTA hierarchy gap — visible in desktop-1440-viewport.png (dim 7)

**Medium confidence (inference from available data):**
- Scores for Anthropic, iPullRank, Tom Critchlow — live fetch blocked; derived from training-data knowledge and gap analysis synthesis; directionally correct, ±0.5 per dimension
- Memorability score (6.5) — taste call; no A/B data. The Instrument Serif italic is distinctive; the question is whether one isolated serif moment is enough. Reasonable people could score it 7.0. I'm calling 6.5 because a buyer who hasn't read this analysis would describe the site as "very clean navy" not "the one with the serif headline."
- Proof density (7.0) — I can see the logo strip, numbers band, and case study section in screenshots but cannot read testimonial copy at full-page scale. If any existing testimonial already contains a stat, dim 3 re-scores to 7.5 immediately.

**Judgment calls (flag before acting):**
- Move 5 (section resequence) assumes the case-study section is strong enough to hold buyer attention before Pricing. If case-study cards are thin, resequencing may expose that gap rather than fixing it — verify card content before reordering.
- Anti-positioning statement (move 3) is only as strong as the copy. positioning.md §7 has the locked language ("Not an agency. No account managers. No juniors running playbooks.") — use that verbatim, don't invent new language here.
