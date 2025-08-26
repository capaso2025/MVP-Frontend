import { OnboardingApiResponse } from '@/features/onboarding/types/onboarding-response';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validationEmptyKeys = <T>(
  object: T,
  keysList: string[] = [],
): Record<string, string> => {
  const errors = {} as Record<string, string>;
  if (!keysList.length) return errors;
  keysList.forEach((key) => {
    if (object[key as keyof T] === '' || object[key as keyof T] === undefined) {
      errors[key] = `${key} is required`;
    }
  });
  return errors;
};

export const getParsedUserFromStorage = ():
  | OnboardingApiResponse['user']
  | null => {
  try {
    const user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  } catch (error) {
    console.log('🏝️ ~ getParsedUserFromStorage ~ error:', error);
  }
  return null;
};
export const getParsedProfileFromStorage = ():
  | OnboardingApiResponse['profile']
  | null => {
  try {
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      return JSON.parse(profile);
    }
  } catch (error) {
    console.log('🏝️ ~ getParsedProfileFromStorage ~ error:', error);
  }
  return null;
};
