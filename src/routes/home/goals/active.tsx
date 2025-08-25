import ActiveGoals from '@/pages/goals/components/pages/active-goals';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/goals/active')({
  component: ActiveGoals,
})
