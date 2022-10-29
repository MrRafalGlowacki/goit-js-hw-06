const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", () => {
  const inpVal = input.value;
  text.style.fontSize = inpVal + "px";
});
