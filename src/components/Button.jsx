import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';

const Button = ({
  name, onClick, color, wide,
}) => {
  const style = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };
  return <button data-testid="button" className="button" style={style} type="button" onClick={() => onClick(name)}>{name}</button>;
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
