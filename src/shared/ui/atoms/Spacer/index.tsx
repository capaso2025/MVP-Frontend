function Spacer(props: {
  size?: 'sm' | 'md' | 'lg'
  | 'xl' | '2xl' | '3xl';
}) {
  const { size = 'sm' } = props;
  const sizes = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-8',
    xl: 'h-16',
    '2xl': 'h-24',
    '3xl': 'h-32',
  };
  const className = sizes[size];
  if (className) {
    return <div className={className} />;
  }
  return <div className="h-4" />;
}

export default Spacer;