import { SOFT_SKILLS_SECTIONS } from '@/data/soft-skills';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lesson } from '../types/lesson.types';

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

export const getLessonsByModuleName = (moduleName: string) => {
  const sections = [...SOFT_SKILLS_SECTIONS];
  let lessons: Lesson[] = [];
  sections.forEach((section) => {
    section.modules?.forEach((module) => {
      if (module.title === moduleName) {
        lessons = module.lessons;
      }
    });
  });
  return lessons;
};

export const getSectionNameByModuleName = (moduleName: string) => {
  const sections = [...SOFT_SKILLS_SECTIONS];
  let sectionName = '';
  sections.forEach((section) => {
    section.modules?.forEach((module) => {
      if (module.title === moduleName) {
        sectionName = section.title;
      }
    });
  });
  return sectionName;
};
