import { Difficulty } from '@/shared/enums/difficult';
import { Frequency } from '@/shared/enums/frequency';
import { WeekDays } from '@/shared/enums/week-days';

export interface CreateObjectivePayload {
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

export interface CreateObjectiveResponse extends CreateObjectivePayload {
  id: string;
  createdAt: string;
  updatedAt: string;
}
