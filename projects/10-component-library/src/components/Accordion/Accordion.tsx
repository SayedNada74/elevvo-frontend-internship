import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AccordionContextValue {
  value: string[];
  onValueChange: (value: string) => void;
  type: 'single' | 'multiple';
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

export interface AccordionProps {
  children: React.ReactNode;
  /**
   * Determines whether one or multiple items can be opened at the same time.
   */
  type?: 'single' | 'multiple';
  /**
   * When type is "single", allows closing content when clicking trigger for an open item.
   */
  collapsible?: boolean;
  /**
   * The value of the item(s) to expand when initially rendered.
   */
  defaultValue?: string | string[];
  /**
   * The controlled value of the item(s) to expand.
   */
  value?: string | string[];
  /**
   * Event handler called when the expanded state of an item changes.
   */
  onValueChange?: (value: string | string[]) => void;
  className?: string;
}

export function Accordion({
  children,
  type = 'single',
  collapsible = false,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
}: AccordionProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );

  const value = React.useMemo(() => {
    if (controlledValue !== undefined) {
      return Array.isArray(controlledValue) ? controlledValue : [controlledValue];
    }
    return uncontrolledValue;
  }, [controlledValue, uncontrolledValue]);

  const handleValueChange = React.useCallback(
    (itemValue: string) => {
      let newValue: string[];
      if (type === 'single') {
        if (value.includes(itemValue)) {
          newValue = collapsible ? [] : [itemValue];
        } else {
          newValue = [itemValue];
        }
      } else {
        if (value.includes(itemValue)) {
          newValue = value.filter((v) => v !== itemValue);
        } else {
          newValue = [...value, itemValue];
        }
      }

      if (controlledValue === undefined) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(type === 'single' ? newValue[0] || '' : newValue);
    },
    [type, collapsible, value, controlledValue, onValueChange]
  );

  return (
    <AccordionContext.Provider
      value={{ value, onValueChange: handleValueChange, type, collapsible }}
    >
      <div className={cn('space-y-3', className)} data-orientation="vertical">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | undefined>(undefined);

export interface AccordionItemProps {
  children: React.ReactNode;
  /**
   * A unique value for the item.
   */
  value: string;
  className?: string;
  disabled?: boolean;
}

export function AccordionItem({ children, value, className, disabled }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error('AccordionItem must be used within an Accordion');

  const isOpen = context.value.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        data-disabled={disabled ? '' : undefined}
        className={cn(
          'border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50 transition-colors',
          isOpen ? 'bg-slate-900 border-indigo-500/30 shadow-sm' : 'hover:bg-slate-800/50',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function AccordionTrigger({ children, className, icon, ...props }: AccordionTriggerProps) {
  const rootContext = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!rootContext || !itemContext) {
    throw new Error('AccordionTrigger must be used within an AccordionItem');
  }

  const { onValueChange } = rootContext;
  const { value, isOpen } = itemContext;

  return (
    <h3 className="flex m-0">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${value}`}
        id={`accordion-trigger-${value}`}
        onClick={() => onValueChange(value)}
        className={cn(
          'flex flex-1 items-center justify-between py-4 px-5 font-medium transition-all text-left text-slate-200 cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          isOpen && 'text-indigo-300',
          className
        )}
        {...props}
      >
        {children}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="ml-4 shrink-0 text-slate-400"
        >
          {icon || <ChevronDown className="h-4 w-4" />}
        </motion.div>
      </button>
    </h3>
  );
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext) throw new Error('AccordionContent must be used within an AccordionItem');

  const { value, isOpen } = itemContext;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`accordion-content-${value}`}
          role="region"
          aria-labelledby={`accordion-trigger-${value}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className={cn('px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed', className)} {...props}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
