import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalFooter, type ModalProps } from './Modal';
import { Button } from '../Button';
import { Input } from '../Input';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible dialog window rendered via React Portal with backdrop blur, focus trapping, ESC dismiss, and ARIA modal compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Maximum width of the dialog',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Closes dialog when clicking outside on backdrop',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Closes dialog when Escape key is pressed',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveModalDemo(args: Partial<ModalProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setIsOpen(true)}>Open Modal Dialog</Button>

      <Modal
        {...(args as ModalProps)}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create New Project"
        description="Enter basic repository parameters to initialize your deployment."
      >
        <div className="space-y-4">
          <Input label="Project Name" placeholder="e.g. quantum-dashboard" required />
          <Input label="Repository URL" placeholder="https://github.com/org/repo" />
        </div>

        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Create Project
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

function SmallConfirmationModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete Deployment
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="sm"
        title="Confirm Deletion"
        description="This action is permanent and cannot be undone."
      >
        <p className="text-sm text-slate-300">
          Are you certain you wish to dismantle this production cluster?
        </p>

        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => setIsOpen(false)}>
            Delete Permanently
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export const InteractiveExample: Story = {
  render: (args) => <InteractiveModalDemo {...args} />,
  args: { isOpen: false, onClose: () => {}, children: '' } as any,
};

export const SmallConfirmation: Story = {
  render: () => <SmallConfirmationModalDemo />,
  args: { isOpen: false, onClose: () => {}, children: '' } as any,
};
