import Big from 'big.js';

export const add = (num1, num2) => num1.plus(num2);
export const subtract = (num1, num2) => num1.minus(num2);
export const multiply = (num1, num2) => num1.times(num2);
export const result = (num1, num2) => num2;
export const inverse = (num1) => num1.times(-1);
export const modifier = (num1) => num1.div(100);
export const clear = () => 0;
export const divide = (num1, num2) => {
  try {
    return num1.div(num2);
  } catch (e) {
    return 0;
  }
};

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
  try {
    return currentOperation(new Big(+num1), new Big(+num2));
  } catch (e) {
    return 0;
  }
};

export default operate;
