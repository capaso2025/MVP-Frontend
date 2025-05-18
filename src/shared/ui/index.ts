/**
 * Archivo de exportación centralizado para la biblioteca de UI
 * Facilita las importaciones desde otros módulos de la aplicación
 */

// Tema
export { default as themeConfig } from './theme/themeConfig';
export * from './theme/themeConfig';

// Átomos (componentes base)
export { Button } from './atoms/Button/Button';
export type {
  IButtonProps,
  TButtonSize,
  TButtonVariant,
} from './atoms/Button/Button';

export { Checkbox } from './atoms/Checkbox/Checkbox';
export type { ICheckboxProps } from './atoms/Checkbox/Checkbox';

export { Icon } from './atoms/Icon/Icon';
export type { IIconProps, TIconName, TIconSize } from './atoms/Icon/Icon';

export { Input } from './atoms/Input/Input';
export type { IInputProps } from './atoms/Input/Input';

export { Progress } from './atoms/Progress/Progress';
export type {
  IProgressProps,
  TProgressSize,
  TProgressVariant,
} from './atoms/Progress/Progress';

export { Radio } from './atoms/Radio/Radio';
export type { IRadioProps } from './atoms/Radio/Radio';

export { Typography } from './atoms/Typography/Typography';

// Moléculas (combinaciones de átomos)
export { Card } from './molecules/Card/Card';
export type { ICardProps } from './molecules/Card/Card';
