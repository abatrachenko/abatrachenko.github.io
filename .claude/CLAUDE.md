# resonanceseo.com

SEO consultancy marketing site. Static HTML/CSS/JS on GitHub Pages (auto-deploys from `main`). Domain: resonanceseo.com (via CNAME).

## Precedence

This CLAUDE.md is authoritative for work in this repo. **Ignore any parent CLAUDE.md files** — in particular `../.claude/CLAUDE.md` (the CopyEngine Python pipeline's instructions). That project's rules (pytest, ruff, pipeline architecture, Python type hints) do not apply here. This is a static marketing site.

## Mission

Make this site beautiful, modern, and high-converting — worthy of the enterprise brands in the client logo strip (Adidas, Ethereum, Samsung, HBS, J.Crew, Madewell, KPN, Alchemy). Every pixel, every sentence, every interaction earns its place by contributing to conversion or credibility.

**Thesis:** Design and copy are benchmark-driven, not invented. Pattern-match against best-in-class SaaS/consultancy/agency sites, then adapt to enterprise-SEO positioning.

## ICP, offer, positioning

Living brief lives at `conversion/positioning.md`. Load it for any content or design decision that touches messaging, hero, CTAs, proof, or offer structure. If it's empty or stale, pause and ask before proceeding — don't invent positioning.

## Tech stack

- HTML5, CSS3, vanilla JS — no framework, no bundler, no build step
- GitHub Pages deploys from `main` → resonanceseo.com (CNAME)
- Jekyll is enabled via `_config.yml` but kept minimal — don't expand it
- Workspace tooling available: Playwright MCP (browser automation, screenshots, console capture), Perplexity MCP (research), `ui-ux-pro-max` skill (design system generation)

## Commands

| Command | Purpose |
|---|---|
| `python -m http.server 8000` | Local dev server (open http://localhost:8000) |
| `npx -y lighthouse http://localhost:8000 --only-categories=performance,accessibility,seo,best-practices --form-factor=mobile --quiet --chrome-flags="--headless"` | Lighthouse mobile audit |
| `npx -y lighthouse http://localhost:8000 --only-categories=performance,accessibility,seo,best-practices --preset=desktop --quiet --chrome-flags="--headless"` | Lighthouse desktop audit |
| `git add <files> && git commit -m "<msg>" && git push origin main` | Deploy (GitHub Pages auto-publishes) |

## Repo layout

- `index.html` — the one-page site
- `styles.css` — all styles (single file; flag if it grows past ~4000 lines)
- `scripts.js` — minimal interactivity
- `privacy.html`, `terms.html` — legal
- `sitemap.xml`, `robots.txt`, `CNAME` — SEO and deploy
- `tasks/` — session state (todo, lessons, decisions, progress, designs)
- `benchmarks/` — competitor/inspiration reference library
- `design-system/` — tokens and component inventory (`MASTER.md` = source of truth)
- `conversion/` — positioning, ICP, offer, A/B hypotheses
- `test-page/` — scratch; do not link from the live site

## Design principles (non-negotiable)

- **Mobile-first.** Design at 375px first, scale up.
- **Performance is a feature.** LCP < 2.5s, CLS < 0.1, INP < 200ms on mid-tier mobile.
- **No emoji icons.** Inline SVG only (Heroicons/Lucide-style) or authentic brand logos.
- **Typography earns attention.** Confident font pairing, 1.5–1.7 body line-height, 65–75ch line length.
- **Motion with purpose.** Honor `prefers-reduced-motion`. Micro-interactions 150–300ms. Animate only `transform` and `opacity`.
- **Contrast ≥ 4.5:1** body text, ≥ 3:1 large text. Focus states always visible.
- **Touch targets ≥ 44×44px.**
- **No invented claims.** Every testimonial, logo, number, case study must be provable. This is the user's reputation.

## Quality gates — evidence required before "done"

Follow the `verify` skill. No claim without the command output.

- [ ] Lighthouse mobile: perf, a11y, best-practices, SEO each ≥ 95
- [ ] Lighthouse desktop: same four ≥ 95
- [ ] Playwright screenshots at 375 / 768 / 1440 — no layout breaks
- [ ] Browser console clean (no new errors or warnings)
- [ ] No horizontal scroll at 375 / 414 / 768 / 1024 / 1440
- [ ] All links resolve
- [ ] Primary CTA above the fold at every breakpoint
- [ ] `prefers-reduced-motion` honored (test via devtools emulation)

The `design-review` skill runs this loop end-to-end.

## SEO baseline

- Exactly one `<h1>` per page, contains primary keyword naturally
- `<title>` ≤ 60 chars, `<meta name="description">` 150–160 chars
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Every `<img>`: descriptive `alt`, explicit `width`/`height`, `loading="lazy"` below the fold, prefer WebP/AVIF
- Canonical link on every page
- JSON-LD: `Organization`, `Person` (consultant), `Service`, `FAQPage` where applicable
- `sitemap.xml` current; `robots.txt` permissive to search crawlers

## Workflow loop

1. **Brainstorm** — New sections/features: invoke `brainstorm` skill. Questions → options → approval → design doc in `tasks/designs/YYYY-MM-DD-<slug>.md` before any code.
2. **Explore** — Read existing HTML/CSS and `design-system/MASTER.md` tokens before adding new ones. Use the `explorer` agent for multi-file traces.
3. **Plan** — Non-trivial changes (3+ files or a novel section): `planner` agent → checklist in `tasks/todo.md`.
4. **Implement** — Small, reversible commits. Reuse tokens. Match existing patterns.
5. **Verify** — `design-review` skill: Playwright screenshots + Lighthouse + console. Show evidence before claiming done.
6. **Ship** — `ship` skill pre-deploy checklist, then `git push origin main`. Confirm live on resonanceseo.com.

## Session rehydration

Auto-loaded via imports below. Update `tasks/lessons.md` after any correction. Update `tasks/decisions.md` when we make a non-obvious choice (context → decision → tradeoffs). Update `tasks/progress.md` at session end.

@tasks/todo.md
@tasks/lessons.md
@tasks/decisions.md
@tasks/progress.md

## Never do

- Commit secrets (API keys, form-backend tokens, private analytics IDs)
- Add a JS framework or build step without explicit approval
- Ship copy or claims without the user's approval — this is his voice and reputation
- Use emoji as UI elements
- Animate `width`/`height`/`top`/`left` — `transform`/`opacity` only
- Add a section without a clear conversion or credibility job
- Mark work "done" without running Lighthouse + Playwright
- Force-push `main` or overwrite published commits
- Template-swap content or claims across variants (violates Google guidelines)
- Invent client logos, testimonials, or case-study numbers
