const inputVal = document.getElementById("validation-input");
const  inputRef = document.querySelector('#validation-input')
const TotalInputLength = parseInt(inputRef.getAttribute('data-length'),10)

inputRef.addEventListener('blur', (e) =>{
  
  if(inputVal.value.length === TotalInputLength) {
      
    inputRef.classList.add('valid') 
    inputRef.classList.remove('invalid')

  }  else{
     
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  }
  
  });