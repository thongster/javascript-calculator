
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

// initialize variables
let numOne = 0;
let numTwo = 0;
let operator;

// operate function
function operate(numOne, operator, numTwo) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(numOne, numTwo);
            break;
        case "-":
            answer = subtract(numOne, numTwo);
            break;
        case "*":
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

const numbers = document.querySelector(".numbers")
const buttons = document.querySelectorAll(".key");

let hasDecimal = false;
// reminder to trigger back to true when clear or when new input

// display numbers on screen if int or decimal
function toDisplay(input) {
    if (input == ".") {
        numbers.append(input);
        hasDecimal = true;
    };
    if (hasDecimal === true) {
        buttons.forEach((node) => {
            if(node.textContent === ".") {
                node.disabled = true;
            };
        });
    }
    input = parseInt(input);
    if (Number.isInteger(input)) {
        numbers.append(input);
    };
};

// clicking a button takes textContent out of div and performs display function to the screen
buttons.forEach((e) => {
    e.addEventListener("click", () => toDisplay(e.textContent));
});
