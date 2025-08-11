import * as React from 'react';

import { cn } from '@/shared/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { inputVariants } from './input-variants';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  variant?: VariantProps<typeof inputVariants>['variant'];
  inputSize?: VariantProps<typeof inputVariants>['inputSize'];
}

const RawInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, placeholder, inputSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'bg-opacity-5',
          className,
          inputVariants({ variant, inputSize }),
        )}
        ref={ref}
        placeholder={placeholder || ''}
        {...props}
      />
    );
  },
);
RawInput.displayName = 'Input';

export { RawInput };
