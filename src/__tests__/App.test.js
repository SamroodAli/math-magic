import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from '../components/App';

test('Button snapshot testing', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('App renders display component', async () => {
  const app = render(<App />);
  const display = await app.findAllByTestId('display');
  expect(display).toBeDefined();
});

test('App renders buttonPanel component', async () => {
  const app = render(<App />);
  const buttonPanel = await app.findAllByTestId('button');
  expect(buttonPanel).toBeDefined();
});
