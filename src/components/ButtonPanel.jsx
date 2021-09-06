import React from 'react';
import Button from './Button';

class ButtonPanel extends React.PureComponent {
  render() {
    return (
      <div>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
    );
  }
}

export default ButtonPanel;
