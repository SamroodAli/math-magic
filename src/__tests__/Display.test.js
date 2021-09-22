// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

test('Display panel displays all calculator buttons', () => {
  const tree = renderer
    .create(<Display result="10" operation="+" total="100" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
