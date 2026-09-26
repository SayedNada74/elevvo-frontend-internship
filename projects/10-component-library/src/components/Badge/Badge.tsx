import React, { forwardRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'accent' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size scale of the badge */
  size?: BadgeSize;
  /** Shows a pulsating status indicator dot */
  withDot?: boolean;
  /** Whether the badge can be removed / dismissed */
  isRemovable?: boolean;
  /** Callback fired when remove button is clicked */
  onRemove?: () => void;
  /** Optional icon displayed before text */
  leftIcon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-slate-800 text-slate-300 border-slate-700/80',
  primary: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  success: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  warning: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  danger: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  accent: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  outline: 'bg-transparent text-slate-300 border-slate-700',
};

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-slate-400',
  primary: 'bg-indigo-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  danger: 'bg-rose-400',
  accent: 'bg-cyan-400',
  outline: 'bg-slate-400',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-[11px] px-2 py-0.5 gap-1 rounded-md font-medium',
  md: 'text-xs px-2.5 py-1 gap-1.5 rounded-lg font-medium',
  lg: 'text-sm px-3.5 py-1.5 gap-2 rounded-xl font-medium',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      withDot = false,
      isRemovable = false,
      onRemove,
      leftIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center border transition-colors select-none font-medium',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {withDot && (
          <span
            className={cn('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColors[variant])}
            aria-hidden="true"
          />
        )}
        {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        <span>{children}</span>
        {isRemovable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            aria-label="Remove badge"
            className="hover:opacity-75 focus-visible:outline-none cursor-pointer -mr-0.5"
          >
            <X className="w-3 h-3" aria-hidden="true" />
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
