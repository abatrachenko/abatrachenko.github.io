#!/usr/bin/env node
/*
 * verify-site harness: loads all published pages in headless Chromium,
 * fails on uncaught JS errors, asserts section order and CTA consistency,
 * and captures desktop + mobile full-page screenshots.
 *
 * Requires a local server on BASE_URL (python3 -m http.server 8080) and the
 * globally installed Playwright (PLAYWRIGHT_BROWSERS_PATH is preconfigured).
 */
const path = require('path');
const fs = require('fs');

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = require('/opt/node22/lib/node_modules/playwright'));
}

const BASE_URL = process.env.VERIFY_BASE_URL || 'http://localhost:8080';
const OUT_DIR = path.join(__dirname, '..', 'out');
const PAGES = ['index.html', 'privacy.html', 'terms.html'];

// Update these constants in the same commit as any intentional change.
const EXPECTED_SECTION_ORDER = ['case-studies', 'work', 'about', 'testimonials', 'consulting', 'process', 'faq', 'bio'];
// Standard CTA texts (the arrow is the rendered &rarr; entity).
const ALLOWED_CTA_TEXTS = ['Book a call', 'Book a strategy call', 'Book a strategy call →'];

// External hosts are blocked in the sandbox; resource failures for them are expected noise.
const IGNORABLE_CONSOLE = /Failed to load resource|net::ERR_/;

const failures = [];
const info = [];

async function scrollThrough(page) {
  // Fire every IntersectionObserver fade-in before screenshotting.
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 600) {
    await page.evaluate(v => window.scrollTo(0, v), y);
    await page.waitForTimeout(100);
  }
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}

async function checkPage(browser, pageName, viewport, screenshotName) {
  const page = await browser.newPage({ viewport });
  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('console', m => {
    if (m.type() === 'error' && !IGNORABLE_CONSOLE.test(m.text())) consoleErrors.push(m.text());
  });

  await page.goto(`${BASE_URL}/${pageName}`, { waitUntil: 'load' });
  // Exercise scroll handlers (a past crash only fired on scroll).
  await page.mouse.wheel(0, 3000);
  await page.waitForTimeout(500);
  await page.mouse.wheel(0, -1500);
  await page.waitForTimeout(300);

  if (pageName === 'index.html') {
    const order = await page.$$eval('main section[id]', els => els.map(e => e.id));
    if (JSON.stringify(order) !== JSON.stringify(EXPECTED_SECTION_ORDER)) {
      failures.push(`section order is [${order.join(', ')}], expected [${EXPECTED_SECTION_ORDER.join(', ')}]`);
    } else {
      info.push(`section order OK: ${order.join(' > ')}`);
    }

    const ctas = await page.$$eval('a[href*="calendly"]', els =>
      els.map(e => e.textContent.trim().replace(/\s+/g, ' ')));
    const bad = ctas.filter(t => !ALLOWED_CTA_TEXTS.includes(t));
    if (bad.length) failures.push(`non-standard CTA text: ${JSON.stringify(bad)}`);
    else info.push(`CTAs OK (${ctas.length} found, all standardized)`);

    // Exercise every same-page anchor in the nav menu.
    const navAnchors = await page.$$eval('nav.nav-menu a[href^="#"]', els =>
      els.map(e => e.getAttribute('href').slice(1)));
    for (const id of navAnchors) {
      // DOM-dispatched click: still runs the smooth-scroll handler, but avoids
      // Playwright actionability flakiness on the sticky header.
      await page.$eval(`nav.nav-menu a[href="#${id}"]`, el => el.click());
      await page.waitForTimeout(600);
      const visible = await page.$eval('#' + id, el => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      if (!visible) failures.push(`anchor #${id} did not scroll into view`);
    }
    info.push(`nav anchors OK (${navAnchors.length} checked)`);
  }

  if (screenshotName) {
    await scrollThrough(page);
    const file = path.join(OUT_DIR, screenshotName);
    await page.screenshot({ path: file, fullPage: true });
    info.push(`screenshot: ${file}`);
  }

  if (pageErrors.length) failures.push(`${pageName}: uncaught JS errors: ${pageErrors.join(' | ')}`);
  if (consoleErrors.length) failures.push(`${pageName}: console errors: ${consoleErrors.join(' | ')}`);
  if (!pageErrors.length && !consoleErrors.length) info.push(`${pageName} (${viewport.width}px): no JS errors`);

  await page.close();
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();

  const desktop = { width: 1440, height: 900 };
  const mobile = { width: 390, height: 844 };

  for (const p of PAGES) {
    await checkPage(browser, p, desktop, p === 'index.html' ? 'desktop-full.png' : null);
  }
  await checkPage(browser, 'index.html', mobile, 'mobile-full.png');

  await browser.close();

  console.log(info.map(l => '  ' + l).join('\n'));
  if (failures.length) {
    console.error('\n' + failures.map(l => 'FAIL: ' + l).join('\n'));
    process.exit(1);
  }
  console.log('\nverify-site: PASS');
})().catch(e => {
  console.error('FAIL: harness error: ' + e.message);
  process.exit(1);
});
