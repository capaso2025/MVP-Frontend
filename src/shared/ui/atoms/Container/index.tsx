import { cn } from "@/shared/lib/utils";

function Container(props: {
  children: React.ReactNode, as?:
  React.ElementType,
  className?: string,

} & React.HTMLProps<HTMLDivElement>) {
  const { as: Component = 'div', className = "", ...rest } = props;
  return <Component {...rest} className={cn("w-[90%] max-w-6xl mx-auto", className)}>{props.children}</Component>
};


export default Container;