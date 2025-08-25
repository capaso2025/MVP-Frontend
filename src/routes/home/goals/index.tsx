import PreviewGoals from '@/pages/goals/components/pages/preview-goals'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/goals/')({
  component: PreviewGoals,
})
