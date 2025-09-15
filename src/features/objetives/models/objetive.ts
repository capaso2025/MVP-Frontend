import { Difficulty } from '@/shared/enums/difficult';
import { Frequency } from '@/shared/enums/frequency';
import { WeekDays } from '@/shared/enums/week-days';

export interface Objetive {
  id: string;
  goalId: string;
  title: string;
  notes: string;
  checklist: string[];
  difficulty: Difficulty;
  startDate: string;
  repeats: Frequency;
  repeatEvery: number;
  repeatOn: WeekDays[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
