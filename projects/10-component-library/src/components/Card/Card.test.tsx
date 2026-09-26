import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { createRef } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';

describe('Card Component', () => {
  it('renders card with compound components correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>Monthly growth and active sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Main analytics content</p>
        </CardContent>
        <CardFooter>
          <button>View Full Report</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Analytics Overview'
    );
    expect(
      screen.getByText('Monthly growth and active sessions')
    ).toBeInTheDocument();
    expect(screen.getByText('Main analytics content')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /view full report/i })
    ).toBeInTheDocument();
  });

  it('renders different visual variants', () => {
    const { rerender } = render(<Card variant="glass" data-testid="card" />);
    expect(screen.getByTestId('card').className).toContain('backdrop-blur-xl');

    rerender(<Card variant="outlined" data-testid="card" />);
    expect(screen.getByTestId('card').className).toContain('border-slate-800/90');

    rerender(<Card variant="gradient" data-testid="card" />);
    expect(screen.getByTestId('card').className).toContain('bg-gradient-to-br');
  });

  it('handles clickable card behavior with role="button" and tabIndex', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Card isClickable onClick={handleClick} data-testid="clickable-card">
        Clickable Card Content
      </Card>
    );

    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');

    await user.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref properly to Card container', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref}>Ref Card</Card>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
