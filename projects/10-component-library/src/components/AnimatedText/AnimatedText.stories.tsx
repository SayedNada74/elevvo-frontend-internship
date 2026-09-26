import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedText } from './AnimatedText';

const meta = {
  title: 'Components/AnimatedText',
  component: AnimatedText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Aura UI brings your application to life.',
    className: 'text-4xl font-bold text-slate-100',
  },
};

export const Repeating: Story = {
  args: {
    text: 'Scroll down to reveal me over and over!',
    once: false,
    className: 'text-2xl font-semibold text-sky-400',
  },
};
