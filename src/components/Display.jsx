import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../hooks/useStyle';
import './style/Display.css';

const Display = ({ result, large }) => {
  const { mainBackground, textColor } = useStyles();
  const styles = {
    fontSize: large ? '2rem' : '4rem',
    ...mainBackground,
    ...textColor,
  };
  return <div data-testid="display" className="display" style={styles}>{result}</div>;
};

Display.defaultProps = {
  result: '0',
  large: false,
};

Display.propTypes = {
  result: PropTypes.string,
  large: PropTypes.bool,
};

export default Display;
