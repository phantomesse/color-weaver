import test from 'node:test';
import assert from 'node:assert';
import { darken, lighten } from '../../js/utils/manipulator.mjs';
import HSL from '../../js/model/hsl.mjs';

test(lighten.name, () => {
  assert.deepEqual(lighten(new HSL(123, 50, 50), 20), new HSL(123, 50, 70));
  assert.deepEqual(lighten(new HSL(123, 50, 50), 60), new HSL(123, 50, 100));
});

test(darken.name, () => {
  assert.deepEqual(darken(new HSL(123, 50, 50), 20), new HSL(123, 50, 30));
  assert.deepEqual(darken(new HSL(123, 50, 50), 60), new HSL(123, 50, 0));
});
