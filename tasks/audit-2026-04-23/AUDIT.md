# Site audit — resonanceseo.com

**Date:** 2026-04-23
**Method:** Lighthouse (mobile + desktop, live URL) · Playwright screenshots at 375 / 768 / 1440 · source review of `index.html`, `styles.css`, `scripts.js` · network + console capture
**Artifacts:** `tasks/audit-2026-04-23/screenshots/`

---

## TL;DR

The site is already more developed than the earlier conversation implied — it has real positioning, a priced offer, real testimonials from real brands, structured data, analytics. What's holding it back is not "it's empty"; it's **three compounding problems**:

1. **Positioning is price-led, not value-led.** The hero sells "50% of agency cost." That anchors on price and undersells a consultant whose logos include Adidas, Samsung, Ethereum Foundation, J.Crew, HBS. Enterprise buyers don't pick a $700M-revenue-generating operator by comparing to agency discount math.
2. **Visual identity is loud where it should be quiet.** Hot-pink gradients, glow shadows, animated counters, and red CTAs everywhere make a premium consultant look like a discount SaaS landing page. The brands in the logo strip don't market themselves this way, and neither should their consultant.
3. **Technical hygiene is broken in ways that bleed trust.** A JS error throws on every page load. The `scripts.js` file contains fabricated social-proof notifications ("Someone just booked a call from California"). The GA conversion ID is literally the placeholder `G-XXXXXXXXXX/CONVERSION_ID`. The favicon is an emoji.

Lighthouse mobile Performance is **60**, Best Practices is **54** (desktop Performance **89**, Best Practices **54**) — both far below the 95+ gate in CLAUDE.md.

None of these are hard to fix. The positioning work is the only one that requires the user's input; the rest I can fix.

---

## 1 — Lighthouse (live site)

|              | Perf | A11y | Best Prac. | SEO |
|--------------|:----:|:----:|:----------:|:---:|
| **Mobile**   | **60** ❌ | 98 ✅ | **54** ❌ | 100 ✅ |
| **Desktop**  | 89 ⚠️ | 94 ⚠️ | **54** ❌ | 100 ✅ |

Target (from `CLAUDE.md`): ≥95 on every category on both form factors.

### Key metrics (mobile)
- LCP: **8.8s** (target < 2.5s) ❌
- FCP: **3.7s** (target < 1.8s) ❌
- Speed Index: **7.2s** ❌
- TTI: **8.9s** ❌
- CLS: 0 ✅
- TBT: 110ms ✅

### Key metrics (desktop)
- LCP: 1.9s ⚠️ (close to 2.5s threshold)
- FCP: 0.9s ✅
- CLS: 0 ✅
- TBT: 0ms ✅

### Top failing audits (mobile)
| Audit | Why it's failing |
|---|---|
| `errors-in-console` | `TypeError` at `scripts.js:294` — exit popup addEventListener on null element |
| `render-blocking-insight` | ~1000ms savings — Font Awesome CDN + Google Fonts blocking first paint |
| `image-delivery-insight` | ~617 KiB savings — PNG logos and portrait not optimized (use WebP/AVIF + responsive `srcset`) |
| `cache-insight` | ~668 KiB savings — third-party assets with short cache lifetimes |
| `unused-javascript` | 126 KiB — Font Awesome loads ~every glyph; we use ~10 |
| `unused-css-rules` | 15 KiB — dead rules in `styles.css` |
| `font-display-insight` | ~160ms — Inter not using `font-display: swap` for fallback (preload helps but not enough) |
| `deprecations` | 1 deprecated API in use |
| `third-party-cookies` | 2 third-party cookies (LinkedIn + Google) |
| `heading-order` | Non-sequential heading levels (e.g., h2 → h4 skipping h3) |
| `label-content-name-mismatch` | Visible text on controls differs from accessible name |
| `unsized-images` | Images without explicit `width`/`height` (invites CLS regressions when swapping assets) |

---

## 2 — Critical bugs and trust hazards (ship blockers)

### B1. JavaScript throws on every page load (CRITICAL)
**Where:** `scripts.js:294`
**What:** `exitPopupClose.addEventListener('click', ...)` throws because `#exitPopup`, `#exitEmail`, `#exitSubmit`, and `.exit-popup-close` do not exist in `index.html`.
**Impact:** Error logged on every visit. Scripts after the crash don't execute (fake social-proof code skipped — fortunately). Appears in any browser devtools inspection a sophisticated buyer does.
**Fix:** Guard the exit-popup and social-proof blocks with `if (exitPopup && exitPopupClose) { … }`, or (better) **delete both blocks entirely** (see B2 and B3).

### B2. Fabricated social-proof notifications in source (CRITICAL — reputational)
**Where:** `scripts.js:320-349`
**What:** Hardcoded fake pop-ups: "Someone in California just booked a call 2 minutes ago" rotating every 20s. The data is literally hardcoded in `socialProofData[]`.
**Impact:** Even though the crash at B1 prevents them from rendering (today), they're sitting in a public JS file an SEO pro's prospect can read in 5 seconds. For a consultant whose entire offer is *trust with enterprise brands*, this is a reputational blast radius.
**Fix:** Delete `showSocialProof`, `socialProofData`, and the interval calls.

### B3. Placeholder GA conversion ID (MAJOR)
**Where:** `scripts.js:11`
**What:** `'send_to': 'G-XXXXXXXXXX/CONVERSION_ID'` — literal placeholder.
**Impact:** CTA clicks aren't actually tracked as conversions. The analytics stack exists but isn't wired.
**Fix:** Create a real Google Ads conversion action (or GA4 conversion event) and replace the placeholder. If paid ads aren't running yet, just use GA4 custom events (no `send_to`) until they are.

### B4. Emoji favicon (MINOR — contradicts own brand rules)
**Where:** `index.html:53`
**What:** `<link rel="icon" ... <text y='.9em' font-size='90'>📈</text>`
**Impact:** Enterprise-grade sites use wordmark or monogram favicons. Emoji favicons read as bootstrapped.
**Fix:** Design a simple SVG wordmark/monogram favicon ("R" or a chart-line mark matching the logo).

### B5. "Hours available this month" progress bar (MAJOR — fabricated urgency)
**Where:** `index.html:322-330`
**What:** Hardcoded "64 of 160 hours remaining" with a progress bar fill at 40%. Always the same number.
**Impact:** A returning visitor sees the identical "availability" — breaks the illusion and signals manipulation. Pattern associated with low-trust funnels.
**Fix:** Either (a) remove it, (b) make it genuinely dynamic (manually updated in the HTML each time availability changes, with a "last updated" date), or (c) replace with an honest signal like "Booking calls for [Month]" or "2 discovery calls open this week."

### B6. Keywords meta tag still present (MINOR)
**Where:** `index.html:34`
**What:** `<meta name="keywords" ...>` — deprecated since 2009, ignored by Google, marginally signals over-optimization.
**Fix:** Delete it.

### B7. Aggregate rating with only 3 reviews and "Most Popular" badge (MAJOR — trust)
**Where:** `index.html` JSON-LD (`aggregateRating`: 5 / 3) and pricing tier badge.
**Impact:** Structured data says 5-star with 3 reviews. "Most Popular" on a tier with no sales data to back it up. Both are mild lies — Google's review policies explicitly flag this, and sophisticated visitors notice.
**Fix:** Either remove `aggregateRating` from JSON-LD until there are more verifiable reviews, or replace "Most Popular" with a neutral label ("Recommended" is still vague — prefer a real reason: "Best for mid-tier growth" or drop the badge).

---

## 3 — Positioning & copy audit

### P1. The headline competes on price (HIGH)
Current: **"Get Enterprise SEO Leadership at 50% of Agency Cost"**

The first 7 words establish premium positioning ("Enterprise SEO Leadership"). The last 5 destroy it. Enterprise buyers don't pick a consultant by benchmarking against their agency RFP — they pick the person they trust to unlock growth their agency can't. "50% of agency cost" tells the buyer:

- This person's primary value proposition is that they're cheaper (so the high price tag later feels inflated, not anchored)
- They compete with agencies (so they're agency-adjacent, not agency-alternative)
- They think the reader makes decisions on cost (so they don't understand enterprise buying)

Logos in the strip: Adidas, Samsung, Ethereum, Alchemy, J.Crew, HBS. None of these brands bought anything because it was "50% of agency cost."

**Options to test:**
- Outcome-first: "Senior SEO leadership, embedded with your team. $700M+ in organic revenue generated."
- Pattern-break: "Your SEO agency can't fix what your SEO agency caused."
- Authority-first: "The SEO operator that Adidas, J.Crew, and Ethereum brought in when their teams plateaued."
- Promise-first: "Stable organic growth in 90 days — or the engagement ends."

### P2. The ICP in the FAQ contradicts the logos (HIGH)
- FAQ: "My sweet spot is brands doing $1M–$10M/year."
- Logos: Adidas (~$25B), Samsung (~$250B), J.Crew (~$1.8B), HBS, KPN, Ethereum Foundation, Madewell.

Either the FAQ is wrong (he actually serves enterprise and used the $1M–$10M to feel inclusive), or the logos are outdated / historical (big-brand alumni cred, now serving a different tier). Pick one. Mixed positioning makes both feel thin.

**If he wants enterprise:** remove the $1M–$10M line. Say "Enterprise e-commerce and consumer brands ready to rebuild their SEO function."

**If he wants mid-market:** reframe the logos as "Past work includes:" or move them below the fold as trailing proof, not above-fold anchor.

### P3. Solo-brand vs. firm-brand is mixed
- Brand is "Resonance Consulting Group" and "Resonance SEO"
- Copy is "I'm Aleksey" / first-person singular
- Photo is of one person, testimonials address one person
- Pricing is hourly by him specifically

This is a solo practice styled as a firm. It's a common anti-pattern — reads as over-dressed. Either:
- Keep the firm name, switch copy to plural ("Our team" etc.) and add team members, OR (more honest)
- Drop the firm name to tagline and put "Aleksey Batrachenko · SEO Consultant" as the primary wordmark

The logos and site architecture suggest a solo operator. Honest framing beats the corporate-ish veneer.

### P4. "Free intro call" friction (MEDIUM)
The primary CTA everywhere is "Book a Free Intro Call." For enterprise — where a VP/CMO is the buyer — "free" signals small-business. Premium versions: "Schedule a strategy conversation," "Request an audit," "Book a working session." "Intro call" in particular is a low-commitment, low-credibility phrase for a $12,800/mo offer.

### P5. The chart hero image is a liability (MEDIUM)
The current hero image (`organic-traffic-growth-v4.png`) is a salmon-pink stylized line chart with no axes, no numbers, no client attribution. It's decorative, not evidence. At enterprise tier, generic charts hurt more than they help — they read as stock-decorative.

**Options to test:**
- Professional portrait of the consultant (the one currently in the About section, used at hero scale)
- Real-data screenshot from a named engagement (masked Search Console trend from Adidas/J.Crew, with the brand named)
- Logo mosaic at hero scale (moves social proof above fold)
- No image — text-only hero with a strong pull-quote from a named exec

### P6. The offer structure is transparent — preserve it (STRENGTH)
The 32/48/64 hrs tier structure with visible prices is a real differentiator vs. agencies and most consultants. Keep it. Reconsider only the "Most Popular" badge (B7).

### P7. The process section is strong but buried (MINOR)
"Vetting & Discovery / Integration & Planning / Implementation & Maintenance" is genuinely well-written and differentiated. The "not every engagement is the right fit" framing earns trust. But it's the 5th section down — a visitor has to scroll past problems before seeing the methodology. Consider moving it above or combining with the about.

---

## 4 — Design & UX audit

### D1. Visual tier mismatch
Current palette is built around `--accent: #FF3366` (hot pink), `--shadow-glow` (pink glow), gradient CTAs, animated counters, and glassmorphism header. This is a 2022-ish vibrant-gradient SaaS landing aesthetic. The client roster (Adidas, HBS, Samsung, Ethereum) implies a 2026 restrained, type-driven, editorial aesthetic (Linear, Stripe, Orainti, Basecamp territory).

**Direction to explore with `ui-ux-pro-max` skill + benchmark analysis:**
- Neutral near-monochrome base (off-white or ink-black) with a single restrained accent
- Editorial typography hierarchy (serif display optional — e.g., Söhne/Neue Haas paired with something with more character for H1)
- Less shadow, more whitespace
- Motion only on interaction, not load
- Pull-quotes, stat blocks, and charts as editorial elements, not ornament

This is exactly where benchmarking (Track B phase 2) should anchor before any redesign work.

### D2. CTA overload
Counted on the page:
- Sticky CTA bar (top)
- Nav CTA ("Book a Call")
- Hero CTA ("Book a Free Intro Call")
- About section CTA ("Book Your Free Intro Call")
- Consulting section CTA ("Schedule Introduction Call")
- Testimonials CTA ("Let's Talk About Your SEO")
- Case-studies CTA ("Schedule a Call")
- Floating mobile CTA (bottom right)
- Footer LinkedIn link (secondary)

That's **8 different "book a call" CTAs** in various wordings on one page. This is over-optimized for conversion and under-optimized for trust. Premium sites have 1–2 prominent CTAs, placed where commitment naturally rises. Remove the sticky bar, the floating button, and 3 of the in-body duplicates. Keep: hero, pricing section, one closer below FAQ.

### D3. Font Awesome is a visual and performance tax
- 126 KiB unused JS + ~50 KiB CSS
- Icon aesthetic dates the design (thick weights, cartoon-adjacent check-circles)
- Render-blocking external CDN request

**Replace with:** inline SVGs (Heroicons, Lucide, or Phosphor) — cuts load time, improves visual consistency, aligns with CLAUDE.md rule.

### D4. Mobile hero occupies full viewport (OK — but image is the LCP)
Hero renders correctly at 375px. However the `organic-traffic-growth-v4.png` is likely the LCP element (displayed at hero scale, 241 KB unoptimized), which explains the 8.8s mobile LCP. Either shrink it, convert to WebP/AVIF with `srcset`, or replace it (see P5).

### D5. Stats animation delay counters (MINOR)
The "15+ / 35+ / $700M+" counter animation (2-second count-up from 0) is a common pattern but slightly kitschy for this tier. Static numbers with visual weight read more confident. If keeping: ensure `prefers-reduced-motion` disables it (currently doesn't check).

### D6. Accordion FAQ stars and emoji unicode
- Testimonial star ratings use `★★★★★` as plain characters (not accessible, can't be styled consistently, don't render reliably across OS)
- Replace with inline SVG star icons

### D7. Dark mode
No support. Modern enterprise sites either support dark mode or lean into a deliberate light/dark chosen aesthetic. Decide deliberately in design-system phase; don't ignore.

---

## 5 — SEO audit

### Strengths (preserve)
- Single H1 on the page, descriptive, primary-keyword-relevant
- Canonical link present
- Thorough JSON-LD (`ProfessionalService`, `Person`, `OfferCatalog`, `FAQPage`-eligible)
- Sitemap + robots.txt present
- Semantic HTML (header, main, section, footer, nav)
- Open Graph + Twitter Card tags complete
- Mobile viewport meta correct

### Issues
- **S1.** `<meta name="keywords">` present — delete (MINOR, covered in B6)
- **S2.** `<title>` = "Fractional SEO Consulting for E-Commerce Brands | Resonance Consulting Group" — 77 chars, over the 60-char recommendation, will truncate in SERP
- **S3.** `<meta description>` starts with "Welcome to Resonance Consulting Group." — filler. Should lead with value/outcome
- **S4.** `aggregateRating` in JSON-LD: `{ratingValue: 5, reviewCount: 3}` without individual `review` entries — this is against Google's rich-result guidelines and can trigger manual action. Either add the individual reviews with author/date, or remove `aggregateRating` entirely (covered in B7)
- **S5.** FAQ content is in `<details>` elements but no `FAQPage` JSON-LD — losing a rich-result opportunity. The existing JSON-LD has `hasOfferCatalog` but not `FAQPage`. Easy win.
- **S6.** Non-sequential heading order flagged by Lighthouse — `<h2>` section headings followed by `<h4>` in about-callout blocks (skipping h3). Fix by using `<h3>` inside the callouts.
- **S7.** `Organization` JSON-LD logo is the emoji SVG data-URI — this is a bad logo value for Google. Replace with an actual hosted PNG/SVG of the wordmark.

---

## 6 — Accessibility (mobile 98, desktop 94 — close, can hit 100)

### What's working
- Skip-to-content link present
- Focus styles defined globally (`a:focus-visible` etc.)
- ARIA labels on icon-only buttons (sticky CTA, nav)
- Semantic HTML throughout
- Alt text on every image

### Issues
- **A1.** Heading order violation (S6 — same issue)
- **A2.** `label-content-name-mismatch` — visible button text differs from `aria-label` in at least one place (likely the `☰` menu button where visible is "☰" and aria-label is "Toggle navigation menu"). Fix: replace `☰` with a proper SVG hamburger icon with `aria-hidden="true"` and visible accessible text or `aria-label` match.
- **A3.** Star rating as text (`★★★★★`) has no accessible value — screen readers read it as "black star black star…". Wrap in a labeled element: `<span aria-label="5 out of 5 stars">★★★★★</span>` or use SVG with role/label.
- **A4.** The `alert()` in the exit-popup submit handler is an accessibility anti-pattern (blocking, untranslatable). Replace with inline state UI (but better: remove the whole feature since it's broken).
- **A5.** Animated counters have no `prefers-reduced-motion` guard.

---

## 7 — Strengths to preserve

These are working and shouldn't be touched without care:
- Real client logos that actually belong to real engagements
- Three testimonials with named titles (SVP Digital adidas, VP Marketing J.Crew, Head of Search Alchemy)
- Three case studies with named, specific numbers (240K daily clicks, +95%, +315%) and a Challenge/Solution/Result structure that actually makes sense
- Transparent pricing tier structure
- 3-month minimum engagement — signals seriousness
- The Process section's "Not every engagement is the right fit" framing
- The About callouts (Problem/Solution) are well-written
- LinkedIn link in footer (low-friction social proof)
- Structured data scaffolding (keep but fix the logo + aggregateRating)
- Clean semantic HTML base

---

## 8 — Prioritized fix list

### P0 — Before anything else (ship blockers, 1–2 hours each)
1. **B1** Fix JS crash at `scripts.js:294` (guard or delete exit popup code)
2. **B2** Delete fake social-proof notifications from `scripts.js`
3. **B5** Fix or remove "Hours Available This Month" progress bar
4. **B7/S4** Remove `aggregateRating` until verifiable; remove "Most Popular" badge or back it with a reason
5. **B3** Wire real GA4/Ads conversion IDs, or remove the placeholder
6. **B6** Delete keywords meta
7. **S6/A1** Fix heading order (h2 → h3 → h4, no skipping)

### P1 — Before redesign (high-impact quick wins)
8. **D3** Replace Font Awesome with inline SVG icons (affects performance, visuals, and bundle)
9. **S2** Shorten `<title>` to ≤60 chars
10. **S3** Rewrite meta description (remove "Welcome to…" filler, lead with outcome)
11. **S5** Add FAQ JSON-LD schema (rich-result opportunity)
12. **S7** Replace emoji-SVG logo in JSON-LD with a proper hosted logo file
13. **B4** Design a real SVG favicon
14. Image optimization: convert logos + portrait + chart to WebP with `srcset`; add explicit `width`/`height` attributes
15. **A2/A3** Fix menu-button aria mismatch and star-rating accessibility
16. **A5** Add `prefers-reduced-motion` guards to scroll animations and counter

### P2 — The real redesign work (Track B phases 2–4)
17. Positioning decision (P1/P2/P3) — **requires user input**; blocks hero copy
18. Benchmark analysis — 8–12 sites per `benchmarks/README.md` candidate list
19. Design system reset (D1) — extract current tokens, decide new direction, codify in `design-system/MASTER.md`
20. Hero redesign based on positioning + benchmarks (P5 + new image strategy)
21. CTA consolidation (D2) — reduce 8 CTAs to 2–3 deliberate placements
22. Section reflow (P7) — consider Process higher in page order
23. Dark mode decision (D7)

### P3 — Post-launch optimization
24. A/B test framework setup + hypotheses in `conversion/ab-hypotheses.md`
25. Lead-magnet alternative CTA (for mid-funnel capture, not just call booking)
26. Blog / resource library decision (for ongoing SEO + authority building)
27. Proper LinkedIn Insight + GA event tracking on form + scroll milestones

---

## 9 — Recommended next steps (decision points for the user)

Three decisions unblock everything downstream. I'll wait for your call on each before making any changes to the live site.

**Decision 1: Positioning tier.** Enterprise (the logos) or mid-market ($1M–$10M brands the FAQ names)? I recommend **enterprise** — it matches the proof and commands higher fees — but tell me if there's a business reason for the mid-market framing.

**Decision 2: Brand structure.** Solo-brand (Aleksey Batrachenko) or firm-brand (Resonance Consulting Group)? I recommend **solo-brand with Resonance as tagline** — it's honest and a solo consultant at this tier is a positive signal to enterprise buyers (no agency markup, direct access).

**Decision 3: Scope of this pass.** Three options:
- (a) **Stabilize** — fix P0 items only, ship fixes this week. ~4–6 hours.
- (b) **Stabilize + P1** — fix P0 and P1 together, ship the performance + SEO + trust wins. ~1.5 days.
- (c) **Full redesign** — fix P0 first (to stop the bleeding), then begin benchmark + positioning + design-system work for a rebuild. Weeks, not hours.

I'd sequence it as: do (a) today (non-negotiable — the site is leaking trust), then run positioning + benchmarks, then execute (c). Let me know your appetite and I'll start.
