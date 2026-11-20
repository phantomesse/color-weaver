import { ColorSwatchComponent } from './component/color-swatch.mjs';
import { addSwatchCountChangeEventListener } from './event/swatch-count-change-event.mjs';
import { getRandomHex } from './utils/libraries.mjs';
import { getRandomNumber } from './utils/random.mjs';

customElements.define('color-swatch', ColorSwatchComponent);

// Generate a random number of color swatches.
const mainElement = document.getElementsByTagName('main')[0];
const colorSwatchCount = getRandomNumber(2, 10);
for (let i = 0; i < colorSwatchCount; i++) {
  const colorSwatchComponent = document.createElement('color-swatch');
  colorSwatchComponent.setAttribute('hex', getRandomHex());
  mainElement.appendChild(colorSwatchComponent);
}

// Update grid flow based on number of color swatches.
addSwatchCountChangeEventListener(setColorSwatchGridFlow);
setColorSwatchGridFlow(colorSwatchCount);

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

  if (colorSwatchCount % 7 === 0) {
    mainElement.style.display = 'grid';
    mainElement.style.gridTemplateColumns = 'repeat(7, 1fr)';
    return;
  }

  mainElement.style.display = 'flex';
  mainElement.style.flexDirection = colorSwatchCount > 10 ? 'column' : 'row';
}
