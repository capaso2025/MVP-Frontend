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
  | 'test'
  | 'calendar'
  | 'store'
  | 'maximize'
  | 'pause'
  | 'rotate-ccw'
  | 'skip-forward'
  | 'clock'
  | 'plus'
  | 'x'
  | 'pencil'
  | 'mail'
  | 'phone'
  | 'save'
  | 'google'
  | 'lock'
  | 'eye'
  | 'eye-off'
  | 'trophy'
  | 'chart-no-axes-column-decreasing'
  | 'medal'
  | 'minimize';

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
    case 'calendar':
      return (
        <>
          <path
            d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </>
      );
    case 'store':
      return <></>;
    case 'book':
      return (
        <>
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </>
      );
    case 'maximize':
      return (
        <path d="M8 3H5a2 2 0 0 0-2 2v3m0 10v3a2 2 0 0 0 2 2h3m10-15h3a2 2 0 0 1 2 2v3m0 10v3a2 2 0 0 1-2 2h-3" />
      );

    case 'minimize':
      return (
        <path d="M8 3H5a2 2 0 0 0-2 2v3m0 10v3a2 2 0 0 0 2 2h3m10-15h3a2 2 0 0 1 2 2v3m0 10v3a2 2 0 0 1-2 2h-3" />
      );
    case 'pause':
      return (
        <>
          <rect x="14" y="4" width="4" height="16" rx="1" />
          <rect x="6" y="4" width="4" height="16" rx="1" />
        </>
      );
    case 'play':
      return <polygon points="6 3 20 12 6 21 6 3" />;
    case 'rotate-ccw':
      return (
        <>
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </>
      );
    case 'skip-forward':
      return (
        <>
          <polygon points="5 4 15 12 5 20 5 4" />
          <line x1="19" x2="19" y1="5" y2="19" />
        </>
      );
    case 'clock':
      return (
        <>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </>
      );
    case 'plus':
      return (
        <>
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </>
      );
    case 'x':
      return (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      );
    case 'pencil':
      return (
        <>
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          <path d="m15 5 4 4" />
        </>
      );
    case 'mail':
      return (
        <>
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </>
      );
    case 'phone':
      return (
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      );
    case 'save':
      return (
        <>
          <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
          <path d="M7 3v4a1 1 0 0 0 1 1h7" />
        </>
      );
    case 'google':
      return (
        <>
          {' '}
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </>
      );
    case 'lock':
      return (
        <>
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </>
      );
    case 'eye':
      return (
        <>
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </>
      );
    case 'eye-off':
      return (
        <>
          <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
          <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
          <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
          <path d="m2 2 20 20" />
        </>
      );
    case 'chart-no-axes-column-decreasing':
      return (
        <>
          <path d="M12 20V10" />
          <path d="M18 20v-4" />
          <path d="M6 20V4" />
        </>
      );
    case 'trophy':
      return (
        <>
          {' '}
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </>
      );
    case 'medal':
      return (
        <>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </>
      );
    default:
      return <></>;
  }
}
