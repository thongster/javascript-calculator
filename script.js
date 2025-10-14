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

// display numbers on screen if int or decimal
// function toDisplay(input) {
    // if (input == ".") {
    //     numbers.append(input);
    //     hasDecimal = true;
    // };
    // if (hasDecimal === true) {
    //     buttons.forEach((node) => {
    //         if (node.textContent === ".") {
    //             node.disabled = true;
    //         };
    //     });
    // }
//     input = parseInt(input);
//     if (Number.isInteger(input)) {
//         numbers.append(input);
//     };
// };

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

// clicking a button loops through textContent matches it to the display function to the screen
// buttons.forEach((e) => {
//     e.addEventListener("click", () => toDisplay(e.textContent));
//     e.addEventListener("click", () => clearDisplay(e.textContent));
//     e.addEventListener("click", () => operate(numOne, operator, numTwo));
// });

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
        console.log(numOne)
        console.log(numTwo)
        console.log(operator)
        numbers.textContent = operate(numOne, operator, numTwo);
        // numbers.textContent = operate(numOne, operator, numTwo);
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
    } else {
        console.log("this should be the ?");
    };
    
});

