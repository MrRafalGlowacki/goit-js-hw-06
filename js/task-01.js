const categories = document.querySelectorAll(".item");
const numberOfCategories = [...categories].length;
console.log("Number of categories: " + numberOfCategories);

[...categories].forEach(element => {
  const header = element.querySelector("h2");
  const text = header.textContent;

  const list = element.querySelectorAll("li");
  const elements = [...list];

  console.log("Category: " + text);
  console.log("Elements: " + elements.length);
});
