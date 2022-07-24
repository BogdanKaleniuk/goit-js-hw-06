const inputEl = document.querySelector('#validation-input');
const inputVal = inputEl.dataset.length;
// const inputVal = document.querySelector('[data-length]');
// console.log(inputVal.value);

const inputValid = event => {
  if (event.currentTarget.value.length === Number(inputVal)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
};
inputEl.addEventListener('blur', inputValid);
