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
        <div className="ui center aligned container">
          <header>
            <Link to="/">
              <h1 className="text-center">Math Magic</h1>
            </Link>
          </header>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  as={Link}
                  to="/"
                  name="bio"
                  active={activeItem === 'bio'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/calculator"
                  name="calculator"
                  active={activeItem === 'calculator'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/quotes"
                  name="quotes"
                  active={activeItem === 'quotes'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
              <Segment>
                <Switch>
                  <Route path="/calculator" component={Calculator} />
                  <Route path="/quotes" component={Quotes} />
                  <Route path="/" component={Home} />
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
