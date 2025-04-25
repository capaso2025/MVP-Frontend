import type { SVGProps } from 'react';
import { forwardRef, useMemo } from 'react';

/**
 * Nombres de iconos disponibles en el sistema
 */
export type TIconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'check'
  | 'close'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | 'star'
  | 'user'
  | 'home'
  | 'settings'
  | 'heart'
  | 'flag'
  | 'search'
  | 'tv'
  | 'social'
  | 'more'
  | 'play'
  | 'tiktok'
  | 'level-1'
  | 'level-2'
  | 'level-3'
  | 'level-4'
  | 'level-5'
  | 'briefcase'
  | 'plane'
  | 'book'
  | 'users'
  | 'brain'
  | 'test';

/**
 * Tamaños predefinidos para iconos
 */
export type TIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Props para el componente Icon
 */
export interface IIconProps
  extends Omit<SVGProps<SVGSVGElement>, 'name' | 'size'> {
  /**
   * Nombre del icono a renderizar
   */
  name: TIconName;

  /**
   * Tamaño del icono
   * @default 'md'
   */
  size?: TIconSize | undefined;

  /**
   * Color del icono
   * @default 'currentColor' (hereda del texto padre)
   */
  color?: string | undefined;
}

/**
 * Componente Icon
 * Renderiza un icono SVG con tamaño y color configurables
 */
export const Icon = forwardRef<SVGSVGElement, IIconProps>(
  (
    { name, size = 'md', color = 'currentColor', className = '', ...restProps },
    ref,
  ) => {
    // Mapear tamaños a dimensiones en píxeles
    const sizeMap: Record<TIconSize, number> = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 32,
      xl: 40,
    };

    // Determinar el tamaño en píxeles
    const pixelSize = sizeMap[size];

    // Obtener el path SVG según el nombre del icono
    const iconPath = useMemo(() => getIconPath(name), [name]);

    // Construir clases adicionales
    const classes = ['inline-block', className].filter(Boolean).join(' ');

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classes}
        aria-hidden="true"
        {...restProps}
      >
        {iconPath}
      </svg>
    );
  },
);

// Definir el nombre para DevTools
Icon.displayName = 'Icon';

/**
 * Devuelve el path SVG correspondiente a un nombre de icono
 */
function getIconPath(name: TIconName): React.ReactNode {
  switch (name) {
    case 'arrow-left':
      return <path d="M19 12H5M12 19l-7-7 7-7" />;
    case 'arrow-right':
      return <path d="M5 12h14M12 5l7 7-7 7" />;
    case 'check':
      return <path d="M20 6L9 17l-5-5" />;
    case 'close':
      return <path d="M18 6L6 18M6 6l12 12" />;
    case 'error':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </>
      );
    case 'info':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </>
      );
    case 'success':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M16 10l-5 5-3-3" />
        </>
      );
    case 'warning':
      return (
        <>
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </>
      );
    case 'star':
      return (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      );
    case 'user':
      return (
        <>
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      );
    case 'home':
      return (
        <>
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path d="M9 22V12h6v10" />
        </>
      );
    case 'settings':
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </>
      );
    case 'heart':
      return (
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      );
    case 'flag':
      return (
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" />
      );
    default:
      return <></>;
  }
}
