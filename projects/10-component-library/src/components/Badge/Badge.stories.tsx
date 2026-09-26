import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';
import { ShieldCheck } from 'lucide-react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Status indicator and tag badge component with pulse dot and remove actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'accent', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    withDot: {
      control: 'boolean',
    },
    isRemovable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'v2.4.0 Release',
    withDot: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Operational',
    withDot: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'accent',
    children: 'Enterprise Security',
    leftIcon: <ShieldCheck className="w-3.5 h-3.5" />,
  },
};

export const Removable: Story = {
  args: {
    variant: 'default',
    children: 'React 19',
    isRemovable: true,
  },
};
