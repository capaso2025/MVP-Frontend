import { Typography } from "../Typography";

function Error(props: {
  errors?: Record<string, string> | undefined;
  name: string | undefined;
}) {
  const { errors, name = "" } = props;
  return <>
    {Object.keys(errors || {}).length && name ? (
      <Typography variant="body2" className="text-error ml-2 mt-2">
        {errors?.[name] || ""}
      </Typography>
    ) : null}</>
};

export default Error;