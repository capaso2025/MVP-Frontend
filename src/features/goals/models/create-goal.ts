import { Goal } from './goal';

export interface CreateGoalPayload {
  title: string;
  description: string;
  category: string;
  type: string;
  targetValue: number;
  unit: string;
  deadline: string;
  frequency: string;
}

export type CreateGoalResponse = Goal;
