// initialize variables
let numOne = "";
let numTwo = "";
let operator = "";
let answer = "";
let numOneState = false;
let numTwoState = false;

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
    let answer;
        switch (operator) {
            case "+":
                numOne = parseInt(numOne);
                numTwo = parseInt(numTwo);
                answer = add(numOne, numTwo);
                break;
            case "-":
                answer = subtract(numOne, numTwo);
                break;
            case "x":
                answer = multiply(numOne, numTwo);
                break;
            case "/":
                answer = divide(numOne, numTwo);
                break;
            default:
                console.log("invalid operator")
        };
    return answer;
};

// clear the display 
function clearDisplay() {
    numbers.textContent = "";
};

function enableDecimal() {
    keys.forEach((key) => {
        if (key.textContent === ".") {
            hasDecimal = false;
            key.disabled = false;
        }
    });
};

function disableDecimal() {
    keys.forEach((key) => {
        if (key.textContent === ".") {
            hasDecimal = true;
            key.disabled = true;
        }
    });
};

function resetOperation() {
    numOne = "";
    numTwo = "";
    operator = "";
    numOneState = false;
    numTwoState = false;
}

buttons.addEventListener("click", (event) => {
    let input = event.target.textContent
    if (input === ".") {
        // turn off decimal button after 1 input
        if (numOneState === false) {
            numOne = numOne + input;
        }
        else {
            numTwo = numTwo + input;
        };
        numbers.append(input);
        disableDecimal();
    } else if (input === "C") {
        clearDisplay();
        enableDecimal()
        resetOperation();
    } else if (input === "+" || input === "-" || input === "x" || input === "/") {
        operator = input;
        numOneState = true;
        enableDecimal();
    } else if (input === "=") {
        if (numOne != "" && numTwo != "") {
            numbers.textContent = operate(numOne, operator, numTwo);
            answer = numbers.textContent;
        };
    } else if (input === "?") {
        console.log("this should be the ?");
    } else if (numOneState === false) {
        numOne = numOne + input;
        numbers.append(input);
    } else if (numOneState === true) {
        // write code to make this just happen once
        if (numTwoState === false) {
            clearDisplay();
            numTwoState = true;
        }
        numTwo = numTwo + input;
        numbers.append(input);
    };
});