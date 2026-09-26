import type { Meta, StoryObj } from '@storybook/react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';
import { Button } from '../Button';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile container component designed using modern glassmorphism, elevated shadows, and compound sub-components for headers, content, and footers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'glass', 'gradient'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    isHoverable: {
      control: 'boolean',
    },
    isClickable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    isHoverable: true,
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Total Revenue</CardTitle>
          <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
            <TrendingUp className="w-4 h-4" />
          </span>
        </div>
        <CardDescription>Performance compared to previous cycle</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-white">$84,230</div>
        <p className="text-xs text-emerald-400 mt-1 flex items-center">
          +14.2% from last month
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" fullWidth rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
          View Transaction History
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Glassmorphism: Story = {
  args: {
    variant: 'glass',
    isHoverable: true,
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Active Team Members</CardTitle>
        <CardDescription>Collaborators currently online</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            SM
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Sayed Mahmoud</div>
            <div className="text-xs text-slate-400">Frontend Architect</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" fullWidth>
          Manage Team
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const GradientAccent: Story = {
  args: {
    variant: 'gradient',
    isHoverable: true,
  },
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>Pro Membership</CardTitle>
        <CardDescription>Unlock limitless enterprise design tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-300">
          Gain instant access to pre-built templates, automated WCAG 2.1 AA audits, and Storybook a11y generators.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="accent" size="sm" fullWidth>
          Upgrade Now
        </Button>
      </CardFooter>
    </Card>
  ),
};
