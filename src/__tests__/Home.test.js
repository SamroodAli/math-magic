import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Home displays markup as shown in snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
