import React, { useCallback, useState } from 'react';

import { ThemeContext } from '../../stores/context';
import { themeProps } from '../../interfaces/props.interface';

const ThemeProvider = (props: themeProps) => {
  const { children, color } = props;
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

  // useEffect(() => {
  //   if (color !== undefined) {
  //     localStorage.setItem('PRIMARY_COLOR', color);
  //     document.documentElement.style.setProperty('--primary-color', color);
  //   } else {
  //     return;
  //   }
  // }, [color]);
  // if (!CSS.supports('--my-color', 'initial')) {
  //   (window as any).CSS.registerProperty({
  //     name: '--my-color',
  //     syntax: '<color>',
  //     initialValue: color,
  //     inherits: false,
  //   });
  // }

  return (
    <ThemeContext.Provider value={{ theme, onClickTheme, onChangeTheme }}>
      {/* <div color={color}>{children}</div> */}
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
