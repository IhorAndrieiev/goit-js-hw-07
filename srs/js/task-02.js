const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

// const liTitleRef = ;

// const liTitleRef = document.createElement('li')
//       liTitleRef.classList.add('ingredients__item');
//       liTitleRef.textContent = ingredients;
 //ingredients.forEach(element => { element = document.createElement('li')}
//); ingredientsRef = [];


//ingredientsRef.appendChild(liTitleRef);
//console.log(liTitleRef);

// ingredients.forEach(el => {
//   const liTitleRef = document.createElement('li');
//   liTitleRef.classList.add('ingredients__item');
//   liTitleRef.textContent = el;
//   ingredientsRef.appendChild(liTitleRef);
//   return liTitleRef
// });

// const ingredientsEl = ingredients.map(ingredient => {
//   const liTitleRef = document.createElement('li');
//   liTitleRef.classList.add('ingredients__item');
//   liTitleRef.textContent = ingredient;
//   return liTitleRef;
// });
// console.log(ingredientsEl);
// ingredientsRef.appendChild(ingredientsEl);

// const ingredientsEl = ingredients.map(ingredient => {
// const liTitleRef = document.createElement('li');
//   liTitleRef.classList.add('ingredients__item');
//   liTitleRef.textContent = ingredient;
//   return liTitleRef;
//});

const makeIngredients = (newIngredients) => {
  return newIngredients.map(ingredient => {
const liTitleRef = document.createElement('li');
  liTitleRef.classList.add('ingredients__item');
  liTitleRef.textContent = ingredient;
  return liTitleRef;
});

};

const ingredientsEl = makeIngredients(ingredients);
// ingredients.forEach(el => {
  
//   const liTitleRef = document.createElement('li');
//         liTitleRef.classList.add('ingredients__item');
//         liTitleRef.textContent = el;
//   ingredientsEl.push(liTitleRef);
  
//   return liTitleRef;

// });
//console.log(ingredientsEl);
ingredientsRef.append(...ingredientsEl);