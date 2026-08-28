import { ColorSwatchComponent } from './component/color-swatch.mjs';
import { addSwatchCountChangeEventListener } from './event/swatch-count-change-event.mjs';
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

// Update grid flow based on number of color swatches.
addSwatchCountChangeEventListener(setColorSwatchGridFlow);
setColorSwatchGridFlow(randomHexValues.length);

function setColorSwatchGridFlow(colorSwatchCount) {
  const mainElement = document.getElementsByTagName('main')[0];

  if (colorSwatchCount % 3 === 0) {
    mainElement.style.display = 'grid';
    mainElement.style.gridTemplateColumns = 'repeat(3, 1fr)';
    return;
  }

  if (colorSwatchCount % 4 === 0) {
    mainElement.style.display = 'grid';
    mainElement.style.gridTemplateColumns = 'repeat(4, 1fr)';
    return;
  }

  if (colorSwatchCount % 5 === 0) {
    mainElement.style.display = 'grid';
    mainElement.style.gridTemplateColumns = 'repeat(5, 1fr)';
    return;
  }

  mainElement.style.display = 'flex';
}
