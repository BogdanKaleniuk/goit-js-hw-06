// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomRgbColor() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red}, ${green}, ${blue}) `;
}

const ref = {
  inputValue: docunent.querySelector('#controls>input'),
  btnCreate: docunent.querySelector('button[data-create]'),
  btnDestroy: docunent.querySelector('button[data-destroy]'),
  boxListHTML: document.querySelector('#boxes'),
  boxWrap: [],
};

const createBoxes = amount => {
  amount = ref.inputValue.value;

  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30;
    let growBox = boxSize + i * 10;
    const boxItem = `<div style = 'width:${growBox}px; heigth:${growBox}px; background-color: ${getRandomRgbColor()}'></div>`;
    ref.boxWrap.push(boxItem);
  }
  // return ref.boxWrap;
  ref.boxListHTML.append(...ref.boxWrap);
};
const destroyBoxes = () => {
  ref.boxListHTML.innerTHML = '';
  ref.inputValue.value = '';
};

ref.btnCreate.addEventListener('click', createBoxes);
ref.btnDestroy.addEventListener('click', destroyBoxes);
