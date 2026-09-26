import React, { forwardRef, useId } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label for the input field */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message. When provided, puts input in error state and announces via aria-describedby */
  error?: string;
  /** Success message or success state indicator */
  success?: boolean;
  /** Input size */
  size?: InputSize;
  /** Icon displayed on the left side of the input */
  leftIcon?: React.ReactNode;
  /** Icon or interactive button displayed on the right side of the input */
  rightIcon?: React.ReactNode;
  /** Whether the input should take full width of container */
  fullWidth?: boolean;
}

const sizeStyles: Record<InputSize, { container: string; input: string }> = {
  sm: {
    container: 'h-8 text-xs',
    input: 'px-2.5 py-1 text-xs',
  },
  md: {
    container: 'h-10 text-sm',
    input: 'px-3 py-2 text-sm',
  },
  lg: {
    container: 'h-12 text-base',
    input: 'px-4 py-3 text-base',
  },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: customId,
      label,
      helperText,
      error,
      success,
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = true,
      disabled,
      required,
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = customId || `input-${generatedId}`;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const hasError = Boolean(error);
    const hasSuccess = Boolean(success) && !hasError;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold tracking-wide text-slate-300 select-none flex items-center gap-1"
          >
            {label}
            {required && (
              <span className="text-rose-400" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div
          className={cn(
            'relative flex items-center rounded-xl bg-slate-900/80 border transition-all duration-200 shadow-sm',
            'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-slate-950',
            hasError
              ? 'border-rose-500/80 text-rose-200 focus-within:ring-rose-500/50 focus-within:border-rose-500'
              : hasSuccess
              ? 'border-emerald-500/80 text-slate-100 focus-within:ring-emerald-500/50 focus-within:border-emerald-500'
              : 'border-slate-800 focus-within:border-indigo-500 focus-within:ring-indigo-500/40 hover:border-slate-700',
            disabled && 'opacity-50 cursor-not-allowed bg-slate-950/60 border-slate-800/60',
            sizeStyles[size].container
          )}
        >
          {leftIcon && (
            <div className="pl-3 flex items-center pointer-events-none text-slate-400 shrink-0">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              'w-full h-full bg-transparent text-slate-100 placeholder:text-slate-500',
              'focus:outline-none disabled:cursor-not-allowed rounded-xl font-normal',
              sizeStyles[size].input,
              leftIcon && 'pl-2',
              (rightIcon || hasError || hasSuccess) && 'pr-2',
              className
            )}
            {...props}
          />

          <div className="pr-3 flex items-center gap-1.5 shrink-0 text-slate-400">
            {hasError && <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true" />}
            {hasSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />}
            {rightIcon && <div className="flex items-center">{rightIcon}</div>}
          </div>
        </div>

        {hasError && (
          <p id={errorId} role="alert" className="text-xs text-rose-400 font-medium flex items-center gap-1">
            {error}
          </p>
        )}

        {!hasError && helperText && (
          <p id={helperId} className="text-xs text-slate-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
