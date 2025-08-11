import { cn } from '@/shared/lib/utils';

function Container(
  props: {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
    width?: 'default' | 'large';
  } & React.HTMLProps<HTMLDivElement>,
) {
  const {
    as: Component = 'div',
    className = '',
    width = 'default',
    ...rest
  } = props;
  const sizes = {
    default: 'w-[90%] mx-auto xl:w-[70%]',
    large: 'w-[90%] mx-auto',
  };
  return (
    <Component {...rest} className={cn(sizes[width], className)}>
      {props.children}
    </Component>
  );
}

export default Container;
