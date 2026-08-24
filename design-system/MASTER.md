# Design System — MASTER

Single source of truth for tokens and components for resonanceseo.com. Every style decision in `styles.css` should trace back to a token or rule defined here.

**Status:** locked 2026-04-23 via Phase 3 of the rebuild (Track B). Direction derived from `benchmarks/SYNTHESIS.md`. Changes to tokens require a decision record in `tasks/decisions.md`.

---

## 1. Brand

**Visual personality (three adjectives):** *editorial, technical, restrained.*
Not *minimalist* (implies austerity); not *modern* (meaningless); not *premium* (pretentious). We're a senior operator's site — the design says "this person ships work, cares about precision, and doesn't waste your attention."

**Anchor references:** Stripe (proof sequencing + typographic restraint), Linear (whitespace discipline + motion restraint), Julian Shapiro (hero-as-filter, bio-last), Kevin Indig (Substack-landing compact newsletter pattern).

---

## 2. Color

### Token system

```
/* Surface */
--surface-primary:      #FAFAF9;   /* warm off-white page background */
--surface-secondary:    #F5F5F4;   /* reserved; use sparingly */

/* Text */
--text-primary:         #0F172A;   /* near-black — body, headings */
--text-secondary:       #475569;   /* strong muted — captions, labels */
--text-tertiary:        #64748B;   /* weakest muted — footnotes only */

/* Accent (single) */
--accent:               #1E3A5F;   /* deep navy — CTAs, links, interactive */
--accent-hover:         #152E4A;   /* darker for hover on filled buttons */
--accent-subtle:        #E6EAF0;   /* navy-tinted surface — use sparingly */

/* Structural */
--border-default:       #E7E5E4;   /* dividers, input borders */
--border-strong:        #D6D3D1;   /* emphasized borders (rare) */
```

### Usage rules

- **Surface + text + accent — that's it.** No secondary/success/warning/indigo/green colors as marketing-site tokens. Status colors may exist for functional UI (form errors), but are not part of the brand palette.
- **Accent is reserved for interactive intent**: CTAs, links, focus rings, the active state of navigation. Not for decoration, not for section dividers, not for "emphasis" in headings. The goal is that *every* navy pixel on the page could be clicked.
- **Contrast targets:** body text on surface ≥ 7:1 (WCAG AAA), muted text ≥ 4.5:1 (AA). Interactive elements ≥ 4.5:1 against their background.
- **No gradients.** No `radial-gradient`, no `linear-gradient` on UI elements, no `background-image` mesh-gradients. The current `body::before` mesh gradient is removed.
- **No glows.** `box-shadow` is only used for subtle elevation (see §6 shadows). No `0 0 40px var(--accent-glow)` patterns.

### Anti-tokens (removed from current `styles.css`)

```
/* Remove entirely from :root */
--black, --dark, --darker, --navy, --accent (#FF3366),
--accent-dark, --accent-light, --accent-glow,
--secondary, --secondary-light, --success, --warning,
--gray, --light-gray, --shadow-glow,
--glass-bg, --glass-border, --transition-bounce
```

---

## 3. Typography

### Families

- **Primary (body + display):** Inter — variable font, Google Fonts
- **Numeric (stats band, pricing, scarcity bar readout):** Geist Mono — variable font, Google Fonts
- **No serif pairing.** No italic-as-display. Weight + size does the work.

### Typeface trinity (locked 2026-04-23 benchmark pass)

- **Instrument Serif** — hero H1 display *only*. Signature editorial flourish via the italic accent span. One weight (400) + italic. Google Fonts.
- **Inter** — everything else: body, section H2/H3, nav, buttons, labels. Weights 400/500/700/900.
- **Geist Mono** — numerics (stats band, pricing, scarcity bar, case-study metrics) + section eyebrows + caps labels. Weights 400/500.

### Font loading (`<head>` directives for `index.html`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;700;900&family=Geist+Mono:wght@400;500&display=swap">
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;700;900&family=Geist+Mono:wght@400;500&display=swap">
```

Drop the Font Awesome CDN line. Inline SVG icons only (see §9 icons).

### Type scale (fluid with `clamp()`)

```
/* Headings */
--text-display:     clamp(2.5rem, 5vw + 1rem, 5rem);    /* H1 — hero only. 40px → 80px */
--text-h1:          clamp(2.25rem, 3.5vw + 1rem, 3.5rem);  /* 36px → 56px — section titles (H2) */
--text-h2:          clamp(1.5rem, 1.5vw + 1rem, 2rem);    /* 24px → 32px — subsection (H3) */
--text-h3:          clamp(1.125rem, 0.5vw + 1rem, 1.25rem); /* 18px → 20px — small heads, pillar labels */

/* Body */
--text-large:       1.25rem;    /* 20px — lead paragraphs, hero sub */
--text-body:        1.125rem;   /* 18px — default body */
--text-small:       1rem;       /* 16px — meta, captions */
--text-micro:       0.875rem;   /* 14px — footer, legal, nav */

/* Line heights */
--leading-display:  1.05;       /* tight — only on H1 display */
--leading-heading:  1.15;       /* H2, H3 */
--leading-body:     1.6;        /* body, lead */
--leading-tight:    1.35;       /* labels, captions */

/* Tracking */
--tracking-display: -0.03em;    /* display H1 only — optical tightening */
--tracking-heading: -0.01em;    /* H2, H3 — subtle */
--tracking-body:    0;
```

**Line-length:** cap body paragraphs at 65–75 characters. Use `max-width: 65ch` on text columns.

### Weight usage

| Weight | Family | Used for |
|---|---|---|
| 400 roman | Instrument Serif | **Hero H1 only.** Display-serif tier signal. |
| 400 italic | Instrument Serif | Accent span inside hero H1 — editorial flourish on the final clause. Nowhere else. |
| 400 regular | Inter | Body, sub-heads, caption |
| 500 medium | Inter | Nav, button labels, stat labels |
| 700 bold | Inter | H2, H3, pull-quote bold |
| 900 black | Inter | Reserved; not currently used (replaced on H1 by Instrument Serif). |
| 400 / 500 | Geist Mono | Numerics, eyebrows, caps labels |

Five active weights across three families. Adding a sixth weight or
a fourth family requires a decision record.

### Numeric treatment

Numbers in the stats band, pricing tiers, FAQ indexes, scarcity-bar readout, and case-study metrics use Geist Mono with `font-variant-numeric: tabular-nums`. This includes:

- `$700M+` / `+240K` / `+95%` / `+315%` in the numbers band
- `$6,400` / `$9,600` / `$12,800` in pricing
- `64 / 160` in the scarcity bar

Everything else is Inter. Mixing mono with Inter in running body text is forbidden.

---

## 4. Spacing

### 8-point base scale

```
--space-1:  0.25rem;    /* 4px */
--space-2:  0.5rem;     /* 8px */
--space-3:  0.75rem;    /* 12px */
--space-4:  1rem;       /* 16px */
--space-5:  1.25rem;    /* 20px */
--space-6:  1.5rem;     /* 24px */
--space-8:  2rem;       /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */
```

### Section padding (vertical rhythm)

| Breakpoint | Padding top/bottom | Token |
|---|---|---|
| Desktop ≥1024px | 128px | `--space-32` |
| Tablet 768–1023px | 96px | `--space-24` |
| Mobile < 768px | 64px | `--space-16` |

Per SYNTHESIS: airy section rhythm is a primary tier signal. Do not reduce below these values to fit content on a viewport — let the page be tall.

### Container

```
--container-max:    1200px;    /* max content width */
--container-pad:    clamp(1.5rem, 4vw, 3rem);    /* 24px → 48px horizontal */
```

Center with `margin-inline: auto`.

---

## 5. Layout & breakpoints

```
--bp-sm:  480px;    /* small mobile */
--bp-md:  768px;    /* tablet */
--bp-lg:  1024px;   /* small desktop */
--bp-xl:  1280px;   /* large desktop */
```

Primary layout is single-column. Grid used only for:
- 3-column pricing tiers (collapses to stack ≤768px)
- 3-card case-study row (stacks ≤768px)
- 3-column stats band (stacks ≤480px)
- Logo strip (flexbox wrap with min-item-width 120px)

Single-direction scroll. One dominant thought per viewport (Stripe pattern).

---

## 6. Radii & elevation

### Radii

```
--radius-none:  0;
--radius-sm:    0.25rem;  /* 4px — inputs only */
--radius-md:    0.5rem;   /* 8px — buttons, cards */
--radius-lg:    0.75rem;  /* 12px — large elements */
--radius-pill:  9999px;   /* reserved: small chips/tags only, NOT buttons */
```

**Critical:** buttons use `--radius-md` (8px), not pill. Pill CTAs are a startup-SaaS tell per SYNTHESIS. Current `.btn` at 50px radius gets reduced to 8px.

### Shadows

```
--shadow-sm:   0 1px 2px rgba(15, 23, 42, 0.04);
--shadow-md:   0 2px 8px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);
```

Two levels only. No `shadow-lg`, no `shadow-xl`, no glow variants. Hover state on cards uses `--shadow-md`; rest state uses `--shadow-sm` or nothing. Most cards have no shadow at all — borders only.

---

## 7. Motion

### Tokens

```
--duration-fast:   150ms;   /* hover color shift, focus ring */
--duration-base:   250ms;   /* standard transitions */
--duration-slow:   400ms;   /* section reveal (rare) */

--ease-out:        cubic-bezier(0.22, 1, 0.36, 1);      /* default */
--ease-in-out:     cubic-bezier(0.65, 0, 0.35, 1);      /* reversible */
```

### Rules

- **Animate `transform` and `opacity` only.** Never `width`, `height`, `top`, `left`, `margin`.
- **Fade-rise is the only entrance animation** allowed. `opacity: 0 → 1` + `translateY(8px → 0)` over 300ms at `--ease-out`. No slide-in-left, no slide-in-right, no scale-in, no counter-animations.
- **Hover transitions** on interactive elements use `--duration-fast`. Never `transition: all` — enumerate properties (`transition: color var(--duration-fast), background-color var(--duration-fast), border-color var(--duration-fast)`).
- **`prefers-reduced-motion: reduce` disables all decorative animation.** Entrance animations become instant; hover transitions keep (they're functional, not decorative).

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Removed from current site

- `.slide-in-left`, `.slide-in-right`, `.scale-in` animations — delete
- Animated stat counters (2-second count-up from 0) — delete; numbers render static
- Parallax effects — already commented out; remove entirely
- `transition-bounce` token — delete

---

## 8. Iconography

### Rules

- **Inline SVG only.** No icon fonts, no Font Awesome, no emoji.
- **Single icon set:** Heroicons v2 (outline for defaults; solid for active states). https://heroicons.com
- **Icon size:** 20×20 baseline. 24×24 for hero/display. Icon inherits `currentColor`.
- **Icon weight:** matches adjacent text weight — outline icons pair with regular text, solid with bold/emphasis contexts.
- **Icons are never decorative filler.** Each icon must clarify meaning (checkmark = "yes," arrow = direction, clock = time). If the icon only adds visual interest, remove it.

### Removed from current site

- Font Awesome CDN link — delete
- All `<i class="fas fa-*">` elements — replace with inline SVG `<svg>` elements from Heroicons
- Unicode star ratings (`★★★★★`) — replace with inline SVG stars or remove entirely

---

## 9. Components

### 9.1 Button

```css
.btn {
  /* layout */
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);     /* 12 × 24 */
  border-radius: var(--radius-md);             /* 8px */

  /* type */
  font-family: var(--font-body);
  font-size: var(--text-small);                /* 16px */
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;

  /* color (primary variant) */
  background-color: var(--accent);             /* deep navy */
  color: var(--surface-primary);               /* off-white */
  border: 1px solid var(--accent);

  /* interaction */
  cursor: pointer;
  transition: background-color var(--duration-fast) var(--ease-out),
              border-color var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.btn:hover { background-color: var(--accent-hover); border-color: var(--accent-hover); }
.btn:active { transform: translateY(1px); }
.btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

**Variants:**
- `.btn` — primary (navy fill, white text). Used for the main CTA in each placement.
- `.btn-ghost` — secondary (transparent bg, navy border, navy text). For paired co-equal CTAs (e.g., newsletter + strategy call in hero).
- `.btn-link` — inline link style, no background, navy underline. For tertiary CTAs only.

Maximum **two button sizes site-wide**: default and large (`--text-body` / 18px font, `--space-4` / 16px vertical padding). No pill-shaped buttons. No glow shadows. No `transform: scale(1.02)` on hover — the tiny translateY on `:active` is the entire interaction feedback.

### 9.2 Nav bar

- Sticky at top (not glassmorphism, not transparent-with-blur).
- Background: `var(--surface-primary)`.
- Bottom border: `1px solid var(--border-default)`.
- Height: 72px desktop, 56px mobile.
- Nav items: **max 4** (not the current 6). Recommended: `Case studies · Pricing · Newsletter · Book a call`. About/FAQ collapse into page sections, no nav link needed.

### 9.3 Hero

Text-first. No hero image, no chart PNG, no portrait.

- H1: `var(--text-display)` / weight 900 / line-height 1.05 / tracking -0.03em / color `var(--text-primary)`.
- Sub-head: `var(--text-large)` / weight 400 / line-height 1.5 / color `var(--text-secondary)`. Max-width 28ch to force a line break where it naturally reads.
- CTA pair (newsletter primary + strategy call secondary): both visible above the fold, co-equal visual weight (primary filled + secondary ghost). See §9.5 Newsletter capture.
- Vertical rhythm: `padding: var(--space-32) 0` on desktop. Hero occupies 85–95% of first viewport on desktop; slightly less on mobile.

### 9.4 Logo strip

- Placement: immediately under hero, no section padding (flows directly).
- Logos grayscale (`filter: grayscale(100%)` + `opacity: 0.7`); hover removes filter (`filter: none; opacity: 1;`).
- Align: center on mobile, justify-content space-between on desktop.
- Spacing: 48–80px horizontal between logos. Min-height 48px.

### 9.5 Newsletter capture (Stage 1 primary CTA)

Compact inline component, Kevin Indig Substack-landing pattern collapsed:

```
[ Small label above input — 14px, weight 500 ]
[ Email input | Subscribe button ]
[ One-line proof below — 14px, --text-secondary ]
```

Example copy (working draft):
- Label: *Organic growth patterns for enterprise e-commerce. Every other Tuesday.*
- Button: *Subscribe*
- Proof: *Read by 1,200+ senior marketers.* (or whatever the honest current number is)

Input + button: single row, 6px gap, both at 48px height. Input background `var(--surface-primary)` with `1px solid var(--border-default)`; focus ring `2px var(--accent)`. Button is the primary `.btn` variant.

Placement: one in the hero (primary), one in the footer (secondary). Not in every section.

### 9.6 Stats band (numbers-as-design)

Full-width section immediately under the logo strip. Single row on desktop, stacks on mobile.

```
Each stat:
  [ big number — Geist Mono, 72–96px, weight 500, text-primary, tabular-nums ]
  [ small label — Inter, 14px, weight 500, text-secondary, uppercase, letter-spacing 0.05em ]
```

Targets:
- `$700M+`  /  `Organic revenue generated`
- `+240K`  /  `Daily unique clicks (Adidas)`
- `+95%`  /  `Organic growth (J.Crew)`
- `+315%`  /  `Organic growth (Alchemy)`

No chart visuals. No animated counters. Numbers render static. The typography is the design.

### 9.7 Case-study cards

Three cards, grid on desktop (`grid-template-columns: repeat(3, 1fr); gap: var(--space-8);`), stack on mobile.

Per card:
- Card: `background: var(--surface-primary); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: var(--space-8);`
- Hover: `border-color: var(--accent); box-shadow: var(--shadow-md); transform: translateY(-2px);` (all at `--duration-fast`)
- Cursor: `pointer` (cards are clickable per Julian's artifact pattern, even if v1 links to an anchor or modal rather than a deep-dive page).

Content order:
```
[ Client name — H3, weight 700 ]
[ Category label — small, text-secondary, uppercase ]
[ Big metric — Geist Mono, 40px, weight 500 ]
[ Short description — body, max-width 40ch ]
```

No corner stickers, no gradient overlays, no "Read case study →" link as a separate element (the whole card is the link).

### 9.8 Instrument-grade scarcity bar

**This is the editorial moment (Decision 3D).** The manual-updated scarcity signal rendered as a precision instrument readout.

```
┌──────────────────────────────────────────────────┐
│  HOURS OPEN THIS MONTH                   64/160   │  ← label row: Inter medium 14px · Geist Mono 16px tabular
│  ────────────────█████████████████████           │  ← bar: 6px, full-width track
└──────────────────────────────────────────────────┘
```

```css
.scarcity-bar {
  max-width: 640px;
  display: grid;
  gap: var(--space-3);
}

.scarcity-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.scarcity-bar__label {
  font-family: var(--font-body);
  font-size: var(--text-micro);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.scarcity-bar__value {
  font-family: var(--font-mono);      /* Geist Mono */
  font-size: var(--text-small);
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
}

.scarcity-bar__track {
  height: 6px;
  background: var(--border-default);
  border-radius: 3px;
  overflow: hidden;
}

.scarcity-bar__fill {
  height: 100%;
  background: var(--text-primary);    /* not accent — accent is interaction only */
  border-radius: 3px;
  transition: width var(--duration-slow) var(--ease-out);
}
```

Design rules:
- **Thin track (6px), not chunky.** A fat bar reads as marketing; a thin bar reads as instrumentation.
- **Fill uses `--text-primary` (near-black), not accent.** This is data, not interaction.
- **Mono numeric value is right-aligned, uppercase label is left-aligned.** Label typography does the "readout" signal.
- **No percentage text inside the bar.** The bar IS the percentage; adding a number inside it is redundant.
- **Tabular-nums enforced.** When Aleksey updates "64" to "48," the 6 and the 4 don't shift horizontally.
- **Stays static on page load.** The fill does NOT animate from 0 on mount — it renders at its value. (Animating it would make it feel like a gamified progress bar, not a measurement.)

### 9.9 Testimonial card

Used in the testimonials section. Three cards on desktop, stack on mobile.

- Quote: `var(--text-body)` / weight 400 / line-height 1.6 / max-width 44ch per card
- Attribution: name (weight 700) · role (regular) · company (regular) on separate line below quote, separated by subtle dots or em-dashes
- No quotation marks as large decorative elements (current site does 8rem ornamental quote — delete)
- No photo headshots in v1 (adds visual noise and most are grayscale anyway)
- Card: minimal — `background: var(--surface-secondary); padding: var(--space-8); border-radius: var(--radius-md);` OR no card at all with just generous margin (SYNTHESIS: "no decorative cards as variety crutches")

**Testimonial casting rule (from SYNTHESIS):** prioritize attribution by **matching buyer title** to our ICP (VP/Director Marketing or E-com) over brand prestige. Our logo cluster carries brand prestige; testimonial attributions should reinforce "this is a buyer like you."

### 9.10 Pricing tiers

Three-column grid (stacks ≤768px). Keep current structure; update styling per tokens.

- Card: 1px navy-subtle border (`--accent-subtle`), `--radius-md`, `var(--space-8)` padding.
- Middle tier: slightly prominent — `border: 2px solid var(--accent);` (no "featured" badge text, no "Most Popular" label — removed in P0).
- Price: Geist Mono, 48px, tabular-nums, weight 500.
- Period suffix (`/month`): Inter, 14px, weight 400, `--text-secondary`.

### 9.11 FAQ (trimmed)

3–4 items max (per SYNTHESIS — cut redundancy with proof stack). Native `<details>/<summary>` elements.

```css
details {
  border-bottom: 1px solid var(--border-default);
  padding: var(--space-6) 0;
}
details summary {
  font-size: var(--text-body);
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
details summary::after {
  content: '+';
  font-family: var(--font-mono);
  transition: transform var(--duration-fast) var(--ease-out);
}
details[open] summary::after { transform: rotate(45deg); }
details > div {
  margin-top: var(--space-4);
  color: var(--text-secondary);
  max-width: 65ch;
}
```

No icons inside summary (drop current Font Awesome icons). The `+` / rotated `×` mono glyph is the entire affordance.

### 9.12 Bio block (placed LAST per Julian)

Short, confident, at the bottom of the page before the footer:

- Portrait: single photo, square aspect, `--radius-md`, max 200px wide. Grayscale OR color — pick one and stay consistent.
- Name: H2 (`--text-h1`), weight 700.
- Tagline/role: body-large, `--text-secondary`.
- Paragraph (150–220 words): who, track record, how you work. Body text, max-width 65ch.
- Credentials strip: small labels separated by em-dashes. Example: *"15+ years · 35+ brands · Adidas, Samsung, J.Crew alumni · Advisor, Reach LLM · Speaker: MozCon, BrightonSEO"*
- Single CTA at the end: strategy call (link style, not filled button — the filled button lives in hero and pricing section).

### 9.13 Footer

Minimal. Three elements:
- Copyright + year (left)
- Newsletter capture, compact (center) — secondary placement of §9.5
- LinkedIn + privacy/terms links (right)

Single line on desktop, stacked on mobile. Border-top `1px solid var(--border-default)`. Padding `var(--space-12) 0`.

---

## 10. Accessibility baseline

These are non-negotiable rules enforced across every component.

- **Contrast:** body text ≥ 4.5:1, large text ≥ 3:1. Navy accent on off-white = 8.8:1, near-black on off-white = 15:1 — we clear AAA comfortably.
- **Focus states:** visible outline on every interactive element. `outline: 2px solid var(--accent); outline-offset: 2px;` Never `outline: none` without a matching `:focus-visible` treatment.
- **Touch targets:** minimum 44×44px for any tap target. Links in body text are the exception (standard link interaction).
- **Heading order:** sequential h1 → h2 → h3, no skipping. Exactly one h1 per page.
- **Alt text:** descriptive on every `<img>`; `alt=""` on decorative imagery; never missing.
- **Form labels:** associated via `for`/`id` or wrapping `<label>`. No placeholder-as-label.
- **Reduced motion:** honored (see §7).
- **Aria:** use semantic HTML first (`<nav>`, `<main>`, `<section>`, `<button>`); aria attributes only where semantics are insufficient. `aria-label` on icon-only buttons.
- **Icon labels must match visible labels.** The menu button's `aria-label` must match its visible text or icon semantic — fixing current `☰` unicode + "Toggle navigation menu" mismatch (audit A2).

Target Lighthouse accessibility score: 100 on every page.

---

## 11. Anti-patterns (never)

Explicit list of things NOT to add, no matter how tempting:

- Gradients (text, backgrounds, borders, buttons)
- Glow shadows (`box-shadow: 0 0 40px ...`)
- Pill-shaped primary CTAs (`border-radius: 50px`)
- Glassmorphism (`backdrop-filter: blur()` on nav or sections)
- Emoji as UI elements (stars, arrows, icons)
- Font Awesome or any icon font
- Animated counters for stats
- Parallax scrolling
- Auto-playing video or rotating testimonial carousels
- Exit-intent popups
- Fake social-proof notifications ("Someone in California just booked a call")
- "Free" in primary CTAs
- Stock photography of generic business people
- Illustration filler where a photo or typography moment would work
- `transition: all` — always enumerate properties
- More than two button sizes
- More than four font weights
- More than one accent color
- Section-alternating background colors as a variety crutch

---

## 12. Migration plan — current `styles.css` → new system

Phase 4 implements. This is the diff in scope, not the diff in lines.

### Remove / delete

- All current `:root` custom properties except `--text-dark` (rename to `--text-primary`) and `--text-light` (rename to `--text-secondary`)
- `.slide-in-left`, `.slide-in-right`, `.scale-in` keyframes + class styles
- `.btn::before` / `.btn::after` shimmer pseudo-elements
- `.btn` box-shadow glow
- `header` backdrop-filter glassmorphism
- `body::before` radial-gradient mesh
- `.gradient-text` — replaced with accent color on individual span if used
- All Font Awesome imports + `<i class="fas ...">` elements (replace with Heroicons inline SVG)
- `.floating-cta` + `.sticky-cta-bar` — both deleted as part of CTA consolidation
- `.popular-badge` CSS — HTML was removed in P0, clean up CSS
- `.availability-progress` CSS — replaced with `.scarcity-bar` per §9.8
- Animated counter JS (`animateCounter`) — delete; numbers render static
- All `transition: all` declarations — replace with enumerated properties

### Add

- Geist Mono font loading
- Full new token system per §2, §3, §4, §6, §7
- `.scarcity-bar` component per §9.8
- `.newsletter-capture` component per §9.5
- New `.btn` base + `.btn-ghost` variant per §9.1
- `prefers-reduced-motion` media query per §7
- Inline Heroicons SVG for every current Font Awesome use

### Preserve

- Container structure (`.container` max-width 1200px — becomes `--container-max`)
- Basic layout scaffolding (header / main / section / footer semantic HTML)
- Schema.org JSON-LD (already strong post-P0)
- `sitemap.xml`, `robots.txt`, `CNAME`, canonical links
- The three case-study structure (Adidas / J.Crew / Alchemy) — content stays, card design changes
- Three pricing tiers ($6,400 / $9,600 / $12,800) — content stays, styling simplifies
- Testimonial content (three real named quotes) — stays, card design changes

---

## 13. Page-specific overrides

None needed for v1 — the site is one page.

If/when secondary pages get built (GEO Readiness Framework landing, case-study deep-dives, blog), they get page-specific override files at `design-system/pages/<slug>.md`. Override files reference this MASTER as the base; page files only describe deltas.

---

## 14. Changelog

- **2026-04-23** — Initial lock. Phase 3 of Track B. Direction derived from `benchmarks/SYNTHESIS.md`. Decisions: deep-navy accent (#1E3A5F), Inter + Geist Mono, editorial moment = display H1 + numbers-as-design + instrument-grade scarcity bar compound.
