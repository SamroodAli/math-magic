import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './style/Calculator.css';
import useCalc from '../hooks/useCalc';

const Calculator = () => {
  const {
    result, isLarge, onOperationClick, onNumberClick,
  } = useCalc();

  return (
    <>
      <h2>Calculator</h2>
      <div className="calculator">
        <Display result={result} large={isLarge} data-testid="display" />
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
