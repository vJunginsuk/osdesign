import type { Preview } from '@storybook/react';
import '../src/assets/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // backgrounds: {
    //   values: [
    //     { name: 'light', value: '#fff' },
    //     { name: 'dark', value: '#333' },
    //   ],
    // },
  },
};
/*
 * More on Storybook global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
    config: {
      rules: {
        id: 'color-contrast',
        enabled: false,
      },
    },
  },
};

export default preview;
