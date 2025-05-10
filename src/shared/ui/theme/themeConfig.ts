/**
 * Configuración centralizada del tema para la aplicación CAPO
 * Define colores, espaciados, tipografía y otras variables de diseño
 * para mantener consistencia en toda la aplicación
 */

/**
 * Mapa de colores principales de la aplicación
 * Utiliza las variables CSS definidas en globals.css
 */
export const colors = {
  primary: {
    DEFAULT: 'var(--color-primary)',
    light: 'var(--color-primary-light)',
    dark: 'var(--color-primary-dark)',
  },
  secondary: {
    DEFAULT: 'var(--color-secondary)',
    light: 'var(--color-secondary-light)',
    dark: 'var(--color-secondary-dark)',
  },
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  error: 'var(--color-error)',
  info: 'var(--color-info)',
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    disabled: 'var(--color-text-disabled)',
  },
} as const;

/**
 * Espaciado consistente para márgenes, padding y gaps
 */
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
} as const;

/**
 * Bordes y sombras para elevar elementos
 */
export const elevation = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

/**
 * Radios de borde para componentes
 */
export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

/**
 * Tamaños de fuente y pesos
 */
export const typography = {
  fontFamily: {
    sans: 'var(--font-family-sans)',
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

/**
 * Transiciones para animaciones consistentes
 */
export const transitions = {
  default: 'all 200ms ease-in-out',
  fast: 'all 100ms ease-in-out',
  slow: 'all 300ms ease-in-out',
} as const;

/**
 * Breakpoints para diseño responsive
 */
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Z-index para controlar la superposición de elementos
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
} as const;

/**
 * Configuración completa del tema exportada como default
 */
const themeConfig = {
  colors,
  spacing,
  elevation,
  borderRadius,
  typography,
  transitions,
  breakpoints,
  zIndex,
} as const;

export type TThemeConfig = typeof themeConfig;
export default themeConfig;
