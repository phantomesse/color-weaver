import { createElement } from '../utils/component.mjs';
import Color from '../model/color.mjs';
import {
  AA_LARGE_TEXT_CONTRAST_RATIO,
  AA_NORMAL_TEXT_CONTRAST_RATIO,
  getContrastingColor,
} from '../utils/contrast.mjs';

export class ColorSwatchComponent extends HTMLElement {
  connectedCallback() {
    this.color = new Color(this.getAttribute('hex'));
    const normalTextColor = getContrastingColor(
      this.color.hex,
      AA_NORMAL_TEXT_CONTRAST_RATIO,
    );
    const largeTextColor = getContrastingColor(
      this.color.hex,
      AA_LARGE_TEXT_CONTRAST_RATIO,
    );
    this.style.setProperty('--swatch-color', this.color.hex);
    this.style.setProperty('--selection-bg-color', normalTextColor);
    this.style.color = normalTextColor;

    const nameElement = createElement('h2', this.color.name);
    nameElement.style.color = largeTextColor;
    this.appendChild(nameElement);

    // Add hex, rgb, and hsl values.
    const valuesContainer = document.createElement('div');
    valuesContainer.className = 'values-container';
    this.appendChild(valuesContainer);

    valuesContainer.appendChild(createElement('label', 'hex'));
    valuesContainer.appendChild(createElement('span', this.color.hex));

    valuesContainer.appendChild(createElement('label', 'rgb'));
    valuesContainer.append(
      createElement(
        'span',
        `${this.color.rgb.r}, ${this.color.rgb.g}, ${this.color.rgb.b}`,
      ),
    );

    valuesContainer.appendChild(createElement('label', 'hsl'));
    valuesContainer.appendChild(
      createElement(
        'span',
        `${this.color.hsl.h}, ${this.color.hsl.s}, ${this.color.hsl.l}`,
      ),
    );
  }
}
