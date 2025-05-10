import { forwardRef, useCallback, useEffect, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from '@shared/ui/atoms/Button/Button';
import { Icon } from '@shared/ui/atoms/Icon/Icon';
import { Typography } from '@shared/ui/atoms/Typography/Typography';

/**
 * Props para el componente QuestionnaireLayout
 */
export interface IQuestionnaireLayoutProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título mostrado en el encabezado
   */
  title?: string;

  /**
   * Logo personalizado para mostrar en el encabezado (nodo React o URL)
   */
  logo?: ReactNode | string;

  /**
   * Contenido principal
   */
  children: ReactNode;

  /**
   * Función que se ejecuta al intentar salir o cerrar
   */
  onExit?: () => void;

  /**
   * Si se debe mostrar un diálogo de confirmación al salir
   * @default true
   */
  confirmExit?: boolean;

  /**
   * Si se debe mostrar el botón de salir
   * @default true
   */
  showExitButton?: boolean;

  /**
   * Texto para el botón de salir
   * @default "Salir"
   */
  exitButtonText?: string;

  /**
   * Si se debe mostrar el encabezado
   * @default true
   */
  showHeader?: boolean;

  /**
   * Si se debe mostrar el pie de página
   * @default true
   */
  showFooter?: boolean;
}

/**
 * Componente QuestionnaireLayout
 * Layout para cuestionarios con encabezado y estructura consistente
 */
export const QuestionnaireLayout = forwardRef<
  HTMLDivElement,
  IQuestionnaireLayoutProps
>(
  (
    {
      title,
      logo,
      children,
      onExit,
      confirmExit = true,
      showExitButton = true,
      exitButtonText = 'Salir',
      showHeader = true,
      showFooter = true,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Estado para el diálogo de confirmación
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    // Manejar el intento de salida
    const handleExitAttempt = useCallback(() => {
      if (confirmExit) {
        setShowConfirmDialog(true);
      } else if (onExit) {
        onExit();
      }
    }, [confirmExit, onExit]);

    // Confirmar la salida
    const confirmExitHandler = useCallback(() => {
      setShowConfirmDialog(false);
      if (onExit) {
        onExit();
      }
    }, [onExit]);

    // Cancelar la salida
    const cancelExitHandler = useCallback(() => {
      setShowConfirmDialog(false);
    }, []);

    // Manejar tecla ESC y evento beforeunload
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && showExitButton) {
          handleExitAttempt();
        }
      };

      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if (confirmExit) {
          e.preventDefault();
          e.returnValue = '';
          return '';
        }
        return; // TODO: Validar valor de retorno
      };

      // Agregar event listeners
      window.addEventListener('keydown', handleKeyDown);
      if (confirmExit) {
        window.addEventListener('beforeunload', handleBeforeUnload);
      }

      // Cleanup
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [confirmExit, handleExitAttempt, showExitButton]);

    // Renderizar el logo
    const renderLogo = () => {
      if (logo) {
        if (typeof logo === 'string') {
          return (
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          );
        }
        return logo;
      }
      return <div className="text-primary text-xl font-bold">CAPO</div>;
    };

    return (
      <div
        ref={ref}
        className={`bg-background flex min-h-screen flex-col ${className}`}
        {...restProps}
      >
        {/* Encabezado */}
        {showHeader && (
          <header className="border-b border-gray-200 bg-white px-4 py-3 md:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <div className="flex items-center">
                {renderLogo()}
                {title && (
                  <Typography
                    variant="h6"
                    component="h1"
                    className="ml-4 hidden sm:block"
                  >
                    {title}
                  </Typography>
                )}
              </div>

              {showExitButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleExitAttempt}
                  leftIcon="close"
                >
                  {exitButtonText}
                </Button>
              )}
            </div>
          </header>
        )}

        {/* Contenido principal */}
        <main className="flex flex-grow flex-col">{children}</main>

        {/* Pie de página */}
        {showFooter && (
          <footer className="border-t border-gray-200 bg-white px-4 py-4 md:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <Typography variant="caption" color="secondary">
                © {new Date().getFullYear()} CAPO
              </Typography>
              <Typography variant="caption" color="secondary">
                Desarrollando habilidades
              </Typography>
            </div>
          </footer>
        )}

        {/* Diálogo de confirmación */}
        {showConfirmDialog && (
          <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
            <div className="animate-fade-in w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center">
                <div className="bg-warning/20 mr-3 flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon name="warning" className="text-warning" />
                </div>
                <Typography variant="h5">¿Deseas salir?</Typography>
              </div>

              <Typography variant="body1" className="mb-6">
                Si sales ahora, perderás tu progreso en este cuestionario.
              </Typography>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={cancelExitHandler}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={confirmExitHandler}>
                  Salir
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
QuestionnaireLayout.displayName = 'QuestionnaireLayout';
