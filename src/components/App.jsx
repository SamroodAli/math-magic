import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((prevState) => calculate({ prevState }, buttonName));
  }

  render = () => {
    const { next, total, operation } = this.state;
    return (
      <>
        <div>
          {total}
          {operation}
        </div>
        <Display result={next} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}
export default App;
