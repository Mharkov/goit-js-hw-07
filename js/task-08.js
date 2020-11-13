// function createBoxes ()  { 
//     const listing = document.createElement('div');
//     div.append(listing)
// function destroyBoxes ()  { 
//     div.remove(listing)
// }


      
  const div = document.querySelector("#boxes")
  
  const btnRender = document.querySelector('button[data-action="render"]');
  const btnDestroy = document.querySelector('button[data-action="destroy"]');
  
   
  btnRender.addEventListener('click', ()=> {
    const listing = document.createElement('div');

    console.log(listing)
    div.append(listing)
  });
  
  
  
  btnDestroy.addEventListener('click', () =>{
    console.log('listing')
    div.removeChild(listing)

  });


  

