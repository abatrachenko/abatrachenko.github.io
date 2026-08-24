---
description: Design-first brainstorming. Explores requirements through questions, presents alternatives, gets approval before any code. Use at the start of any new feature, section, or non-trivial change.
---

# Brainstorming

**The gate: Do NOT write any code, scaffold anything, or take any implementation action until you have presented a design and the user has approved it.**

This applies to all changes — even "simple" ones. Unexamined assumptions cause more wasted work than anything else.

## Process

### 1 — Explore Context
Read existing project files, `design-system/MASTER.md`, `conversion/positioning.md`, and relevant HTML/CSS before asking anything. Understand what already exists.

### 2 — Ask Clarifying Questions
Ask **one question at a time**. Not a list — one. Wait for the answer.

Focus questions on:
- What problem does this actually solve for the visitor?
- What part of the conversion funnel does this touch?
- What does success look like (metric, not vibe)?
- What constraints exist (time, brand, compatibility with existing design system)?
- What's explicitly out of scope?

Use multiple-choice questions where possible — they're faster and reveal unstated assumptions.

### 3 — Present Alternatives
Propose 2–3 distinct approaches with honest tradeoffs. Include a clear recommendation.

For each approach:
- What it does
- Why it's good
- What it sacrifices
- When you'd choose it

Anchor alternatives to benchmark sites in `benchmarks/` where possible — "like site X's hero" is more legible than abstract description.

### 4 — Design Review
Present the chosen design in sections, scaled to complexity. Get approval on each section before moving to the next.

Apply YAGNI ruthlessly — remove anything that isn't needed for the stated goal.

### 5 — Document
Save the validated design to `tasks/designs/YYYY-MM-DD-[topic]-design.md` before any implementation begins.

### 6 — Hand Off
Only after documented approval: invoke the `planner` agent to break the design into implementation tasks in `tasks/todo.md`.

## What Good Questions Look Like

- "Is this for the hero, or a supporting section?" (not "tell me about it")
- "Should this replace the existing testimonials block or sit beside it?" (not "what do you want?")
- "What's the minimum viable version that still converts?" (not "what features do you want?")

## YAGNI Gate

Before finalizing: "What can we remove without breaking the stated goal?" Cut it. The best design does exactly what's needed and nothing more.
