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

let clearDisplay = false;
let operatorButton = false;
let evaluated = false;
let displayValue = '';
digits.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if (evaluated === true) {
            firstNum = '';
            secondNum = '';
            operator = null;
            display.textContent = '';
            evaluated = false;
        };
     if (display.textContent === '0' || clearDisplay === true) {
        display.textContent = value;
        clearDisplay = false;
     } else {
        display.textContent += value;
     }
     displayValue = display.textContent;
     operatorButton = false;
    });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
    firstNum = '';
    secondNum = '';
    operator = '';
    displayValue = '';
    operatorButton = false;
    evaluated = false;
    clearDisplay = false;
});

const operators = document.querySelectorAll('.operators');
operators.forEach(button => {
    button.addEventListener('click', () => {
        if (operatorButton === true) {
            return;
        };
        operatorButton = true;
        if (evaluated === true) {
            evaluated = false;
            operator = button.textContent;
            return;
        }
        if (firstNum !== '' && secondNum === '') {
            secondNum = displayValue;
            let result = operate(operator, Number(firstNum), Number(secondNum));
            display.textContent = result;
            firstNum = result;
            secondNum = '';
        } else if (displayValue !== '') {
            firstNum = displayValue;
        };
        operator = button.textContent;
        clearDisplay = true;
    });
});

const operation = document.querySelector('.operation');
operation.addEventListener('click', () => {
    if (operatorButton === true) {
        return;
    };
    if (displayValue !== '') {
        secondNum = displayValue;
    };
    let result = operate(operator, Number(firstNum), Number(secondNum));
    display.textContent = result;
    firstNum = result;
    secondNum = '';
    operator = null;
    operatorButton = false;
    evaluated = true;
    clearDisplay = true;
});
