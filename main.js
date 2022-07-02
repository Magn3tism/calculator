const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");

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
