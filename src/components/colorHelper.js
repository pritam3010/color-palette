import chroma from "chroma-js";

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPallete) {
  let newPallete = {
    paletteName: starterPallete.paletteName,
    emoji: starterPallete.emoji,
    id: starterPallete.emoji,
    colors: {}
  };

  for (let level of levels) {
    newPallete.colors[level] = [];
  }
  for (let color of starterPallete.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPallete.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .alpha(1)
          .css()
      });
    }
  }
  return newPallete;
}

function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}
function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export { generatePalette };