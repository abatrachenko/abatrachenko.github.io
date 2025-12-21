# Security Guide

## What's Protected ✓

### Code Security
- ✅ No API keys, credentials, or secrets in repository
- ✅ `.gitignore` file prevents accidental commits of sensitive files
- ✅ Basic XSS protection in form validation
- ✅ Security meta tags for browser protection
- ✅ HTTPS enforced via GitHub Pages

### Current Security Measures
1. **X-Content-Type-Options**: Prevents MIME type sniffing
2. **Referrer Policy**: Controls referrer information sharing
3. **Input Sanitization**: Removes potentially dangerous characters from form inputs
4. **HTTPS**: Automatic SSL/TLS encryption via GitHub Pages

## GitHub Repository Security Settings

### To Enable (do this in GitHub.com):

1. **Go to your repository settings:**
   - Navigate to `https://github.com/abatrachenko/abatrachenko.github.io/settings`

2. **Enable Security Features:**

   **Security & Analysis Section:**
   - ✅ Enable **Dependabot alerts** (alerts for vulnerable dependencies)
   - ✅ Enable **Dependabot security updates** (automatic PRs for security fixes)
   - ✅ Enable **Secret scanning** (detects committed secrets)

   **Branches Section:**
   - Consider protecting your `main` branch:
     - Go to Settings > Branches > Add branch protection rule
     - Branch name pattern: `main`
     - ✅ Require pull request reviews before merging
     - ✅ Require status checks to pass before merging

3. **Review Access:**
   - Settings > Collaborators and teams
   - Ensure only trusted people have write access

## Best Practices Going Forward

### Never Commit These Files:
- ❌ `.env` files
- ❌ API keys or tokens
- ❌ Database credentials
- ❌ Private keys or certificates
- ❌ `secrets.json` or similar config files

### When Adding Backend Services:
If you add a contact form backend (like Formspree, Netlify Forms, or custom):

1. **Use environment variables** for API keys
2. **Never expose keys** in client-side JavaScript
3. **Implement rate limiting** to prevent abuse
4. **Add reCAPTCHA** to prevent spam
5. **Sanitize all inputs** on the backend (never trust client-side)

### Regular Security Checks:

**Monthly:**
- Review Dependabot alerts (if any dependencies are added)
- Check GitHub Security tab for any detected issues
- Review repository access

**Before Major Updates:**
- Scan for hardcoded secrets: `git log -p | grep -i "api[_-]key\|secret\|password"`
- Review all new files before committing

## Current Form Handling

⚠️ **Important:** Your contact forms currently use `alert()` for submission. This is fine for testing, but for production you should:

1. **Use a form service:**
   - [Formspree](https://formspre.io) - Free tier available
   - [Netlify Forms](https://www.netlify.com/products/forms/) - If you move to Netlify
   - [Google Forms](https://www.google.com/forms/) - Free but basic
   - [Basin](https://usebasin.com/) - Privacy-focused

2. **Or build a backend:**
   - Use serverless functions (Vercel, Netlify, AWS Lambda)
   - Never expose backend credentials in client code
   - Always validate and sanitize on the server

## What to Do If You Accidentally Commit a Secret

1. **Immediately rotate/regenerate** the exposed credential
2. **Remove it from git history:**
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch path/to/secret/file" \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. **Force push** (only if safe): `git push --force --all`
4. **Contact GitHub Support** if it was pushed to a public repo

## Resources

- [GitHub Security Best Practices](https://docs.github.com/en/code-security/getting-started/best-practices-for-securing-your-repository)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

## Questions?

If you're unsure whether something is secure, ask before committing!
