import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './style/Calculator.css';

const Calculator = () => {
  const [next, setNext] = useState('0');
  const [total, setTotal] = useState('0');
  const [operation, setOperation] = useState('');
  const [clear, setClear] = useState(true);

  const onNumberClick = (num) => {
    if (clear) {
      setNext(num);
      setClear(false);
    } else {
      setNext(next + String(num));
    }
  };

  const onOperationClick = (buttonName) => {
    const newState = calculate(next, total, operation, buttonName);
    setNext(newState.next);
    setTotal(newState.total);
    setOperation(newState.operation);
    setClear(true);
  };

  return (
    <>
      <h2>Calculator</h2>
      <div className="calculator">
        <Display result={next} data-testid="display" />
        <ButtonPanel
          onOperationClick={onOperationClick}
          onNumberClick={onNumberClick}
          data-testid="button"
        />
      </div>
    </>
  );
};

export default Calculator;
