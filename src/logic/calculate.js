import operate from './operate';

const calculate = (data, button) => {
  const { total, next, operation } = data;

  const result = Number(operate(total, next, operation || '='));

  const nextOptions = {
    '+/-': next * -1,
    '%': next / 100,
  };

  return {
    total: result,
    next: nextOptions[button] || result,
    operation: button,
  };
};

export default calculate;
