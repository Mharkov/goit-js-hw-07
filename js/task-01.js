const listRef = document.querySelectorAll('.item')

console.log(`В списке ${listRef.length} категории.`)

listRef.forEach(element=>{
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title}\nКоличество элементов: ${itemsLength}`);
});