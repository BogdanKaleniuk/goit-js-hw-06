const inputSize = document.getElementById('font-size-control');
const text = document.getElementById('text');
inputSize.oninput = function () {
  text.style.fontSize = inputSize.value + 'px';
};

// const inputChenge = event => {
//   text.style.fontSize = `${event.target.value}px`;
// };
// inputChenge.inputSize.addEventListener('input', inputChenge);
