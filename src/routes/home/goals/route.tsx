import GoalsLayout from '@/pages/goals/components/templates/goals-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/goals')({
  component: GoalsLayout,
})
