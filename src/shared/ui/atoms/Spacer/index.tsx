function Spacer(props: {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl';
}) {
  const { size = 'sm' } = props;
  const sizes = {
    xs: 'h-0.5 lg:h-1',
    sm: 'h-1 lg:h-2',
    md: 'h-2 lg:h-4',
    lg: 'h-4 lg:h-8',
    xl: 'h-8 lg:h-16',
    '2xl': 'h-16 lg:h-24',
    '3xl': 'h-24 lg:h-32',
    '5xl': 'h-32 lg:h-48',
  };
  const className = sizes[size];
  if (className) {
    return <div className={className} />;
  }
  return <div className="h-4" />;
}

export default Spacer;
