import HabitBuilder from '@/pages/habits'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/habits')({
  component: HabitBuilder,
})