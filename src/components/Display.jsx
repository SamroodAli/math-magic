import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  render() {
    const { result, total, operation } = this.props;
    return (
      <>
        <div>
          Total:
          {total}
        </div>
        <div>
          Operation:
          {operation}
        </div>
        <div>
          Result:
          {result}
        </div>
      </>
    );
  }
}

export default Display;

Display.defaultProps = {
  result: '0',
  total: 0,
  operation: '',
};

Display.propTypes = {
  result: PropTypes.string,
  total: PropTypes.string,
  operation: PropTypes.string,
};
