import {
  Button, Loader, Dimmer, Image, Container,
} from 'semantic-ui-react';
import useQuotes from '../hooks/quotes';

const Quote = () => {
  const [quote, author, authorImg, getQuotes] = useQuotes();
  return (
    <Container>
      <Button color="black" onClick={getQuotes}>
        Next
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
