export interface CreateGoalLogPayload {
  goalId: string;
  value: number;
  comment?: string;
  evidenceUrl?: string;
}

export interface CreateGoalLogResponse {
  id: string;
  goalId: string;
  value: number;
  comment?: string;
  evidenceUrl?: string;
  createdAt: string;
  updatedAt: string;
}
