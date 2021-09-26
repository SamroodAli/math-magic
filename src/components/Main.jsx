import { Grid } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Routes from './Routes';
import Header from './Header';
import useNavMenu from '../hooks/useNavMenu';
import useStyle from '../hooks/useStyle';

const Main = () => {
  const [activeItem, setActiveItem] = useNavMenu();
  const { style, mainBackground } = useStyle();

  return (
    <div style={mainBackground}>
      <div className="ui center aligned container" style={style}>
        <Header />
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
