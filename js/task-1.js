const categories = document.querySelector("#categories");

const items = categories.querySelectorAll(".item");

console.log(`Total amount of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector(`h2`).textContent;

  const elements = item.querySelectorAll(`li`);

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
