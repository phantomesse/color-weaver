import { ColorSwatchComponent } from './component/color-swatch.mjs';
import Color from './model/color.mjs';
import { getRandomHex } from './utils/libraries.mjs';

customElements.define('color-swatch', ColorSwatchComponent);

const randomHexValues = [
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
  getRandomHex(),
];

const mainElement = document.getElementsByTagName('main')[0];
for (const hex of randomHexValues) {
  const colorSwatchComponent = document.createElement('color-swatch');
  colorSwatchComponent.setAttribute('hex', hex);
  mainElement.appendChild(colorSwatchComponent);
}
