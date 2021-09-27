import { useState } from 'react';
import calculate from '../logic/calculate';

const useCalc = () => {
  const [next, setNext] = useState('0');
  const [total, setTotal] = useState('0');
  const [operation, setOperation] = useState('');
  const [clear, setClear] = useState(true);

  const onNumberClick = (num) => {
    if (clear) {
      setNext(num);
      setClear(false);
    } else {
      const nextNum = next + String(num);
      if (nextNum.length <= 20) {
        setNext(nextNum);
      }
    }
  };

  const onOperationClick = (buttonName) => {
    const newState = calculate(next, total, operation, buttonName);
    setNext(newState.next);
    setTotal(newState.total);
    setOperation(newState.operation);
    setClear(true);
  };
  const isLarge = next.length > 20;
  const result = next.length > 30 ? next.substring(0, 29) : next;

  return {
    result, isLarge, onOperationClick, onNumberClick,
  };
};

export default useCalc;
