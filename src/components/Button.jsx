import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';

const Button = ({ name, onClick, color }) => (
  <button data-testid="button" className="button" style={{ backgroundColor: color }} type="button" onClick={() => onClick(name)}>{name}</button>
);

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;
