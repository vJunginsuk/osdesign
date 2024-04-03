import type { Meta, StoryObj } from '@storybook/react';

import Contents from './Contents';
import ThemeProvider from './ThemeProvider';

const meta: Meta<typeof ThemeProvider> = {
  component: ThemeProvider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Basic: Story = {
  render: () => {
    return (
      <ThemeProvider>
        <Contents />
      </ThemeProvider>
    );
  },
};
