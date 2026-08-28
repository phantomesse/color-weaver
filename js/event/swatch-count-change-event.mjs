const SWATCH_COUNT_CHANGE_EVENT_NAME = 'swatch-count-change';

/**
 * @callback SwatchCountChangeEventCallback
 * @param {number} colorSwatchCount
 */

/** @param {SwatchCountChangeEventCallback} callbackFn */
export function addSwatchCountChangeEventListener(callbackFn) {
  document.body.addEventListener(SWATCH_COUNT_CHANGE_EVENT_NAME, (_) => {
    callbackFn(document.querySelectorAll('color-swatch').length);
  });
}

export function dispatchSwatchCountChangeEvent() {
  document.body.dispatchEvent(new CustomEvent(SWATCH_COUNT_CHANGE_EVENT_NAME));
}
