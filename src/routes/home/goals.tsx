import Goals from '@/pages/goals'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/goals')({
  component: Goals,
})
