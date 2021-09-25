import React from 'react';
import {
  Button, Image, Container, Icon,
} from 'semantic-ui-react';
import useQuotes from '../hooks/quotes';
import Content from './Content';

const Quote = () => {
  const [quote, author, authorImg, getQuotes] = useQuotes();

  return (
    <Container>
      <h2>Math Quotes</h2>
      <div style={{ height: '400px' }}>
        {authorImg && <Image height="400px" circular src={authorImg} alt={author} centered />}
      </div>
      <Button animated onClick={getQuotes} style={{ margin: '1rem' }} color="black">
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Content quote={quote} author={author} />
    </Container>
  );
};

export default Quote;
