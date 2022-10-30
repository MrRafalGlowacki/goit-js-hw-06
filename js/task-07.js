const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const initialInpVal = input.value;
text.style.fontSize = initialInpVal + "px";

input.addEventListener("input", () => {
  const inpVal = input.value;
  text.style.fontSize = inpVal + "px";
});
