import { validationEmptyKeys } from '@/shared/lib/utils';
import { SignupData } from './signupData.types';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/shared/constants/regex';

export const validateSignup = (data: SignupData, keysList: string[]) => {
  const errors = validationEmptyKeys(
    data as unknown as Record<string, string>,
    keysList,
  );
  if (data.email && !EMAIL_REGEX.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (data.password && !PASSWORD_REGEX.test(data.password)) {
    errors.password =
      'Password must be at least 8 characters long and contain at least one letter, one number, and one special character';
  }

  if (data.confirmPassword && data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors,
  };
};
