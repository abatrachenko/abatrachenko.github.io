# Lessons

Rules learned from user corrections or validated successes. Prevents repeating mistakes and prevents drifting away from approaches the user has already endorsed.

Format per entry:

```
## [YYYY-MM-DD] — short rule

**Context:** what was happening
**Rule:** what to do / not do
**Why:** the reason the user gave
```

---

## [2026-04-23] — Don't inherit the parent CopyEngine CLAUDE.md

**Context:** When setting up tooling for this repo, I offered to port the parent `New Project/.claude/CLAUDE.md` (CopyEngine, Python pipeline) into this project.

**Rule:** Do not inherit that file for this project. Treat it as wrong-domain, wrong-stack, wrong-rules. Build fresh CLAUDE.md from current Anthropic docs + community research.

**Why:** User explicitly said "lets ignore the copyengine claude.md entirely" — the two projects have completely different natures (Python data pipeline vs. static marketing site).

## [2026-04-23] — Research current best practices before writing foundational docs

**Context:** User asked for a CLAUDE.md setup; I initially drafted one from memory.

**Rule:** For foundational/keystone documents (CLAUDE.md, positioning, design-system), run Perplexity research first for current Anthropic docs and community practices. Don't rely on training-time assumptions.

**Why:** User said "lets research with perplexity the best .claude file we can make... based on the latest best practices and guidance." He values currency; foundational docs shouldn't be built on stale defaults.
