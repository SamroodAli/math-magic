import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('Button component returns a button react element', async () => {
  const onClick = jest.fn();
  const buttonRender = render(<Button name="1" onClick={onClick} />);
  const button = await buttonRender.findByTestId('button');
  expect(button.type).toBe('button');
});

test('Button component to call the number with the onClick function', async () => {
  const onClick = jest.fn();
  const buttonRender = render(<Button name="1" onClick={onClick} />);
  const button = await buttonRender.findByTestId('button');
  button.click();
  expect(onClick).toHaveBeenCalledWith('1');
});

test('Button snapshot testing', () => {
  const tree = renderer
    .create(<Button name="1" onClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
