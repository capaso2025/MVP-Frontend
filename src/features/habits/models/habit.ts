export interface Habit {
  id: string;
  name: string;
  description: string;
  isPremium: boolean;
  icon: string;
  isActive: boolean;
  createdAt: string;
}

export interface UserHabit {
  id: string;
  userId: string;
  habitId: string;
  currentLevel: number;
  completedDays: number;
  currentStreak: number;
  maxStreak: number;
  lastCheckIn: string | null;
  status: number;
  habit: Habit;
}
