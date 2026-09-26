import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Shows a loading spinner and disables user interactions */
  isLoading?: boolean;
  /** Accessible text for the loading state */
  loadingText?: string;
  /** Optional icon to display before the button label */
  leftIcon?: React.ReactNode;
  /** Optional icon to display after the button label */
  rightIcon?: React.ReactNode;
  /** Whether the button should occupy the full width of its container */
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25 hover:from-indigo-600 hover:to-indigo-700 hover:shadow-indigo-500/40 active:brightness-95 border border-indigo-400/30',
  secondary:
    'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 active:bg-slate-800 shadow-sm',
  outline:
    'bg-transparent text-indigo-400 border border-indigo-500/60 hover:bg-indigo-500/10 hover:border-indigo-400 active:bg-indigo-500/20',
  ghost:
    'bg-transparent text-slate-300 hover:bg-slate-800/80 hover:text-white active:bg-slate-800',
  danger:
    'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/20 hover:from-rose-600 hover:to-red-700 hover:shadow-rose-500/35 border border-rose-400/30',
  accent:
    'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-500/40 border border-cyan-300/40',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg font-medium',
  md: 'text-sm px-4 py-2.5 gap-2 rounded-xl font-medium',
  lg: 'text-base px-6 py-3.5 gap-2.5 rounded-xl font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      disabled,
      fullWidth = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading}
        aria-disabled={isDisabled}
        className={cn(
          'relative inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{loadingText || children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
