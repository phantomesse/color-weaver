/**
 * @typedef {Object} LibraryColor
 * @property {string} name
 * @property {hex} name
 */

import { normalizeHex } from '../utils/hex.mjs';

export default class Library {
  /**
   * @param {string} name library name
   * @param {LibraryColor} colors
   */
  constructor(name, colors) {
    this.name = name;
    this.colors = colors.map((color) => ({
      hex: normalizeHex(color.hex),
      name: color.name,
    }));
  }

  /**
   * @param {string} hex
   * @returns {string|undefined}
   */
  getColorName(hex) {
    for (const color of this.colors) {
      if (color.hex === hex) return color.name;
    }
    return undefined;
  }
}
