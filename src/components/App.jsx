import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import Calculator from './Calculator';
import Quotes from './Quotes';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'bio' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <header>
          <Link to="/">
            <h1>Math Magic</h1>
          </Link>
        </header>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Link to="/">
                <Menu.Item
                  name="bio"
                  active={activeItem === 'bio'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/calculator">
                <Menu.Item
                  name="calculator"
                  active={activeItem === 'calculator'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/quotes">
                <Menu.Item
                  name="quotes"
                  active={activeItem === 'quotes'}
                  onClick={this.handleItemClick}
                />
              </Link>

            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>

              <Switch>
                <Route path="/" component={Home} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/quotes" component={Quotes} />
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default App;
