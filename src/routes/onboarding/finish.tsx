import OnboardingOutro from '@/pages/onboarding/components/templates/Outro'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding/finish')({
  component: OnboardingOutro,
})