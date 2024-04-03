import React, { useCallback, useState } from 'react';

import { ThemeContext } from '../../stores/context';
import { themeProps } from '../../interfaces/props.interface';

const ThemeProvider = (props: themeProps) => {
  const { children } = props;
  const [theme, setTheme] = useState<string>('');

  const onClickTheme = useCallback(() => {
    if (theme === 'light' || theme === '') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }, [theme]);

  const onChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, onClickTheme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
