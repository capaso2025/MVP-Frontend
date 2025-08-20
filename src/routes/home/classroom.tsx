import Classroom from '@/pages/classroom'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/classroom')({
  component: Classroom,
})
