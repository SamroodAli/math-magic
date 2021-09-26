import { useState } from 'react';
import { dark, light } from '../theme';

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const style = isDark ? dark : light;
  return { style, isDark, setIsDark };
};

export default useTheme;
