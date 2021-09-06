import Big from 'big.js';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

export const operations = {
  '+': add,
  '-': subtract,
  x: multiply,
  '÷': divide,
};

const operate = (num1 = 0, num2 = 0, operation) => operations[operation](Big(num1), Big(num2));

export default operate;
