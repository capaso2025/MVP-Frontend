import Results from '@/pages/onboarding/components/templates/Results'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding/results')({
  component: Results,
})
