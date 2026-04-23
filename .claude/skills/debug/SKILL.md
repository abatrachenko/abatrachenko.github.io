---
description: Systematic debugging methodology. Four-phase root cause analysis. Use when investigating any bug, visual regression, console error, performance drop, or unexpected behavior — before proposing any fix.
---

# Systematic Debugging

**The non-negotiable rule: NO FIXES WITHOUT ROOT CAUSE FIRST.**

Proposing a fix before understanding the root cause is guessing. Guessing wastes time, introduces new bugs, and erodes trust.

## Phase 1 — Root Cause Investigation

Before touching any code:
1. Read the full error or symptom. All of it.
2. **Reproduce the failure consistently** — if you can't reproduce it, you don't understand it yet
   - For visual bugs: Playwright at the exact breakpoint, exact interaction
   - For performance: exact Lighthouse category and metric
   - For console errors: exact message, stack trace, triggering action
3. Check what changed recently (`git log`, `git diff` from last known good)
4. Gather diagnostic evidence at boundaries: DOM state, CSS computed styles, network requests, console messages, viewport dimensions
5. Trace backward from the failure point through the render pipeline

Do not skip this phase because you "have a hunch."

## Phase 2 — Pattern Analysis

1. Find working examples of the same pattern elsewhere in the codebase (or in `benchmarks/` reference sites)
2. Compare against the broken instance completely — not just the obvious differences
3. Identify all differences, including seemingly irrelevant ones (specificity, cascade order, viewport units, flex/grid defaults)
4. Understand dependencies: what CSS rules, JS events, or asset loads does the broken code rely on?

## Phase 3 — Hypothesis and Testing

1. Form one specific, falsifiable hypothesis: "The bug is caused by X because Y"
2. Test it with the minimal change needed to confirm or disprove (often a single CSS declaration or DOM inspection)
3. If the test disproves your hypothesis, form a new one — don't stack a second fix on top
4. Never say "I think" or "probably" — verify before claiming

## Phase 4 — Fix

1. Reproduce the bug one more time to confirm the hypothesis holds
2. Implement a **single** fix that addresses the root cause
3. Verify the fix works at the original failure condition
4. Verify no other breakpoints or interactions broke (run `design-review`)

## The 3-Strike Rule

If you've attempted 3+ fixes without resolving the issue, **stop**. The architecture (or assumption) may be flawed. Continuing to patch symptoms is making things worse. Step back and question the design.

## Red Flags (Stop and Reassess)

- Proposing a solution before completing Phase 1
- Fixing multiple things simultaneously
- "It works on my machine / in Chrome"
- Trusting a DevTools computed style without checking specificity
- Skipping the reproduction step because "it's obvious"
