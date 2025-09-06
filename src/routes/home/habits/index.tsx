import ResumeHabits from '@/pages/habits/components/pages/resume-habits'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/habits/')({
  component: ResumeHabits,
})