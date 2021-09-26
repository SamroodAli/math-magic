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
      if (nextNum.length <= 15) {
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
  return { next, onOperationClick, onNumberClick };
};

export default useCalc;
