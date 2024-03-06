let displayValue = '0';
let currentOperator = '';
let firstOperand = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = '';
    firstOperand = '';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendSymbol(symbol) {
    if (displayValue === 'Error') return;
    displayValue += symbol;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }

    updateDisplay();
}
