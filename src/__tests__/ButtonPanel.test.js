import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

test('Button panel displays all calculator buttons', () => {
  const onOperationClick = jest.fn();
  const onNumberClick = jest.fn();
  const tree = renderer
    .create(
      <ButtonPanel
        onOperationClick={onOperationClick}
        onNumberClick={onNumberClick}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button panel returns panel of 19 buttons', async () => {
  const onOperationClick = jest.fn();
  const onNumberClick = jest.fn();
  const buttonPanel = render(
    <ButtonPanel
      onOperationClick={onOperationClick}
      onNumberClick={onNumberClick}
    />,
  );
  const buttons = await buttonPanel.findAllByTestId('button');
  expect(buttons.length).toEqual(19);
});

test('Button panel should return button type react nodes', async () => {
  const onOperationClick = jest.fn();
  const onNumberClick = jest.fn();
  const buttonPanel = render(
    <ButtonPanel
      onOperationClick={onOperationClick}
      onNumberClick={onNumberClick}
    />,
  );
  const buttons = await buttonPanel.findAllByTestId('button');
  for (let i = 0; i < buttons.length; i += 1) {
    expect(buttons[i].type).toEqual('button');
  }
});
