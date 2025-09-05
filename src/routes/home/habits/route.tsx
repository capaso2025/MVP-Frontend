import HabitsLayout from '@/pages/habits/components/templates/habits-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/habits')({
  component: HabitsLayout,
})
