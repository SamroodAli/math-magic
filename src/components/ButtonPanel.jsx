import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './style/ButtonPanel.css';

const ButtonPanel = ({ onOperationClick, onNumberClick }) => (
  <div className="panel">
    <div>
      <Button color="black" onClick={onOperationClick} name="AC" data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="+/-" data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="%" data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="÷" data-testid="button" />
    </div>
    <div>
      <Button color="black" onClick={onNumberClick} name="7" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="8" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="9" data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="x" data-testid="button" />
    </div>
    <div>
      <Button color="black" onClick={onNumberClick} name="4" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="5" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="6" data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="-" data-testid="button" />
    </div>
    <div>
      <Button color="black" onClick={onNumberClick} name="1" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="2" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="3" data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="+" data-testid="button" />
    </div>
    <div>
      <Button color="black" onClick={onNumberClick} name="0" data-testid="button" />
      <Button color="black" onClick={onNumberClick} name="." data-testid="button" />
      <Button color="black" onClick={onOperationClick} name="=" data-testid="button" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  onOperationClick: PropTypes.func.isRequired,
  onNumberClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
