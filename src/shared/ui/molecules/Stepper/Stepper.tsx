import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Icon, type TIconName } from '../../atoms/Icon/Icon';
import { Typography } from '../../atoms/Typography/Typography';

/**
 * Tipo para un paso individual
 */

export interface IStepItem {
  /**
   * Identificador único del paso
   */
  id: string;

  /**
   * Título o etiqueta del paso
   */
  label: string;

  /**
   * Descripción opcional del paso
   */
  description?: string | undefined;

  /**
   * Icono personalizado para el paso
   */
  icon?: TIconName | undefined;

  /**
   * Estado del paso (opcional, se calcula automáticamente si no se especifica)
   */
  state?: 'pending' | 'current' | 'completed' | 'error' | undefined;
}

/**
 * Props para el componente Stepper
 */
export interface IStepperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Lista de pasos a mostrar
   */
  steps: IStepItem[];

  /**
   * Índice del paso actual (base 0)
   */
  activeStep: number;

  /**
   * Orientación del stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Si se debe mostrar el número del paso en lugar de íconos
   * @default false
   */
  showNumbers?: boolean;

  /**
   * Si se deben mostrar las líneas conectoras entre pasos
   * @default true
   */
  showConnectors?: boolean;

  /**
   * Callback cuando se hace clic en un paso
   */
  onStepClick?: (stepIndex: number) => void;

  /**
   * Índices de pasos que tienen errores
   */
  errorSteps?: number[];

  /**
   * Si se debe permitir navegar a pasos anteriores
   * @default true
   */
  allowBackNavigation?: boolean;
}

/**
 * Componente Stepper
 * Muestra una secuencia de pasos para procesos multi-etapa
 */
export const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
  (
    {
      steps,
      activeStep,
      orientation = 'horizontal',
      showNumbers = false,
      showConnectors = true,
      onStepClick,
      errorSteps = [],
      allowBackNavigation = true,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Determinar el estado de cada paso
    const getStepState = (index: number): IStepItem['state'] => {
      if (errorSteps.includes(index)) {
        return 'error';
      }
      if (index === activeStep) {
        return 'current';
      }
      if (index < activeStep) {
        return 'completed';
      }
      return 'pending';
    };

    // Verificar si un paso es clickeable
    const isStepClickable = (index: number): boolean => {
      if (!onStepClick) return false;
      if (index === activeStep) return false;
      if (index < activeStep && allowBackNavigation) return true;
      return false;
    };

    // Renderizar el indicador del paso (icono, número o check)
    const renderStepIndicator = (
      step: IStepItem,
      index: number,
      state: IStepItem['state'],
    ) => {
      const baseClasses =
        'w-8 h-8 rounded-full flex items-center justify-center text-sm';

      // Clases específicas según el estado
      const stateClasses = {
        pending: 'border-2 border-gray-300 text-gray-500',
        current: 'bg-primary text-white',
        completed: 'bg-primary text-white',
        error: 'bg-error text-white',
      };

      // Clases combinadas
      const classes = `${baseClasses} ${stateClasses[state || 'pending']}`;

      // Contenido según configuración y estado
      let content: React.ReactNode;

      if (state === 'completed' && !showNumbers && !step.icon) {
        // Para pasos completados, mostrar un check
        content = <Icon name="check" size="sm" />;
      } else if (step.icon) {
        // Si el paso tiene un icono personalizado
        content = <Icon name={step.icon} size="sm" />;
      } else if (showNumbers) {
        // Si se deben mostrar números
        content = index + 1;
      } else {
        // Por defecto, mostrar número
        content = index + 1;
      }

      return (
        <div
          className={` ${classes} ${isStepClickable(index) ? 'cursor-pointer' : ''} `}
          onClick={() => isStepClickable(index) && onStepClick?.(index)}
          role={isStepClickable(index) ? 'button' : undefined}
          tabIndex={isStepClickable(index) ? 0 : undefined}
        >
          {content}
        </div>
      );
    };

    // Renderizar la línea conectora entre pasos
    const renderConnector = (index: number, state: IStepItem['state']) => {
      if (!showConnectors || index >= steps.length - 1) {
        return null;
      }

      // Determinar clase de color según estado
      const colorClass = state === 'completed' ? 'bg-primary' : 'bg-gray-300';

      if (orientation === 'horizontal') {
        return (
          <div className="flex flex-grow items-center">
            <div className={`h-0.5 w-full ${colorClass}`} />
          </div>
        );
      } else {
        return (
          <div className="mx-auto my-1 h-8 w-px">
            <div className={`h-full w-full ${colorClass}`} />
          </div>
        );
      }
    };

    // Clases del contenedor principal
    const containerClasses = [
      orientation === 'horizontal' ? 'flex flex-row' : 'flex flex-col',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={containerClasses}
        aria-label="Pasos del proceso"
        {...restProps}
      >
        {steps.map((step, index) => {
          // Determinar el estado del paso actual y siguiente
          const state = step.state || getStepState(index);
          if (orientation === 'horizontal') {
            return (
              <div key={step.id} className="flex flex-1 items-center">
                {/* Paso con etiqueta debajo */}
                <div className="flex flex-col items-center">
                  {/* Indicador */}
                  {renderStepIndicator(step, index, state)}

                  {/* Etiqueta y descripción */}
                  <div className="mt-2 max-w-xs text-center">
                    <Typography
                      variant="subtitle2"
                      color={state === 'pending' ? 'secondary' : 'primary'}
                      className="whitespace-nowrap"
                    >
                      {step.label}
                    </Typography>

                    {step.description && (
                      <Typography
                        variant="caption"
                        color="secondary"
                        className="mt-0.5 hidden sm:block"
                      >
                        {step.description}
                      </Typography>
                    )}
                  </div>
                </div>

                {/* Conector */}
                {renderConnector(index, state)}
              </div>
            );
          } else {
            return (
              <div key={step.id}>
                {/* Paso con etiqueta al lado */}
                <div className="flex items-center">
                  {/* Indicador */}
                  {renderStepIndicator(step, index, state)}

                  {/* Etiqueta y descripción */}
                  <div className="ml-3">
                    <Typography
                      variant="subtitle2"
                      color={state === 'pending' ? 'secondary' : 'primary'}
                    >
                      {step.label}
                    </Typography>

                    {step.description && (
                      <Typography
                        variant="caption"
                        color="secondary"
                        className="mt-0.5"
                      >
                        {step.description}
                      </Typography>
                    )}
                  </div>
                </div>

                {/* Conector vertical */}
                {renderConnector(index, state)}
              </div>
            );
          }
        })}
      </div>
    );
  },
);

// Definir el nombre para DevTools
Stepper.displayName = 'Stepper';
