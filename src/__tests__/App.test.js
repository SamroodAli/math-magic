import renderer from 'react-test-renderer';
import App from '../components/App';

test('Button snapshot testing', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('App renders display component', () => {});
