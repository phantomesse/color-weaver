/**
 * @param {string} tagName
 * @param {string} textContent
 * @returns {HTMLElement}
 */
export function createElement(tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
}

/**
 * @param {string} iconName
 * @returns {HTMLSpanElement}
 */
export function createIcon(iconName) {
  const element = document.createElement('span');
  element.className = 'material-symbols-outlined';
  element.textContent = iconName;
  return element;
}
