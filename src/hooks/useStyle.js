import { useContext } from 'react';
import ThemeContext from '../theme';

export const dark = { backgroundColor: '#0F3741', color: 'white' };
export const light = { backgroundColor: 'white', color: 'black' };

export default () => {
  const [isDark, setIsDark] = useContext(ThemeContext);
  const mainBackground = { backgroundColor: isDark ? '#282C34' : '#93B5C6' };
  const textColor = { color: isDark ? 'white' : '#1E3163' };
  const invertColor = { color: isDark ? 'black' : 'white' };
  const style = isDark ? dark : light;
  return {
    isDark,
    setIsDark,
    invertColor,
    style,
    textColor,
    mainBackground,
  };
};
