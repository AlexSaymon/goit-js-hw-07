function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonSelector = document.querySelector(`.change-color`);

buttonSelector.addEventListener(`click`, (event) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  const spanColor = document.querySelector(`.color`);
  spanColor.textContent = randomColor;
});
