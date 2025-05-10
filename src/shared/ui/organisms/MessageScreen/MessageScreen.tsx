import { forwardRef, useEffect, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from '@shared/ui/atoms/Button/Button';
import { Typography } from '@shared/ui/atoms/Typography/Typography';
import { Character } from '@shared/ui/molecules/Character/Character';

/**
 * Props para el componente MessageScreen
 */
export interface IMessageScreenProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Mensaje principal a mostrar
   */
  message: string;

  /**
   * Mensaje secundario o descripción
   */
  submessage?: string | undefined;

  /**
   * Mensaje que muestra el personaje
   */
  characterMessage?: string | undefined;

  /**
   * Estado de ánimo del personaje
   */
  characterMood?: Parameters<typeof Character>[0]['mood'] | undefined;

  /**
   * Nodo React para contenido personalizado
   */
  children?: ReactNode | undefined;

  /**
   * Texto del botón de continuar
   * @default "Continuar"
   */
  continueButtonText?: string | undefined;

  /**
   * Acción al hacer clic en el botón de continuar
   */
  onContinue?: (() => void) | undefined;

  /**
   * Tiempo en milisegundos para auto-continuar (0 para desactivar)
   * @default 0
   */
  autoContinueAfter?: number | undefined;

  /**
   * Si se debe mostrar una animación de desvanecimiento
   * @default true
   */
  animated?: boolean | undefined;

  /**
   * Si se debe centrar todo el contenido
   * @default true
   */
  centered?: boolean | undefined;
}

/**
 * Componente MessageScreen
 * Pantalla de mensaje simple con un personaje y un botón para continuar
 */
export const MessageScreen = forwardRef<HTMLDivElement, IMessageScreenProps>(
  (
    {
      message,
      submessage,
      characterMessage,
      characterMood = 'default',
      children,
      continueButtonText = 'Continuar',
      onContinue,
      autoContinueAfter = 0,
      animated = true,
      centered = true,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Estado para controlar la visibilidad (para animaciones)
    const [isVisible, setIsVisible] = useState(false);

    // Estado para la cuenta regresiva (si autoContinueAfter > 0)
    const [countdown, setCountdown] = useState<number | null>(
      autoContinueAfter > 0 ? Math.ceil(autoContinueAfter / 1000) : null,
    );

    // Efecto para animación de aparición
    useEffect(() => {
      const showTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 100);

      return () => clearTimeout(showTimeout);
    }, []);

    // Efecto para auto-continuar
    useEffect(() => {
      if (autoContinueAfter <= 0 || !onContinue) return;

      // Iniciar cuenta regresiva si está configurada
      const countdownInterval = countdown
        ? setInterval(() => {
            setCountdown((prev) => (prev && prev > 0 ? prev - 1 : null));
          }, 1000)
        : null;

      // Configurar el timeout para auto-continuar
      const continueTimeout = setTimeout(() => {
        handleContinue();
      }, autoContinueAfter);

      return () => {
        clearTimeout(continueTimeout);
        if (countdownInterval) clearInterval(countdownInterval);
      };
    }, [autoContinueAfter, onContinue]);

    // Manejador para el botón de continuar
    const handleContinue = () => {
      if (onContinue) {
        // Animar salida si está habilitado
        if (animated) {
          setIsVisible(false);
          setTimeout(() => {
            onContinue();
          }, 300);
        } else {
          onContinue();
        }
      }
    };

    // Clases de animación
    const animationClasses = animated
      ? `transition-all duration-300 ease-in-out ${
          isVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-4'
        }`
      : '';

    // Clases de alineación
    const alignmentClasses = centered
      ? 'flex flex-col items-center justify-center text-center'
      : 'flex flex-col';

    return (
      <div
        ref={ref}
        className={`min-h-screen px-4 py-6 md:px-6 ${alignmentClasses} ${animationClasses} ${className}`}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-2xl">
          {/* Personaje */}
          {characterMessage && (
            <div className={`mb-8 ${centered ? 'self-center' : ''}`}>
              <Character
                message={characterMessage}
                mood={characterMood}
                size="lg"
                animated={true}
                rightAligned={false}
              />
            </div>
          )}

          {/* Mensaje principal */}
          <Typography
            variant="h3"
            component="h1"
            className={`mb-4 ${centered ? 'text-center' : ''}`}
          >
            {message}
          </Typography>

          {/* Submensaje */}
          {submessage && (
            <Typography
              variant="body1"
              color="secondary"
              className={`mb-8 ${centered ? 'text-center' : ''}`}
            >
              {submessage}
            </Typography>
          )}

          {/* Contenido personalizado */}
          {children && <div className="my-6">{children}</div>}

          {/* Botón de continuar */}
          <div className={`mt-8 ${centered ? 'flex justify-center' : ''}`}>
            <Button
              variant="primary"
              size="lg"
              onClick={handleContinue}
              className="min-w-32"
            >
              {countdown !== null && countdown > 0
                ? `${continueButtonText} (${countdown})`
                : continueButtonText}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

// Definir el nombre para DevTools
MessageScreen.displayName = 'MessageScreen';
