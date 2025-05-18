export const Typography = ({
  children,
  variant = 'body1',
  className = '',
  as: Component = 'p',
}: {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}) => {
  const variants = {
    h1: 'text-5xl font-bold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    body1: 'text-base',
    body2: 'text-sm',
  };

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};
