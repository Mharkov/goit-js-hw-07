const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
    
  ];
  
  
const listCreat = (arr) => arr.forEach(element => {
    const ul = document.querySelector("#ingredients")
    const listing = document.createElement('li')
        listing.textContent = element
        ul.append(listing)
    
  });
      
  listCreat(ingredients)