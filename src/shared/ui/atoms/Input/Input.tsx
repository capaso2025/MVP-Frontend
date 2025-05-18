import { forwardRef, useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

import { Icon, type TIconName } from '../Icon/Icon';
import { Typography } from '../Typography/Typography';

/**
 * Props para el componente Input
 */
export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Etiqueta para el campo de entrada
   */
  label?: string;

  /**
   * Texto de ayuda o descripción
   */
  helperText?: string;

  /**
   * Estado de error
   * @default false
   */
  error?: boolean;

  /**
   * Mensaje de error a mostrar
   */
  errorMessage?: string | undefined;

  /**
   * Icono al inicio del input
   */
  startIcon?: TIconName;

  /**
   * Icono al final del input
   */
  endIcon?: TIconName;

  /**
   * Contenido personalizado al inicio
   */
  startContent?: ReactNode;

  /**
   * Contenido personalizado al final
   */
  endContent?: ReactNode;

  /**
   * Tamaño del input
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Si el input debe ocupar todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Si se debe mostrar un botón para limpiar el input
   * @default false
   */
  clearable?: boolean;

  /**
   * Función cuando se limpia el input
   */
  onClear?: () => void;
}

/**
 * Componente Input
 * Campo de entrada de texto con soporte para iconos, estados y mensajes de error
 */
export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      startIcon,
      endIcon,
      startContent,
      endContent,
      size = 'md',
      fullWidth = false,
      clearable = false,
      onClear,
      className = '',
      disabled = false,
      id,
      value,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    // Estado para gestionar el enfoque
    const [isFocused, setIsFocused] = useState(false);

    // Generar un ID único si no se proporciona
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Manejar enfoque
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (restProps.onFocus) {
        restProps.onFocus(e);
      }
    };

    // Manejar desenfoque
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (restProps.onBlur) {
        restProps.onBlur(e);
      }
    };

    // Manejar limpieza
    const handleClear = () => {
      if (onClear) {
        onClear();
      } else if (onChange) {
        // Simular un evento de cambio con valor vacío
        const event = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    // Mapeo de tamaños a clases CSS
    const sizeClasses = {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-lg',
    };

    // Clases del contenedor
    const containerClasses = [
      'flex flex-col',
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Clases del input wrapper
    const inputWrapperClasses = [
      'relative flex items-center overflow-hidden',
      'border rounded-md transition-colors',
      disabled ? 'bg-gray-100 border-gray-300' : 'bg-white',
      isFocused && !disabled && !error
        ? 'border-primary ring-1 ring-primary/30'
        : '',
      error ? 'border-error !bg-error-light' : 'border-gray-300',
      sizeClasses[size],
    ]
      .filter(Boolean)
      .join(' ');

    // Clases del input
    const inputClasses = [
      'w-full h-full outline-none bg-transparent',
      'text-text-primary disabled:text-text-disabled',
      startIcon || startContent ? 'pl-9' : 'pl-3',
      endIcon || endContent || clearable ? 'pr-9' : 'pr-3',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={`mb-1.5 text-sm font-medium ${disabled ? 'text-text-disabled' : 'text-text-primary'} `}
          >
            {label}
          </label>
        )}

        <div className={inputWrapperClasses}>
          {/* Icono/Contenido inicial */}
          {(startIcon || startContent) && (
            <div className="absolute left-0 flex h-full items-center justify-center pl-3">
              {startContent || (
                <Icon
                  name={startIcon as TIconName}
                  className={`text-${disabled ? 'gray-400' : 'gray-500'}`}
                  size="sm"
                />
              )}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputClasses}
            {...restProps}
          />

          {/* Icono/Contenido final */}
          {(endIcon || endContent) && !clearable && (
            <div className="absolute right-0 flex h-full items-center justify-center pr-3">
              {endContent || (
                <Icon
                  name={endIcon as TIconName}
                  className={`text-${disabled ? 'gray-400' : 'gray-500'}`}
                  size="sm"
                />
              )}
            </div>
          )}

          {/* Botón para limpiar */}
          {clearable && value && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-0 flex h-full items-center justify-center pr-3 text-gray-400 hover:text-gray-600"
              aria-label="Limpiar"
            >
              <Icon name="close" size="sm" />
            </button>
          )}
        </div>

        {/* Mensaje de ayuda o error */}
        {(helperText || (error && errorMessage)) && (
          <Typography className="mt-1">
            {error ? errorMessage : helperText}
          </Typography>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
Input.displayName = 'Input';
