const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
const span = document.querySelector('#value');
console.log(span);

let counterValue = 0;

const increment = function () {
    counterValue +=1;
    span.textContent = counterValue;
};

const decrement = () => {
    counterValue > 0 ? counterValue -=1 : counterValue;
    span.textContent = counterValue;
} 

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
