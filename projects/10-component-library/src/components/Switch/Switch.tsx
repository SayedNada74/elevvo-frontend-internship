import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export interface SwitchProps {
  /** Whether the switch is checked/on */
  checked: boolean;
  /** Callback fired when state changes */
  onChange: (checked: boolean) => void;
  /** Label describing the switch setting */
  label?: string;
  /** Additional description */
  description?: string;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Custom ID */
  id?: string;
  /** Optional class name */
  className?: string;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      onChange,
      label,
      description,
      disabled = false,
      id: customId,
      className,
    },
    ref
  ) => {
    const generatedId = useId();
    const switchId = customId || `switch-${generatedId}`;
    const descId = `${switchId}-desc`;

    const handleClick = () => {
      if (!disabled) {
        onChange(!checked);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onChange(!checked);
      }
    };

    return (
      <div className={cn('inline-flex items-start gap-3 select-none', className)}>
        <button
          ref={ref}
          id={switchId}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-describedby={description ? descId : undefined}
          disabled={disabled}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={cn(
            'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
            'disabled:cursor-not-allowed disabled:opacity-50',
            checked ? 'bg-indigo-600' : 'bg-slate-700'
          )}
        >
          <span
            className={cn(
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
              checked ? 'translate-x-5' : 'translate-x-0'
            )}
          />
        </button>

        {(label || description) && (
          <label htmlFor={switchId} className="flex flex-col cursor-pointer" onClick={handleClick}>
            {label && <span className="text-sm font-medium text-slate-200">{label}</span>}
            {description && (
              <span id={descId} className="text-xs text-slate-400 mt-0.5">
                {description}
              </span>
            )}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
