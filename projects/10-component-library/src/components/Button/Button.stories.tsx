import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ArrowRight, Download, Trash2, Sparkles } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile and accessible button component supporting multiple visual variants, sizes, loading states, and icon slots.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'accent'],
      description: 'The style variant of the button',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Displays a loading spinner and disables user clicks',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button interactions',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fit 100% of container width',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Get Started Now',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Documentation',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'View Details',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Resource',
    leftIcon: <Trash2 className="w-4 h-4" />,
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Upgrade to Pro',
    leftIcon: <Sparkles className="w-4 h-4" />,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    children: 'Export Report',
    leftIcon: <Download className="w-4 h-4" />,
    rightIcon: <ArrowRight className="w-4 h-4" />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    loadingText: 'Generating tokens...',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: 'Disabled State',
  },
};
