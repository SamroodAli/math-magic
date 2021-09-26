import { render } from '@testing-library/react';
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

test('Button component should be wide if wide prop given', async () => {
  const onClick = jest.fn();
  const buttonRender = render(<Button name="1" onClick={onClick} wide />);
  const button = await buttonRender.findByTestId('button');
  expect(button.style.width).toEqual('50%');
});
