// const add = (num1, num2) => num1.plus(num2);
// const subtract = (num1, num2) => num1.minus(num2);
// const multiply = (num1, num2) => num1.times(num2);
// const divide = (num1, num2) => num1.div(num2);
// const result = (num1, num2) => num2;
// const inverse = (num1) => num1.times(-1);
// const modifier = (num1) => num1.div(100);
// const clear = () => 0;
import Big from 'big.js';

import {
  add,
  subtract,
  multiply,
  divide,
  inverse,
  modifier,
  clear,
} from '../logic/operate';

test('Add functions sum of two numbers', () => {
  const num1 = new Big(10);
  const num2 = new Big(20);
  const expected = new Big(30);
  const actual = add(num1, num2);
  expect(actual).toEqual(expected);
});

test('substract functions subtracts two numbers', () => {
  const num1 = new Big(20);
  const num2 = new Big(10);
  const expected = new Big(10);
  const actual = subtract(num1, num2);
  expect(actual).toEqual(expected);
});

test('substract functions subtracts two numbers', () => {
  const num1 = new Big(20);
  const num2 = new Big(10);
  const expected = new Big(200);
  const actual = multiply(num1, num2);
  expect(actual).toEqual(expected);
});

test('divide functions divides two numbers', () => {
  const num1 = new Big(20);
  const num2 = new Big(10);
  const expected = new Big(2);
  const actual = divide(num1, num2);
  expect(actual).toEqual(expected);
});
