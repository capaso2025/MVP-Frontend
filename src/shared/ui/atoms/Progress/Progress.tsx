import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

/**
 * Variantes de la barra de progreso
 */
export type TProgressVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

/**
 * Tamaños disponibles para la barra de progreso
 */
export type TProgressSize = 'sm' | 'md' | 'lg';

/**
 * Props para el componente Progress
 */
export interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Valor actual del progreso (0-100)
   */
  value: number;

  /**
   * Valor máximo (por defecto 100)
   * @default 100
   */
  max?: number;

  /**
   * Variante visual
   * @default 'default'
   */
  variant?: TProgressVariant;

  /**
   * Tamaño de la barra
   * @default 'md'
   */
  size?: TProgressSize;

  /**
   * Si se debe mostrar el porcentaje como texto
   * @default false
   */
  showLabel?: boolean;

  /**
   * Si se debe mostrar un efecto de animación de carga
   * @default false
   */
  animated?: boolean;

  /**
   * Si la barra debe tener bordes redondeados
   * @default true
   */
  rounded?: boolean;
}

/**
 * Componente Progress
 * Muestra una barra de progreso para indicar el avance de una operación
 */
export const Progress = forwardRef<HTMLDivElement, IProgressProps>(
  (
    {
      value,
      max = 100,
      variant = 'default',
      size = 'md',
      showLabel = false,
      animated = false,
      rounded = true,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Normalizar el valor entre 0 y 100
    const normalizedValue = Math.min(Math.max(0, value), max);
    const percentage = Math.round((normalizedValue / max) * 100);

    // Mapeo de variantes a clases CSS
    const variantClasses: Record<TProgressVariant, string> = {
      default: 'bg-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      error: 'bg-error',
      info: 'bg-info',
    };

    // Mapeo de tamaños a clases CSS
    const sizeClasses: Record<TProgressSize, string> = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-4',
    };

    // Construir las clases para el contenedor
    const containerClasses = [
      'w-full bg-gray-200 overflow-hidden',
      rounded ? 'rounded-full' : '',
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Construir las clases para la barra de progreso
    const progressBarClasses = [
      variantClasses[variant],
      rounded ? 'rounded-full' : '',
      animated ? 'animate-pulse' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={containerClasses}
        role="progressbar"
        aria-valuenow={normalizedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuetext={`${percentage}%`}
        {...restProps}
      >
        <div
          className={`${progressBarClasses} transition-all duration-300 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
        {showLabel && (
          <div className="mt-1 text-center text-xs font-medium">
            {percentage}%
          </div>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
Progress.displayName = 'Progress';
