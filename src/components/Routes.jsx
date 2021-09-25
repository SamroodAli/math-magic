import { Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Quotes from './Quotes';
import Home from './Home';

const Routes = () => (
  <Segment>
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/quotes" component={Quotes} />
      <Route path="/" component={Home} />
    </Switch>
  </Segment>
);

export default Routes;
