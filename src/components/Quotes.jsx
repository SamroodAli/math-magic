import React from 'react';
import { Container } from 'semantic-ui-react';
import useQuotes from '../hooks/useQuotes';
import Content from './Content';
import Loader from './Loader';

const Quote = () => {
  const { loading, ...quoteData } = useQuotes();

  return (
    <Container>
      <h2>Math Quotes</h2>
      {loading ? <Loader /> : <Content quoteData={quoteData} /> }
    </Container>
  );
};

export default Quote;
