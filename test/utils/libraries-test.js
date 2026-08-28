import test from 'node:test';
import assert from 'node:assert';
import { getColorNames } from '../../js/utils/libraries.mjs';

test(getColorNames.name, () => {
  assert.strictEqual(getColorNames('#FFF'), 'White');
  assert.strictEqual(getColorNames('#000000'), 'Black');
  assert.strictEqual(getColorNames('#6EA2D5'), 'Little Boy Blue');
  assert.strictEqual(getColorNames('#ed3'), undefined);
});
