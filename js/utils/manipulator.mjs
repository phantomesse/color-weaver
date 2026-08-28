import HSL from '../model/hsl.mjs';

/**
 * @param {HSL} hsl
 * @param {number} discreteAmount amount to lighten [0, 100]
 * @returns {HSL}
 */
export const lighten = (hsl, discreteAmount) =>
  new HSL(hsl.h, hsl.s, Math.min(hsl.l + discreteAmount, 100));

/**
 * @param {HSL} hsl
 * @param {number} discreteAmount amount to darken [0, 100]
 * @returns {HSL}
 */
export const darken = (hsl, discreteAmount) =>
  new HSL(hsl.h, hsl.s, Math.max(hsl.l - discreteAmount, 0));

/**
 * @param {HSL} hsl
 * @param {number} discreteAmount amount to saturate [0, 100]
 * @returns {HSL}
 */
export const saturate = (hsl, discreteAmount) =>
  new HSL(hsl.h, Math.min(hsl.s + discreteAmount, 100), hsl.l);

/**
 * @param {HSL} hsl
 * @param {number} discreteAmount amount to desaturate [0, 100]
 * @returns {HSL}
 */
export const desaturate = (hsl, discreteAmount) =>
  new HSL(hsl.h, Math.max(hsl.s - discreteAmount, 0), hsl.l);
