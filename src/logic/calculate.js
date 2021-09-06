import operate, { operations } from './operate';

const calculate = ({ total = 0, next = '', operation = '' }, button) => {
  if (button in operations) {
    return operate(total, button);
  }
  return { };
};
export default calculate;
