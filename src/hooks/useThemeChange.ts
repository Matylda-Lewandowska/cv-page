import { useState } from 'react';
import { ThemeEnum } from '../enums/ThemeEnum';

export const useThemeChange = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK);

  return {
    theme,
    setTheme
  };
};
