const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = counter.textContent;
counterValue = 0;

const minusClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
const plusClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

buttonMinus.addEventListener("click", minusClick);
buttonPlus.addEventListener("click", plusClick);
