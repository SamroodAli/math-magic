import { useContext } from 'react';
import ThemeContext from '../theme';

export const dark = { backgroundColor: '#0F3741', color: 'white' };
export const light = { backgroundColor: 'white', color: 'black' };

export default () => {
  const [isDark, setIsDark] = useContext(ThemeContext);
  const mainBackground = { backgroundColor: isDark ? '#282C34' : 'lightgrey' };
  const textColor = { color: isDark ? 'white' : 'black' };
  const style = isDark ? dark : light;
  return {
    isDark,
    setIsDark,
    style,
    textColor,
    mainBackground,
  };
};
