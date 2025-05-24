/**
 * Archivo de exportación centralizado para la biblioteca de UI
 * Facilita las importaciones desde otros módulos de la aplicación
 */

// Tema
export { default as themeConfig } from './theme/themeConfig';
export * from './theme/themeConfig';

// Átomos (componentes base)
export { Button } from './atoms/Button';
export type { IButtonProps, TButtonSize, TButtonVariant } from './atoms/Button';

export { Checkbox } from './atoms/Checkbox';
export type { ICheckboxProps } from './atoms/Checkbox';

export { Progress } from './atoms/Progress';
export type {
  IProgressProps,
  TProgressSize,
  TProgressVariant,
} from './atoms/Progress';

export { Radio } from './atoms/Radio';
export type { IRadioProps } from './atoms/Radio';

export { Typography } from './atoms/Typography';
