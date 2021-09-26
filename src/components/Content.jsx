import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import QuoteAuthor from './QuoteImage';
import NextButton from './NextButton';

const Content = (
  {
    quote,
    authorImg,
    author,
    getQuotes,
  },
) => (
  <Container>
    <QuoteAuthor authorImg={authorImg} author={author} />
    <NextButton onClick={getQuotes} />
    <h3 data-testid="quote">{quote}</h3>
    <h4 data-testid="author">{author}</h4>
  </Container>
);

Content.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  getQuotes: PropTypes.func.isRequired,
};

export default Content;
