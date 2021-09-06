import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { name } = this.props;
    return (
      <button type="button">{name}</button>
    );
  }
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
