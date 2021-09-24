import React from 'react';
import {
  Button, Loader, Dimmer, Image, Container, Icon,
} from 'semantic-ui-react';
import useQuotes from '../hooks/quotes';

const Quote = () => {
  const [quote, author, authorImg, getQuotes] = useQuotes();

  return (
    <Container>
      <Button animated onClick={getQuotes} color="black">
        <Button.Content hidden>Next</Button.Content>
        <Button.Content visible>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <h2>Math Quotes</h2>
      <br />
      {quote === 'Loading' ? (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      ) : <p>{quote}</p>}
      <p>{author}</p>
      {authorImg && <Image circular src={authorImg} alt={author} centered />}
    </Container>
  );
};

export default Quote;
