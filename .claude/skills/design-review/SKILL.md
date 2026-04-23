---
description: End-to-end visual and performance QA for resonanceseo.com. Runs Playwright screenshots at 3 breakpoints, Lighthouse (mobile + desktop), console capture, and a11y spot-checks. Use before claiming any design/layout change is complete, and before every ship.
---

# Design Review

The gate between "I changed it" and "it's done." No design change ships without this running clean.

## When to invoke

- After any change to `index.html`, `styles.css`, `scripts.js`, or any image
- Before running the `ship` skill
- When investigating a user-reported visual issue
- After a dependency change (font load, CDN, external script)

## Prerequisites

Start the local dev server:
```
python -m http.server 8000
```

Confirm it's running: `curl -I http://localhost:8000` returns `200 OK`.

## The Review Loop

### 1. Responsive screenshots (Playwright)

For each viewport in the list below:
1. `mcp__playwright__browser_resize` to the width × height
2. `mcp__playwright__browser_navigate` to `http://localhost:8000/`
3. `mcp__playwright__browser_wait_for` a selector that indicates the hero has rendered (e.g., `h1`)
4. `mcp__playwright__browser_take_screenshot` — save with the breakpoint name (e.g., `screenshot-375.png`)
5. Scroll through the page via `mcp__playwright__browser_evaluate` (`window.scrollTo(0, document.body.scrollHeight)`) and take a full-page screenshot

Viewports:
| Name | Width × Height | Represents |
|---|---|---|
| mobile-sm | 375 × 667 | iPhone SE, older Android |
| mobile-lg | 414 × 896 | iPhone Pro Max |
| tablet | 768 × 1024 | iPad portrait |
| laptop | 1024 × 768 | small laptop |
| desktop | 1440 × 900 | standard desktop |

Review each screenshot for:
- Layout breaks (overflow, overlap, missing content)
- Horizontal scroll
- Text truncation or illegible sizes
- CTA visibility above the fold
- Image aspect ratios and blurriness
- Logo strip alignment

### 2. Console capture

After each navigation: `mcp__playwright__browser_console_messages`.

Any `error` level message → BLOCK. Any new `warning` we introduced → investigate.

### 3. Network check

`mcp__playwright__browser_network_requests` — scan for:
- 404s on any asset
- Oversized images (> 500 KB un-optimized, > 200 KB optimized)
- Render-blocking resources
- Third-party domains we don't expect

### 4. Lighthouse

```
npx -y lighthouse http://localhost:8000 \
  --only-categories=performance,accessibility,seo,best-practices \
  --form-factor=mobile \
  --quiet --chrome-flags="--headless" \
  --output=json --output-path=./tmp-lh-mobile.json
```

Then desktop (replace `--form-factor=mobile` with `--preset=desktop`, `--output-path=./tmp-lh-desktop.json`). The `--preset=desktop` flag is required — `--form-factor=desktop` alone causes a screen-emulation mismatch.

**Targets:** each category ≥ 95 on both mobile and desktop.

Record the actual scores. If any drop below 95, identify the specific audit(s) causing the drop and report them.

Key metrics to surface (from the `audits` section of the JSON):
- `largest-contentful-paint` — target < 2.5s
- `cumulative-layout-shift` — target < 0.1
- `interaction-to-next-paint` (INP) — target < 200ms
- `first-contentful-paint`
- `total-blocking-time`

After review, delete `tmp-lh-*.json` so they don't get committed.

### 5. Accessibility spot-checks

Beyond what Lighthouse covers:
- Tab through the page via `mcp__playwright__browser_press_key` (Tab) — confirm focus order matches visual order
- Verify focus rings are visible on every interactive element
- Test `prefers-reduced-motion` via `mcp__playwright__browser_evaluate` emulating the media query — confirm any animations disable

### 6. Report

Format:

```
## Design Review — <date>

**Scope:** <what changed>

### Screenshots
- 375: [PASS / describe issue]
- 414: ...
- 768: ...
- 1024: ...
- 1440: ...

### Lighthouse
|          | Perf | A11y | BP | SEO |
|----------|------|------|-----|-----|
| Mobile   |  ??  |  ??  | ?? | ??  |
| Desktop  |  ??  |  ??  | ?? | ??  |

Key metrics (mobile): LCP <s>, CLS <x>, INP <ms>

### Console
- Errors: <count> / Warnings: <count, ours only>

### Network
- 404s: ...
- Oversized assets: ...

### A11y spot-checks
- Tab order: ...
- Focus visibility: ...
- Reduced motion: ...

### Verdict
CLEAR / ISSUES — with specific blockers listed.
```

## Standards

- **No claims without evidence.** Paste actual Lighthouse scores and screenshot references.
- **No selective reporting.** If one breakpoint failed, report it — don't only show the passing ones.
- **File everything in `tasks/progress.md`** if the review is part of a larger change being tracked across sessions.
