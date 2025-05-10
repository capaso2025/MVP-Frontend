import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from '@shared/ui/atoms/Button/Button';
import { Icon, type TIconName } from '@shared/ui/atoms/Icon/Icon';
import { Typography } from '@shared/ui/atoms/Typography/Typography';
import { Character } from '@shared/ui/molecules/Character/Character';

/**
 * Estructura de un ítem de resultado
 */
export interface IResultItem {
  /**
   * Identificador único del ítem
   */
  id: string;

  /**
   * Título del ítem
   */
  title: string;

  /**
   * Descripción o detalle adicional
   */
  description?: string;

  /**
   * Icono relacionado con el ítem
   */
  icon?: TIconName;

  /**
   * URL de imagen relacionada con el ítem
   */
  imageUrl?: string;
}

/**
 * Props para el componente ResultsView
 */
export interface IResultsViewProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título principal de la pantalla de resultados
   */
  title: string;

  /**
   * Subtítulo o descripción
   */
  subtitle?: string;

  /**
   * Mensaje que muestra el personaje
   */
  characterMessage?: string;

  /**
   * Estado de ánimo del personaje
   */
  characterMood?: Parameters<typeof Character>[0]['mood'];

  /**
   * Lista de ítems de resultado a mostrar
   */
  resultItems?: IResultItem[];

  /**
   * Texto para el botón principal
   */
  primaryButtonText?: string;

  /**
   * Acción al hacer clic en el botón principal
   */
  onPrimaryButtonClick?: () => void;

  /**
   * Texto para el botón secundario
   */
  secondaryButtonText?: string;

  /**
   * Acción al hacer clic en el botón secundario
   */
  onSecondaryButtonClick?: () => void;

  /**
   * Nodos React para contenido personalizado
   */
  children?: ReactNode;
}

/**
 * Componente ResultsView
 * Pantalla para mostrar resultados o roadmap personalizado
 */
export const ResultsView = forwardRef<HTMLDivElement, IResultsViewProps>(
  (
    {
      title,
      subtitle,
      characterMessage,
      characterMood = 'celebrating',
      resultItems = [],
      primaryButtonText,
      onPrimaryButtonClick,
      secondaryButtonText,
      onSecondaryButtonClick,
      children,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`flex min-h-screen flex-col px-4 py-6 md:px-6 ${className}`}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-4xl">
          {/* Sección del personaje */}
          {characterMessage && (
            <div className="mb-8">
              <Character
                message={characterMessage}
                mood={characterMood}
                size="lg"
                animated={true}
              />
            </div>
          )}

          {/* Encabezado de resultados */}
          <div className="mb-8 text-center">
            <Typography variant="h2" component="h1" className="mb-3">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="subtitle1" color="secondary">
                {subtitle}
              </Typography>
            )}
          </div>

          {/* Lista de resultados */}
          {resultItems.length > 0 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <ul className="space-y-6">
                {resultItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start border-b border-gray-100 p-4 last:border-b-0"
                  >
                    {/* Icono o imagen */}
                    <div className="mr-4 flex-shrink-0">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="h-10 w-10 object-contain"
                        />
                      ) : item.icon ? (
                        <div className="bg-primary-light/20 flex h-10 w-10 items-center justify-center rounded-full">
                          <Icon
                            name={item.icon}
                            size="md"
                            className="text-primary-dark"
                          />
                        </div>
                      ) : null}
                    </div>

                    {/* Contenido del ítem */}
                    <div className="flex-grow">
                      <Typography variant="subtitle1" className="mb-1">
                        {item.title}
                      </Typography>
                      {item.description && (
                        <Typography variant="body2" color="secondary">
                          {item.description}
                        </Typography>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contenido personalizado */}
          {children && <div className="mb-8">{children}</div>}

          {/* Botones de acción */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {primaryButtonText && (
              <Button
                variant="primary"
                size="lg"
                onClick={onPrimaryButtonClick}
              >
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button
                variant="outline"
                size="lg"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  },
);

// Definir el nombre para DevTools
ResultsView.displayName = 'ResultsView';
