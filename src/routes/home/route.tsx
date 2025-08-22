import HomeLayout from '@/shared/ui/layouts/main-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: () => <HomeLayout />,
})

