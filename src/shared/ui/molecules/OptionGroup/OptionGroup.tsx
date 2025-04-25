import { forwardRef, useCallback, useEffect, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Typography } from '@shared/ui/atoms/Typography/Typography';
import { TIconName } from '@shared/ui/atoms/Icon/Icon';
import { OptionCard } from '@shared/ui/molecules/OptionCard/OptionCard';

/**
 * Tipo para las opciones en el grupo
 */
export interface IOptionItem {
  /**
   * Identificador único de la opción
   */
  id: string;

  /**
   * Título o etiqueta del paso
   */
  title: string;

  /**
   * Descripción opcional
   */
  description?: string | undefined;

  /**
   * Icono para la opción
   */
  icon?: TIconName | undefined;

  /**
   * Imagen para la opción
   */
  image?: string | ReactNode | undefined;

  /**
   * Si la opción está deshabilitada
   */
  disabled?: boolean | undefined;

  /**
   * Contenido adicional para la opción
   */
  content?: ReactNode | undefined;
}

/**
 * Props para el componente OptionGroup
 */
export interface IOptionGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Identificador único del grupo
   */
  id: string;

  /**
   * Título del grupo de opciones
   */
  title?: string;

  /**
   * Descripción opcional
   */
  description?: string;

  /**
   * Lista de opciones disponibles
   */
  options: IOptionItem[];

  /**
   * Valor seleccionado actualmente (para selección única)
   */
  value?: string;

  /**
   * Valores seleccionados actualmente (para selección múltiple)
   */
  values?: string[];

  /**
   * Tipo de selección
   * @default 'single'
   */
  selectionType?: 'single' | 'multiple';

  /**
   * Número máximo de opciones seleccionables (para selección múltiple)
   */
  maxSelections?: number;

  /**
   * Callback cuando cambia la selección
   */
  onChange?: (value: string | string[]) => void;

  /**
   * Si las opciones se muestran en columnas
   * @default false
   */
  columns?: boolean;

  /**
   * Número de columnas en pantallas grandes
   * @default 2
   */
  columnCount?: 1 | 2 | 3 | 4;
}

/**
 * Componente OptionGroup
 * Grupo de opciones seleccionables para cuestionarios o formularios
 */
export const OptionGroup = forwardRef<HTMLDivElement, IOptionGroupProps>(
  (
    {
      id,
      title,
      description,
      options,
      value,
      values,
      selectionType = 'single',
      maxSelections,
      onChange,
      columns = false,
      columnCount = 2,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Estado interno para gestionar selecciones
    const [selectedValues, setSelectedValues] = useState<string[]>(() => {
      if (selectionType === 'single' && value) {
        return [value];
      }
      if (selectionType === 'multiple' && values) {
        return [...values];
      }
      return [];
    });

    // Efecto para sincronizar el estado interno con props
    useEffect(() => {
      if (selectionType === 'single' && value !== undefined) {
        setSelectedValues(value ? [value] : []);
      } else if (selectionType === 'multiple' && values !== undefined) {
        setSelectedValues([...values]);
      }
    }, [selectionType, value, values]);

    // Función para manejar la selección de opciones
    const handleSelect = useCallback(
      (optionId: string) => {
        let newSelectedValues: string[];

        if (selectionType === 'single') {
          // Para selección única, reemplazar el valor actual
          newSelectedValues = [optionId];
        } else {
          // Para selección múltiple, alternar la selección
          if (selectedValues.includes(optionId)) {
            // Deseleccionar si ya está seleccionado
            newSelectedValues = selectedValues.filter((id) => id !== optionId);
          } else {
            // Verificar el límite de selecciones máximas
            if (maxSelections && selectedValues.length >= maxSelections) {
              // Si ya alcanzamos el máximo, reemplazar la primera selección
              newSelectedValues = [...selectedValues.slice(1), optionId];
            } else {
              // Agregar a las selecciones existentes
              newSelectedValues = [...selectedValues, optionId];
            }
          }
        }

        // Actualizar estado interno
        setSelectedValues(newSelectedValues);

        // Notificar cambio
        if (onChange) {
          if (selectionType === 'single') {
            onChange(newSelectedValues[0] || '');
          } else {
            onChange(newSelectedValues);
          }
        }
      },
      [selectedValues, selectionType, maxSelections, onChange],
    );

    // Determinar clases para el layout de las opciones
    const optionsLayoutClasses = columns
      ? `grid grid-cols-1 sm:grid-cols-${columnCount} gap-4`
      : 'space-y-3';

    return (
      <div
        ref={ref}
        className={`${className}`}
        role={selectionType === 'single' ? 'radiogroup' : 'listbox'}
        aria-labelledby={title ? `${id}-title` : undefined}
        aria-multiselectable={selectionType === 'multiple' ? 'true' : 'false'}
        {...restProps}
      >
        {title && (
          <Typography
            id={`${id}-title`}
            variant="h4"
            component="h2"
            className="mb-2"
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" color="secondary" className="mb-4">
            {description}
          </Typography>
        )}

        <div className={optionsLayoutClasses}>
          {options.map((option) => (
            <OptionCard
              key={option.id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              image={option.image}
              selected={selectedValues.includes(option.id)}
              disabled={option.disabled}
              onSelect={() => handleSelect(option.id)}
            >
              {option.content}
            </OptionCard>
          ))}
        </div>

        {selectionType === 'multiple' && maxSelections && (
          <Typography variant="caption" color="secondary" className="mt-2">
            {`Seleccione hasta ${maxSelections} opciones (${selectedValues.length}/${maxSelections} seleccionadas)`}
          </Typography>
        )}
      </div>
    );
  },
);

// Definir el nombre para DevTools
OptionGroup.displayName = 'OptionGroup';
