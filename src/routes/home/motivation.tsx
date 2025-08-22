import Motivation from '@/pages/motivation'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/motivation')({
  component: Motivation,
})
