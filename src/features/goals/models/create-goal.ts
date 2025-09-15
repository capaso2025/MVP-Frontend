import { Goal } from './goal';

export interface CreateGoalPayload {
  title: string;
  description: string;
  category: string;
  // type: string;
  targetValue: number;
  targetUnit: string;
  deadline: string;
  frequency: string;
  daysOfWeek?: string[];
  customDates?: string[];
}

export type CreateGoalResponse = Goal;
