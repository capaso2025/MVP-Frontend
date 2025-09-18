import { ValidationFn } from '@/shared/types/validator.types';
import { useState } from 'react';
import { useValidation } from './useValidation';

export const useForm = <T>({
  initialValues = {},
  validator,
  onSubmit,
  keysList = [],
}: {
  initialValues?: Partial<T>;
  validator: ValidationFn<T>;
  onSubmit: (values: T) => void;
  keysList?: string[];
}) => {
  const [values, setValues] = useState<T>(initialValues as T);
  const { validate, errors } = useValidation({
    validator,
  });

  const getConvertedValue = (value: string, valueType?: string) => {
    if (valueType === 'integer') return parseInt(value);
    if (valueType === 'decimal') return Number(Number(value).toFixed(2));
    return value;
  };

  const setValue = (name: string, value: unknown) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    delete errors?.[name as keyof typeof errors];
  };
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    valueType?: string,
  ) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: getConvertedValue(value, valueType),
    }));
    delete errors?.[name as keyof typeof errors];
  };

  const onChangeMultipleValues = (values: Record<string, string>) => {
    setValues((prevValues) => ({ ...prevValues, ...values }));
    Object.keys(values).forEach((key) => {
      delete errors?.[key as keyof typeof errors];
    });
  };
  const onSelectChange = (value: string, name: string, valueType?: string) => {
    if (!name) return;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: getConvertedValue(value, valueType),
    }));
    delete errors?.[name as keyof typeof errors];
  };

  const handleSubmit = async () => {
    const isValid = validate(values, keysList);
    if (!isValid) return;
    await onSubmit(values);
  };

  return {
    values,
    errors,
    onChange,
    onChangeMultipleValues,
    handleSubmit,
    onSelectChange,
    setValue,
  };
};
