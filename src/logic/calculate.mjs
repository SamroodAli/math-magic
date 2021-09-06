import operate, { operations } from './operate.mjs';

const calculate = (data, button) => {
  const { total, next, operation } = data;

  if (button === 'AC') {
    return { total: 0, next: 0, operation: null };
  }

  const result = operation in operations ? operate(total, next, operation) : next;

  const nextOptions = {
    '=': result,
    '+/-': next * -1,
    '%': next / 100,
  };

  return {
    total: result,
    next: nextOptions[button] || 0,
    operation: button in nextOptions ? null : button,
  };
};

export default calculate;
