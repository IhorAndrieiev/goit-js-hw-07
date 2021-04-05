// const navUlRef = document.querySelector('#categories ul');
// console.log('first Ul:', navUlRef);
// const navAllUlRef = document.querySelectorAll('ul');
// console.log('Все Ul:', navAllUlRef.length);

 //const navAllLiItemRef = document.querySelectorAll('li.item');
//console.log(navAllLiItemRef[0].children[1], 'Все Li:', navAllLiItemRef.length);
//console.dir(navAllLiItemRef[0].children[1].children.length,) 
// const navUlChildrenRef = navUlRef.querySelector('ul');
// console.log('Children Ul:', navUlRef);

// const navItemsRef = document.querySelectorAll('h2');
// console.log('Children Ul:', navItemsRef);
const navAllH2Ref = document.querySelectorAll('ul#categories h2');
// console.log('Children Ul:', nav1Ref, 'Категория:', nav1Ref[0].textContent, 'Категория:', nav1Ref[1].textContent, 'Категория:', nav1Ref[2].textContent);
// const navUlRef = document.querySelector('ul#categories');
// console.log('first Ul:', navUlRef);

console.log('ВАРИАНТ 1 РЕШЕНИЯ');
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

console.log('ВАРИАНТ 2 РЕШЕНИЯ');

const navAllLiItemsRef = document.querySelectorAll('ul#categories li.item');
console.log('Children Ul#categories:', navAllLiItemsRef, 'его длина равна: =', navAllLiItemsRef.length, 'В списке ', navAllLiItemsRef.length, 'категории ');




const navLiItemsFirstRef = document.querySelector('ul#categories li.item');

const firstChildNavItemOfFirstChildUlCategoriesRef = navLiItemsFirstRef.firstElementChild.textContent;
console.log('Категория:', firstChildNavItemOfFirstChildUlCategoriesRef);

const lastChildNavItemOfFirstChildUlCategoriesRef = navLiItemsFirstRef.lastElementChild.children.length;
console.log('Количество элементов:', lastChildNavItemOfFirstChildUlCategoriesRef);

const childrenAllNavItemOfFirstChildUlCategoriesRef = navLiItemsFirstRef.firstElementChild.nextElementSibling.textContent;
console.log('Эти элементы:', childrenAllNavItemOfFirstChildUlCategoriesRef);



const firstChildNavItemOfSecondChildUlCategoriesRef = navLiItemsFirstRef.nextElementSibling.firstElementChild.textContent;
console.log('Категория:', firstChildNavItemOfSecondChildUlCategoriesRef)

const lastChildNavItemOfSecondChildUlCategoriesRef = navLiItemsFirstRef.nextElementSibling.lastElementChild.children.length;
console.log('Количество элементов:', lastChildNavItemOfSecondChildUlCategoriesRef);

const childrenAllNavItemOfSecondChildUlCategoriesRef = navLiItemsFirstRef.nextElementSibling.firstElementChild.nextElementSibling.textContent;
console.log('Эти элементы:', childrenAllNavItemOfSecondChildUlCategoriesRef);



const firstChildNavItemOfLastChildUlCategoriesRef = navLiItemsFirstRef.nextElementSibling.nextElementSibling.firstElementChild.textContent;
console.log('Категория:', firstChildNavItemOfLastChildUlCategoriesRef)

const lastChildNavItemOfLastChildUlCategoriesRef = navLiItemsFirstRef.nextElementSibling.nextElementSibling.lastElementChild.children.length;
console.log('Количество элементов:', lastChildNavItemOfLastChildUlCategoriesRef);

const childrenAllNavItemOfLastChildUlCategoriesRef = navLiItemsFirstRef.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent;
console.log('Эти элементы:', childrenAllNavItemOfLastChildUlCategoriesRef);


console.log('ВАРИАНТ 3 РЕШЕНИЯ');

const navAllRef = document.querySelector('ul#categories');
//console.log(navAllRef);

const refs = {
    selectedListId: navAllRef,
    getListElem: navAllLiItemsRef
};

console.log(`В списке : ${refs.selectedListId.childElementCount} категории`);

refs.getListElem.forEach((element) => {
    console.log(`Категория: ${element.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${element.lastChild.previousSibling.childElementCount}`);
});


console.log('ВАРИАНТ 4 РЕШЕНИЯ');

console.log(`В списке :`, navAllLiItemsRef.length, `категории`);
     navAllLiItemsRef.forEach(element => {
         console.log(`Категория:`, element.firstElementChild.textContent);
         console.log(`Количество элементов:`, element.lastChild.previousSibling.childElementCount);
      }); 
    
//  } console.log(fff(navAllLiItemsRef))

console.log('ВАРИАНТ 5 РЕШЕНИЯ');

const countItems = navAllLiItemsRef.length;
console.log('В списке', countItems, 'категории');

navAllLiItemsRef.forEach(el => {
    const title = el.querySelector('h2').textContent;
    const count = el.querySelectorAll('li').length;
    console.log(`Категория: ${title}, Количество элементов: ${count}`)
})

console.log('ВАРИАНТ 6 РЕШЕНИЯ');
const totalCategories = document.querySelectorAll('.item');
console.log('В списке', totalCategories.length, 'категории');
const categoriesArray = [...totalCategories].map(catigories =>
    `Категория: ${catigories.firstElementChild.textContent} 
    Количество элементов: ${catigories.lastElementChild.children.length}`).join('\n')
console.log(categoriesArray);