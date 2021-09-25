import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Display panel displays all calculator buttons', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
