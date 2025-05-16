import { Lesson } from './lesson.types';

export interface Module {
  title: string;
  objective: string;
  image: string;
  imagePosition: 'left' | 'right';
  lessons: Lesson[];
}
