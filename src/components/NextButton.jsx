import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import useStyle from '../hooks/useStyle';

const NextButton = ({ onClick }) => {
  const [mainBackground, textColor] = useStyle;
  return (
    <Button animated onClick={onClick} style={{ margin: '1rem', ...mainBackground, ...textColor }}>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
