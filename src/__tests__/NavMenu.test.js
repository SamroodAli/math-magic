import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

test('NavMenu displays all items as shown in snapshot', () => {
  const tree = renderer.create(<StaticRouter><NavMenu activeItem="Home" handleItemClick={jest.fn()} /></StaticRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
