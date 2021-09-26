import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './style/Calculator.css';
import useCalc from '../hooks/useCalc';

const Calculator = () => {
  const { next, onOperationClick, onNumberClick } = useCalc();

  const large = next.length > 20;
  const result = next.length > 30 ? next.substring(0, 29) : next;

  return (
    <>
      <h2>Calculator</h2>
      <div className="calculator">
        <Display result={result} large={large} data-testid="display" />
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
