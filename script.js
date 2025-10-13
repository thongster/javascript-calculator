
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

operate(18, "*", 2);
