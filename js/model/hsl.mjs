export default class HSL {
  /**
   * @param {number} h hue [0, 360]
   * @param {number} s saturation [0, 100]
   * @param {number} l luminosity [0, 100]
   */
  constructor(h, s, l) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
}
