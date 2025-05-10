import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Icon, type TIconName } from '@shared/ui/atoms/Icon/Icon';
import { Typography } from '@shared/ui/atoms/Typography/Typography';

/**
 * Props para el componente OptionCard
 */
export interface IOptionCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título de la opción
   */
  title: string;

  /**
   * Descripción opcional
   */
  description?: string | undefined;

  /**
   * Icono para mostrar junto al título
   */
  icon?: TIconName | undefined;

  /**
   * Imagen personalizada (URL o componente)
   */
  image?: string | ReactNode | undefined;

  /**
   * Contenido adicional a mostrar
   */
  children?: ReactNode | undefined;

  /**
   * Si la opción está seleccionada
   * @default false
   */
  selected?: boolean | undefined;

  /**
   * Si la opción está deshabilitada
   * @default false
   */
  disabled?: boolean | undefined;

  /**
   * Callback cuando se selecciona la opción
   */
  onSelect?: (() => void) | undefined;
}

/**
 * Componente OptionCard
 * Tarjeta seleccionable para mostrar opciones en cuestionarios o selecciones
 */
export const OptionCard = forwardRef<HTMLDivElement, IOptionCardProps>(
  (
    {
      title,
      description,
      icon,
      image,
      children,
      selected = false,
      disabled = false,
      onSelect,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Determinar las clases para el estado actual
    const stateClasses = selected
      ? 'border-primary-dark bg-primary-light/10 ring-2 ring-primary-dark'
      : disabled
        ? 'border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed'
        : 'border-gray-300 bg-white hover:border-primary hover:bg-primary-light/5 cursor-pointer';

    // Construir las clases combinadas
    const classes = [
      'flex items-center p-4 border rounded-lg transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      stateClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Función para manejar el clic
    const handleClick = () => {
      if (!disabled && onSelect) {
        onSelect();
      }
    };

    // Renderizar imagen o icono
    const renderMedia = () => {
      if (image) {
        if (typeof image === 'string') {
          return (
            <div className="mr-4 flex-shrink-0">
              <img src={image} alt="" className="h-10 w-10 object-contain" />
            </div>
          );
        }
        return <div className="mr-4 flex-shrink-0">{image}</div>;
      }

      if (icon) {
        return (
          <div className="mr-4 flex-shrink-0">
            <Icon
              name={icon}
              size="md"
              className={`${selected ? 'text-primary-dark' : 'text-gray-500'}`}
            />
          </div>
        );
      }

      return null;
    };

    return (
      <div
        ref={ref}
        className={classes}
        onClick={handleClick}
        tabIndex={disabled ? -1 : 0}
        role="option"
        aria-selected={selected ? 'true' : 'false'}
        {...restProps}
      >
        {renderMedia()}

        <div className="flex-grow">
          <Typography variant="subtitle1" bold={selected}>
            {title}
          </Typography>

          {description && (
            <Typography variant="body2" color="secondary" className="mt-1">
              {description}
            </Typography>
          )}

          {children && <div className="mt-2">{children}</div>}
        </div>

        {selected && (
          <div className="ml-4 flex-shrink-0">
            <Icon name="check" size="sm" className="text-primary-dark" />
          </div>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
OptionCard.displayName = 'OptionCard';
