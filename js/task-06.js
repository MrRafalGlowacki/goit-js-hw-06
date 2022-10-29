const form = document.querySelector("input");
const lengthAtrib = Number(form.getAttribute("data-length"));

const changeCSS = () => (event) => {
  const len = event.target.value.length;
  if (len !== lengthAtrib) {
    form.classList.remove("valid");
    form.classList.add("invalid");
  } else {
    form.classList.remove("invalid")
    form.classList.add("valid");
  }
};

form.addEventListener("blur", changeCSS());
