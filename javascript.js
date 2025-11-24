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

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');

let displayValue = 0;
digits.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
     if (display.textContent == 0) {
        display.textContent = value;
     } else {
        display.textContent += value;
     };
     displayValue = display.textContent;
    });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
});

const operators = document.querySelectorAll('.operators');
operators.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue > 0) {
            firstNum = displayValue;
        };
        let value = button.textContent;
        console.log(value);
        console.log(firstNum);
    });
});
