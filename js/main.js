// const

// cached
const totalEl = document.querySelector('h1 span');
const input = document.querySelector('#input');

// state
let total;

// evt listeners
document.querySelector('#plus').addEventListener('click', handlePlus);
document.querySelector('#minus').addEventListener('click', handleMinus);

// functions

init();

function init() {
    total = 0;
}

function handlePlus() {
    let inputValue = parseInt(input.value);
    total = total + parseInt(input.value);
    input.value = ''
    render();
}

function handleMinus() {
    let inputValue = parseInt(input.value);
    total = total - parseInt(input.value);
    input.value = ''
    render();
}

function render() {
    input.value = 1;
    totalEl.textContent = total;
    if (total > 0) {
        totalEl.textContent = '+' + totalEl.textContent
        totalEl.style.color = 'green';
    }
    if (total < 0) {
        totalEl.textContent = totalEl.textContent
        totalEl.style.color = 'red';
    }
    if (total === 0) {
        totalEl.style.color = 'black';
    }
}