import { CoinsIcon, Heart, Lightbulb, UsersIcon } from "lucide-react";

export const CATEGORIES_CONFIG = {
  HEALTH: {
    id: 'HEALTH',
    icon: <Heart className="text-red-400" />,
    label: 'Salud',
    progressClass: 'bg-red-400',
    textClass: 'text-red-400',
    bgClass: 'bg-red-200',
  },
  STUDIES: {
    id: 'STUDIES',
    icon: <Lightbulb className="text-yellow-400" />,
    label: 'Estudio',
    progressClass: 'bg-yellow-400',
    textClass: 'text-yellow-400',
    bgClass: 'bg-yellow-100',
  },
  FINANCES: {
    id: 'FINANCES',
    icon: <CoinsIcon className="text-green-500 font-bold" />,
    label: 'Finanzas',
    progressClass: 'bg-green-500',
    textClass: 'text-green-500',
    bgClass: 'bg-green-100',
  },
  SOCIAL: {
    id: 'SOCIAL',
    icon: <UsersIcon className="text-blue-400 font-bold" />,
    label: 'Social',
    progressClass: 'bg-blue-400',
    textClass: 'text-blue-400',
    bgClass: 'bg-blue-100',
  },
}