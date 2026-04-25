# Design-tier re-score — resonanceseo.com

**Date:** 2026-04-25  
**Branch:** staging (post-5-moves, HEAD: 8e8205d)  
**Baseline:** `tasks/designs/2026-04-23-design-tier-assessment.md` — B+, weighted 7.35/10  
**Method:** Visual inspection of Playwright screenshots (desktop 1440 / mobile 375, both in `audit-2026-04-23/after-tier-moves/`), direct HTML/CSS read of all 5 shipped commits, structural analysis of section order and component implementation.

---

## 1. TL;DR

**We crossed the line. A tier. Weighted 7.83/10, up from 7.35.**

All 5 moves landed correctly. No grade inflation here — three of five moves produced the exact dimensional shifts predicted, one overdelivered slightly (narrative flow), and one underdelivered (memorability, as expected). The weighted gain of +0.48 is enough to clear the 7.5 A-tier threshold. We're not at the Anthropic/Stripe level (8.0–8.5), but we're unambiguously A.

---

## 2. Score delta table

Same framework: weight 1.5× on dims 3, 8, 10. Total weight 11.5.

| # | Dimension | Wt | Prior | New | Δ |
|---|---|---|---|---|---|
| 1 | Hero clarity | 1× | 7.5 | **8.0** | +0.5 |
| 2 | Typographic system | 1× | 8.0 | **8.0** | 0 |
| 3 | Proof density | 1.5× | 7.0 | **8.0** | +1.0 |
| 4 | Motion / craft signals | 1× | 7.5 | **7.5** | 0 |
| 5 | Whitespace / rhythm | 1× | 7.5 | **7.5** | 0 |
| 6 | Color discipline | 1× | 8.5 | **8.5** | 0 |
| 7 | CTA hierarchy | 1× | 7.0 | **8.0** | +1.0 |
| 8 | Tier signaling | 1.5× | 7.5 | **8.0** | +0.5 |
| 9 | Narrative flow | 1× | 7.0 | **8.0** | +1.0 |
| 10 | Visual memorability | 1.5× | 6.5 | **7.0** | +0.5 |
| | **Weighted avg** | **11.5** | **7.35** | **7.83** | **+0.48** |
| | **Tier** | | B+ | **A** | ↑ |

Weighted calculation: (8.0+8.0+7.5+7.5+8.5+8.0+8.0)×1 + (8.0+8.0+7.0)×1.5 = 56.0 + 34.0 = 90.0 ÷ 11.5 = **7.83**

---

## 3. Move-by-move evidence

### Move 1 — J.Crew pull-quote above logo strip (+1.0 on proof density; +0.5 on memorability)

The implementation is correct: `<section class="hero-pullquote">` renders centered between the hero CTA and the clients section. CSS delivers `font-size: clamp(1.5rem, 2vw + 0.75rem, 2.25rem)` italic (Inter, not Instrument Serif — design-system lock honored), with a Geist Mono attribution line in navy caps. The quote text is a verified lift from the approved J.Crew testimonial.

Effect on proof density: This is the biggest single gap-closer available. The prior score of 7.0 reflected "no named testimonial with a stat anywhere near the fold." That gap is closed — the buyer now reads: hero → "95% organic clicks" (J.Crew, VP Marketing) → logo strip → numbers band. Three consecutive proof layers in the first 1.5 viewports. Score rises to 8.0. It doesn't reach 8.5 (iPullRank baseline) because the pull-quote card has no logo mark or visual company badge — it's text attribution only, which is slightly less convincing than a pull-quote with the J.Crew wordmark inline.

Effect on memorability: A second distinct editorial moment now exists above the fold (Instrument Serif H1 italic is the first; this centered pull-quote is the second). Small but real.

### Move 2 — Nav lockup with name (+0.5 on hero clarity; +0.5 on tier signaling)

Confirmed in desktop-1440-viewport.png: "Aleksey Batrachenko" is the nav primary element, bold, left-anchored. "RESONANCE SEO" runs below it in Geist Mono small caps. The stacked treatment is clean and immediately legible — the operator's name is the first thing the eye reads in the nav.

Effect on hero clarity: The prior gap was "personal brand frame from positioning.md §8 is invisible above fold." It's now visible — not in the H1, but the nav position is the secondary above-fold anchor. This partially closes the gap. Score rises 7.5 → 8.0 (not higher because the name is nav-sized, not H1-level; a buyer skimming fast could still miss it).

Effect on tier signaling: Named operator visible on load = "I know who I'm talking to." Removes the anonymous-firm read.

### Move 3 — Anti-positioning line in hero (+0.5 on hero clarity; contributes to tier signaling)

Confirmed in both screenshots: "— Not an agency. No account managers, no junior handoffs." sits between the subhead and the newsletter form. The navy em-dash prefix matches the color system; `max-width: 48ch` keeps it tight. The line is drawn verbatim from positioning.md §7.

Effect on hero clarity: The hero now answers 6 buyer questions in one viewport: who (nav), what (H1), for whom (H1), how (H1 italic clause), cumulative proof (subhead), and offer model (anti-positioning). That's comprehensive without being cluttered. +0.5 is conservative but defensible — it's a copy win, not a visual architecture win.

Effect on tier signaling: "Not an agency" is the key differentiator phrase for solo consultants at enterprise price points. It filters the ICP immediately.

### Move 4 — Ghost button secondary CTA (+1.0 on CTA hierarchy)

Confirmed in both screenshots: "Book a strategy call →" is now `class="btn btn-ghost"` — same height/padding as Subscribe, `border: 1px solid var(--accent); color: var(--accent); background: transparent`. On mobile, the ghost button is full-width below Subscribe, visually co-equal. This is the Stripe co-equal pair model.

The prior score of 7.0 reflected "a text link is too weak for the secondary conversion action." The ghost button fixes this completely. The hierarchy now reads: Subscribe = primary (filled), Book a call = secondary but real (bordered). Score rises to 8.0. Not higher because the primary CTA is a newsletter capture, not a direct sales conversion — which is a conscious positioning choice, not a design flaw.

### Move 5 — Section resequence (+1.0 on narrative flow)

Confirmed via HTML section order: Hero → Pullquote → Clients → Stats → Why Resonance → Results (id="case-studies") → Testimonials (id="testimonials") → Pricing (id="consulting") → Process → FAQ → Bio.

This directly fixes the prior assessment's narrative flow diagnosis: "Pricing before Results and Testimonials is a sequencing problem." Results now appears 6th (proof), Testimonials 7th (more proof), Pricing 8th (ask). The buyer is warmed with 5 sections of proof and positioning before seeing the number. The pullquote then acts as a bridge between the hero and the logo proof cluster, making the cold logo-strip opener warmer.

Score rises from 7.0 to 8.0. Not higher because 11 sections is still a long scroll, and the resequence doesn't solve the "moment of peak conviction" problem — it's additive proof, not architected.

---

## 4. Tier rating

**A tier. 7.83/10.**

This puts us between iPullRank (7.11, B+) and Anthropic (8.04, A). Not at Anthropic/Stripe level — they run at 8.0–8.5 — but solidly A. For a solo consultant with no design org and a static HTML/CSS stack, 7.83 with five S-effort moves is a legitimate outcome.

---

## 5. What's left between A and S

S tier is 9.0+. We're at 7.83. That's a 1.17-point gap on the weighted scale. All five moves together bought 0.48 points. Closing the remaining 1.17 requires fundamentally different categories of work.

**The remaining weighted potential by dimension (if each reached 9.0):**

| Dim | Current | Gap to 9.0 | Weight | Weighted uplift |
|---|---|---|---|---|
| 10 — Memorability | 7.0 | 2.0 | 1.5× | 0.26 |
| 4 — Motion/craft | 7.5 | 1.5 | 1× | 0.13 |
| 5 — Whitespace | 7.5 | 1.5 | 1× | 0.13 |
| 8 — Tier signaling | 8.0 | 1.0 | 1.5× | 0.13 |
| 3 — Proof density | 8.0 | 1.0 | 1.5× | 0.13 |
| 1, 2, 7, 9 | 8.0 | 1.0 each | 1× each | 0.09 each |

The biggest single lever is memorability (0.26 weighted uplift available), and it's the hardest to move: it requires a proprietary visual language, not a copy or sequencing fix. The specific gap: the page reads "very clean, very well-executed navy/off-white" — correct, beautiful, not ownable. A buyer who saw it a week ago would describe the aesthetic but not the layout. Stripe has its gradient wave; Linear has its dark-UI screenshot panels; Anthropic has its restrained editorial grid. We don't yet have an equivalent.

**What actually gets us toward S:**

1. **A second layout-level visual moment** (not just typography): the bento case-study grid from P2-1 in the benchmark analysis would help, but it needs to be disciplined. One large hero card + 2 asymmetric supporting cards, still in navy/off-white — not a design departure, just an architectural beat the eye remembers.

2. **Third-party validation row**: press mentions, speaking credits, or a G2/industry badge. Currently no third-party signals exist; every proof element is self-asserted or client-attributed. This is the dimension where Anthropic/Stripe pull ahead.

3. **Proprietary framework name**: iPullRank's "Relevance Engineering" re-framing is worth more than any design move. If there's an internal process with a name, surfacing it turns a consulting page into a thought-leadership position.

4. **Case study card depth**: the prior assessment flagged this as a risk if cards are thin — "resequencing may expose that gap rather than fixing it." With Results now in the 6th position (pre-Pricing), thin cards would show. Worth auditing before the next sprint.

---

## 6. Confidence notes

**High confidence (evidence-direct):**
- All dimension scores for resonanceseo.com — derived from direct Playwright screenshot inspection and full HTML/CSS read of all 5 commits
- Narrative flow score — verified via section ID order in index.html
- CTA hierarchy score — confirmed via screenshot rendering and CSS implementation
- Ghost button CSS — confirmed correct implementation against `.btn-ghost` rule

**Medium confidence (inference):**
- Memorability score (7.0): taste call. The pull-quote adds a second editorial moment; the anti-positioning line is memorable copy. Reasonable people could score it 6.5 or 7.5. I'm calling 7.0 because the visual language is still "clean navy" — the additions are editorial/copy, not layout-level.
- Hero clarity (8.0): the "name above fold" gap is partially closed (nav position, not H1 position). A buyer skimming on mobile may clock the name in the nav logo; they also may not. +0.5 is conservative.

**Judgment calls (flag before acting):**
- Proof density at 8.0 assumes the pull-quote reads at the right editorial weight on the live site. The CSS is correct; verify in a live Playwright pass that the pull-quote section isn't getting clipped or over-padded on specific viewports.
- The case-study card depth issue raised in the prior assessment is now more visible given the Results-before-Pricing resequence. Run a content audit of the case-study cards before the next sprint — thin cards at position 6 (before Pricing) could actively hurt conviction.
