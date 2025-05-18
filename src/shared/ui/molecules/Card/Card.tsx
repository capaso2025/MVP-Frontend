import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Icon, type TIconName } from '../../atoms/Icon/Icon';
import { Typography } from '../../atoms/Typography/Typography';

/**
 * Props para el componente Card
 */
export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título de la tarjeta
   */
  title?: string;

  /**
   * Subtítulo de la tarjeta
   */
  subtitle?: string;

  /**
   * Contenido principal de la tarjeta
   */
  children?: ReactNode;

  /**
   * Contenido para el pie de la tarjeta
   */
  footer?: ReactNode;

  /**
   * URL de imagen para la cabecera de la tarjeta
   */
  imageUrl?: string;

  /**
   * Altura de la imagen
   */
  imageHeight?: number | string;

  /**
   * Si la imagen debe ocupar todo el ancho disponible
   * @default true
   */
  imageFull?: boolean;

  /**
   * Posición de la imagen
   * @default 'top'
   */
  imagePosition?: 'top' | 'bottom';

  /**
   * Icono para mostrar junto al título
   */
  icon?: TIconName;

  /**
   * Color de fondo del icono
   */
  iconBgColor?: string;

  /**
   * Si la tarjeta debe tener un efecto hover
   * @default false
   */
  hoverable?: boolean;

  /**
   * Si la tarjeta debe tener sombra
   * @default true
   */
  shadow?: boolean;

  /**
   * Nivel de elevación (sombra)
   * @default 'md'
   */
  elevation?: 'sm' | 'md' | 'lg';

  /**
   * Si la tarjeta debe tener borde
   * @default true
   */
  bordered?: boolean;

  /**
   * Si el contenido debe tener padding
   * @default true
   */
  padded?: boolean;

  /**
   * Acción al hacer clic en la tarjeta completa
   */
  onClick?: () => void;
}

/**
 * Componente Card
 * Tarjeta contenedora con soporte para título, imagen, contenido y pie
 */
export const Card = forwardRef<HTMLDivElement, ICardProps>(
  (
    {
      title,
      subtitle,
      children,
      footer,
      imageUrl,
      imageHeight = 200,
      imageFull = true,
      imagePosition = 'top',
      icon,
      iconBgColor,
      hoverable = false,
      shadow = true,
      elevation = 'md',
      bordered = true,
      padded = true,
      onClick,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Mapeo de elevaciones a clases de sombra
    const shadowClasses = {
      sm: 'shadow-sm',
      md: 'shadow',
      lg: 'shadow-md',
    };

    // Clases para la tarjeta
    const cardClasses = [
      'bg-white rounded-lg overflow-hidden',
      bordered ? 'border border-gray-200' : '',
      shadow ? shadowClasses[elevation] : '',
      hoverable
        ? 'transition-transform duration-200 hover:scale-105 hover:shadow-md'
        : '',
      onClick ? 'cursor-pointer' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Manejador de clic
    const handleClick = () => {
      if (onClick) onClick();
    };

    // Renderizar imagen si existe
    const renderImage = () => {
      if (!imageUrl) return null;

      return (
        <div
          className={`${!imageFull ? 'px-4 pt-4' : ''} ${imagePosition === 'bottom' ? 'mt-4' : ''}`}
        >
          <img
            src={imageUrl}
            alt=""
            className={` ${imageFull ? 'w-full' : 'w-full rounded-lg'} object-cover`}
            style={{
              height:
                typeof imageHeight === 'number'
                  ? `${imageHeight}px`
                  : imageHeight,
            }}
          />
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={handleClick}
        {...restProps}
      >
        {/* Imagen superior */}
        {imageUrl && imagePosition === 'top' && renderImage()}

        {/* Encabezado con título */}
        {(title || subtitle) && (
          <div className={`${padded ? 'px-4 pt-4' : 'px-4 pt-4'}`}>
            <div className="mb-2 flex items-center">
              {icon && (
                <div
                  className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${iconBgColor || 'bg-primary-light/20'} `}
                >
                  <Icon name={icon} size="sm" className="text-primary-dark" />
                </div>
              )}
              <div>
                {title && (
                  <Typography className="font-medium">{title}</Typography>
                )}
                {subtitle && <Typography>{subtitle}</Typography>}
              </div>
            </div>
          </div>
        )}

        {/* Contenido principal */}
        <div className={padded ? 'p-4' : ''}>{children}</div>

        {/* Pie de tarjeta */}
        {footer && (
          <div className={`${padded ? 'px-4 pb-4' : ''} mt-auto`}>{footer}</div>
        )}

        {/* Imagen inferior */}
        {imageUrl && imagePosition === 'bottom' && renderImage()}
      </div>
    );
  },
);

// Definir el nombre para DevTools
Card.displayName = 'Card';
