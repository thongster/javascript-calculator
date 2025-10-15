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
    justEvaluated = false;
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
    // if number, edit currentValue
    } else if (!isNaN(input)) {
        if (afterEquals === true) {
            storedValue = /* last value after equation */
            afterEquals = false;
        } 
        currentValue = currentValue + input;
        numbers.textCoontent = currentValue;
        console.log(storedValue);
        console.log(currentValue);
    } else if (input === "+" || input === "-" || input === "x" || input === "/") {
        if (storedValue != "" && currentValue != "") {
            storedValue = operate(storedValue, input, currentValue);
            currentValue = "";
            operator = input;
            numbers.textContent = storedValue;
        } else {
            storedValue = currentValue;
            currentValue = "";
            operator = input;
        };
    } else if (input === "C") {
        // reset entire calculator
        clearDisplay();
        enableDecimal()
        resetOperation();
    };


});