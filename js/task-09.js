// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const body = document.querySelector('body');
const btnchangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

btnchangeColor.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  // console.log(changeColor);
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}
// console.log(document.body.style.backg

// --- Решение 2 ---

// const refs = {
//   body: document.body,
//   btnchangeColor: document.querySelector('.change-color'),
//   color: document.querySelector('.color'),
// };
// refs.btnchangeColor.addEventListener('click', changeColor);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function changeColor() {
//   // console.log(changeColor);
//   refs.body.style.backgroundColor = getRandomHexColor();
//   refs.color.textContent = refs.body.style.backgroundColor;
// }
// // console.log(document.body.style.backgroundColor);
