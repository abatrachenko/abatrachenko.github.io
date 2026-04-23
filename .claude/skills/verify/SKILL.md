---
description: Verification before completion. Requires evidence before any claim. Use before marking any task done, claiming a visual change works, or asserting a bug is fixed.
---

# Verification Before Completion

**The rule: Evidence before claims, always. No exceptions.**

Never say a task is done, a change works, a regression is fixed, or a build succeeds without running the command and showing the output.

## Required Steps Before Any Completion Claim

1. **Identify** the exact command or observation that proves your claim
2. **Run** that command fresh — not a cached result, not "I ran it earlier"
3. **Read** the complete output
4. **Confirm** the output actually supports the claim
5. **Show** the relevant output as evidence when reporting

## What Requires Verification

| Claim | Required evidence |
|---|---|
| "The hero looks right at mobile" | Playwright screenshot at 375px width |
| "No layout shift at 768px" | Playwright screenshot + console clean |
| "Lighthouse passes" | Full Lighthouse output showing scores ≥ 95 for all four categories |
| "No console errors" | `mcp__playwright__browser_console_messages` output, post-interaction |
| "Link works" | Actual navigation with Playwright, no 404 |
| "Change deployed" | `curl -I https://resonanceseo.com` or fetch the live URL showing new content |
| "Bug is fixed" | Repro case no longer fails |

For visual/design changes, run the full `design-review` skill.

## Language That Signals Unverified Claims (Never Use)

- "should work"
- "probably looks fine"
- "seems to be working"
- "I believe this is fixed"
- "this looks correct"
- "it appears to pass"

These mean verification was skipped. Either verify and show evidence, or say "I haven't verified this yet."

## Partial Checks Are Not Sufficient

- Screenshotting one breakpoint ≠ testing all breakpoints
- Desktop-only ≠ mobile-verified
- Local render ≠ live-deploy verified
- Reading CSS ≠ seeing the rendered result

## Why This Matters

Unverified claims are lies. A broken hero on mobile means a lost enterprise prospect. The cost of running the command is seconds; the cost of a false claim is the next deal.
