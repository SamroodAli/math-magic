import Big from 'big.js';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const inverse = (num1) => num1 * -1;

const operations = {
  '+': add,
  '-': subtract,
  x: multiply,
  '÷': divide,
  '+/-': inverse,
};
const operate = (num1, num2, operation) => Big(1);

export default operate;
