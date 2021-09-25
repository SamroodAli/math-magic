import React from 'react';
import PropTypes from 'prop-types';
import './style/Display.css';

const Display = ({ result }) => (
  <div data-testid="display" className="display">{result}</div>

);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
