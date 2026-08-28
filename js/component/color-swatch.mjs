import { createElement, createIcon } from '../utils/component.mjs';
import Color from '../model/color.mjs';
import {
  AA_LARGE_TEXT_CONTRAST_RATIO,
  AA_NORMAL_TEXT_CONTRAST_RATIO,
  getContrastingColor,
} from '../utils/contrast.mjs';
import { getRandomNumber } from '../utils/random.mjs';

export class ColorSwatchComponent extends HTMLElement {
  static observedAttributes = ['hex'];

  constructor() {
    super();
    const self = this;

    // Create color name element.
    this.colorNameElement = document.createElement('h2');

    // Create values element.
    this.hexValueElement = document.createElement('span');
    this.rgbValueElement = document.createElement('span');
    this.hslValueElement = document.createElement('span');

    // Create edit color input and label.
    this.editColorInputElement = Object.assign(
      document.createElement('input'),
      { type: 'color' },
    );
    this.editColorInputElement.addEventListener('input', (event) => {
      self.setAttribute('hex', event.target.value);
    });
    this.editColorButtonElement = document.createElement('label');
    this.editColorButtonElement.appendChild(createIcon('edit'));

    // Create remove button.
    this.removeButtonElement = document.createElement('button');
    this.removeButtonElement.addEventListener('click', (_) => {
      self.remove();

      // Hide remove button if there is only one swatch.
      const colorSwatchComponents = document.querySelectorAll('color-swatch');
      for (const component of colorSwatchComponents) {
        component.removeButtonElement.style.display =
          colorSwatchComponents.length === 1 ? 'none' : 'flex';
      }
    });
    this.removeButtonElement.appendChild(createIcon('delete'));
  }

  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName !== 'hex') return;

    // Set bg and fg colors.
    const color = new Color(newValue);
    const normalTextColor = getContrastingColor(
      color.hex,
      AA_NORMAL_TEXT_CONTRAST_RATIO,
    );
    const largeTextColor = getContrastingColor(
      color.hex,
      AA_LARGE_TEXT_CONTRAST_RATIO,
    );
    this.style.setProperty('--swatch-color', color.hex);
    this.style.setProperty('--selection-bg-color', normalTextColor);
    this.style.color = normalTextColor;

    // Set color name.
    this.colorNameElement.textContent = color.name;
    this.colorNameElement.style.color = largeTextColor;

    // Add hex, RGB, and HSL values.
    this.hexValueElement.textContent = color.hex;
    this.rgbValueElement.textContent = `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`;
    this.hslValueElement.textContent = `${color.hsl.h}, ${color.hsl.s}, ${color.hsl.l}`;

    // Set color on edit color action.
    const editColorId = `edit-color-${color.hex}-${getRandomNumber(0, 100)}`;
    this.editColorInputElement.id = editColorId;
    this.editColorInputElement.value = color.hex;
    this.editColorButtonElement.setAttribute('for', editColorId);
  }

  connectedCallback() {
    // Set up edit color action.
    const editColorContainer = Object.assign(document.createElement('div'), {
      className: 'edit-color-action',
    });
    editColorContainer.append(
      this.editColorInputElement,
      this.editColorButtonElement,
    );

    // Set up actions container.
    const actionsContainer = Object.assign(document.createElement('div'), {
      className: 'actions-container',
    });
    actionsContainer.append(editColorContainer, this.removeButtonElement);

    // Set up values container.
    const valuesContainer = Object.assign(document.createElement('div'), {
      className: 'values-container',
    });
    valuesContainer.append(
      createElement('label', 'hex'),
      this.hexValueElement,

      createElement('label', 'rgb'),
      this.rgbValueElement,

      createElement('label', 'hsl'),
      this.hslValueElement,
    );

    // Append elements to component.
    this.append(actionsContainer, this.colorNameElement, valuesContainer);
  }
}
