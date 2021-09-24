import React from 'react';
import PropTypes from 'prop-types';
import './style/Display.css';

class Display extends React.PureComponent {
  text = (value, text) => <p>{`${text}: ${value}`}</p>;

  render() {
    const { result } = this.props;
    return <div data-testid="display" className="display">{this.text(result, 'Result')}</div>;
  }
}

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
