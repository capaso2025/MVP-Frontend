import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

/**
 * Variantes de tipografía disponibles
 */
export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

/**
 * Props para el componente Typography
 */
export interface ITypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * Variante de tipografía
   * @default 'body1'
   */
  variant?: TTypographyVariant | undefined;

  /**
   * Elemento HTML a renderizar
   * Si no se especifica, se elige automáticamente según la variante
   */
  component?: ElementType | undefined;

  /**
   * Si el texto debe mostrarse en negrita
   * @default false
   */
  bold?: boolean | undefined;

  /**
   * Contenido textual o de otro tipo
   */
  children: ReactNode;

  /**
   * Si el texto debe truncarse con elipsis cuando desborda
   * @default false
   */
  truncate?: boolean | undefined;

  /**
   * Número máximo de líneas (requiere truncate=true)
   */
  lines?: number | undefined;

  /**
   * Color del texto
   * @default undefined (hereda del padre)
   */
  color?:
    | ('primary' | 'secondary' | 'disabled' | 'error' | 'success')
    | undefined;
}

/**
 * Componente Typography
 * Renderiza texto con estilos tipográficos consistentes
 */
export const Typography = forwardRef<HTMLElement, ITypographyProps>(
  (
    {
      variant = 'body1',
      component,
      bold = false,
      truncate = false,
      lines,
      color,
      className = '',
      children,
      ...restProps
    },
    ref,
  ) => {
    // Determinar el componente HTML adecuado según la variante si no se especifica
    const Component = component || getDefaultComponent(variant);

    // Mapeo de variantes a clases CSS
    const variantClasses: Record<TTypographyVariant, string> = {
      h1: 'text-4xl font-semibold leading-tight',
      h2: 'text-3xl font-semibold leading-tight',
      h3: 'text-2xl font-semibold leading-tight',
      h4: 'text-xl font-semibold leading-snug',
      h5: 'text-lg font-semibold leading-snug',
      h6: 'text-base font-semibold leading-normal',
      subtitle1: 'text-lg font-medium leading-normal',
      subtitle2: 'text-base font-medium leading-normal',
      body1: 'text-base font-normal leading-relaxed',
      body2: 'text-sm font-normal leading-relaxed',
      caption: 'text-xs font-normal leading-normal',
      overline: 'text-xs font-medium uppercase tracking-wider leading-normal',
    };

    // Clases para el color del texto
    const colorClasses: Record<
      NonNullable<ITypographyProps['color']>,
      string
    > = {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      disabled: 'text-text-disabled',
      error: 'text-error',
      success: 'text-success',
    };

    // Construir las clases combinadas
    const classes = [
      variantClasses[variant],
      bold ? 'font-bold' : '',
      truncate ? 'overflow-hidden text-ellipsis' : '',
      // Si truncate y lines están definidos, aplicar límite de líneas
      truncate && lines ? `line-clamp-${lines}` : '',
      color ? colorClasses[color] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Component ref={ref} className={classes} {...restProps}>
        {children}
      </Component>
    );
  },
);

// Definir el nombre para DevTools
Typography.displayName = 'Typography';

/**
 * Devuelve el componente HTML predeterminado según la variante de tipografía
 */
function getDefaultComponent(variant: TTypographyVariant): ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
      return 'span';
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
}
