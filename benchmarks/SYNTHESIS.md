# Benchmark synthesis — patterns across six references

**Captured:** 2026-04-23
**Inputs:** [stripe](stripe/analysis.md) · [linear](linear/analysis.md) · [ahrefs](ahrefs/analysis.md) · [orainti](orainti/analysis.md) · [kevin-indig](kevin-indig/analysis.md) · [julian-shapiro](julian-shapiro/analysis.md)

**Purpose:** Feed directly into Phase 3 (design-system reset) and Phase 4 (copy + hero rebuild). This is the pattern library we pattern-match against, not a design brief. Decisions belong in `conversion/positioning.md` and `design-system/MASTER.md`.

---

## 1. Consensus patterns — every benchmark does these

These are the table-stakes moves of a 2026 premium marketing site. Missing any one of them is a signal of amateur craft. We adopt all.

| Pattern | Observed in | Implication |
|---|---|---|
| **Single sans-serif family across the whole page** | All 6 (Inter-class grotesque) | Use Inter; no serif pairing; weight carries hierarchy |
| **Neutral surface + near-black text + one action accent** | All 6 | Kill the hot-pink + glow + gradients; target 90% neutral / 10% accent |
| **Airy section rhythm (80–120px vertical padding)** | All 6 | Current site is too dense; pad aggressively |
| **Motion restraint (fade-and-rise only, no parallax, no scroll-jacking)** | All 6 | Remove slide-in-left/right + counter-animations; fade-rise only |
| **Typography-driven hierarchy, decoration stripped** | All 6 | Drop cards/section-alt-backgrounds/gradients as variety crutches |
| **Category-naming or outcome-promise H1 (no questions, no "Welcome to")** | 5 of 6 (Orainti the exception) | Position-first locked — validated |
| **Logo strip immediately under the hero** | 5 of 6 (Julian the exception) | Keep the logo-cluster placement |

---

## 2. Divergent patterns — where SEO-consultants and SaaS-benchmarks split

The six benchmarks cluster into two groups with different playbooks. We pick from each deliberately.

| Dimension | SEO-consultants (Orainti, Indig, Julian) | SaaS-benchmarks (Stripe, Linear, Ahrefs) | Our pick |
|---|---|---|---|
| **Hero proof shape** | Named testimonials lead; logos secondary | Logos lead; testimonials later | **Hybrid**: logo cluster + named testimonials cast by ICP-title |
| **CTA strategy** | Single CTA ("Contact" / "Work with me") | Dual CTA (self-serve + contact sales) | **Two-layer staged** (newsletter primary, strategy-call secondary) — unique to us; borrow Stripe's co-equal visual |
| **Pricing visibility** | Hidden (pure "contact to qualify") | Tiered public + enterprise hidden | **Public tiers preserved** — our $6.4K/$9.6K/$12.8K is a differentiator vs. opaque comps |
| **Hero visual** | Portrait / editorial imagery | Product screenshot / abstract gradient | **Text-first, no visual crutch** (Ahrefs pattern; logos do the credibility work) |
| **FAQ section** | Absent (objections handled elsewhere) | Absent (proof stack substitutes) | **Trimmed, not removed**: keep 3–4 of the 6 current items; cut redundant ones once proof stack is strong |
| **Case-study format** | Narrative/quote-based | Metric-forward cards | **Julian's clickable artifact cards**: Adidas +240K, J.Crew +95%, Alchemy +315% as entry points to deeper reads |

---

## 3. Strongest single-pattern takeaways per benchmark

One high-leverage steal from each. These are the load-bearing insights.

1. **Stripe — the progressive proof stack is the persuasion structure.** Sequence: logos → numbers → named cases → individual quotes → external validation. Each layer answers the objection the previous raised. "Don't argue, sequence." We already have every piece — we just need to order them this way instead of scattering them.

2. **Linear — typography + whitespace + motion-restraint IS the tier signal.** One family, two weights, disciplined palette, patient section padding. Linear feels expensive not because they spent money on design but because they refused to decorate. Cheap to replicate, hardest to commit to.

3. **Ahrefs — text-first hero, no visual crutch.** Display typography + CTA pair + logo strip. Translates *better* to consulting than SaaS because our logos (Adidas/Samsung/J.Crew/Madewell) are stronger proof than any screenshot. Absence of a product visual signals "this is a person, not a product."

4. **Orainti — relational testimonials ("extension of my team") do the anti-agency work without a disclaimer.** Screen testimonials for first-person-plural work language; cut anything that reads as vendor-review.

5. **Kevin Indig — the Substack-landing compact component (tagline + subscriber count + 3 peer quotes + Subscribe) is our in-hero newsletter model.** Collapse to ~80px vertical in the hero; DO NOT bury it on a sub-page like Kevin does.

6. **Julian Shapiro — hero as filter, proof as artifact, bio placed last.** The hero qualifies the reader; case studies are clickable artifacts (not narratives); the bio + credentials stack lives at the *bottom* of the page. Inverts the conventional consultant-site structure in a way that reads more confident.

---

## 4. Recommended information architecture (feeds Phase 4)

Drawn from the synthesis. This is a working draft; expect iteration in Phase 4.

```
1.  HERO                    — H1 (position-first) + subhead + newsletter capture (primary) + "Book a strategy call" (secondary) + logo strip below
2.  NUMBERS BAND            — $700M+ / +240K / +95% / +315% (Stripe's numbers-as-design: big number, small label, no charts)
3.  CASE STUDY CARDS        — 3 cards: Adidas, J.Crew, Alchemy (Julian's clickable artifacts — hover to expand or link to deep-dives)
4.  WHY RESONANCE (3-pillar) — embedded senior operator · enterprise track record · GEO + SEO capability (Indig's structural home for the differentiator triangle)
5.  TESTIMONIALS            — 3 quotes, cast by ICP-title (Orainti's relational language pattern — not just "SVP Digital at Adidas" but quotes that name the working relationship)
6.  PROCESS                 — 3 steps (existing content: Vetting & Discovery / Integration & Planning / Implementation & Maintenance — kept, well-written)
7.  PRICING & AVAILABILITY  — 3 tiers + scarcity bar + secondary strategy-call CTA
8.  FAQ (TRIMMED)           — 3–4 items max (cut redundancy once proof stack is tight)
9.  BIO                     — Aleksey: 15+ years, past roles, speaker/advisor credentials incl. Reach LLM (placed LAST per Julian)
10. FOOTER                  — legal, LinkedIn, newsletter capture (secondary)
```

**What's gone from the current site:**
- "The Agency Problem" / "Resonance Solution" callouts (message absorbed into differentiator pillar; no dedicated block)
- Hero chart PNG (replaced with text-first hero)
- Star rating visuals (removed; absorbed into real testimonials)
- Sticky CTA bar + floating mobile CTA (CTA ladder collapses to 2–3 placements)
- 8 CTA variants — consolidated to 2 consistent phrases

---

## 5. Design-system direction (feeds Phase 3)

Not yet locked — Phase 3 builds `design-system/MASTER.md` — but the direction is clear from synthesis:

- **Typography:** Inter (or similar grotesque — Inter Tight, Geist). One family. Display weight 700–900 for H1, regular 400–500 body, medium 500 for H2/H3. Monospace (JetBrains Mono or similar) reserved for numbers in the stats band per Stripe.
- **Color:** off-white page surface (`#FAFAF9` / `#F8F7F4` range), near-black text (`#0F172A` / `#111`), one restrained accent. Drop `#FF3366` entirely. Candidate accents: a saturated navy, a warm terracotta, or a deep green — decision in Phase 3 after exploring 3–4 palettes.
- **Spacing:** vertical section padding 96–128px desktop, 64–80px mobile. Gutters 24–48px. 12-column grid.
- **Motion:** fade-and-rise only, 200–300ms, minimal translate distance. `prefers-reduced-motion` disables. No other animation.
- **Components:** flat, no decorative cards, no gradient treatments, no heavy shadows. Borders / dividers only where structurally required.

---

## 6. Explicit anti-patterns (do not adopt under any circumstance)

From the synthesis — these are the SaaS tics we specifically *won't* imitate just because the design benchmarks use them:

- Product screenshots, UI mocks, dashboard imagery (Ahrefs/Linear — no equivalent for consulting)
- Free-trial / self-serve CTA microcopy ("Start now," "Create account," "Watch demo")
- Role-based "For X / For Y" persona grids (dilutes our single-ICP positioning)
- Third-party review-aggregator badges (G2, Capterra — no consultant analog)
- Usage-volume proof ("22,077 users joined this week" — we run on scarcity, not scale)
- Single-CTA-only "Get in Touch" monomania (Orainti pattern — collapses our two-layer funnel)
- Pricing hidden behind a contact form (Indig pattern — contradicts our anti-agency transparency)
- Image-based section headings (Indig mistake — a11y/SEO/CWV risk for an SEO consultant's own site)
- Gradient-heavy multi-accent palettes (our current site — signals "startup landing page")
- Hero provocative-question H1 ("How can Orainti help you?" — defers positioning to the subhead)

---

## 7. What's ready to feed downstream

- **Phase 3 (design-system):** ready. Start extracting current `styles.css` tokens, then propose the restraint-based direction above. Decision points: (a) exact accent color, (b) Inter vs. Inter Tight vs. Geist, (c) the one editorial/moment that separates us from yesterday's-SEO-consultant visual defaults per Orainti analysis.
- **Phase 4 (copy + rebuild):** ready. Working H1 locked; subhead and section copy iterate from the voice guardrails in `conversion/positioning.md §6` against the IA in section 4 above.
- **Parallel — GEO Readiness Framework:** outline in [`../conversion/geo-readiness-framework-outline.md`](../conversion/geo-readiness-framework-outline.md). Awaits user review on 5 structural questions.

---

## 8. One observation that changed my thinking mid-synthesis

Reading Julian alongside Stripe clarified something: **the conventional consultant-site stack puts the bio up high and the proof down low, which is backward for enterprise buyers.** An enterprise VP doesn't need to be told who Aleksey is on the way in — the logos already communicate tier, and the outcome numbers already communicate ability. The bio becomes the closer, not the opener. That inversion alone is worth a 20%+ lift in section-read-depth at this tier. It also matches the "hero as filter" move — the visitor who matches the ICP reads the whole page and finds the bio at the end as confirmation; the visitor who doesn't match bounces before the bio and costs you nothing.
