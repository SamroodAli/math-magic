import { Dimmer, Loader } from 'semantic-ui-react';
import useStyles from '../hooks/useStyle';

const Loading = () => {
  const { isDark } = useStyles();
  return <Dimmer active inverted={!isDark}><Loader /></Dimmer>;
};
export default Loading;
