import { Difficulty } from '@/shared/enums/difficult';
import { Frequency } from '@/shared/enums/frequency';
import { WeekDays } from '@/shared/enums/week-days';

export interface CreateObjetivePayload {
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
}

export interface CreateObjetiveResponse extends CreateObjetivePayload {
  id: string;
  createdAt: string;
  updatedAt: string;
}
