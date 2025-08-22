import { ValidationFn } from '@/shared/types/validator.types';
import { useState } from 'react';

export const useValidation = <T>(params: { validator: ValidationFn<T> }) => {
  const { validator } = params;
  const [errors, setErrors] = useState<Record<string, string>>({});

  return {
    errors,
    validate: (values: T, keysList: string[]) => {
      const { isValid, errors } = validator(values, keysList);
      setErrors(errors);
      return isValid;
    },
  };
};
