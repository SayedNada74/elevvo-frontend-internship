import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { createRef } from 'react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders input with label and links id properly', () => {
    render(<Input label="Email Address" id="email-field" placeholder="you@example.com" />);
    const label = screen.getByText(/email address/i);
    const input = screen.getByPlaceholderText(/you@example\.com/i);

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'email-field');
    expect(input).toHaveAttribute('id', 'email-field');
  });

  it('allows user typing and triggers onChange handler', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(<Input placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/type here/i);

    await user.type(input, 'Hello World');
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello World');
  });

  it('displays error message and sets aria-invalid="true"', () => {
    render(<Input label="Password" error="Password must be at least 8 characters" />);
    const input = screen.getByLabelText(/password/i);
    const errorText = screen.getByRole('alert');

    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveTextContent(/password must be at least 8 characters/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.getAttribute('aria-describedby')).toBe(errorText.getAttribute('id'));
  });

  it('displays helper text linked via aria-describedby when there is no error', () => {
    render(<Input label="Username" helperText="Letters and numbers only" />);
    const input = screen.getByLabelText(/username/i);
    const helperText = screen.getByText(/letters and numbers only/i);

    expect(helperText).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input.getAttribute('aria-describedby')).toBe(helperText.getAttribute('id'));
  });

  it('disables input when disabled prop is set', async () => {
    const user = userEvent.setup();
    render(<Input label="Disabled Field" disabled placeholder="Cannot type" />);
    const input = screen.getByPlaceholderText(/cannot type/i);

    expect(input).toBeDisabled();
    await user.type(input, 'attempt');
    expect(input).toHaveValue('');
  });

  it('renders left and right icons correctly', () => {
    render(
      <Input
        placeholder="Search..."
        leftIcon={<span data-testid="search-icon">🔍</span>}
        rightIcon={<span data-testid="clear-icon">✖</span>}
      />
    );

    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    expect(screen.getByTestId('clear-icon')).toBeInTheDocument();
  });

  it('forwards ref to HTMLInputElement', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
