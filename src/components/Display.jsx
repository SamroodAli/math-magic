import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.PureComponent {
  text = (value, text) => <p>{`${text}: ${value}`}</p>

  render() {
    const { result, total, operation } = this.props;
    return (
      <>
        {this.text(total, 'Total')}
        {this.text(operation)}
        {this.text(result, 'Result:')}
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
