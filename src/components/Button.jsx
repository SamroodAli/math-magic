import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { name, onClick } = this.props;
    return (
      <button type="button" onClick={() => onClick(name)}>{name}</button>
    );
  }
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
