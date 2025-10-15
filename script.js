// initialize variables
let numOne = "";
let numTwo = "";
let operator = "";
let answer = "";
let prevAnswer = "";
let currentState = "numOne" // numOne, numTwo, result

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
                numOne = Number(numOne);
                numTwo = Number(numTwo);
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
    prevAnswer = "";
    currentState = "numOne";
}

buttons.addEventListener("click", (event) => {
    let input = event.target.textContent
    if (input === ".") {
        // turn off decimal button after 1 input
        if (currentState === "numOne") {
            numOne = numOne + input;
        }
        else {
            numTwo = numTwo + input;
        };
        numbers.append(input);
        disableDecimal();
    } else if (input === "C") {
        // reset entire calculator
        clearDisplay();
        enableDecimal()
        resetOperation();
    } else if (input === "+" || input === "-" || input === "x" || input === "/") {
        operator = input;
        if (currentState === "numOne") {
            currentState = "numTwo";
        } else if (prevAnswer === "" && currentState === "numTwo") {
            numbers.textContent = operate(numOne, operator, numTwo);
            prevAnswer = Number(numbers.textContent);  
            console.log(`no equation pressed, prev answer is ${prevAnswer}`) 
            numTwo = "";
        } else if (currentState === "numTwo") {
            numbers.textContent = operate(prevAnswer, operator, numTwo);
            // answer = numbers.textContent;
            prevAnswer = numbers.textContent;
            numTwo = "";
            // currentState = "result";
        } else if (currentState === "result") {
            console.log("here")
        };
        enableDecimal();
    } else if (input === "=") {
        // only executes if both nums have values
        // runs the operation and assigns answer and previous answer
        if (numOne != "" && numTwo != "" && currentState === "numTwo") {
            numbers.textContent = operate(numOne, operator, numTwo);
            answer = Number(numbers.textContent);
            prevAnswer = Number(answer);
            numTwo = "";
            currentState = "result";
        } else if (currentState === "result") {
            numbers.textContent = operate(prevAnswer, operator, numTwo);
            answer = numbers.textContent;
            currentState = "result";
            prevAnswer = Number(answer);
            numTwo = "";
        };
    } else if (input === "?") {
        // put a fun function here
        console.log("this should be the ?");
    } else if (currentState === "numOne") {
        numOne = Number(numOne) + Number(input);
        numbers.append(input);
    } else if (currentState === "numTwo" || currentState === "result") {
        // write code to make this just happen once
        if (numTwo === "") {
            clearDisplay();
        };
        numTwo = Number(numTwo + input);
        numbers.append(input);
    };
});