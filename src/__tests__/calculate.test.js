import Big from 'big.js';
import calculate from '../logic/calculate';

test('If button is AC, it return new state', () => {
  const next = '0';
  const operation = '';
  const total = '0';
  const actual = calculate(next, total, operation, 'AC');
  expect(actual).toEqual({ next: '0', operation: '', total: 0 });
});

test('calculate function should return state for operations', () => {
  const next = '20';
  const operation = '+';
  const total = '10';
  const actual = calculate(next, total, operation, '+');
  expect(actual).toEqual({ next: '30', operation: '+', total: new Big(30) });
});

test('= button returns result', () => {
  const total = '10';
  const next = '20';
  const operation = '=';
  const actual = calculate(next, total, operation, '+');
  expect(actual).toEqual({ next: '20', operation: '+', total: new Big(20) });
});
