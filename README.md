# abatrachenko.github.io

Source for **[resonanceseo.com](https://resonanceseo.com)** — the Resonance SEO consulting site (fractional SEO leadership for e-commerce brands).

## How it works

- Plain HTML/CSS/JS, no build step. Three published pages (`index.html`, `privacy.html`, `terms.html`) share `styles.css` and `scripts.js`.
- **Deploys**: GitHub Pages builds the `main` branch with Jekyll and serves it at the custom domain (`CNAME`). Merging to `main` is the deploy.
- **Not published**: anything in the `exclude:` list in `_config.yml` (internal docs, `test-page/`, Claude config). New non-public files must be added there.

## Working on it

- Conventions, gotchas, and the improvement backlog live in [`CLAUDE.md`](CLAUDE.md).
- Verify changes before committing with the `verify-site` skill (`.claude/skills/verify-site/`): serves the site locally, checks all pages for JS errors in headless Chromium, and captures desktop/mobile screenshots.
