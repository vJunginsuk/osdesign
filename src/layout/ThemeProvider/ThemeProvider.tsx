import React, { useCallback, useState } from 'react';

import { ThemeContext } from '../../stores/context';
import { themeProps } from '../../interfaces/props.interface';

const ThemeProvider = (props: themeProps) => {
  const { children } = props;
  const localTheme: any = localStorage.getItem('THEME');
  const [theme, setTheme] = useState<string>(
    localTheme !== null ? localTheme : 'light',
  );

  const onClickTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('THEME', 'dark');
    } else if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('THEME', 'light');
    }
  }, [theme]);

  const onChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
    localStorage.setItem('THEME', event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, onClickTheme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
