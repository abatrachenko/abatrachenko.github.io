# abatrachenko.github.io

Source for **[resonanceseo.com](https://resonanceseo.com)** — the Resonance SEO consulting site (senior SEO and AI search consulting for enterprise e-commerce).

## How it works

- Plain HTML/CSS/JS, no build step. Three published pages (`index.html`, `privacy.html`, `terms.html`) share `styles.css` and `scripts.js`.
- **Deploys**: GitHub Pages builds the `main` branch with Jekyll and serves it at the custom domain (`CNAME`). Merging to `main` is the deploy.
- **Not published**: anything in the `exclude:` list in `_config.yml` (internal docs, `tasks/`, `benchmarks/`, `design-system/`, `conversion/`, `test-page/`). New non-public files must be added there.

## Working on it

- Conventions, design principles, quality gates, and the workflow loop live in [`.claude/CLAUDE.md`](.claude/CLAUDE.md); design tokens in `design-system/MASTER.md`.
- Verify changes before committing: the `design-review` skill (Playwright MCP + Lighthouse) for full QA, or the runnable `verify-site` harness (`.claude/skills/verify-site/`) for a zero-MCP browser smoke check.
