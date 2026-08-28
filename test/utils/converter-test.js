import test from 'node:test';
import assert from 'node:assert';
import {
  hexToHsl,
  hexToRgb,
  hslToHex,
  hslToRgb,
  rgbToHex,
  rgbToHsl,
} from '../../js/utils/converter.mjs';
import HSL from '../../js/model/hsl.mjs';
import RGB from '../../js/model/rgb.mjs';

test(hexToRgb.name, () => {
  assert.deepEqual(hexToRgb('#fff'), new RGB(255, 255, 255));
  assert.deepEqual(hexToRgb('#000'), new RGB(0, 0, 0));
  assert.deepEqual(hexToRgb('#96637B'), new RGB(150, 99, 123));
});

test(hexToHsl.name, () => {
  assert.deepEqual(hexToHsl('#fff'), new HSL(0, 0, 100));
  assert.deepEqual(hexToHsl('#000'), new HSL(0, 0, 0));
  assert.deepEqual(hexToHsl('#96637B'), new HSL(332, 20, 49));
});

test(rgbToHex.name, () => {
  assert.strictEqual(rgbToHex(new RGB(255, 255, 255)), '#ffffff');
  assert.strictEqual(rgbToHex(new RGB(0, 0, 0)), '#000000');
  assert.strictEqual(rgbToHex(new RGB(150, 99, 123)), '#96637b');
});

test(rgbToHsl.name, () => {
  assert.deepEqual(rgbToHsl(new RGB(255, 255, 255)), new HSL(0, 0, 100));
  assert.deepEqual(rgbToHsl(new RGB(0, 0, 0)), new HSL(0, 0, 0));
  assert.deepEqual(rgbToHsl(new RGB(150, 100, 123)), new HSL(332, 20, 49));
});

test(hslToHex.name, () => {
  assert.strictEqual(hslToHex(new HSL(0, 0, 100)), '#ffffff');
  assert.strictEqual(hslToHex(new HSL(0, 0, 0)), '#000000');
  assert.strictEqual(hslToHex(new HSL(332, 20, 49)), '#96647b');
});

test(hslToRgb.name, () => {
  assert.deepEqual(hslToRgb(new HSL(0, 0, 100)), new RGB(255, 255, 255));
  assert.deepEqual(hslToRgb(new HSL(0, 0, 0)), new RGB(0, 0, 0));
  assert.deepEqual(hslToRgb(new HSL(332, 20, 49)), new RGB(150, 100, 123));
});
