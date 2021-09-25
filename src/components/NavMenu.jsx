import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavMenu = ({ activeItem, handleItemClick }) => (
  <Menu fluid vertical tabular>
    <Menu.Item
      as={Link}
      to="/"
      name="bio"
      active={activeItem === 'bio'}
      onClick={handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/calculator"
      name="calculator"
      active={activeItem === 'calculator'}
      onClick={handleItemClick}
    />
    <Menu.Item
      as={Link}
      to="/quotes"
      name="quotes"
      active={activeItem === 'quotes'}
      onClick={handleItemClick}
    />
  </Menu>
);
