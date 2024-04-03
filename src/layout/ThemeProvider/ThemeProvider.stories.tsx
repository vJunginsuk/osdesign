import React, { useContext } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import Flex from '../Flex/Flex';
import ThemeProvider from './ThemeProvider';
import Button from '../../controls/Button/Button';
import { contextProps } from '../../interfaces/props.interface';
import { ThemeContext } from '../../stores/context';

const meta: Meta<typeof ThemeProvider> = {
  component: ThemeProvider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Basic: Story = {
  render: () => {
    const Contents = () => {
      const { theme, onChangeTheme, onClickTheme } =
        useContext<contextProps>(ThemeContext);
      const classes = classNames(
        'story-theme',
        theme === 'dark' && 'dark-theme',
      );
      return (
        <div className={classes}>
          <Flex className="story-theme-radio">
            <input
              type="radio"
              value="light"
              name="themeGrp"
              onChange={onChangeTheme}
              id="light"
              checked={theme === 'light' || theme === ''}
            />
            <label htmlFor="light">light</label>
            <input
              type="radio"
              value="dark"
              name="themeGrp"
              onChange={onChangeTheme}
              id="dark"
              checked={theme === 'dark'}
            />
            <label htmlFor="dark">dark</label>
            <Button onClick={onClickTheme}>Theme Change</Button>
          </Flex>

          <div>
            <h2>Theme</h2>
            <p>Theme는 "light" 와 "dark" 입니다.</p>
            <p>
              최상의 component를 ThemeProvider로 감싸고, 그 아래 children에
              theme와 event를 적용해 주세요.
            </p>
            <p>
              button onClick event에는 onClickTheme, radio onChange event에는
              onChangeTheme를 호출하시면 됩니다.
            </p>
            <p>
              Radio로 테마를 적용 시킬 때에는 value에 "light", "dark"로
              넣어주셔야 합니다.
            </p>
          </div>
        </div>
      );
    };
    return (
      <ThemeProvider>
        <Contents />
      </ThemeProvider>
    );
  },
};
