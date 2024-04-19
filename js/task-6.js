const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", (event) => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesDiv.innerHTML = "";
  const boxes = Array.from({ length: amount }, (_, i) => {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    return box;
  });
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
