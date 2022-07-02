const numberButtons = Array.from(document.getElementsByClassName("number"));
const operatorButtons = Array.from(document.getElementsByClassName("operator"));
const result = document.getElementById("result");
const current = document.getElementById("current");
const previous = document.getElementById("previous");

let string = "";
let numString = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(string) {
  let operand = [];
  if (string.includes("+")) {
    operand = string.split("+");
    return add(Number(operand[0]), Number(operand[1]));
  } else if (string.includes("-")) {
    operand = string.split("-");
    return subtract(Number(operand[0]), Number(operand[1]));
  } else if (string.includes("×")) {
    operand = string.split("×");
    return multiply(Number(operand[0]), Number(operand[1]));
  } else if (string.includes("÷")) {
    operand = string.split("÷");
    return divide(Number(operand[0]), Number(operand[1]));
  }
}

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    string += e.target.dataset.value;
    numString += e.target.dataset.value;
    current.textContent = numString;
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    if (
      string.includes("+") ||
      string.includes("-") ||
      string.includes("×") ||
      string.includes("÷")
    ) {
      string = String(operate(string));
      console.log(`O: ${string}`);
    }
    string += e.target.dataset.value;
    previous.textContent = string;
    numString = "";
  });
});

result.addEventListener("click", () => {
  previous.textContent = string;
  string = operate(string);
  current.textContent = string;
  string = "";
  numString = "";
});
