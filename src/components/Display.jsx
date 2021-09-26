import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../hooks/useStyle';
import './style/Display.css';

const Display = ({ result }) => {
  const { mainBackground, textColor } = useStyles();
  const styles = {
    ...mainBackground, ...textColor,
  };
  return <div data-testid="display" className="display" style={styles}>{result}</div>;
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
