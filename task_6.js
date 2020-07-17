const input = document.querySelector('#validation-input');

const dataLength = +input.getAttribute('data-length');
// console.dir (input)

const toChangeColore = () => {
    input.classList.add('invalid');
    if(input.value.length === dataLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } 
};

// input.addEventListener('blur', toChangeColore);
input.onchange = toChangeColore;