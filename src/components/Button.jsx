import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css';
import useStyles from '../hooks/useStyle';

const Button = ({ name, onClick, wide }) => {
  const {
    mainBackground, textColor, style,
  } = useStyles();

  const buttonStyle = {
    ...mainBackground,
    ...textColor,
    width: wide ? '50%' : '25%',
    fontSize: '1.5rem',
    border: `1px solid ${textColor.color}`,
  };

  const onMouseDown = (e) => {
    e.target.style.backgroundColor = style.backgroundColor;
  };
  const onMouseUp = (e) => {
    e.target.style.backgroundColor = mainBackground.backgroundColor;
  };

  return <button data-testid="button" onMouseDown={onMouseDown} onMouseUp={onMouseUp} className="button" style={buttonStyle} type="button" onClick={() => onClick(name)}>{name}</button>;
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
