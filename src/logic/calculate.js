import operate from './operate';

const calculate = (data, button) => {
  if (button === 'AC') {
    return { total: 0, next: '0', operation: '' };
  }

  const { total = 0, next, operation = '' } = data;

  const result = operate(total, next, operation || '=');

  const nextOptions = {
    '+/-': next * -1,
    '%': next / 100,
  };

  return {
    total: result,
    next: String(nextOptions[button] || result),
    operation: button,
  };
};

export default calculate;
