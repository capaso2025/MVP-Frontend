import OnboardingIntro from '@/pages/onboarding/components/templates/Intro'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/onboarding/')({
  component: OnboardingIntro,
})

