import Questions from '@/pages/onboarding/components/templates/Questions'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding/questions')({
  component: Questions,
})
