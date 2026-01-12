/**
 * @rizoma/ui - Input Component
 *
 * @author Ulises González <ulises@rizo.ma>
 * @license MIT
 * @copyright 2025 Rizo.ma
 */

import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label del input */
  label?: string;
  /** Mensaje de error */
  error?: string;
  /** Texto de ayuda */
  helperText?: string;
  /** Icono izquierdo */
  leftIcon?: React.ReactNode;
  /** Icono derecho */
  rightIcon?: React.ReactNode;
}

/**
 * Componente Input con estilos Rizoma
 *
 * @example
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="tu@email.com"
 *   error="Email inválido"
 * />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = [
      'w-full px-4 py-3 text-base text-gray-900 bg-white border rounded-md transition-all duration-150',
      'placeholder:text-gray-400',
      'focus:outline-none focus:ring-2 focus:ring-rizoma-green/20 focus:border-rizoma-green',
      'disabled:bg-gray-100 disabled:cursor-not-allowed',
      error ? 'border-error focus:ring-error/20 focus:border-error' : 'border-gray-300',
      leftIcon ? 'pl-11' : '',
      rightIcon ? 'pr-11' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-error">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
