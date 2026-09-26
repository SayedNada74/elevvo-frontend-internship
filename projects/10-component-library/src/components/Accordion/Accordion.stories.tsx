import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Accordion {...args} type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML elements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components' aesthetic, and you can fully customize it using Tailwind CSS classes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default using Framer Motion for smooth height expansions and collapses.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    children: null,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Accordion {...args} type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>React 19 Compatibility</AccordionTrigger>
          <AccordionContent>
            Fully compatible with the latest React 19 features including Server Components and new hooks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>TypeScript Support</AccordionTrigger>
          <AccordionContent>
            Written in strict TypeScript with comprehensive type definitions for the best developer experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
