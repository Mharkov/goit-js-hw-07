const div = document.querySelector("#boxes")
  const btnRender = document.querySelector('button[data-action="render"]');
  const btnDestroy = document.querySelector('button[data-action="destroy"]');
  btnRender.addEventListener('click', getAmount);
  btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  console.log(amount)
  createBoxes(amount);
}


function createBoxes(amount) {
  
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i++) {
     const listin = document.createElement("div");
     fragment.appendChild(listin);
     div.appendChild(fragment);
}

      
} 
  
function destroyBoxes() {
  boxes.innerHTML = '';
}
  
  
  


  

