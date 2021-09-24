import React from
  'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      next: '0',
      clear: true,
    };
  }

  onNumberClick = (num) => {
    const { clear } = this.state;
    this.setState((prev) => {
      if (clear) {
        return { next: num, clear: false };
      }
      return { next: prev.next + num };
    });
  };

  onOperationClick = (buttonName) => {
    this.setState((prevState) => {
      const newState = calculate(prevState, buttonName);
      newState.clear = true;
      return newState;
    });
  };

  render = () => {
    const { next } = this.state;
    return (
      <div>
        <h2>Calculator</h2>
        <Display result={next} data-testid="display" />
        <ButtonPanel
          onOperationClick={this.onOperationClick}
          onNumberClick={this.onNumberClick}
          data-testid="button"
        />
      </div>
    );
  };
}

export default Calculator;
