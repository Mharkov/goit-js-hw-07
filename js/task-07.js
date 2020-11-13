const  inputTypeRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

 inputTypeRef.addEventListener('input', event =>{
  textRef.style.fontSize=event.target.value+"px"
 
});
