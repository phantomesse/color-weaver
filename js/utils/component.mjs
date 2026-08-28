/**
 * @param {string} tagName
 * @param {string} textContent
 */
export function createElement(tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
}
