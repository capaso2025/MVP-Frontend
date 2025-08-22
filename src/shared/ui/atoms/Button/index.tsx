import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

/**
 * Variantes de estilos para botones
 */
export type TButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'input'
  | 'landing'
  | 'danger';

/**
 * Tamaños de botón disponibles
 */
export type TButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props específicas para el componente Button
 */
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante visual del botón
   * @default 'primary'
   */
  variant?: TButtonVariant;

  /**
   * Tamaño del botón
   * @default 'md'
   */
  size?: TButtonSize;

  /**
   * Si el botón debe ocupar todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Si el botón está en estado de carga
   * @default false
   */
  isLoading?: boolean;

  /**
   * Si el botón está deshabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Icono izquierdo (componente)
   */
  leftIcon?: React.ReactNode;

  /**
   * Icono derecho (componente)
   */
  rightIcon?: React.ReactNode;
}

/**
 * Componente Button
 * Botón reutilizable con diferentes variantes y tamaños
 */
export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => {
    // Mapeo de variantes a clases CSS
    const variantClasses: Record<TButtonVariant, string> = {
      primary: 'bg-gradient-to-r from-primary-light to-primary-dark text-white',
      secondary: 'bg-primary-lighter text-gray-900',
      outline: 'bg-transparent border border-primary/20 text-primary',
      ghost: 'bg-transparent text-gray-700',
      danger: 'bg-red-600 text-white',
      input:
        'bg-gray-100 bg-white border border-gray-300 text-text-primary disabled:text-text-disabled active:scale-100',
      landing:
        ' bg-gradient-to-br from-primary-light transition-all duration-300 to-primary-dark border-2 border-primary-light text-white font-bold hover:scale-105',
    };

    // Mapeo de tamaños a clases CSS
    const sizeClasses: Record<TButtonSize, string> = {
      sm: 'text-sm py-1 px-2',
      md: 'text-base py-3 px-5',
      lg: 'text-lg py-4 px-8',
    };

    // Construcción de la clase combinada
    const buttonClasses = [
      'inline-flex items-center justify-center font-medium rounded-md focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed active:scale-95',
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
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading && (
          <svg
            className="mr-2 -ml-1 h-4 w-4 animate-spin text-current"
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
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  },
);

// Definir displayName para DevTools
Button.displayName = 'Button';
