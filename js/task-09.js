function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function invertColor(hex, bw) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

const firstColor = getRandomHexColor();
const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");
const changeColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  const btnColor = getRandomHexColor();
  btn.style.backgroundColor = btnColor;
  btn.style.border = "solid 2px" + getRandomHexColor();
  body.style.color = invertColor(randomColor, 1);
  btn.style.color = invertColor(btnColor, 1);
};

body.style.backgroundColor = firstColor;
colorSpan.textContent = firstColor;
body.style.color = invertColor(firstColor, 1);
btn.addEventListener("click", changeColor);
