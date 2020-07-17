// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити,
//  після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>



const boxContainer = document.querySelector('#boxes');
const renderBoxes = document.querySelector('[data-action="render"]');
const clearBoxes = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('#controls input');

renderBoxes.addEventListener('click', amountCounter);
clearBoxes.addEventListener('click', clearContainer);


function amountCounter () {
    let amount = input.value;
    
    createBoxes(amount); 
}

function clearContainer () {
    boxContainer.textContent = '';
}




function createBoxes(amount) {
    const sizeBox = 30;
    let containerForBoxes = document.createElement('div');
    
    for(let el = 0; el < amount; el += 1) {
        const color = generateColor();
        let changeSize = sizeBox + el * 10;
        const box = document.createElement('div');
        box.textContent = el + 1;
        box.setAttribute('style', `width: ${changeSize}px; height: ${changeSize}px; background-color: ${color}; margin: 30px `);
        
        containerForBoxes.appendChild(box);  
    }
    boxContainer.appendChild(containerForBoxes); 
}



function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }
const color = generateColor();

