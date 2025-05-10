import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { Typography } from '../Typography/Typography';

/**
 * Props para el componente Radio
 */
export interface IRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Etiqueta descriptiva para el radio
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
   * Si el radio debe tener un estilo más compacto
   * @default false
   */
  compact?: boolean;
}

/**
 * Componente Radio
 * Botón de radio estilizado con soporte para etiquetas y mensajes de error
 */
export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
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
    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    // Clases para el contenedor principal
    const containerClasses = [
      'flex items-start',
      compact ? 'gap-2' : 'gap-3',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Clases para el radio personalizado
    const radioClasses = [
      'relative h-5 w-5 rounded-full border flex items-center justify-center',
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
        <div className="flex flex-col">
          <label
            htmlFor={inputId}
            className={`flex items-center gap-2 text-sm font-medium ${disabled ? 'text-gray-400' : error ? 'text-error' : 'text-gray-700'} cursor-pointer`}
          >
            <div className="group relative flex items-center">
              <input
                ref={ref}
                type="radio"
                id={inputId}
                disabled={disabled}
                className="absolute h-5 w-5 cursor-pointer opacity-0 disabled:cursor-not-allowed"
                {...restProps}
              />
              <div className={radioClasses}>
                {restProps.checked && (
                  <div
                    className={`h-3 w-3 rounded-full ${disabled ? 'bg-gray-500' : 'bg-primary'} `}
                  />
                )}
              </div>
            </div>

            {label || ''}
          </label>

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
      </div>
    );
  },
);

// Definir el nombre para DevTools
Radio.displayName = 'Radio';
