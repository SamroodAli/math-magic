import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  text = (value, text) => <p>{`${text}: ${value}`}</p>;

  render() {
    const { result } = this.props;
    return <div data-testid="display">{this.text(result, 'Result')}</div>;
  }
}

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
