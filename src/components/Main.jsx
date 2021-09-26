import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import Routes from './Routes';
import useNavMenu from '../hooks/useNavMenu';
import useStyle from '../hooks/useStyle';

const Main = () => {
  const [activeItem, setActiveItem] = useNavMenu();
  const { style, mainBackground } = useStyle();

  return (
    <div style={mainBackground}>
      <div className="ui center aligned container" style={style}>
        <header>
          <Link to="/">
            <h1 className="text-center" id="brand">Math Magic</h1>
          </Link>
        </header>
        <Grid>
          <Grid.Column width={4}>
            <NavMenu activeItem={activeItem} handleItemClick={setActiveItem} />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Routes />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Main;
