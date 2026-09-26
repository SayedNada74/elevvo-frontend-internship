import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible toggle switch component supporting ARIA switch role and keyboard events.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveSwitchDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      label="Two-Factor Authentication"
      description="Require an SMS or authenticator passkey upon sign in"
    />
  );
}

export const Interactive: Story = {
  render: () => <InteractiveSwitchDemo />,
  args: { checked: false, onChange: () => {} } as any,
};

export const Disabled: Story = {
  render: () => (
    <Switch
      checked={true}
      disabled
      onChange={() => {}}
      label="Auto-update Packages"
      description="Managed by root organization policy"
    />
  ),
  args: { checked: false, onChange: () => {} } as any,
};
