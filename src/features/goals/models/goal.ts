export interface Goal {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  type: string;
  targetValue: number;
  unit: string;
  deadline: string;
  frequency: string;
  progress: number;
  status: string;
  hasStreak: boolean;
  streakCount: number;
  xpEarned: number;
  gemsEarned: number;
  extendedOnce: boolean;
  createdAt: string;
  updatedAt: string;
}
