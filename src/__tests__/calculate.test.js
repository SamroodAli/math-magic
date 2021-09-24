import Big from 'big.js';
import calculate from '../logic/calculate';

test('If button is AC, it return new state', () => {
  const state = {
    total: '0',
    next: '0',
    operation: '',
  };
  const actual = calculate(state, 'AC');
  expect(actual).toEqual({ next: '0', operation: '', total: 0 });
});

test('calculate function should return state for operations', () => {
  const state = {
    total: '10',
    next: '20',
    operation: '+',
  };
  const actual = calculate(state, '+');
  expect(actual).toEqual({ next: '30', operation: '+', total: new Big(30) });
});

test('= button returns result', () => {
  const state = {
    total: '10',
    next: '20',
    operation: '=',
  };
  const actual = calculate(state, '+');
  expect(actual).toEqual({ next: '20', operation: '+', total: new Big(20) });
});
