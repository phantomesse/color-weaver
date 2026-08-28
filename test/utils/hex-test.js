import test from 'node:test';
import assert from 'node:assert';
import { normalizeHex } from '../../js/utils/hex.mjs';

test(normalizeHex.name, () => {
  assert.strictEqual(normalizeHex('#fff'), '#ffffff');

  assert.strictEqual(normalizeHex('#ffffff'), '#ffffff');

  assert.strictEqual(normalizeHex('fff'), '#ffffff');

  assert.strictEqual(normalizeHex('ffffff'), '#ffffff');

  assert.strictEqual(normalizeHex('#FFF'), '#ffffff');

  assert.strictEqual(normalizeHex('#FFFFFF'), '#ffffff');

  assert.strictEqual(normalizeHex('FFF'), '#ffffff');

  assert.strictEqual(normalizeHex('FFFFFF'), '#ffffff');
});
