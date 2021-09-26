import PropTypes from 'prop-types';
import {
  Button, Image, Icon,
} from 'semantic-ui-react';
import useStyle from '../hooks/useStyle';

const Content = ({
  quote, author, authorImg, getQuotes,
}) => {
  const { mainBackground, textColor } = useStyle();
  return (
    <>
      <div style={{ height: '400px' }}>
        <Image height="400px" circular src={authorImg} alt={author} centered />
      </div>
      <Button animated onClick={getQuotes} style={{ margin: '1rem', ...mainBackground, ...textColor }} color="black">
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <h3 data-testid="quote">{quote}</h3>
      <h4 data-testid="author">{author}</h4>
    </>
  );
};

Content.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  getQuotes: PropTypes.func.isRequired,
};

export default Content;
