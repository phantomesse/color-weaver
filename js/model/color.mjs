import { hexToHsl, hexToRgb } from '../utils/converter.mjs';
import { normalizeHex } from '../utils/hex.mjs';
import { getColorNames } from '../utils/libraries.mjs';

export default class Color {
  constructor(hex) {
    this.hex = normalizeHex(hex);
    this.rgb = hexToRgb(this.hex);
    this.hsl = hexToHsl(this.hex);

    const names = getColorNames(hex);
    if (Array.isArray(names)) {
      this.name = names[0].colorName;
      this.alternateNames = names;
    } else {
      this.name = names;
    }
  }
}
