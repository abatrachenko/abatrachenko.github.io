---
description: Pre-ship checklist for the resonanceseo.com static site. Runs design, performance, SEO, and content checks before pushing to `main` (which auto-deploys to GitHub Pages). Use before every deploy.
---

# Ship Checklist

Run the pre-ship checklist for the current working tree. Report PASS/FAIL with file and line where applicable. If anything in the **SHIP BLOCKERS** section fails, do NOT push.

---

## Code Quality

- [ ] HTML validates (W3C) — no unclosed tags, no duplicate IDs
- [ ] CSS has no orphan rules (tokens used in `styles.css` all exist)
- [ ] No `console.log` / `debugger` in `scripts.js`
- [ ] No commented-out code blocks committed
- [ ] No TODO comments without a linked task in `tasks/todo.md`

## Design & UX

- [ ] Lighthouse mobile ≥ 95 (perf, a11y, best-practices, SEO)
- [ ] Lighthouse desktop ≥ 95 (all four)
- [ ] Playwright screenshots clean at 375 / 768 / 1440
- [ ] Browser console clean (no new errors or warnings)
- [ ] No horizontal scroll at any standard breakpoint
- [ ] Primary CTA above the fold at every breakpoint
- [ ] Focus states visible on all interactive elements
- [ ] `prefers-reduced-motion` honored

## SEO

- [ ] Exactly one `<h1>` per page
- [ ] `<title>` ≤ 60 chars, `<meta description>` 150–160 chars
- [ ] All `<img>` have descriptive `alt`, `width`, `height`
- [ ] Canonical link present
- [ ] `sitemap.xml` lists every public page
- [ ] JSON-LD valid (paste into https://validator.schema.org)
- [ ] No `noindex` / `nofollow` on public pages (dev/staging pages OK to block)

## SHIP BLOCKERS (CRITICAL — any fail = STOP)

- [ ] No API keys, tokens, or secrets in any committed file
- [ ] No `.env` or credentials staged
- [ ] No invented client logos, testimonials, or metrics (every claim must be provable)
- [ ] No content the user hasn't approved (his voice, his site, his reputation)
- [ ] No unreviewed experiments/test pages linked from the live site
- [ ] CNAME intact (`resonanceseo.com`)

## Git & Deploy

- [ ] Commit message is descriptive (conventional format preferred: `feat:`, `fix:`, `perf:`, `seo:`, `copy:`)
- [ ] Pushing to `main` (GitHub Pages deploys only from `main`)
- [ ] Not force-pushing

---

## Final Report

List every FAIL with exact file:line location.

- Any **SHIP BLOCKER** fail → **SHIP BLOCKED**
- Any **Design/UX** or **SEO** fail → **SHIP BLOCKED** (fix before deploy)
- Code Quality fails → warn but may ship

If all pass → **CLEARED TO SHIP**. Then push. After push, wait 30–60s and verify with `curl -I https://resonanceseo.com` or a live browser check.
