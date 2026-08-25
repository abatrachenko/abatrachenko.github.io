# GEO Readiness Framework — full content draft v1

**Status:** DRAFT for owner edit (2026-08-25). Built from the approved outline + cited research only. `[OWNER: …]` markers flag where practitioner examples or judgment calls belong — nothing invented in your name. After your edit pass: minimal PDF layout (12–15 pp), then Buttondown delivery wiring.

**Working title:** *The GEO Readiness Framework — a 15-point self-assessment for enterprise e-commerce brands*
**Byline:** Aleksey Batrachenko · Resonance SEO
**Voice check:** technical-plainspoken + research-led; no hooks, no teases; qualifiers where honesty needs them.

---

## Opening page

AI search is already part of how your buyers discover brands. ChatGPT, Perplexity, Gemini, and Google's AI results answer commercial questions directly — and they name brands when they do. The referral volume is still small, under 2% of search traffic for most B2B sites, but it is growing fast and converts disproportionately well. More important than the traffic: the answers themselves are becoming the shortlist.

Most enterprise brands cannot say, with evidence, where they stand in that layer. This framework is a structured way to find out. Fifteen checks across five categories, each scored 0–3. The output is a number, a tier, and a defensible sense of where to start — something you can put in front of a board without hedging.

Score it honestly. A low score is not a verdict; it's a baseline. Every brand that wins this layer started by measuring it.

---

## How scoring works

Each of the 15 items scores 0–3:

- **0 — No.** We don't do this.
- **1 — Partial.** Ad-hoc, unowned, or unmeasured.
- **2 — Systematic.** Yes, with a process and an owner.
- **3 — Differentiated.** Yes, and demonstrably ahead of competitors.

Total: 0–45, mapped to four tiers at the end.

---

## Category 1 — Visibility audit: are we cited?

If you don't know whether AI engines cite your brand, the rest of this assessment is theory. Baseline first.

### 1.1 Have you tested whether ChatGPT, Perplexity, Google's AI results, and Claude cite your brand for your top revenue-driving category queries?

The AI-search layer is where a growing share of discovery happens. If your brand isn't in the answers to the queries that drive your P&L, you are losing share of voice even while your classic rankings look fine. The test costs an afternoon: take your top ten category queries, run them through each engine, and record who gets named.

*Scoring guide:* 0 = never tested · 1 = tested once, informally · 2 = tested on a defined query set, results recorded · 3 = tested across engines on a maintained query set, competitors included.

[OWNER: one sentence on what you typically see the first time an enterprise team runs this test.]

### 1.2 Do you monitor share-of-voice against competitors in AI answers over time?

SERP share-of-voice is widely tracked; AI share-of-voice barely is. Answers shift meaningfully as models update, which means a one-time snapshot decays fast. The brands that start tracking now will have trend data their competitors can't reconstruct later.

*Scoring guide:* 0 = no tracking · 1 = occasional spot checks · 2 = monthly tracked set · 3 = tracked with competitor benchmarks and reported internally.

### 1.3 Do you have a baseline inventory — which engines surface your brand, which surface competitors, for which queries?

"GEO strategy" without a baseline is opinion. The inventory is the artifact that turns this from a discussion into a program: engine × query × who-gets-cited, in one table.

*Scoring guide:* 0 = none · 1 = partial notes · 2 = complete inventory, current within a quarter · 3 = inventory maintained and driving prioritization.

---

## Category 2 — Content structure: is our content answer-ready?

LLMs extract and rephrase. Content written only to convert humans is often not the content that gets pulled into an answer. Both jobs can coexist on the same page — few brands make that intentional.

### 2.1 Are your core category and product pages structured so an LLM can extract a clear answer to the primary question each page targets?

Content written for humans uses narrative arcs; content that gets cited leads with the answer and supports it with evidence. Retrieval also works at the passage level — a clear, self-contained answer block is what gets lifted.

*Scoring guide:* 0 = pages are pure merchandising · 1 = some pages answer-first · 2 = template-level answer structure on core pages · 3 = answer structure plus supporting evidence, maintained editorially.

### 2.2 Do you publish authoritative, operator-level content on the topics your buyers ask — not marketing filler?

LLMs favor substantive content that reads as expertise. Thin content is being deprioritized in AI answer engines faster than it ever was in traditional results. The bar is: would a practitioner learn something from this page?

*Scoring guide:* 0 = product pages only · 1 = a blog that mostly serves keywords · 2 = genuine expertise content in the mix · 3 = a body of work competitors cite.

[OWNER: optionally, one concrete pattern from an enterprise content program you've run — what "operator-level" looked like in practice.]

### 2.3 Are your statistics, outcomes, and expert claims explicitly attributed on-page — not buried in footnotes or PDFs?

LLMs cite what they can attribute. A number with a named source in the visible text is citable; the same number inside a gated PDF is invisible. Inline attribution moves content from "ignored" to "referenced."

*Scoring guide:* 0 = claims unattributed · 1 = inconsistent · 2 = attribution as editorial standard · 3 = attribution plus original data competitors must cite.

---

## Category 3 — Entity and authority signals: do LLMs know who we are?

LLMs don't read your site in isolation. They understand you through corroboration — what the rest of the web, consistently, says you are. Weak entity signals mean semantic invisibility: the model has no confident answer for "who is this brand," so it names someone else.

### 3.1 Do you have a consistent entity presence — schema.org Organization / Person / Product / Service data with stable identifiers, and external corroborating citations?

Structured entity data is a trust anchor, with one caveat the vendors won't give you: schema alone shows no confirmed citation lift. It works as part of a corroborated identity — the same names, the same claims, on your site and in independent sources. Consistency is the mechanism; markup is the container. Wikipedia/Wikidata presence helps only where it's independently earned — forcing it backfires.

*Scoring guide:* 0 = no structured data · 1 = basic markup, inconsistent identity · 2 = clean entity graph, consistent cross-web identity · 3 = that, plus third-party corroboration at depth.

### 3.2 Are your leaders and subject-matter experts cited externally — press, podcasts, conferences, industry publications — in contexts LLMs ingest?

For commercial recommendation queries, external editorial mentions outweigh anything a brand says about itself. Roundups, expert quotes, podcast transcripts, and community discussion are what the models actually draw on when they name names.

*Scoring guide:* 0 = no external footprint · 1 = occasional mentions · 2 = a deliberate placement program · 3 = leadership regularly cited in the sources that dominate your category's AI answers.

### 3.3 Does your brand have a distinct, searchable category association?

"Stripe" means developer payments; "Klaviyo" means e-commerce email. Without a category anchor, models don't know when to recommend you. With one, you become the default completion for the category question.

*Scoring guide:* 0 = no clear association · 1 = association exists but contested/diffuse · 2 = clear anchor in your niche · 3 = the model-default answer for the category.

---

## Category 4 — Technical GEO: can AI systems reliably access us?

The plumbing. Most enterprise sites are still configured for the 2015 crawler model.

### 4.1 Is your content crawlable by the AI training and inference crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot — not just classic search bots?

Many sites block these crawlers without ever having decided to — a 2022-era robots.txt, a bot-management default, a CDN rule. Blocking them is a legitimate strategic choice; doing it by accident is not. Audit what your robots.txt and WAF actually allow, then make it a decision.

*Scoring guide:* 0 = never audited · 1 = audited once · 2 = deliberate allow/block policy, monitored · 3 = policy plus log-level visibility into AI-crawler behavior.

### 4.2 Is your structured data current, validated, and covering the entity types AI engines consume — Organization, Person, Service, Product, FAQPage, Article?

Markup that satisfied 2020 rich-result requirements may be stale, invalid, or thin against what answer engines now parse. Validation is cheap; silent decay is the norm.

*Scoring guide:* 0 = none/broken · 1 = partial, unvalidated · 2 = validated, current, core types covered · 3 = full coverage wired into an entity strategy (see 3.1).

### 4.3 Is each key topic retrievable as its own focused URL — one intent per page — rather than buried in long multi-topic pages?

AI retrieval works at the passage level. Separate, focused pages create more independently retrievable units, cleaner intent matches, and more external-link targets. A 6,000-word everything-page may rank in classic search and still lose every AI citation to a competitor's five focused pages.

*Scoring guide:* 0 = key topics share pages · 1 = mixed · 2 = one-intent-per-URL for core topics · 3 = architecture designed around retrievable units and internally linked accordingly.

---

## Category 5 — Measurement: can we prove progress?

If you can't measure it, you can't improve it — and you can't defend the budget internally.

### 5.1 Do you have referrer-based attribution for AI-sourced traffic — chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com?

Standard analytics undercounts this channel because many AI-originating clicks pass no referrer. Instrumenting what *can* be measured is table stakes: a referrer-match event costs an hour to ship and gives you the floor of the trend. Expect small absolute numbers and disproportionate quality.

*Scoring guide:* 0 = not measured · 1 = visible in default reports only · 2 = dedicated tracking · 3 = tracking plus conversion-quality comparison against other channels.

### 5.2 Do you track AI share-of-voice trends month over month?

Single measurements answer "where are we"; trends answer "is it working." Models update quarterly or faster — trend data is what makes the work reportable at board level.

*Scoring guide:* 0 = no · 1 = irregular · 2 = monthly cadence · 3 = monthly with competitor deltas tied to actions taken.

### 5.3 Is there a named owner for GEO internally — or is it "everyone's job"?

Everyone's job is nobody's job. The brands winning this layer have a named owner with a named budget; the brands losing it have a committee. The owner doesn't need a large team — they need the mandate to change content, technical, and PR priorities.

*Scoring guide:* 0 = nobody · 1 = informal interest · 2 = named owner · 3 = named owner, budget, and exec reporting line.

---

## Your score

| Score | Tier | What it means |
|---|---|---|
| 0–11 | **Invisible** | You don't exist in AI search. Any competitor that shows up will take share at your expense. |
| 12–22 | **Emerging** | You appear sporadically. The opportunity is wide open; focused work moves you a tier in about six months. |
| 23–33 | **Present** | You're competitive. The frontier is consistency and defensibility. |
| 34–45 | **Compound-ready** | You're positioned to grow share as AI search scales. The question becomes the moat. |

## What to do next

- **0–11:** Start with the visibility audit (Category 1). You can't fix what you can't see, and the baseline costs an afternoon.
- **12–22:** The highest-leverage moves are usually content structure (Category 2) and entity signals (Category 3). Both compound.
- **23–33:** You're past the gate. Invest in measurement (Category 5) — proving the work funds the next phase of it.
- **34–45:** You're a leading indicator for your category. The real questions are the moat, and how fast the gap closes behind you.

If you want a second set of eyes on where to invest, I work with enterprise e-commerce brands on exactly this. [Book a strategy call →]

---

## Production notes (not in the PDF)

- Tier examples: outline approved "1 short case per tier" — must use anonymized patterns or publicly documented brands only. [OWNER: decide whether to include in v1 or defer to v1.1; drafting them requires your call on which patterns are safely tellable.]
- Statistics used above (sub-2% referral share, disproportionate conversion, listicle dominance in citations) trace to the researched sources in `tasks/designs/2026-08-24-strategic-plan.md` §3 and `conversion/corroboration-targets.md` — final PDF should carry a short sources line to practice check 2.3 on ourselves.
- Length as drafted ≈ 12–13 PDF pages at the minimal layout. Within target.
