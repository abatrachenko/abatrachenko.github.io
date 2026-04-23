# stripe.com

**URL:** https://stripe.com
**Captured:** 2026-04-23
**Category:** SaaS (marketing-site craft reference — not a direct comp)

## Why this site

Stripe's homepage is the most-studied marketing page in tech because it has to sell a genuinely complex product to two completely different buyers on the same scroll — a startup founder copy-pasting an API snippet and an enterprise treasury exec signing an eight-figure contract. The craft lessons are structural: how to open with a simple, confident sentence about *what the thing is*, then progressively layer proof (logos → volume stats → case studies → testimonials → product detail) without the page ever feeling like a brochure. We're not selling infrastructure, but we are selling a technical service to a senior buyer who needs to verify competence in under thirty seconds. Stripe's proof sequencing and typographic restraint translate directly. Their animation and illustration budget does not.

## Hero
- **Headline approach:** *direct category-name + outcome*. Current wording: **"Financial infrastructure to grow your revenue."** Names the category in four words, attaches a single promise, no verbs wasted. No adjectives on the noun.
- **Subhead strategy:** *scope + scale*. **"Accept payments, offer financial services, and implement custom revenue models — from your first transaction to your billionth."** Three concrete verbs, then a scale sweep that simultaneously signals startup-friendly and enterprise-credible. A single sentence does the entire TAM.
- **CTA:** Primary **"Start now"** (self-serve), secondary **"Contact sales"** (enterprise). Both visible in the hero. Enterprise path is never hidden behind a chat widget — it's co-equal with the self-serve path, which signals both are real businesses.
- **Supporting visual:** Abstract gradient motion (their signature indigo-to-violet wave), not a product screenshot. The hero does not try to show what Stripe *looks like* — only what it *is for*. Confident products show less, not more.

## Proof
- **Format:** Full stack — logos, numbers, named case studies, product-leader testimonials, technical scale stats.
- **Placement:** Logos immediately under the hero. Then a numbers strip ("$1.9T payments volume," "99.999% uptime," "135+ currencies," "200M+ subscriptions"). Then named enterprise case studies (Hertz, URBN, Instacart, Le Monde) with single-metric lifts. Then startup stories. Then exec quotes. Then technical scale ("500M API requests/day").
- **Why it's credible:** The sequencing is the argument — each layer answers the objection raised by the previous one. Stats are formatted as standalone blocks with a large number on top and a short label below — no charts, no decoration. Numbers are the design.

## Offer structure
- **Packaging:** Product cards organized by job-to-be-done (Accept payments, Enable billing, Monetize, Issue cards, Embed finance), not by SKU. A buyer navigates by intent, not nomenclature.
- **Pricing visibility:** Transparent per-transaction pricing linked in the top nav — not on the homepage. Enterprise pricing is "contact sales." Split pricing model is surfaced honestly rather than hidden behind a universal "talk to us."

## FAQ / objections

Stripe's homepage itself carries almost no FAQ-style content. Objection handling is moved into the proof sequence — the testimonial block is the FAQ substitute. *"Will this scale for us?"* is answered by the $1.9T number; *"is this safe?"* by uptime and fraud stats; *"does it work for my category?"* by the vertical case-study grid. Pattern worth noting: when the proof stack is strong, an explicit FAQ becomes optional.

## Design system observations
- **Type:** Sans-serif (proprietary *Sohne*, similar feel to Inter). Large hero, medium section headings, generous line-height. Monospace near numbers and code — a signal device that says "this is data, not marketing copy." The mono-numerics vs. sans-body contrast is doing real persuasion work.
- **Color:** White page, near-black text, a single brand gradient (indigo → violet → coral) reserved for the hero motion and occasional accents. No secondary palette, no section-alternating backgrounds, no colored cards for variety's sake. Restraint makes the gradient feel premium when it appears.
- **Motion:** Hero wave on load. Logo row rotates slowly. Cards lift on hover. No scroll-jacking, no parallax, no animated counters. Motion is present but never performative.
- **Density:** Medium-to-high. Fifteen-plus sections but each breathes — generous vertical padding, single-column attention at every moment. Dense in aggregate, never cluttered in any viewport.

## What we'd steal
- **Progressive proof stack as the primary persuasion structure.** Our equivalent is already positioned: Adidas/Samsung/J.Crew/Madewell logos → `$700M+ / +240K / +95% / +315%` stats block → three named case studies → one or two client quotes → credentials. Steal the *order* and the *stripped formatting* (big number, small label, no chart furniture).
- **Typographic restraint as the authority signal.** One family, two weights, mono for numbers. Stripe's page looks expensive because it refuses to decorate. For a senior consultant charging $6.4K–$12.8K/month, the page has to look like someone who knows what matters.
- **Confident hero headline: category + outcome, no adjectives.** Our locked direction — *Senior SEO + AI search leadership for enterprise e-commerce — embedded directly in your team* — shares Stripe's DNA: name what it is, name who it's for, don't sell. Tighten toward Stripe's economy where we can.
- **Enterprise and self-serve CTAs as co-equals.** Stripe's "Start now" and "Contact sales" sit side by side, modeling our newsletter / strategy-call pattern. No aggressive visual hierarchy between them — the buyer self-selects. Steal the rhythm: CTA pair in hero, breathing room, CTA pair again after proof, footer.
- **Single-direction scroll, one thought per section.** Stripe never asks you to read two things in the same viewport. Prevents the "everything-at-once" wall that kills enterprise-buyer scanning.

## What we'd leave
- **The motion and illustration budget.** Hero gradient waves, per-section custom illustrations, animated product cards, interactive API demos — all the output of a design org with dozens of people. At solo-consultant scale every attempt reads as imitation, and every frame that doesn't land undermines the craft signal. Ship static, ship restrained, ship fast. Replace Stripe-grade motion with one deliberate element (the manually-updated hours-available scarcity bar already in positioning) and stop. A consultant site that loads in under a second with zero animation will outperform a half-built Stripe impression every time.
