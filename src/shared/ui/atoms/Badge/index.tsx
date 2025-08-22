import { Typography } from "../Typography";

function Badge(props: {
  text: string;
  className?: string;
}) {
  const { text, className } = props;
  return <Typography
    variant="body2"
    className={`h-max rounded-md px-2 py-1 ${className}`}
  >
    {text}
  </Typography>
};

export default Badge;