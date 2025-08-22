import Calendar from '@/pages/calendar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/calendar')({
  component: Calendar,
})
