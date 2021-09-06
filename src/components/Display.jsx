import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  render() {
    const { result } = this.props;
    return (
      <>{result}</>
    );
  }
}

export default Display;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
