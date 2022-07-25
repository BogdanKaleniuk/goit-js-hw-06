// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>




const inputSize = document.getElementById('font-size-control');
const text = document.getElementById('text');
inputSize.oninput = function () {
  text.style.fontSize = inputSize.value + 'px';
};

// const inputChenge = event => {
//   text.style.fontSize = `${event.target.value}px`;
// };
// inputChenge.inputSize.addEventListener('input', inputChenge);
