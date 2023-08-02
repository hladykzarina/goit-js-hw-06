function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create');
const destroyBtn = document.querySelector('button[data-destroy');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = +controls.firstElementChild.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = new Array(amount)
    .fill(0)
    .map((item, idx) => {
      const size = 30 + idx * 10;
      const color = getRandomHexColor();
      return `<div style="width: ${size}px; height: ${size}px; background: ${color}"></div>`;
    })
    .join('');
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBoxes.amount.reset();
