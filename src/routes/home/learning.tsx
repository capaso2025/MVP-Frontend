import LearningPage from '@/pages/learning'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/learning')({
  component: LearningPage,
})
