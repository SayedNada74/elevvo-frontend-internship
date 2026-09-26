import type { Meta, StoryObj } from '@storybook/react';
import { SpotlightCard } from './SpotlightCard';

const meta = {
  title: 'Components/SpotlightCard',
  component: SpotlightCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpotlightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spotlightColor: 'rgba(255, 255, 255, 0.15)',
    className: 'p-8 max-w-sm',
    children: (
      <div>
        <h3 className="text-xl font-bold text-white mb-2">Spotlight Card</h3>
        <p className="text-slate-400">
          Hover over this card to see the beautiful spotlight effect following your cursor! Inspired by modern UI interactions.
        </p>
      </div>
    ),
  },
};

export const ColoredSpotlight: Story = {
  args: {
    spotlightColor: 'rgba(56, 189, 248, 0.25)', // Sky blue
    className: 'p-8 max-w-sm',
    children: (
      <div>
        <h3 className="text-xl font-bold text-white mb-2">Colored Glow</h3>
        <p className="text-slate-400">
          You can customize the color of the spotlight. This one has a sky blue glow.
        </p>
      </div>
    ),
  },
};
