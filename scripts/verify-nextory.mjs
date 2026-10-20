import assert from 'node:assert/strict';

const base = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
const response = await fetch(`${base}/products/ai-note`);
assert.equal(response.status, 200, 'NeXtory route must respond');
const html = await response.text();
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Page needs one primary heading');
for (const expected of ['NeXtory', 'AI-Notes', 'nextory-sample-panel', 'Interactive illustration.', 'nextory-workflow', 'href="/demo"', 'href="/contact"']) {
  assert.ok(html.includes(expected), `Missing page content: ${expected}`);
}
assert.match(html, /aria-pressed="true"[^>]*>Summary/);
assert.equal((await fetch(`${base}/images/products/notes-ai.jpg`)).status, 200, 'Product photo must exist');
assert.equal((await fetch(`${base}/reference/assets/products/nextory-hero.webp`)).status, 200, 'NeXtory artwork must exist');
assert.match(html, /Replay waveform illustration/);
assert.match(html, /No audio is being recorded/);
for (const section of ['nextory-features-title', 'nextory-setup-title', 'nextory-comparison-title', 'nextory-example-title', 'nextory-retention-title', 'nextory-plans-title']) {
  assert.ok(html.includes(`id="${section}"`), `Missing required product information section: ${section}`);
}
for (const information of ['$0', '$29', '$49', '5 meeting hours', '40 meeting hours', '60 meeting hours', 'Unlimited meeting hours', '5-day default', '7 write-up styles', 'How licensing works']) {
  assert.ok(html.includes(information), `Missing recorded product detail: ${information}`);
}
assert.equal((await fetch(`${base}/products/ai-hire`)).status, 200, 'Other product routes must remain reachable');
console.log('NeXtory route, default preview, CTA links, photo and sibling product checks passed.');
