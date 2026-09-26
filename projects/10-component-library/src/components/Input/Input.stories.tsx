import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Search, Mail, Lock } from 'lucide-react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A rich text input component supporting labels, helper text, error and success states, left and right icon slots, and accessible ARIA attributes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Height and typography scale of input',
    },
    error: {
      control: 'text',
      description: 'Validation error text',
    },
    helperText: {
      control: 'text',
      description: 'Helpful hints or format guidance',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables input interaction',
    },
    required: {
      control: 'boolean',
      description: 'Marks input field as required',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'e.g. alex_developer',
    helperText: 'Must be unique across the platform',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'name@company.com',
    type: 'email',
    leftIcon: <Mail className="w-4 h-4 text-slate-400" />,
  },
};

export const SearchField: Story = {
  args: {
    placeholder: 'Search documentation, components, tokens...',
    leftIcon: <Search className="w-4 h-4 text-slate-400" />,
    size: 'lg',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: '123',
    leftIcon: <Lock className="w-4 h-4 text-rose-400" />,
    error: 'Password must contain at least 8 characters and 1 symbol.',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Workspace Domain',
    defaultValue: 'nexusflow.design',
    success: true,
    helperText: 'Domain is available!',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Billing ID',
    defaultValue: 'INV-90210-ACTIVE',
    disabled: true,
    helperText: 'Managed automatically by Stripe billing system',
  },
};
