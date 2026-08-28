/**
 * @param {number} min - inclusive
 * @param {number} max - exclusive
 * @returns {number} random integer
 */
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
