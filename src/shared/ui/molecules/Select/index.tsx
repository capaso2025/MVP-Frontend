import { Typography } from "../../atoms/Typography";
import {
  Select as SelectRaw,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./select-raw";

export type TOption = {
  label: string;
  value: string;
  icon?: string;
  symbol?: string;
};

type TProps = {
  options: TOption[];
  placeholder?: string;
  className?: string;
  onChange?: (value: string, name: string, valueType?: string) => void;
  contentClassName?: string;
  defaultValue?: string | number | boolean;
  disabled?: boolean;
  name?: string;
  label?: string;
  errors?: Record<string, string>
};

function Select(props: TProps) {
  const {
    options,
    placeholder = "Seleccione una opción",
    defaultValue,
    className,
    contentClassName,
    onChange = () => { },
    disabled = false,
    name = "",
    label,
    errors
  } = props;
  return (
    <div className={`relative ${className} w-full`}>
      <label htmlFor="">
        {label && <p className='text-sm mb-2 text-foreground-secondary'>{label}</p>}
        <SelectRaw
          defaultValue={defaultValue as string}
          onValueChange={(value: string) => onChange(value, name, "string")}
          disabled={options.length ? disabled : true}
          name={name}
          value={defaultValue as string}
        >
          <SelectTrigger variant={errors?.[name] ? "error" : "default"} className="w-full">
            <SelectValue
              placeholder={
                <p className="text-secondary text-sm">
                  {placeholder}
                </p>
              }
              defaultValue={String(defaultValue) || ""}
            />
          </SelectTrigger>
          <SelectContent className={`z-[1000000] ${contentClassName || ""}`}>
            {options?.map((option: TOption, index: number) => (
              <SelectItem value={option.value} key={index}>
                <Typography variant="body2" className="text-primary">{option.label}</Typography>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRaw>
        {errors && Object.keys(errors).length > 0 && name ? <p className="text-sm ml-2 text-red-500 mt-2">{errors?.[name]}</p> : null}
      </label>
    </div>
  );
}

export default Select;
