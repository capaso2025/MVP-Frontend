import { forwardRef, useMemo } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from '@shared/ui/atoms/Button/Button';
import { Progress } from '@shared/ui/atoms/Progress/Progress';
import { Typography } from '@shared/ui/atoms/Typography/Typography';
import { Character } from '@shared/ui/molecules/Character/Character';
import {
  OptionGroup,
  type IOptionItem,
} from '@shared/ui/molecules/OptionGroup/OptionGroup';

/**
 * Props para el componente QuestionScreen
 */
export interface IQuestionScreenProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID único de la pregunta
   */
  id: string;

  /**
   * Título de la pregunta
   */
  title: string;

  /**
   * Opciones disponibles para la pregunta
   */
  options: IOptionItem[];

  /**
   * Valores seleccionados actualmente
   */
  selectedValues: string[];

  /**
   * Índice de la pregunta actual (para barra de progreso)
   */
  currentIndex: number;

  /**
   * Número total de preguntas (para barra de progreso)
   */
  totalQuestions: number;

  /**
   * Mensaje del personaje
   */
  characterMessage?: string | undefined;

  /**
   * Estado de ánimo del personaje
   */
  characterMood?: Parameters<typeof Character>[0]['mood'] | undefined;

  /**
   * Si se debe permitir selección múltiple
   * @default false
   */
  multipleSelection?: boolean | undefined;

  /**
   * Número máximo de selecciones permitidas (para selección múltiple)
   * @default 1
   */
  maxSelections?: number | undefined;

  /**
   * Contenido adicional a mostrar debajo de las opciones
   */
  children?: ReactNode | undefined;

  /**
   * Función para manejar el cambio de selección
   */
  onSelectionChange: (values: string[]) => void;

  /**
   * Función para navegar a la pregunta anterior
   */
  onPrevious?: (() => void) | undefined;

  /**
   * Función para navegar a la siguiente pregunta
   */
  onNext?: (() => void) | undefined;

  /**
   * Si el botón "Anterior" debe estar deshabilitado
   * @default false
   */
  isPreviousDisabled?: boolean | undefined;

  /**
   * Si el botón "Siguiente" debe estar deshabilitado
   * @default false
   */
  isNextDisabled?: boolean | undefined;

  /**
   * Texto para el botón de acción principal (siguiente)
   * @default "Avanzar"
   */
  nextButtonText?: string | undefined;

  /**
   * Texto para el botón de retroceso
   * @default "Retroceder"
   */
  previousButtonText?: string | undefined;
}

/**
 * Componente QuestionScreen
 * Pantalla completa para mostrar una pregunta del cuestionario con opciones y navegación
 */
export const QuestionScreen = forwardRef<HTMLDivElement, IQuestionScreenProps>(
  (
    {
      id,
      title,
      options,
      selectedValues,
      currentIndex,
      totalQuestions,
      characterMessage,
      characterMood = 'default',
      multipleSelection = false,
      maxSelections = 1,
      children,
      onSelectionChange,
      onPrevious,
      onNext,
      isPreviousDisabled = false,
      isNextDisabled = false,
      nextButtonText = 'Avanzar',
      previousButtonText = 'Retroceder',
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Calcular el progreso como porcentaje
    const progressPercentage = useMemo(() => {
      return Math.floor((currentIndex / totalQuestions) * 100);
    }, [currentIndex, totalQuestions]);

    // Manejar cambios en la selección
    const handleSelectionChange = (value: string | string[]) => {
      if (Array.isArray(value)) {
        onSelectionChange(value);
      } else {
        onSelectionChange([value]);
      }
    };

    return (
      <div
        ref={ref}
        className={`flex min-h-screen flex-col px-4 py-6 md:px-6 ${className}`}
        {...restProps}
      >
        {/* Barra de progreso */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <Typography variant="body2" color="secondary">
              {`Pregunta ${currentIndex} de ${totalQuestions}`}
            </Typography>
            <Typography variant="body2" color="secondary">
              {`${progressPercentage}%`}
            </Typography>
          </div>
          <Progress value={progressPercentage} variant="default" size="md" />
        </div>

        {/* Personaje y mensaje */}
        {characterMessage && (
          <div className="mb-8">
            <Character
              message={characterMessage}
              mood={characterMood}
              size="lg"
              animated={false}
            />
          </div>
        )}

        {/* Título de la pregunta */}
        <Typography
          variant="h3"
          component="h1"
          className="mb-6 text-center md:text-left"
        >
          {title}
        </Typography>

        {/* Grupo de opciones */}
        <div className="mb-8 flex-grow">
          <OptionGroup
            id={id}
            options={options}
            values={selectedValues}
            selectionType={multipleSelection ? 'multiple' : 'single'}
            maxSelections={maxSelections}
            onChange={handleSelectionChange}
            columns={true}
            columnCount={2}
          />

          {children}
        </div>

        {/* Botones de navegación */}
        <div className="mt-auto flex justify-between">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isPreviousDisabled}
            leftIcon="arrow-left"
          >
            {previousButtonText}
          </Button>

          <Button
            variant="primary"
            onClick={onNext}
            disabled={isNextDisabled}
            rightIcon="arrow-right"
          >
            {nextButtonText}
          </Button>
        </div>
      </div>
    );
  },
);

// Definir el nombre para DevTools
QuestionScreen.displayName = 'QuestionScreen';
