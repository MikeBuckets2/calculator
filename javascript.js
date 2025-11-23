function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNum = '';
let secondNum = '';
let operator = '';

function operate(op, a, b) {
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return subtract(a, b);
    } else if (op === '*') {
        return multiply(a, b);
    } else if (op === '/') {
        return divide(a, b);
    } else {
        return alert('Cannot use that operator');
    };
};

// Create the functions that populate the display when you click the digit buttons. 
// You should store the content of the display (the number) in a variable for use in the next step.

//grab button
//when you click the button
//the button shows in the display

const display = document.querySelector('.display');
const button = document.querySelector('.one');
button.addEventListener('click', () => {
    if (display.textContent == 0) {
        display.textContent = '';
        display.textContent += 1;
    } else {
        display.textContent += 1;
    };
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
});