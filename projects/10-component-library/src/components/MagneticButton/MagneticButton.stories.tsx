import type { Meta, StoryObj } from '@storybook/react';
import { MagneticButton } from './MagneticButton';

const meta = {
  title: 'Components/MagneticButton',
  component: MagneticButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MagneticButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hover me!',
    intensity: 40,
  },
};

export const HighIntensity: Story = {
  args: {
    children: 'Very Magnetic!',
    intensity: 100,
    className: 'bg-rose-600 hover:bg-rose-500',
  },
};
