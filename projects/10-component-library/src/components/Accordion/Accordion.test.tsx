import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

describe('Accordion Component', () => {
  it('renders correctly and expands item when clicked', async () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionContent>Answer 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Question 1')).toBeInTheDocument();
    
    // Initially content should not be in the document (due to AnimatePresence exit)
    expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();

    const trigger1 = screen.getByText('Question 1');
    fireEvent.click(trigger1);

    // After clicking, the content should be present
    expect(screen.getByText('Answer 1')).toBeInTheDocument();
  });

  it('handles multiple type correctly', () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionContent>Answer 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Question 1');
    const trigger2 = screen.getByText('Question 2');

    fireEvent.click(trigger1);
    fireEvent.click(trigger2);

    // Both should be open
    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    expect(screen.getByText('Answer 2')).toBeInTheDocument();
  });

  it('handles collapsible in single mode correctly', async () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    
    const trigger1 = screen.getByText('Question 1');
    // Click to collapse
    fireEvent.click(trigger1);
    
    // It should collapse
    await waitFor(() => {
      expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
    });
  });

  it('triggers onValueChange', () => {
    const handleValueChange = vi.fn();
    render(
      <Accordion type="single" onValueChange={handleValueChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionContent>Answer 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    fireEvent.click(screen.getByText('Question 1'));
    expect(handleValueChange).toHaveBeenCalledWith('item-1');
  });
});
