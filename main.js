const numberButtons = Array.from(document.getElementsByClassName("number"));
const operatorButtons = Array.from(document.getElementsByClassName("operator"));
const result = document.getElementById("result");

let string = "";

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
    console.log(e.target.dataset.value);
    string += e.target.dataset.value;
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    console.log(e.target.dataset.value);
    string += e.target.dataset.value;
  });
});

result.addEventListener("click", () => {
  console.log(operate(string));
});
