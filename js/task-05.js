const inputRefn = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')
inputRefn.addEventListener('input', event =>{
 inputRefn.value === ""? outputRef.textContent = 'незнакомец': outputRef.textContent=event.target.value

})