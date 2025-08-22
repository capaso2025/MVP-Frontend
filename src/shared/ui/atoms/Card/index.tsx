
import { forwardRef, HTMLAttributes } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & {
  withHover?: boolean
  withNoPadding?: boolean
}>(
  ({ children, className = '', withHover, withNoPadding, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={`rounded-xl border h-max border-gray-200 bg-white backdrop-blur-md shadow-md ${className} ${withHover ? 'cursor-pointer transition-all duration-100 hover:bg-gray-100' : ''} ${withNoPadding ? 'p-0' : 'p-4'}`.trim()}
      >
        {children}
      </div>
    );
  },
);
