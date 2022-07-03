const numberButtons = Array.from(document.getElementsByClassName("number"));
const operatorButtons = Array.from(document.getElementsByClassName("operator"));
const result = document.getElementById("result");

const current = document.getElementById("current");
const previous = document.getElementById("previous");

const clear = document.getElementById("clear");
const backsapce = document.getElementById("backspace");
const percentage = document.getElementById("percentage");

let string = "";
let numString = "";
let pressed = 0;

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
  if (!b) {
    string = "";
    numString = "";
    previous.textContent = "0";
    return "Infinity";
  }
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

    pressed = 1;
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
    }
    string += e.target.dataset.value;
    previous.textContent = string;
    numString = "";

    pressed = 2;
  });
});

result.addEventListener("click", () => {
  previous.textContent = string;
  string = operate(string);
  current.textContent = string;
  string = "";
  numString = "";
});

clear.addEventListener("click", () => {
  string = "";
  numString = "";
  current.textContent = "0";
  previous.textContent = "0";
});

backsapce.addEventListener("click", () => {
  string = string.substring(0, string.length - 1);

  if (pressed === 1) {
    numString = numString.substring(0, numString.length - 1);
    if (numString) {
      current.textContent = numString;
    } else {
      current.textContent = 0;
    }
  } else if (pressed === 2) {
    previous.textContent = string;
  }
});

percentage.addEventListener("click", () => {
  previous.textContent = "9";
  current.textContent = `${string}%`;
  string = "";
  numString = "";
});
