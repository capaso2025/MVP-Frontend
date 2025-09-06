import { useQuery } from '@tanstack/react-query';
import { GetHabitsResponse } from '../models/get-habits';
import { getHabits } from '../services/get-habits';

export const useGetHabits = (params?: { enabled?: boolean }) => {
  const { enabled = true } = params || {};
  return useQuery<GetHabitsResponse>({
    queryKey: ['habits'],
    queryFn: getHabits,
    staleTime: 0,
    enabled,
    placeholderData: [
      {
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        habitId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        currentLevel: 0,
        completedDays: 0,
        currentStreak: 0,
        maxStreak: 0,
        lastCheckIn: '2025-09-04T17:46:34.092Z',
        status: 1,
        habit: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: 'Read a book',
          description: 'Read at least 20 pages',
          isPremium: false,
          icon: 'default-icon',
          isActive: true,
          createdAt: '2025-09-04T17:46:34.093Z',
        },
      },
    ],
    initialData: [],
  });
};
