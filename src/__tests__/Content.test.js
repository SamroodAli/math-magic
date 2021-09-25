import { render } from '@testing-library/react';

import renderer from 'react-test-renderer';
import Content from '../components/Content';

test('Content snapshot testing', () => {
  const tree = renderer.create(<Content quote="lorem ipsum" author="lorem" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Loader presence testing', async () => {
  const content = render(<Content quote="Loading" author="" />);
  const loader = await content.findByTestId('loader');
  expect(loader).toBeDefined();
});

test('Quote presence testing', async () => {
  const quote = 'Lorem ipsum';
  const author = 'Lorem';
  const content = render(<Content quote={quote} author={author} />);
  const quoteJsx = await content.findByTestId('quote');
  expect(quoteJsx.innerHTML).toEqual(quote);
});

test('Author presence testing', async () => {
  const quote = 'Lorem ipsum';
  const author = 'Lorem';
  const content = render(<Content quote={quote} author={author} />);
  const authorJsx = await content.findByTestId('author');
  expect(authorJsx.innerHTML).toEqual(author);
});
