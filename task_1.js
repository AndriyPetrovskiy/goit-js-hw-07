let ulRef = document.querySelector('#categories');
let itemsRef = document.querySelectorAll('.item');

console.log(`У списку ${itemsRef.length} категорії.`)

const listItems = [...itemsRef].map((el) => `Category: ${el.children[0].textContent} - ${el.children[1].children.length}`).join('\n');
console.log((listItems));

// const listItems = el => {
//     for (let i of el) {
//         console.log(i.children[0].textContent);
//         console.log(i.children[1].children.length);
//     }
// }
// listItems(itemsRef);






