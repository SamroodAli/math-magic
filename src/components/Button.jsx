import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';

const Button = ({ name, onClick }) => (
  <button className="button" data-testid="button" type="button" onClick={() => onClick(name)}>{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
