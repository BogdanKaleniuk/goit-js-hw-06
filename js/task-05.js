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
