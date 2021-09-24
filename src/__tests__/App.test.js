import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('Button snapshot testing', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('App renders display component', async () => {
  const app = render(<Calculator />);
  const display = await app.findAllByTestId('display');
  expect(display).toBeDefined();
});

test('App renders buttonPanel component', async () => {
  const app = render(<Calculator />);
  const buttonPanel = await app.findAllByTestId('button');
  expect(buttonPanel).toBeDefined();
});
