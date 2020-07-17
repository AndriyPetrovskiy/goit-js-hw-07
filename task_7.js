const inputRef = document.querySelector('#font-size-control');
// console.log(inputRef.value);
const textRef = document.querySelector('#text');
// console.log(textRef.textContent);

textRef.setAttribute('style', '14px');

inputRef.oninput = () => {
    textRef.style.fontSize = inputRef.value + 'px';
};

inputRef(textRef, inputRef);
