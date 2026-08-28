/**
 * Normalizes a given hex code. (e.g. #FFF --> #ffffff).
 *
 * @param {string} hex
 * @returns {string} normalized hex code
 */
export function normalizeHex(hex) {
  if (!hex.startsWith('#')) return normalizeHex(`#${hex}`);
  if (hex.length === 4) {
    return normalizeHex(
      '#' +
        hex
          .substring(1)
          .split()
          .map((letter) => `${letter}${letter}`)
          .join(''),
    );
  }
  return hex.toLowerCase();
}
