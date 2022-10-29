function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const input = document.querySelector("[type='number']");
const mainDiv = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const elemArray = [];
const counter = document.createElement("span");
let counterValue = counter.textContent;
counterValue = 0;
const controls = document.querySelector("#controls");
controls.append(counter);
let size = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    elemArray.push(divBox);
    mainDiv.append(divBox);
    counterValue += 1;
    counter.textContent = `You've created ${counterValue} square(s)`;
    size += 10;
  }
}

const removeBoxes = (amount) => {
  if (amount <= elemArray.length) {
    for (let i = 1; i <= amount; i += 1) {
      const firstDiv = document.querySelector("#boxes>div");
      firstDiv.remove();
      elemArray.splice(0, 1);
      counterValue -= 1;
      counter.textContent = `You've created ${counterValue} square(s)`;
      size -= 10;
    }
  } else alert("You can not remove more squares that you've created");
};

create.addEventListener("click", () => createBoxes(Number(input.value)));
destroy.addEventListener("click", () => removeBoxes(Number(input.value)));
