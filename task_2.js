const ingrediensRef = document.querySelector('#ingredients')
console.log(ingrediensRef);


const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];


const fn = function(array, list) {
    array.forEach(el => {
    const liItem = document.createElement('li');
    liItem.textContent = el;
    list.append(liItem);
})};

fn(ingredients, ingrediensRef);




