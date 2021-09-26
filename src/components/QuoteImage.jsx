import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const QuoteAuthor = ({ authorImg, author }) => (
  <div style={{ height: '400px' }}>
    <Image height="400px" circular src={authorImg} alt={author} centered />
  </div>
);

QuoteAuthor.propTypes = {
  authorImg: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteAuthor;
