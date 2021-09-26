import { Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Quotes from './Quotes';
import Home from './Home';
import useStyle from '../hooks/useStyle';

const Routes = () => {
  const { style } = useStyle();
  return (
    <Segment style={{ ...style, border: '1px solid silver' }}>
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/" component={Home} />
      </Switch>
    </Segment>
  );
};
export default Routes;
