/**
 * @rizoma/ui - Badge Component
 *
 * @author Ulises González <ulises@rizo.ma>
 * @license MIT
 * @copyright 2025 Rizo.ma
 */

import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Variante de color */
  variant?: 'green' | 'cyan' | 'red' | 'neutral';
  /** Tamaño del badge */
  size?: 'sm' | 'md';
}

const variantClasses = {
  green: 'bg-rizoma-green/10 text-rizoma-green',
  cyan: 'bg-rizoma-cyan/10 text-rizoma-cyan',
  red: 'bg-rizoma-red/10 text-rizoma-red',
  neutral: 'bg-gray-100 text-gray-600',
} as const;

const sizeClasses = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
} as const;

/**
 * Componente Badge con estilos Rizoma
 *
 * @example
 * <Badge variant="green">Nuevo</Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'green',
      size = 'md',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center font-medium rounded-full';

    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
