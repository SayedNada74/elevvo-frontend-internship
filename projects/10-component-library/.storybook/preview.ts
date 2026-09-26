import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#090d16' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
    a11y: {
      config: {},
      options: {
        restoreScroll: true,
      },
    },
  },
};

export default preview;
