let display = document.getElementById('display');
let currentInput = '';
let lastInput = '';

function addNumber(number) {
    if (lastInput === '=') {
        clearDisplay();
        lastInput = '';
    }
    if (number === '.' && currentInput.indexOf('.') !== -1) {
        return;
    }
    currentInput = currentInput + number;
    display.innerText = currentInput;
}

function addOperator(operator) {
    if (lastInput === '=') {
        lastInput = '';
    }
    if (currentInput === '') return;
    if (checkOperator(currentInput[currentInput.length - 1])) {
        currentInput = currentInput.substring(0, currentInput.length - 1);
    }
    currentInput = currentInput + operator;
    display.innerText = currentInput;
}

function checkOperator(character) {
    return character === '+' || character === '-' || character === '*' || character === '/';
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '00';
}

function deleteLast() {
    currentInput = currentInput.substring(0, currentInput.length - 1);
    display.innerText = currentInput;
}

function addDecimal() {
    if (lastInput === '=') {
        clearDisplay();
        lastInput = '';
    }
    if (currentInput.indexOf('.') === -1) {
        currentInput = currentInput + '.';
        display.innerText = currentInput;
    }
}

function calculate() {
    try {
        let result = 0;
        let currentNumber = '';
        let operation = '+';

        for (let i = 0; i < currentInput.length; i++) {
            let char = currentInput[i];
            if ((char >= '0' && char <= '9') || char === '.') {
                currentNumber += char;
            } else {
                result = doMath(result, parseFloat(currentNumber), operation);
                currentNumber = '';
                operation = char;
            }
        }

        result = doMath(result, parseFloat(currentNumber), operation);
        currentInput = result.toString();
        display.innerText = currentInput;
        lastInput = '=';
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function doMath(left, right, op) {
    if (op === '+') return left + right;
    if (op === '-') return left - right;
    if (op === '*') return left * right;
    if (op === '/') return left / right;
    return right;
}
