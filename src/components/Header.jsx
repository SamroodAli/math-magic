import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h1 className="text-center" id="brand">Math Magic</h1>
    </Link>
  </header>
);

export default Header;
