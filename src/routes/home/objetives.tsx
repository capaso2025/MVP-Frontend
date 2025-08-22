import Objetives from '@/pages/objetives'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/objetives')({
  component: Objetives,
})
