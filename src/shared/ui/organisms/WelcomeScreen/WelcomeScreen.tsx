import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from '@shared/ui/atoms/Button/Button';
import { Typography } from '@shared/ui/atoms/Typography/Typography';
import { Character } from '@shared/ui/molecules/Character/Character';

/**
 * Props para el componente WelcomeScreen
 */
export interface IWelcomeScreenProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título principal de la pantalla
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
   * URL de la imagen del personaje
   */
  characterImage?: string;

  /**
   * Texto del botón principal
   * @default "Comenzar"
   */
  primaryButtonText?: string;

  /**
   * Función a ejecutar cuando se hace clic en el botón principal
   */
  onPrimaryButtonClick?: () => void;

  /**
   * Texto del botón secundario
   */
  secondaryButtonText?: string;

  /**
   * Función a ejecutar cuando se hace clic en el botón secundario
   */
  onSecondaryButtonClick?: () => void;

  /**
   * Si se debe mostrar una imagen decorativa
   * @default true
   */
  showDecorativeImage?: boolean;

  /**
   * URL de la imagen decorativa
   */
  decorativeImageUrl?: string;

  /**
   * Contenido adicional a mostrar en la pantalla
   */
  children?: ReactNode;
}

/**
 * Componente WelcomeScreen
 * Pantalla de bienvenida con título, descripción, personaje y botones de acción
 */
export const WelcomeScreen = forwardRef<HTMLDivElement, IWelcomeScreenProps>(
  (
    {
      title,
      subtitle,
      characterMessage,
      characterMood = 'happy',
      characterImage,
      primaryButtonText = 'Comenzar',
      onPrimaryButtonClick,
      secondaryButtonText,
      onSecondaryButtonClick,
      showDecorativeImage = true,
      decorativeImageUrl,
      children,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`flex min-h-screen flex-col items-center justify-center px-4 py-6 md:px-6 ${className}`}
        {...restProps}
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Título y subtítulo */}
          <Typography variant="h1" component="h1" className="mb-4">
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="subtitle1"
              color="secondary"
              className="mb-8 max-w-lg"
            >
              {subtitle}
            </Typography>
          )}

          {/* Imagen decorativa o personaje */}
          <div className="my-8">
            {showDecorativeImage ? (
              <div className="h-64 w-64 md:h-80 md:w-80">
                <img
                  src={decorativeImageUrl || '/assets/decorative-image.svg'}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <Character
                message={characterMessage}
                mood={characterMood}
                imageSrc={characterImage}
                size="xl"
                animated={true}
              />
            )}
          </div>

          {/* Contenido adicional */}
          {children && <div className="mb-8 w-full">{children}</div>}

          {/* Botones de acción */}
          <div className="mt-4 flex w-full max-w-xs flex-col justify-center gap-4 sm:max-w-md sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>

            {secondaryButtonText && (
              <Button
                variant="outline"
                size="lg"
                fullWidth
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
WelcomeScreen.displayName = 'WelcomeScreen';
