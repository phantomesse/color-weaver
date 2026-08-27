async function loadPalette(fileName) {
  const response = await fetch(`data/palettes/${fileName}`);
  const json = await response.json();
  console.log(json);
}

loadPalette('pantone.json');
