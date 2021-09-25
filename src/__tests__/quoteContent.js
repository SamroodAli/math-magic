import renderer from 'react-test-renderer';
import Content from '../components/quoteContent';

test('Routes snapshot testing', () => {
  const tree = renderer.create(<Content quote="lorem ipsum" author="lorem" />).toJSON();
  expect(tree).toMatchSnapshot();
});
