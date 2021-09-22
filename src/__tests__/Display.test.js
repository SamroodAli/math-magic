import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

test('Display panel displays all calculator buttons', () => {
  const tree = renderer
    .create(<Display result="10" operation="+" total="100" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Display component renders div with test-id display', async () => {
  const display = render(<Display result="10" operation="+" total="100" />);
  const div = await display.findByTestId('display');
  expect(div).toBeDefined();
});

test('Display component shows total on screen', () => {
  render(<Display result="10" operation="+" total="100" />);
  const total = screen.getAllByText('Result: 10');
  expect(total).toBeDefined();
});

test('Display component shows result on screen', () => {
  render(<Display result="10" operation="+" total="100" />);
  const total = screen.getAllByText('Total: 100');
  expect(total).toBeDefined();
});

test('Display component shows operatiion on screen', () => {
  render(<Display result="10" operation="+" total="100" />);
  const total = screen.getAllByText('Operation: +');
  expect(total).toBeDefined();
});
