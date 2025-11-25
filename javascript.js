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
let displayValue = '';
digits.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
     if (display.textContent == 0 || clearDisplay === true) {
        display.textContent = value;
     } else {
        display.textContent += value;
     };
     displayValue = display.textContent;
     operatorButton = false;
    });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = 0;
});

const operators = document.querySelectorAll('.operators');
operators.forEach(button => {
    button.addEventListener('click', () => {
        if (operatorButton === true) {
            return;
        };
        operatorButton = true;
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
     if (displayValue > 0) {
        secondNum = displayValue;
    };
    display.textContent = operate(operator, Number(firstNum), Number(secondNum));
    clearDisplay = true;
});
