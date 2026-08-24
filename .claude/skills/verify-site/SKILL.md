---
name: verify-site
description: Runnable browser check for the site - serve locally, load all 3 pages in headless Chromium, fail on console/page errors, assert section order and CTA consistency, and capture desktop + mobile screenshots. The zero-MCP complement to the verify/design-review skills; works in remote sessions where Playwright MCP is unavailable. Use before committing any HTML/CSS/JS change.
---

# Verify Site (runnable harness)

End-to-end browser verification that needs only Node and the globally installed Playwright — no MCP servers. Use it when the Playwright MCP tools behind `design-review` aren't available (e.g. remote/cloud sessions), or as a fast pre-commit smoke check. It does not replace the `verify` skill's evidence policy or the full `design-review` loop (Lighthouse, 3-breakpoint QA) — run those before shipping.

## Steps

1. Start a local server from the repo root (skip if one is already running on 8080):

   ```bash
   (python3 -m http.server 8080 &>/dev/null &) && sleep 1
   ```

2. Run the harness (Playwright 1.56+ and Chromium are pre-installed globally in remote sessions — do not `npm install` or `playwright install`):

   ```bash
   node .claude/skills/verify-site/scripts/verify.js
   ```

3. Interpret the output:
   - **Any `pageerror` is a hard failure** — fix before committing.
   - Console `Failed to load resource` errors for Google Fonts or googletagmanager.com are **expected sandbox noise** (external hosts blocked in remote sessions) — the harness already filters them.
   - The script asserts the canonical `main section[id]` order and that every Calendly CTA uses a standard text ("Book a call" / "Book a strategy call"). Failures print `FAIL:` lines and exit non-zero.

4. Read the screenshots it writes to `.claude/skills/verify-site/out/` (git-ignored): `desktop-full.png` (1440px) and `mobile-full.png` (390px), captured after scrolling the full page. Visually check the sections you touched.

5. If the section order or CTA set changes *intentionally*, update the `EXPECTED_SECTION_ORDER` / `ALLOWED_CTA_TEXTS` constants at the top of `scripts/verify.js` in the same commit.
