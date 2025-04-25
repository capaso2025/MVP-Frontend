import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { Typography } from '@shared/ui/atoms/Typography/Typography';

/**
 * Interfaz para un elemento de categoría
 */
export interface ICategoryItem {
  /**
   * Identificador único de la categoría
   */
  id: string;

  /**
   * Nombre visible de la categoría
   */
  name: string;

  /**
   * URL de la imagen o bandera de la categoría
   */
  imageUrl: string;

  /**
   * Texto adicional (por ejemplo, número de estudiantes)
   */
  subtitle?: string;

  /**
   * URL a donde redirigir al hacer clic
   */
  href?: string;

  /**
   * Datos adicionales para usar al seleccionar la categoría
   */
  data?: Record<string, unknown>;
}

/**
 * Props para el componente CategoryGrid
 */
export interface ICategoryGridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Título para la sección de categorías
   */
  title?: string;

  /**
   * Subtítulo o descripción
   */
  subtitle?: string;

  /**
   * Lista de elementos de categoría a mostrar
   */
  categories: ICategoryItem[];

  /**
   * Callback cuando se selecciona una categoría
   */
  onSelectCategory?: (category: ICategoryItem) => void;

  /**
   * Número de columnas en pantallas grandes
   * @default 4
   */
  columns?: 2 | 3 | 4;

  /**
   * Si se deben mostrar bordes en las tarjetas
   * @default true
   */
  showBorders?: boolean;
}

/**
 * Componente CategoryGrid
 * Muestra una cuadrícula de categorías seleccionables con imágenes
 */
export const CategoryGrid = forwardRef<HTMLDivElement, ICategoryGridProps>(
  (
    {
      title,
      subtitle,
      categories,
      onSelectCategory,
      columns = 4,
      showBorders = true,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    // Determinar las clases de columnas basadas en la prop columns
    const gridColsClasses = {
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    }[columns];

    // Manejador para la selección de categoría
    const handleCategoryClick = (category: ICategoryItem) => {
      if (onSelectCategory) {
        onSelectCategory(category);
      } else if (category.href) {
        window.location.href = category.href;
      }
    };

    return (
      <div ref={ref} className={`w-full ${className}`} {...restProps}>
        {/* Encabezado de la sección */}
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && (
              <Typography variant="h3" component="h2" className="mb-2">
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="body1" color="secondary">
                {subtitle}
              </Typography>
            )}
          </div>
        )}

        {/* Cuadrícula de categorías */}
        <div className={`grid ${gridColsClasses} gap-4`}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`transform cursor-pointer overflow-hidden rounded-lg bg-white transition-all duration-200 hover:scale-105 hover:shadow-md ${showBorders ? 'border border-gray-200' : 'shadow-sm'} `}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="flex flex-col items-center p-4 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <Typography variant="subtitle1" className="mb-1">
                  {category.name}
                </Typography>
                {category.subtitle && (
                  <Typography variant="caption" color="secondary">
                    {category.subtitle}
                  </Typography>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

// Definir el nombre para DevTools
CategoryGrid.displayName = 'CategoryGrid';
