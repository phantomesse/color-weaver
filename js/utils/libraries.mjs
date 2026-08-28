import Library from '../model/library.mjs';

import CrayolaColors from '../../data/library/crayola.json' with { type: 'json' };
import PantoneColors from '../../data/library/pantone.json' with { type: 'json' };
import WebColors from '../../data/library/web.json' with { type: 'json' };
import { normalizeHex } from './hex.mjs';
import { getRandomNumber } from './random.mjs';

const LIBRARIES = [
  new Library('Crayola', CrayolaColors.colors),
  new Library('Pantone', PantoneColors.colors),
  new Library('Web', WebColors.colors),
];

/**
 * @param {string} hex
 * @returns {string|undefined|{ libraryName: string, colorName: string }[]}
 *          Returns a single string name if there is only one name, or a list of
 *          objects with the library name and color name.
 */
export function getColorNames(hex) {
  /** @typedef { libraryName: string, colorName: string }[] */ const names = [];
  for (const library of LIBRARIES) {
    const name = library.getColorName(normalizeHex(hex));
    if (name === undefined) continue;
    names.push({ libraryName: library.name, colorName: name });
  }
  if (names.length === 0) return undefined;

  const nameSet = new Set(names.map((name) => name.colorName));
  if (nameSet.size === 1) return nameSet.values().next().value;

  return names;
}

/** @returns {string} Returns a random hex string from one of the libraries. */
export function getRandomHex() {
  const library = LIBRARIES[getRandomNumber(0, LIBRARIES.length)];
  return library.colors[getRandomNumber(0, library.colors.length)].hex;
}
