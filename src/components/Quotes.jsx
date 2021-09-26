import React from 'react';
import { Container } from 'semantic-ui-react';
import useQuotes from '../hooks/useQuotes';
import Content from './Content';
import Loader from './Loader';

const Quote = () => {
  const [quote, author, authorImg, getQuotes] = useQuotes();
  const quoteArea = () => {
    if (quote === 'Loading') {
      return <Loader />;
    }
    return <Content quote={quote} author={author} authorImg={authorImg} getQuotes={getQuotes} />;
  };

  return (
    <Container>
      <h2>Math Quotes</h2>
      {quoteArea()}
    </Container>
  );
};

export default Quote;
