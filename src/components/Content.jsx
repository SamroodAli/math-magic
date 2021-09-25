import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Content = ({ quote, author }) => {
  if (quote === 'Loading') {
    return (
      <Dimmer active inverted data-testid="loader">
        <Loader />
      </Dimmer>
    );
  }
  return (
    <>
      <h3 data-testid="quote">{quote}</h3>

      <h4 data-testid="author">{author}</h4>
    </>
  );
};

Content.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Content;
