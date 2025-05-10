import { validationEmptyKeys } from '@/shared/lib/utils';
import { LoginData } from './loginData.types';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/shared/constants/regex';

export const validateLogin = (data: LoginData, keysList: string[]) => {
  const errors = validationEmptyKeys(
    data as unknown as Record<string, string>,
    keysList,
  );

  if (data.email && !EMAIL_REGEX.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (data.password && !PASSWORD_REGEX.test(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors,
  };
};
