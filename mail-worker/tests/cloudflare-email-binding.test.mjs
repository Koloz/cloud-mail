import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cloudflareEmailBinding } from '../src/lib/cloudflare-email-binding.mjs';
test('Dola binding is isolated from existing mail domains', () => {
 const dola = {}, existing = {};
 assert.equal(cloudflareEmailBinding({DOLA_EMAIL:dola}, 'support@dolaaihub.com'), dola);
 assert.equal(cloudflareEmailBinding({DOLA_EMAIL:dola}, 'support@other.test'), null);
 assert.equal(cloudflareEmailBinding({DOLA_EMAIL:dola,email:existing}, 'support@other.test'), existing);
 assert.equal(cloudflareEmailBinding({email:existing}, 'support@dolaaihub.com'), existing);
 assert.equal(cloudflareEmailBinding({DOLA_EMAIL:dola}, 'support@dolaaihub.com.evil.test'), null);
});
