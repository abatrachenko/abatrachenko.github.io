---
name: verify-site
description: Verify the site renders and behaves correctly after changes - serve locally, load all 3 pages in headless Chromium, fail on console/page errors, assert section order and CTA consistency, and capture desktop + mobile screenshots. Use before committing or pushing any HTML/CSS/JS change.
---

# Verify Site

End-to-end browser verification for this static site. Run it from the repo root after any change to `index.html`, `privacy.html`, `terms.html`, `styles.css`, or `scripts.js`, before committing.

## Steps

1. Start a local server from the repo root (skip if one is already running on 8080):

   ```bash
   (python3 -m http.server 8080 &>/dev/null &) && sleep 1
   ```

2. Run the harness (Playwright 1.56+ and Chromium are pre-installed globally in this environment — do not `npm install` or `playwright install`):

   ```bash
   node .claude/skills/verify-site/scripts/verify.js
   ```

3. Interpret the output:
   - **Any `pageerror` is a hard failure** — an uncaught JS error blanks images on this site (`img { opacity: 0 }` until scripts.js runs). Fix before committing.
   - Console `Failed to load resource` errors for Google Fonts, Font Awesome CDN, or googletagmanager.com are **expected sandbox noise** (external hosts blocked) — ignore them.
   - The script asserts the canonical section order (hero → clients → testimonials → case-studies → about → consulting → process → faq) and that every long-form Calendly CTA reads "Book Your Free Intro Call". Failures print `FAIL:` lines and exit non-zero.

4. Read the screenshots it writes to `.claude/skills/verify-site/out/` (git-ignored):
   - `desktop-full.png` (1440px) and `mobile-full.png` (390px), both captured after scrolling the full page so IntersectionObserver fade-ins have fired.
   - Visually check the sections you touched. Note: the animated stat counters may be caught mid-count in screenshots — that's normal.

5. If the section order or CTA set changes *intentionally*, update the `EXPECTED_*` constants at the top of `scripts/verify.js` in the same commit.
