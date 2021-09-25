import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavMenu = ({ activeItem, handleItemClick }) => (
  <Menu fluid vertical tabular style={{ height: '100vh' }}>
    <Menu.Item
      as={Link}
      to="/"
      name="Home"
      active={activeItem === 'Home'}
      onClick={handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/calculator"
      name="Calculator"
      active={activeItem === 'Calculator'}
      onClick={handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/quotes"
      name="Quotes"
      active={activeItem === 'Quotes'}
      onClick={handleItemClick}
    />
  </Menu>
);

NavMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default NavMenu;
