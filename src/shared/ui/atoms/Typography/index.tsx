import { forwardRef, HTMLAttributes } from 'react';
interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle';
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}
export const Typography = forwardRef<
  HTMLElement,
  Props & HTMLAttributes<HTMLElement>
>(
  ({
    children,
    variant = 'body1',
    className = 'text-primary',
    as: Component = 'p',
    ...rest
  }) => {
    const variants = {
      h1: 'text-4xl lg:text-5xl font-bold',
      h2: 'text-3xl lg:text-4xl font-bold',
      h3: 'text-2xl lg:text-3xl font-bold',
      h4: 'text-xl lg:text-2xl font-bold',
      h5: 'text-lg lg:text-xl font-bold',
      h6: 'text-base font-bold',
      subtitle: 'text-base lg:text-lg font-semibold',
      body1: 'text-sm lg:text-base',
      body2: 'text-xs lg:text-sm',
    };

    return (
      <Component className={`${variants[variant]} ${className}`} {...rest}>
        {children}
      </Component>
    );
  },
);
