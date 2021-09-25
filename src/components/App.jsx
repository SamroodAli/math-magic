import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'bio' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui center aligned container">
        <header>
          <Link to="/">
            <h1 className="text-center">Math Magic</h1>
          </Link>
        </header>
        <Grid>
          <Grid.Column width={4}>
            <NavMenu activeItem={activeItem} handleItemClick={this.handleItemClick} />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Routes />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default <Router><App /></Router>;
