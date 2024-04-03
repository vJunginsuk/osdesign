import { createContext } from 'react';
import { contextProps } from '../interfaces/props.interface';

export const ThemeContext = createContext<contextProps>({
  theme: '',
  onClickTheme: () => {},
  onChangeTheme: () => {},
});
