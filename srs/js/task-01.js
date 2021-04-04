// const navUlRef = document.querySelector('#categories ul');
// console.log('first Ul:', navUlRef);
// const navAllUlRef = document.querySelectorAll('ul');
// console.log('Все Ul:', navAllUlRef.length);

 //const navAllLiItemRef = document.querySelectorAll('li.item');
//console.log(navAllLiItemRef[0].children[1], 'Все Li:', navAllLiItemRef.length);
//console.dir(navAllLiItemRef[0].children[1].children.length,) 
// const navUlChildrenRef = navUlRef.querySelector('ul');
// console.log('Children Ul:', navUlRef);
//const navRef = document.querySelectorAll('ul#categories li.item');
//console.log('Children Ul#categories:', navRef, 'его длина равна: =', navRef.length);
// const navItemsRef = document.querySelectorAll('h2');
// console.log('Children Ul:', navItemsRef);
const navAllH2Ref = document.querySelectorAll('ul#categories h2');
// console.log('Children Ul:', nav1Ref, 'Категория:', nav1Ref[0].textContent, 'Категория:', nav1Ref[1].textContent, 'Категория:', nav1Ref[2].textContent);
// const navUlRef = document.querySelector('ul#categories');
// console.log('first Ul:', navUlRef);
const navAllLiRef = document.querySelectorAll('.item');
console.log('Все Li.item:', navAllLiRef, 'его длина равна: =', navAllLiRef.length,);


const navFirstLiItemRef = document.querySelector('.item ul');

//console.log('Все Li.item:', navFirstLiItemRef, navFirstLiItemRef);

console.log('Категория:', navAllH2Ref[0].textContent,);
console.log('Количество элементов:', navAllLiRef[0].children[1].children.length);
console.log('Категория:', navAllH2Ref[1].textContent,);
console.log('Количество элементов:', navAllLiRef[1].children[1].children.length);
console.log('Категория:', navAllH2Ref[2].textContent,);
console.log('Количество элементов:', navAllLiRef[2].children[1].children.length);