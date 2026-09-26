import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { Switch } from './Switch';

describe('Switch Component', () => {
  it('renders with role="switch" and correct aria-checked', () => {
    render(<Switch checked={false} onChange={vi.fn()} label="Dark Mode" />);
    const toggle = screen.getByRole('switch');

    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('triggers onChange when clicked', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Switch checked={false} onChange={handleChange} label="Notifications" />);
    const toggle = screen.getByRole('switch');

    await user.click(toggle);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('toggles on space and enter keyboard keys', () => {
    const handleChange = vi.fn();

    render(<Switch checked={true} onChange={handleChange} />);
    const toggle = screen.getByRole('switch');

    fireEvent.keyDown(toggle, { key: ' ' });
    expect(handleChange).toHaveBeenCalledWith(false);

    fireEvent.keyDown(toggle, { key: 'Enter' });
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('does not toggle when disabled', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Switch checked={false} onChange={handleChange} disabled label="Locked" />);
    const toggle = screen.getByRole('switch');

    expect(toggle).toBeDisabled();
    await user.click(toggle);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
