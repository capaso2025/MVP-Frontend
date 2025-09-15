export interface Goal {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  targetValue: number;
  targetUnit: string;
  deadline: string;
  frequency: string;
  progress: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
