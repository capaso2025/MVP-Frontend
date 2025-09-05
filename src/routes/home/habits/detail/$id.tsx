import HabitDetails from '@/pages/habits/components/pages/habit-details'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/habits/detail/$id')({
  component: HabitDetails,
})
