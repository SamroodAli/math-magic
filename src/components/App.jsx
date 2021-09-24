import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Calculator from './Calculator';

const App = () => (
  <div>
    <Router>
      <header>
        <Link to="/">
          <h1>Math Magic</h1>
        </Link>
      </header>
      <Switch>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">{/* <SearchParams /> */}</Route>
      </Switch>
    </Router>
  </div>
);

export default App;
