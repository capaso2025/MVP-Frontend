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

export interface CreateGoalResponse {
  id: string;
  // ...otros campos que devuelva el backend
}
