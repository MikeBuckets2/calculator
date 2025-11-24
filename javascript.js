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
    };
};

// Create the functions that populate the display when you click the digit buttons. 
// You should store the content of the display (the number) in a variable for use in the next step.

//grab button
//when you click the button
//the button shows in the display

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let displayValue = button.textContent;
     if (display.textContent == 0) {
        display.textContent = displayValue;
     } else {
        display.textContent += displayValue;
     };
    });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
});