import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { Icon } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';

/**
 * Props para el componente Checkbox
 */
export interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Etiqueta descriptiva para el checkbox
   */
  label?: string;

  /**
   * Información adicional o ayuda para el usuario
   */
  helpText?: string;

  /**
   * Estado de error
   * @default false
   */
  error?: boolean;

  /**
   * Mensaje de error a mostrar
   */
  errorMessage?: string;

  /**
   * Si el checkbox debe tener un estilo más compacto
   * @default false
   */
  compact?: boolean;
}

/**
 * Componente Checkbox
 * Checkbox estilizado con soporte para etiquetas y mensajes de error
 */
export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  (
    {
      label,
      helpText,
      error = false,
      errorMessage,
      compact = false,
      className = '',
      disabled = false,
      id,
      ...restProps
    },
    ref,
  ) => {
    // Generar un ID único si no se proporciona
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    // Clases para el contenedor principal
    const containerClasses = [
      'flex items-start',
      compact ? 'gap-2' : 'gap-3',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Clases para el checkbox personalizado
    const checkboxClasses = [
      'relative flex items-center justify-center',
      'w-5 h-5 border rounded',
      disabled
        ? 'border-gray-300 bg-gray-100'
        : error
          ? 'border-error'
          : 'border-gray-400',
      !disabled && !error && 'hover:border-primary group-hover:border-primary',
      'transition-colors duration-150',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        <div className="group relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            className="absolute h-5 w-5 cursor-pointer opacity-0 disabled:cursor-not-allowed"
            {...restProps}
          />
          <div className={checkboxClasses}>
            {restProps.checked && (
              <Icon
                name="check"
                size="sm"
                className={disabled ? 'text-gray-500' : 'text-primary'}
              />
            )}
          </div>
        </div>

        {(label || helpText || errorMessage) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={inputId}
                className={`text-sm font-medium ${disabled ? 'text-gray-400' : error ? 'text-error' : 'text-gray-700'} cursor-pointer`}
              >
                {label}
              </label>
            )}

            {helpText && !error && (
              <Typography
                variant="caption"
                color="secondary"
                className={compact ? 'mt-0.5' : 'mt-1'}
              >
                {helpText}
              </Typography>
            )}

            {error && errorMessage && (
              <Typography
                variant="caption"
                color="error"
                className={compact ? 'mt-0.5' : 'mt-1'}
              >
                {errorMessage}
              </Typography>
            )}
          </div>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
Checkbox.displayName = 'Checkbox';
