import Big from 'big.js';

import operate, {
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

test('divide functions divides two numbers', () => {
  const num1 = new Big(20);
  const num2 = new Big(10);
  const expected = new Big(2);
  const actual = divide(num1, num2);
  expect(actual).toEqual(expected);
});

test('inverse changes the sign of the number', () => {
  const num1 = new Big(10);
  const expected = new Big(-10);
  const actual = inverse(num1);
  expect(actual).toEqual(expected);
});

test('division by zero does not result in an error', () => {
  const num1 = new Big(10);
  const num2 = 0;
  const actual = divide(num1, num2);
  expect(actual).toBe(0);
});

test('modifier divides the number by 100', () => {
  const num1 = new Big(100);
  const expected = new Big(1);
  const actual = modifier(num1);
  expect(actual).toEqual(expected);
});

test('clear function returns 0', () => {
  const actual = clear(10, 20);
  expect(actual).toEqual(0);
});

test('operate function returns result from one of the operations', () => {
  const num1 = new Big(10);
  const num2 = new Big(20);
  const operation = '+';
  const actual = operate(num1, num2, operation);
  const expected = new Big(30);
  expect(actual).toEqual(expected);
});

test('operate function should handle non number arguments', () => {
  const num1 = 'Hello';
  const num2 = 'World';
  const operation = '+';
  const actual = operate(num1, num2, operation);
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('operate function should handle no numbers', () => {
  const actual = operate();
  const expected = 0;
  expect(actual).toEqual(expected);
});

test('operate function should handle unavailale operation', () => {
  const actual = operate(10, 20, 'hello');
  const expected = 0;
  expect(actual).toEqual(expected);
});
