import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders badge with text content', () => {
    render(<Badge>Verified</Badge>);
    expect(screen.getByText('Verified')).toBeInTheDocument();
  });

  it('renders removable button and calls onRemove when clicked', async () => {
    const handleRemove = vi.fn();
    const user = userEvent.setup();

    render(
      <Badge isRemovable onRemove={handleRemove}>
        Removable Tag
      </Badge>
    );

    const removeBtn = screen.getByRole('button', { name: /remove badge/i });
    expect(removeBtn).toBeInTheDocument();

    await user.click(removeBtn);
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes properly', () => {
    const { rerender } = render(<Badge variant="success">Success Status</Badge>);
    let badge = screen.getByText('Success Status').parentElement;
    expect(badge?.className).toContain('text-emerald-300');

    rerender(<Badge variant="danger">Error Status</Badge>);
    badge = screen.getByText('Error Status').parentElement;
    expect(badge?.className).toContain('text-rose-300');
  });
});
