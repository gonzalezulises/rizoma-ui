/**
 * @rizoma/ui - Button Component
 *
 * @author Ulises González <ulises@rizo.ma>
 * @license MIT
 * @copyright 2025 Rizo.ma
 */

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Tamaño del botón */
  size?: 'sm' | 'md' | 'lg';
  /** Si el botón ocupa todo el ancho disponible */
  fullWidth?: boolean;
  /** Icono a mostrar antes del texto */
  leftIcon?: React.ReactNode;
  /** Icono a mostrar después del texto */
  rightIcon?: React.ReactNode;
  /** Estado de carga */
  loading?: boolean;
}

const variantClasses = {
  primary: 'bg-rizoma-green text-white hover:bg-rizoma-green-light active:bg-rizoma-green-dark shadow-button',
  secondary: 'bg-transparent text-rizoma-green border-[1.5px] border-rizoma-green hover:bg-rizoma-green hover:text-white',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
} as const;

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
} as const;

/**
 * Componente Button con estilos Rizoma
 *
 * @example
 * <Button variant="primary" size="md">
 *   Contactar
 * </Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      loading = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-button transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rizoma-green focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
