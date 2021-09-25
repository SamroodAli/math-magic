import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

test('Display panel displays all calculator buttons', () => {
  const tree = renderer.create(<StaticRouter><NavMenu activeItem="bio" handleItemClick={jest.fn()} /></StaticRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
