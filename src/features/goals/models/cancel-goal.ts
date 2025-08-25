import { Goal } from './goal';

export interface CancelGoalPayload {
  id: string;
}

export type CancelGoalResponse = Goal;
