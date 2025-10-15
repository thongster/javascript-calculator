// initialize variables
let currentValue = "";
let storedValue = "";
let operator = "";
let afterEquals = false;

const numbers = document.querySelector(".numbers");
const buttons = document.querySelector(".buttonSection");
const keys = document.querySelectorAll(".key");

// disable/enable decimal boolean
let hasDecimal = false;

// add, subtract, multiply, divide functions
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
}

// set numOne and numTwo functions
function setNumOne() {

};

function setNumTwo() {

}

// operate function
function operate(numOne, operator, numTwo) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    switch (operator) {
        case "+": return add(numOne, numTwo);
        case "-": return subtract(numOne, numTwo);
        case "x": return multiply(numOne, numTwo);
        case "/": 
            if (numTwo === 0) {
                return "Error";
            };
            return divide(numOne, numTwo);
    };
};

// clear the display 
function clearDisplay() {
    numbers.textContent = "";
};

function enableDecimal() {
    keys.forEach((key) => {
        if (key.textContent === ".") {
            key.disabled = false;
        }
    });
};

function disableDecimal() {
    keys.forEach((key) => {
        if (key.textContent === ".") {
            key.disabled = true;
        }
    });
};

function resetOperation() {
    currentValue = "";
    storedValue = "";
    operator = "";
    afterEquals = false;
}

buttons.addEventListener("click", (event) => {
    let input = event.target.textContent
    if (input === ".") {
        // only allow decimal if current value doesn't already include one
        if (!currentValue.includes(".")) {
            currentValue = currentValue + input;
            numbers.textContent = currentValue;
            disableDecimal();
        };
        return;
    };
    // if number, edit currentValue
    if (!isNaN(input)) {
        if (afterEquals === true) {
            afterEquals = false;
        } 
        currentValue = currentValue + input;
        numbers.textContent = currentValue;
    };
    
    // if we press an operator
    if (input === "+" || input === "-" || input === "x" || input === "/") {
        // before equals sign, means operator already pressed once, we can calculate
        if (storedValue && currentValue && operator) {
            storedValue = operate(storedValue, operator, currentValue);
            numbers.textContent = storedValue;
            currentValue = "";
        // if we have the first number and we press an operator for the first time, current number becomes old number
        } else if (currentValue && !storedValue){
            storedValue = currentValue;
            currentValue = "";
        };

        // assign operator
        operator = input;
        enableDecimal();
        return;
    }; 
    
    // reset entire calculator
    if (input === "C") {
        clearDisplay();
        enableDecimal()
        resetOperation();
        return;
    };

    // calculate button
    if (input === "=") {
        // if we have all values calculate storedValue
        // reset all for potential next equation
        if (storedValue && currentValue && operator) {
            storedValue = operate(storedValue, operator, currentValue);
            numbers.textContent = storedValue;
            currentValue = "";
            afterEquals = true;
            operator = "";
            enableDecimal();
            return;
        };
        return;
    };


});