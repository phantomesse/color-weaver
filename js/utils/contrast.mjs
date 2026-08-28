import RGB from '../model/rgb.mjs';
import { hexToHsl, hslToHex, hslToRgb, rgbToHsl } from './converter.mjs';
import { darken, desaturate, lighten, saturate } from './manipulator.mjs';

export const AA_NORMAL_TEXT_CONTRAST_RATIO = 4.5;
export const AA_LARGE_TEXT_CONTRAST_RATIO = 3;

/**
 * Returns a color that is suitable for text displayed on top of given color.
 *
 * @param {string} hex
 * @param {number} contrastRatio
 * @returns {string} contrasting color in hex code
 */
export function getContrastingColor(hex, contrastRatio) {
  const hsl = hexToHsl(hex);
  return hslToHex(_getContrastingColor(hsl, hsl, contrastRatio));
}

/**
 * @param {HSL} originalHsl
 * @param {HSL} currentHsl
 * @param {number} contrastRatio
 * @returns {HSL}
 */
function _getContrastingColor(originalHsl, currentHsl, contrastRatio) {
  if (_hasAcceptableContrast(originalHsl, currentHsl, contrastRatio)) {
    return currentHsl;
  }

  // Try lightening the color.
  if (currentHsl.l < 100 && currentHsl.l >= originalHsl.l) {
    const lighterHsl = lighten(currentHsl, 1);
    const contrastingColor = _getContrastingColor(
      originalHsl,
      lighterHsl,
      contrastRatio,
    );
    if (contrastingColor !== undefined) return contrastingColor;
  }

  // Try darkening the color.
  if (currentHsl.l > 0 && currentHsl.l <= originalHsl.l) {
    const darkerHsl = darken(currentHsl, 1);
    const contrastingColor = _getContrastingColor(
      originalHsl,
      darkerHsl,
      contrastRatio,
    );
    if (contrastingColor !== undefined) return contrastingColor;
  }

  return undefined;
}

/**
 * @param {HSL} hsl1
 * @param {HSL} hsl2
 * @param {HSL} contrastRatio
 * @returns {boolean} whether the contrast ratio is high enough
 */
const _hasAcceptableContrast = (hsl1, hsl2, contrastRatio) =>
  _getContrastRatio(hslToRgb(hsl1), hslToRgb(hsl2)) >= contrastRatio;

/**
 * @param {RGB} rgb1
 * @param {RGB} rgb2
 * @returns {number} contrast ratio
 */
function _getContrastRatio(rgb1, rgb2) {
  const luminance1 = _getLuminance(rgb1);
  const luminance2 = _getLuminance(rgb2);
  return luminance1 > luminance2
    ? (luminance1 + 0.05) / (luminance2 + 0.05)
    : (luminance2 + 0.05) / (luminance1 + 0.05);
}

/**
 * @param {RGB} rgb
 * @returns {number} luminance
 */
function _getLuminance(rgb) {
  const { r, g, b } = rgb;
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
