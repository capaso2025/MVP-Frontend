import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Typography } from '@shared/ui/atoms/Typography/Typography';

/**
 * Estados de ánimo disponibles para el personaje
 */
export type TCharacterMood =
  | 'default'
  | 'happy'
  | 'excited'
  | 'confused'
  | 'thinking'
  | 'celebrating';

/**
 * Tamaños disponibles para el personaje
 */
export type TCharacterSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Props para el componente Character
 */
export interface ICharacterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Mensaje que muestra el personaje en un bocadillo
   */
  message?: string | undefined;

  /**
   * Nodo React alternativo para usar como mensaje personalizado
   */
  customMessage?: ReactNode | undefined;

  /**
   * Estado de ánimo del personaje que afecta su apariencia
   * @default 'default'
   */
  mood?: TCharacterMood | undefined;

  /**
   * Tamaño del personaje
   * @default 'md'
   */
  size?: TCharacterSize | undefined;

  /**
   * Ruta de imagen del personaje (sobrescribe el personaje predeterminado)
   */
  imageSrc?: string | undefined;

  /**
   * Si el personaje debe mostrarse a la derecha (por defecto está a la izquierda)
   * @default false
   */
  rightAligned?: boolean | undefined;

  /**
   * Evento cuando se hace clic en el personaje
   */
  onClick?: (() => void) | undefined;

  /**
   * Si se debe mostrar una animación
   * @default false
   */
  animated?: boolean | undefined;
}

/**
 * Componente Character
 * Personaje animado que puede mostrar mensajes y diferentes estados de ánimo
 */
export const Character = forwardRef<HTMLDivElement, ICharacterProps>(
  (
    {
      message,
      customMessage,
      mood = 'default',
      size = 'md',
      imageSrc,
      rightAligned = false,
      onClick,
      animated = false,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Mapeo de tamaños a dimensiones
    const sizeClasses: Record<TCharacterSize, string> = {
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      xl: 'w-32 h-32',
    };

    // Obtener la imagen según el estado de ánimo
    const getCharacterImage = () => {
      if (imageSrc) {
        return imageSrc;
      }

      // Estas rutas son ilustrativas, deberías configurarlas según la estructura de tu proyecto
      return `/assets/characters/owl-${mood}.svg`;
    };

    // Clases para la animación del personaje
    const animationClasses = animated ? 'animate-bounce' : '';

    // Clases para el contenedor principal
    const containerClasses = [
      'flex items-end gap-3',
      rightAligned ? 'flex-row-reverse' : 'flex-row',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Clases para el bocadillo de mensaje
    const messageClasses = [
      'relative p-4 bg-white border rounded-lg shadow-sm max-w-xs',
      rightAligned ? 'rounded-tr-none' : 'rounded-tl-none',
      "before:content-[''] before:absolute before:border-8 before:border-transparent",
      rightAligned
        ? 'before:-right-4 before:border-l-white before:border-l-[16px]'
        : 'before:-left-4 before:border-r-white before:border-r-[16px]',
      'before:top-1/2 before:-translate-y-1/2',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={containerClasses} {...restProps}>
        <div
          className={`${sizeClasses[size]} ${animationClasses} cursor-pointer`}
          onClick={onClick}
        >
          <img
            src={getCharacterImage()}
            alt="Personaje"
            className="h-full w-full object-contain"
          />
        </div>

        {(message || customMessage) && (
          <div className={messageClasses}>
            {customMessage || (
              <Typography variant="body1">{message}</Typography>
            )}
          </div>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
Character.displayName = 'Character';
