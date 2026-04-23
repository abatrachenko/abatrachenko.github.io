# Design System — MASTER

Single source of truth for tokens and components. Everything in `styles.css` should trace back to a decision documented here.

**Status:** skeleton — to be completed in Track B phase 3 after positioning (phase 1) and benchmarks (phase 2) lock direction.

---

## 1. Brand

- **Tone of voice:** [TBD — see `conversion/positioning.md`]
- **Visual personality adjectives:** [3–5 words, e.g., "confident / editorial / technical / quiet / premium"]

## 2. Color

```
--color-bg               /* page background */
--color-surface          /* cards, sections */
--color-fg               /* primary text */
--color-fg-muted         /* secondary text */
--color-accent           /* CTAs, links, emphasis */
--color-accent-hover
--color-border           /* dividers, card edges */
```

Contrast requirement: body text ≥ 4.5:1 on `--color-bg` and `--color-surface`.

**Current values:** [extract from `styles.css` during phase 3]

## 3. Typography

```
--font-display           /* headings */
--font-body              /* paragraphs, UI */
--font-mono              /* code / technical detail, if used */
```

Scale (modular, e.g., 1.25 ratio):
```
--text-xs    /* 12 */
--text-sm    /* 14 */
--text-base  /* 16 */
--text-lg    /* 18 */
--text-xl    /* 20 */
--text-2xl   /* 24 */
--text-3xl   /* 32 */
--text-4xl   /* 40 */
--text-5xl   /* 56 */
--text-6xl   /* 72 */
```

Line-height: 1.5–1.7 body, 1.1–1.2 display. Line-length: 65–75ch for body copy.

**Current stack:** [extract from `styles.css` during phase 3]

## 4. Spacing

8-point scale:
```
--space-1   /* 4  */
--space-2   /* 8  */
--space-3   /* 12 */
--space-4   /* 16 */
--space-6   /* 24 */
--space-8   /* 32 */
--space-12  /* 48 */
--space-16  /* 64 */
--space-24  /* 96 */
--space-32  /* 128 */
```

Section padding: vertical `--space-24` mobile, `--space-32`+ desktop.

## 5. Layout

- `--max-width` (container): 1200–1280px typical for marketing
- Breakpoints: 375 / 414 / 768 / 1024 / 1440
- Grid: CSS grid for major sections, flex for component internals

## 6. Radii & elevation

```
--radius-sm  /* 4  */
--radius-md  /* 8  */
--radius-lg  /* 16 */
--radius-xl  /* 24 */
--radius-pill /* 9999 */

--shadow-sm
--shadow-md
--shadow-lg
```

Modern-tier marketing sites often use 1–2 subtle shadows, not a cascade of elevations.

## 7. Motion

```
--duration-fast   /* 150ms */
--duration-base   /* 250ms */
--duration-slow   /* 400ms */

--ease-out        /* cubic-bezier(0.22, 1, 0.36, 1) */
--ease-spring     /* cubic-bezier(0.34, 1.56, 0.64, 1) */
```

Rules:
- Animate `transform` and `opacity` only
- Respect `prefers-reduced-motion: reduce` — disable decorative motion
- Hover transitions on interactive elements: `transition: color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)` (never `transition: all`)

## 8. Components

Inventory goes here once the site is audited in phase 3. Expected components:

- `button-primary`, `button-ghost`, `button-link`
- `nav-bar`, `nav-drawer` (mobile)
- `hero` (variants: text-only, text+portrait, text+product)
- `logo-strip` (current implementation uses grayscale logos)
- `testimonial-card`, `testimonial-grid`
- `case-study-card`
- `faq-item` (accordion)
- `cta-banner`
- `footer`

For each: purpose, variants, usage rules, accessibility notes.

## 9. Anti-patterns (do not use)

- Emoji as UI icons
- `!important` (except in `prefers-reduced-motion` overrides)
- Inline styles (except dynamic JS-computed values)
- Gradient text for long passages (hurts legibility)
- Auto-playing video with sound
- Hover-only interactions without tap equivalents
- Fixed heights on text containers

## 10. Page-specific overrides

Page overrides live in `design-system/pages/<slug>.md`. They override — not replace — the rules above. Load the page-specific file first; fall back to MASTER for anything unmentioned.

Current pages:
- (none yet — add one per page when created)
