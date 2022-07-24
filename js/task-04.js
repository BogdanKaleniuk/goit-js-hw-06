// const targetBtn = document.querySelector('#counter');
const decBtn = document.querySelector('[data-action="decrement"]');
const incBrn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

// console.log(counterValue.textContent);
// console.log(counterValue);

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incBrn.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
decBtn.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

// decBtn.addEventListener('click' decrement);
// incBrn.addEventListener('click' increment);
