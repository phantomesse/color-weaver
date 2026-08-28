import test from 'node:test';
import assert from 'node:assert';
import {
  AA_LARGE_TEXT_CONTRAST_RATIO,
  AA_NORMAL_TEXT_CONTRAST_RATIO,
  getContrastingColor,
} from '../../js/utils/contrast.mjs';

test(getContrastingColor.name, () => {
  assert.deepEqual(
    getContrastingColor('#fff', AA_LARGE_TEXT_CONTRAST_RATIO),
    '#949494',
  );

  assert.deepEqual(
    getContrastingColor('#fff', AA_NORMAL_TEXT_CONTRAST_RATIO),
    '#757575',
  );

  assert.deepEqual(
    getContrastingColor('#000', AA_LARGE_TEXT_CONTRAST_RATIO),
    '#5c5c5c',
  );

  assert.deepEqual(
    getContrastingColor('#000', AA_NORMAL_TEXT_CONTRAST_RATIO),
    '#757575',
  );

  assert.deepEqual(
    getContrastingColor('#34329A', AA_LARGE_TEXT_CONTRAST_RATIO),
    '#8584d7',
  );

  assert.deepEqual(
    getContrastingColor('#34329A', AA_NORMAL_TEXT_CONTRAST_RATIO),
    '#abaae4',
  );

  assert.deepEqual(
    getContrastingColor('#ACD75B', AA_LARGE_TEXT_CONTRAST_RATIO),
    '#57771d',
  );

  assert.deepEqual(
    getContrastingColor('#ACD75B', AA_NORMAL_TEXT_CONTRAST_RATIO),
    '#425a16',
  );
});
