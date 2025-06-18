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
