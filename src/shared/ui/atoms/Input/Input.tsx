import React from "react";
import { InputProps, RawInput } from "./RawInput";
import { Typography } from "../Typography";
import Error from "../Error";

export interface ExtendedInputProps extends InputProps {
  label?: string;
  icon?: React.ReactNode;
  tooltip?: string;
  containerClassName?: string;
  errors?: Record<string, string>;
  iconOnClick?: () => void;
}
function Input(
  props: ExtendedInputProps
) {
  const {
    label,
    icon,
    containerClassName = "",
    errors,
    iconOnClick,
    ...rawInputProps
  } = props;
  return (
    <div className={`rounded-2xl ${containerClassName}`}>
      {label && (
        <Typography variant="body2" className="text-gray-500 mb-2">{label}</Typography>
      )}
      <div className="relative">
        <RawInput
          {...rawInputProps}
          className={`w-full placeholder:text-foreground-secondary ${rawInputProps.className || ""}`}
          variant={
            rawInputProps.name && errors?.[rawInputProps.name]
              ? "error"
              : rawInputProps.variant
          }
        />
        {icon && (
          <div
            className={`absolute right-4 top-5 -translate-y-1/2`}
            onClick={iconOnClick}
          >
            {icon}
          </div>
        )}
      </div>
      <Error errors={errors} name={rawInputProps.name} />
    </div>
  );
}

export default Input;
