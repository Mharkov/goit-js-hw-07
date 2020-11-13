let counterValue =0

function decrement ()  { 
    counterValue-=1
    htmlValue.textContent=counterValue
}
function increment ()  { 
    counterValue+=1

    htmlValue.textContent=counterValue
}


const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const htmlValue = document.querySelector('#value')

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);