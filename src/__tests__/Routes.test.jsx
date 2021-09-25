import renderer from 'react-test-renderer';
import Routes from '../components/Home';

test('Routes snapshot testing', () => {
  const tree = renderer.create(<Routes />).toJSON();
  expect(tree).toMatchSnapshot();
});
