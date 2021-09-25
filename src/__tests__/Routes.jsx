import renderer from 'react-test-renderer';
import Routes from '../components/Home';

test('Display panel displays all calculator buttons', () => {
  const tree = renderer.create(<Routes />).toJSON();
  expect(tree).toMatchSnapshot();
});
