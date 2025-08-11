import { Typography } from '@/shared/ui';
import { CircleHelpIcon } from '@/shared/ui/atoms/Icon/Icon';
import React from 'react';

type QuestionsWidgetProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

function QuestionsWidget<T extends React.ElementType = 'div'>(
  props: QuestionsWidgetProps<T>,
) {
  const { as: Component = 'div', className, ...rest } = props;

  return (
    <Component
      className={`bg-landing-dark flex items-center gap-2 rounded-l-full p-2 ${className ?? ''}`}
      {...rest}
    >
      <CircleHelpIcon className="text-white" size={35} />
      <Typography className="text-white">Preguntas Frecuentes</Typography>
    </Component>
  );
}

export default QuestionsWidget;
