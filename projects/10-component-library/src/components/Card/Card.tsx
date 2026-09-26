import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type CardVariant = 'elevated' | 'outlined' | 'glass' | 'gradient';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual presentation style */
  variant?: CardVariant;
  /** Inner padding level */
  padding?: CardPadding;
  /** Enables hover lift and glow effect */
  isHoverable?: boolean;
  /** Whether the card acts as an interactive button/link */
  isClickable?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  elevated:
    'bg-slate-900/90 border border-slate-800 shadow-xl shadow-slate-950/50 text-slate-100',
  outlined:
    'bg-transparent border border-slate-800/90 text-slate-100 hover:border-slate-700',
  glass:
    'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl text-slate-100',
  gradient:
    'bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-950/40 border border-indigo-500/20 text-slate-100 shadow-xl',
};

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'elevated',
      padding = 'md',
      isHoverable = false,
      isClickable = false,
      children,
      tabIndex,
      role,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={role || (isClickable ? 'button' : undefined)}
        tabIndex={tabIndex ?? (isClickable ? 0 : undefined)}
        className={cn(
          'rounded-2xl transition-all duration-300 relative overflow-hidden',
          variantStyles[variant],
          paddingStyles[padding],
          isHoverable &&
            'hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/40 cursor-default',
          isClickable &&
            'cursor-pointer active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 mb-4', className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className, children, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-lg font-semibold tracking-tight text-white', className)}
      {...props}
    >
      {children}
    </Component>
  )
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-slate-400 leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  )
);
CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-slate-300', className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4 mt-4 border-t border-slate-800/80', className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';
