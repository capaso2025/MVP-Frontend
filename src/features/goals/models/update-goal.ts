import { Goal } from './goal';

export interface UpdateGoalPayload extends Partial<Goal> {
  id: string;
}

export type UpdateGoalResponse = Goal;
