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
  | 'caption'
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
      h1: 'text-4xl lg:text-5xl font-semibold',
      h2: 'text-3xl lg:text-4xl font-semibold',
      h3: 'text-2xl lg:text-3xl font-semibold',
      h4: 'text-xl lg:text-2xl',
      h5: 'text-lg lg:text-xl',
      h6: 'text-base',
      subtitle: 'text-base lg:text-lg font-normal',
      body1: 'text-sm lg:text-base',
      body2: 'text-xs lg:text-sm',
      caption: 'text-xxs',
    };

    return (
      <Component className={` ${variants[variant]} ${className} leading-normal`} {...rest}>
        {children}
      </Component>
    );
  },
);
