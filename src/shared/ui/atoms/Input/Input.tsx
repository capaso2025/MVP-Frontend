import React from "react";
import { InputProps, RawInput } from "./RawInput";

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
  console.log(errors)
  return (
    <div className={`rounded-2xl ${containerClassName}`}>
      {label && (
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm text-foreground-secondary">{label}</p>
        </div>
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
            className={`absolute right-4 bottom-0 -translate-y-1/2`}
            onClick={iconOnClick}
          >
            {icon}
          </div>
        )}
      </div>
      {Object.keys(errors || {}).length && rawInputProps.name ? (
        <p className="text-sm ml-2 text-danger mt-2">
          {errors?.[rawInputProps.name] || ""}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
