import { Typography } from "../Typography";

function ModuleTitle(props: {
  text: string;
}) {
  const { text } = props;
  return <Typography variant="h4" className="text-primary font-semibold">{text}</Typography>
};

export default ModuleTitle;