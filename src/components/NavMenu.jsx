import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DarkModeToggle from 'react-dark-mode-toggle';
import useStyles from '../hooks/useStyle';

const NavMenu = ({ activeItem, handleItemClick }) => {
  const { style, isDark, setIsDark } = useStyles();
  return (
    <Menu fluid vertical tabular style={{ height: '90vh', ...style }}>
      <Menu.Item
        style={style}
        as={Link}
        to="/"
        name="Home"
        active={activeItem === 'Home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        style={style}
        as={Link}
        to="/calculator"
        name="Calculator"
        active={activeItem === 'Calculator'}
        onClick={handleItemClick}
      />
      <Menu.Item
        style={{ ...style, marginBottom: '1rem' }}
        as={Link}
        to="/quotes"
        name="Quotes"
        active={activeItem === 'Quotes'}
        onClick={handleItemClick}
      />
      <DarkModeToggle
        onChange={setIsDark}
        checked={isDark}
        size={80}
      />
    </Menu>
  );
};
NavMenu.propTypes = {
  activeItem: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

export default NavMenu;
