const input = document.querySelector("[type='number']");
const mainDiv = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const maxInput = Number(input.getAttribute("max"));
const counter = document.createElement("span");
let counterValue = counter.textContent;
counterValue = 0;
const controls = document.querySelector("#controls");
controls.append(counter);
let size = 30;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount <= maxInput) {
  for (let i = 1; i <= amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    mainDiv.append(divBox);
    counterValue += 1;
    counter.textContent = `You've created ${counterValue} square(s)`;
    size += 10;
  }} else alert("Please do not create more then 100 boxes at a time")
}

const removeBoxes = () => {
mainDiv.innerHTML = "";
size = 30;
counterValue = 0;
counter.textContent = `NO! You've destroyed them:(`;
  
};

create.addEventListener("click", () => createBoxes(Number(input.value)));
destroy.addEventListener("click", () => removeBoxes());
