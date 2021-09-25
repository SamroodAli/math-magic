import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Routes from './Routes';

const App = () => {
  const [activeItem, setActiveItem] = useState('bio');
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="ui center aligned container">
      <header>
        <Link to="/">
          <h1 className="text-center">Math Magic</h1>
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
  );
};

export default <Router><App /></Router>;
