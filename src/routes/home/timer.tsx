import TimerPage from '@/pages/timer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/timer')({
  component: TimerPage,
})
