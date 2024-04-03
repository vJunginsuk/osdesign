import React, { useContext } from 'react';
import Flex from '../Flex/Flex';

import { contextProps } from '../../interfaces/props.interface';
import { ThemeContext } from '../../stores/context';

const Contents = () => {
  const { theme, onChangeTheme } = useContext<contextProps>(ThemeContext);
  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'theme-wrap'}>
      <Flex>
        <input
          type="radio"
          value="light"
          name="themeGrp"
          onChange={onChangeTheme}
          id="light"
          defaultChecked
        />
        <label htmlFor="light">light</label>
        <input
          type="radio"
          value="dark"
          name="themeGrp"
          onChange={onChangeTheme}
          id="dark"
        />
        <label htmlFor="dark">dark</label>
      </Flex>
      <div>sdlkfsldkjflsdkjf</div>
    </div>
  );
};

export default Contents;
