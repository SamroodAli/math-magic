import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.PureComponent {
  render() {
    const { onOperationClick, onNumberClick } = this.props;
    return (
      <>
        <div>
          <Button onClick={onOperationClick} name="AC" />
          <Button onClick={onOperationClick} name="+/-" />
          <Button onClick={onOperationClick} name="%" />
          <Button onClick={onOperationClick} name="÷" />
        </div>
        <div>
          <Button onClick={onNumberClick} name="7" />
          <Button onClick={onNumberClick} name="8" />
          <Button onClick={onNumberClick} name="9" />
          <Button onClick={onOperationClick} name="x" />
        </div>
        <div>
          <Button onClick={onNumberClick} name="4" />
          <Button onClick={onNumberClick} name="5" />
          <Button onClick={onNumberClick} name="6" />
          <Button onClick={onOperationClick} name="-" />
        </div>
        <div>
          <Button onClick={onNumberClick} name="1" />
          <Button onClick={onNumberClick} name="2" />
          <Button onClick={onNumberClick} name="3" />
          <Button onClick={onOperationClick} name="+" />
        </div>
        <div>
          <Button onClick={onNumberClick} name="0" />
          <Button onClick={onNumberClick} name="." />
          <Button onClick={onOperationClick} name="=" />
        </div>
      </>
    );
  }
}

ButtonPanel.propTypes = {
  onOperationClick: PropTypes.func.isRequired,
  onNumberClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
