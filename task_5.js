const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');


const toChangeName = () => {

    input.value === '' ?  name.textContent = 'незнайомець' : name.textContent = input.value;

    // if (input.value === '') {
    //     name.textContent = 'незнайомець';
    // } else {
    //     name.textContent = input.value;
    // }

    // if(input.value === '') return name.textContent = 'Незнайомець';
    // return name.textContent = input.value;
}


input.addEventListener('input', toChangeName);