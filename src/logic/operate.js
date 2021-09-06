import Big from 'big.js';

const add = (num1, num2) => num1.plus(num2);
const subtract = (num1, num2) => num1.minus(num2);
const multiply = (num1, num2) => num1.times(num2);
const divide = (num1, num2) => num1.div(num2);
const result = (num1, num2) => num2;
const inverse = (num1) => num1.times(-1);
const modifier = (num1) => num1.div(100);
const clear = () => 0;

const operations = {
  '+': add,
  '-': subtract,
  x: multiply,
  '÷': divide,
  '=': result,
  '+/-': inverse,
  '%': modifier,
  AC: clear,
};

const operate = (num1 = 0, num2 = 0, operation) => {
  const currentOperation = operations[operation];
  return currentOperation(new Big(num1), new Big(num2));
};

export default operate;
