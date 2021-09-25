import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Routes from './Routes';
import './style/App.css';

const App = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Router>
      <div className="ui center aligned container">
        <header>
          <Link to="/">
            <h1 className="text-center" id="brand">Math Magic</h1>
          </Link>
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
    </Router>
  );
};

export default App;
