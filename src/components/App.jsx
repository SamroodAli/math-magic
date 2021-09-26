import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

import { Grid } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Routes from './Routes';
import ThemeContext from '../theme';
import useTheme from '../hooks/useTheme';
import useStyle from '../hooks/useStyle';
import useNavMenu from '../hooks/useNavMenu';
import './style/App.css';

const App = () => {
  const theme = useTheme();
  const { style } = useStyle();
  const [activeItem, setActiveItem] = useNavMenu();

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
