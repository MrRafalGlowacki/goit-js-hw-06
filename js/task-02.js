const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const ul = document.querySelector("#ingredients");
  const addLi = document.createElement("li");
  addLi.classList.add("item")
  addLi.textContent = element;
  ul.append(addLi);
});
