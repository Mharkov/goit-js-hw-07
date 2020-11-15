const divBoxes = document.querySelector('#boxes');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
btnRender.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const listin = document.createElement('div');
    const size = basicSize + i * 10;
    listin.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(listin);
    divBoxes.appendChild(fragment);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}
