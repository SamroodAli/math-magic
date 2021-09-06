import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <>
        <div>
          <Button onClick={onClick} name="AC" />
          <Button onClick={onClick} name="+/-" />
          <Button onClick={onClick} name="%" />
          <Button onClick={onClick} name="÷" />
        </div>
        <div>
          <Button onClick={onClick} name="7" />
          <Button onClick={onClick} name="8" />
          <Button onClick={onClick} name="9" />
          <Button onClick={onClick} name="x" />
        </div>
        <div>
          <Button onClick={onClick} name="4" />
          <Button onClick={onClick} name="5" />
          <Button onClick={onClick} name="6" />
          <Button onClick={onClick} name="-" />
        </div>
        <div>
          <Button onClick={onClick} name="1" />
          <Button onClick={onClick} name="2" />
          <Button onClick={onClick} name="3" />
          <Button onClick={onClick} name="+" />
        </div>
        <div>
          <Button name="0" />
          <Button name="." />
          <Button name="=" />
        </div>
      </>
    );
  }
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
