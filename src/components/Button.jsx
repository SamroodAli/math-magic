import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';

const Button = ({
  name, onClick, wide,
}) => {
  const buttonStyle = {
    width: wide ? '50%' : '25%',
  };
  return <button data-testid="button" className="button" style={buttonStyle} type="button" onClick={() => onClick(name)}>{name}</button>;
};

Button.defaultProps = {
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  wide: PropTypes.bool,
};

export default Button;
