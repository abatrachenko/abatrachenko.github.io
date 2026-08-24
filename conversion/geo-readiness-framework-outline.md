# GEO Readiness Framework — outline draft

**Status:** draft for user review. Edit freely; when the outline is approved, we write the full content + design the deliverable format.

**Target reader:** VP / Director of Marketing or E-commerce at an enterprise e-commerce brand. They've heard about GEO, their CEO or board has asked them about it, and they're not sure where their brand stands. They're analytical, short on time, and immune to listicle-tease content.

**What the framework does:** gives them a structured, self-administered assessment that produces a concrete readiness score and a clear sense of where to start. Reading the framework should make them think *"I need to talk to the person who built this."* — without the framework ever selling anything.

**Format decision (pending):** PDF download vs. interactive web tool vs. both. My recommendation: **start with PDF** (faster to produce, easier to gate via email, lower production cost). Interactive version comes later if the demand signals are strong.

**Voice:** same as site positioning brief — technical-plainspoken + research-led. No hooks, no teases, no LinkedIn conventions. Reads like a peer walking them through an assessment.

**Length target:** 12–15 pages. Long enough to earn credibility, short enough that a VP reads it in one sitting.

---

## Structure (5 categories × 3 checks = 15 points total)

### Category 1 — Visibility audit: Are we cited?

The starting point. If you don't know whether AI engines cite your brand, you don't know whether any of the rest matters.

**1.1 — Have you tested whether ChatGPT, Perplexity, Google AI Overviews, and Claude cite your brand for your top 10 revenue-driving category queries?**
Why it matters: The AI-search layer is where the next decade of discovery happens. If your brand isn't cited in answers to the queries that drive your P&L, you're losing share of voice even if your SERP rankings look fine.

**1.2 — Do you monitor share-of-voice against competitors in AI answers over time?**
Why it matters: SERP share-of-voice is widely tracked; AI share-of-voice barely is. Whoever starts tracking it first has a two-year head start on the category.

**1.3 — Do you have a baseline inventory — which AI engines surface your brand, which surface competitors, and for which queries?**
Why it matters: "GEO strategy" without a baseline is just opinion. Baseline first.

### Category 2 — Content structure: Is our content answer-ready?

LLMs extract and rephrase. Content written to convert humans directly may not be the content that gets pulled into an AI answer.

**2.1 — Are your core category and product pages structured so that an LLM can extract a clear answer to the primary question the page targets?**
Why it matters: Content written for humans uses narrative arcs; content that gets cited in AI answers leads with the answer and supports it with evidence. Both patterns can coexist; few brands get this intentional.

**2.2 — Do you publish authoritative, operator-level content on the topics your buyer asks — not marketing fluff?**
Why it matters: LLMs favor substantive content that reads as expertise. Thin content (the "SEO filler" model) is getting aggressively deprioritized in AI answer engines, faster than it is in traditional SERPs.

**2.3 — Are your statistics, outcomes, and expert claims explicitly attributed on-page — not buried in footnotes or PDFs?**
Why it matters: LLMs cite what they can attribute. Inline citation signals push your content from "ignored" to "recommended."

### Category 3 — Entity / authority signals: Do LLMs know who we are?

LLMs don't read your site in isolation. They understand you through a web of signals that position you as an entity. Weak entity signals mean you're semantically invisible.

**3.1 — Do you have a complete Knowledge Graph entity presence — Wikipedia/Wikidata, consistent `schema.org` Organization / Person / Product / Service data, and external corroborating citations?**
Why it matters: LLMs treat structured entity data as a trust anchor. Brands with clean entity graphs are recommended; brands without get generic answers or competitor citations.

**3.2 — Are your founders, leaders, or subject-matter experts cited externally — press, podcasts, conference talks, industry publications — in contexts LLMs ingest?**
Why it matters: AI engines weight author authority. A brand whose leadership shows up in trusted external contexts gets cited in answers involving that category.

**3.3 — Does your brand have a distinct, searchable category association? ("Stripe" → developer payments; "Klaviyo" → e-commerce email)**
Why it matters: Without a strong category anchor, LLMs don't know what to do with your brand. With one, they recommend you as the go-to answer in that category.

### Category 4 — Technical GEO: Can LLMs reliably access us?

The plumbing. Most sites are still set up for the 2015 crawler model. AI crawlers have different requirements.

**4.1 — Is your content crawlable by both traditional search crawlers AND the LLM training/inference crawlers — GPTBot, CCBot, Google-Extended, Claude-Web, PerplexityBot?**
Why it matters: Many sites inadvertently block the crawlers that feed AI answer engines. The default robots.txt from 2022 doesn't know these crawlers exist.

**4.2 — Is your structured data current, validated, and covering the entity types that AI engines consume (Organization, Person, Service, Product, FAQPage, Article)?**
Why it matters: Structured data that was fine for Google's 2020 rich results may be insufficient for 2026 AI answer engines. They consume a wider surface.

**4.3 — Have you published `llms.txt` or equivalent signals indicating which parts of your site you want AI systems to reference?**
Why it matters: `llms.txt` is the emerging standard for intentional AI content curation. Being early here signals sophistication and gives you control over how your brand is represented.

### Category 5 — Measurement: Can we prove or track progress?

If you can't measure it, you can't improve it, and you can't justify the investment internally.

**5.1 — Do you have any measurable signal for AI-sourced traffic — referrer-based attribution for `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, etc.?**
Why it matters: Traditional analytics undercount this traffic because LLM-originating clicks often don't pass referrers. Instrumenting specifically for AI-sourced traffic is a 2026 table-stakes move.

**5.2 — Do you track share-of-voice trends in AI answer engines month-over-month?**
Why it matters: AI SOV shifts meaningfully quarter-over-quarter as models update. Trend data is what enables board-level reporting.

**5.3 — Do you have a named owner internally for GEO strategy, or is it "everyone's job" (which means nobody's job)?**
Why it matters: The brands that win in AI search have a named owner with a named budget. The brands that lose have GEO in a committee of ten people.

---

## Scoring

Each of the 15 items scores 0–3:
- **0** — No, we don't do this
- **1** — Partial / ad-hoc / unmeasured
- **2** — Yes, systematic
- **3** — Yes, and it's differentiated vs. competitors

**Total: 0–45.** Mapped to four readiness tiers:

| Score | Tier | What it means |
|---|---|---|
| 0–11 | **Invisible** | You don't exist in AI search. Any competitor that shows up will grow market share at your expense. |
| 12–22 | **Emerging** | You show up sporadically. The opportunity is wide open; focused work moves you up a tier in 6 months. |
| 23–33 | **Present** | You're competitive. The next frontier is consistency and defensibility. |
| 34–45 | **Compound-ready** | You're positioned to grow share as AI search scales. Now it's about maintaining the lead. |

---

## Closing page — what happens next

A short "what to do next" page without a sales pitch. Three paths:

- **If you scored 0–11** — start with the Visibility Audit (Category 1). You can't fix what you can't see. *Resource link.*
- **If you scored 12–22** — your highest-leverage next move is usually Content Structure (Category 2) and Entity Signals (Category 3). Both compound. *Resource link.*
- **If you scored 23–33** — you're past the gate. Focus on measurement (Category 5) — proving the work lets you justify deeper investment. *Resource link.*
- **If you scored 34–45** — you're a leading indicator for the category. The real question is what's your moat, and how fast competitors close the gap. *Resource link.*

Small line at the bottom: *"If you want a second set of eyes on where to invest, I work with enterprise e-commerce brands on exactly this. [book a strategy call]."* Low-key. One line. Not a pitch.

---

## Open production questions

- [ ] Format: PDF only (recommended), interactive web tool, or both?
- [ ] Branded design or minimal/report-style? (Lean minimal — it's a working document, not marketing collateral.)
- [ ] Do we include comparative examples — "here's what a Compound-ready brand looks like in practice"? (Recommend: yes, 1 short case per tier.)
- [ ] How is the score calculated on delivery — self-scored by the reader (simplest) or via an interactive form (more engagement, more production)?
- [ ] What's the download mechanism — email → PDF link, or inline on the site after email capture?
- [ ] What's in the email follow-up sequence? (Suggested: 4-email sequence — welcome + framework / deeper dive on one category / case study / soft invite to book call.)

---

## Production plan

Assuming the outline is approved as-is, rough effort:

- **Week 1:** Write full content for all 15 items (your expertise, my drafting assistance) — ~8 hrs
- **Week 1:** Design layout (minimal PDF, 12–15 pages) — ~3 hrs
- **Week 2:** Set up email capture + delivery + nurture sequence — ~3 hrs
- **Week 2:** Review, test, publish → swap CTA on the live site — ~2 hrs

Total: ~16 hours of work across 2 weeks, most of it yours (content) with me supporting drafting, design, and integration.

---

## Review request

Before I start writing the full content, confirm:

1. Do the 5 categories and 15 checks land as the right structure?
2. Any categories missing (e.g., competitive positioning in AI answers, brand voice in AI-generated content)?
3. Any categories to cut or reweight?
4. Does the "Invisible / Emerging / Present / Compound-ready" tier language work, or do you have preferred framing?
5. PDF-only or include interactive web version in v1?
