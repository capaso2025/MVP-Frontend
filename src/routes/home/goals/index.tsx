import ResumeGoals from '@/pages/goals/components/pages/resume-goals'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/goals/')({
  component: ResumeGoals,
})
