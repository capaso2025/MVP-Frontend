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
export type {
  ITypographyProps,
  TTypographyVariant,
} from './atoms/Typography/Typography';

// Moléculas (combinaciones de átomos)
export { Card } from './molecules/Card/Card';
export type { ICardProps } from './molecules/Card/Card';

export { Character } from './molecules/Character/Character';
export type {
  ICharacterProps,
  TCharacterMood,
  TCharacterSize,
} from './molecules/Character/Character';

export { OptionCard } from './molecules/OptionCard/OptionCard';
export type { IOptionCardProps } from './molecules/OptionCard/OptionCard';

export { OptionGroup } from './molecules/OptionGroup/OptionGroup';
export type {
  IOptionGroupProps,
  IOptionItem,
} from './molecules/OptionGroup/OptionGroup';

export { Stepper } from './molecules/Stepper/Stepper';
export type { IStepperProps, IStepItem } from './molecules/Stepper/Stepper';

// Organismos (componentes complejos)
export { CategoryGrid } from './organisms/CategoryGrid/CategoryGrid';
export type {
  ICategoryGridProps,
  ICategoryItem,
} from './organisms/CategoryGrid/CategoryGrid';

export { MessageScreen } from './organisms/MessageScreen/MessageScreen';
export type { IMessageScreenProps } from './organisms/MessageScreen/MessageScreen';

export { QuestionScreen } from './organisms/QuestionScreen/QuestionScreen';
export type { IQuestionScreenProps } from './organisms/QuestionScreen/QuestionScreen';

export { ResultsView } from './organisms/ResultsView/ResultsView';
export type {
  IResultsViewProps,
  IResultItem,
} from './organisms/ResultsView/ResultsView';

export { WelcomeScreen } from './organisms/WelcomeScreen/WelcomeScreen';
export type { IWelcomeScreenProps } from './organisms/WelcomeScreen/WelcomeScreen';

// Templates (layouts)
export { QuestionnaireLayout } from './templates/QuestionnaireLayout/QuestionnaireLayout';
export type { IQuestionnaireLayoutProps } from './templates/QuestionnaireLayout/QuestionnaireLayout';
