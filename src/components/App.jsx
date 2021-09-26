import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import DarkModeToggle from 'react-dark-mode-toggle';
import NavMenu from './NavMenu';
import Routes from './Routes';
import ThemeContext from '../theme';
import './style/App.css';

const App = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isDark, setIsDark] = useState(false);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Router>
      <ThemeContext.Provider value={isDark}>
        <div className="ui center aligned container">
          <header>
            <Link to="/">
              <h1 className="text-center" id="brand">Math Magic</h1>
            </Link>
            <DarkModeToggle
              onChange={setIsDark}
              checked={isDark}
              size={80}
            />
          </header>
          <Grid>
            <Grid.Column width={4}>
              <NavMenu activeItem={activeItem} handleItemClick={handleItemClick} />
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
