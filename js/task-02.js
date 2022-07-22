const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let ulList = document.getElementById('ingredients');
const liForEach = ingredients.forEach(ingredient => {
  let elemLi = document.createElement('li');
  elemLi.classList.add('list');
  elemLi.innerHTML = ingredient;
  // ulList.append(elemLi);
  // ulList.append(...elemLi);
  let ulGo = document.querySelector('ul');
  ulGo.append(elemLi);;
});
console.log(liForEach);

// elemLi.classList.add('item');
// elemLi.textContent = [...ingredients];
// document.body.ingredients.append(elemLi);
// console.log(elemLi);
// let ulList = document.getElementById('ingredients');
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement('li');
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   parent.append(...items);
// });

// console.log(foodIngredients);
