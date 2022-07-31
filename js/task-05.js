// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const formLink = document.getElementById('name-input');
const nameForm = document.getElementById('name-output');

formLink.oninput = function () {
  if (formLink.value === '') {
    nameForm.innerHTML = 'Anonymous';
  } else {
    nameForm.innerHTML = formLink.value;
  }
};
console.log(nameForm.innerHTML);
