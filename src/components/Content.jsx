import { Container } from 'semantic-ui-react';
import QuoteAuthor from './QuoteImage';
import NextButton from './NextButton';

const Content = (quoteData) => {
  const {
    author,
    authorImg,
    quote,
    getQuotes,
  } = quoteData;

  return (
    <Container>
      <QuoteAuthor authorImg={authorImg} author={author} />
      <NextButton onClick={getQuotes} />
      <h3 data-testid="quote">{quote}</h3>
      <h4 data-testid="author">{author}</h4>
    </Container>
  );
};

export default Content;
