import { CoinsIcon, Heart, Lightbulb, UsersIcon } from "lucide-react";

export const CATEGORIES =
  [
    {
      id: 'HEALTH',
      icon: <Heart className="text-red-400" />,
      label: 'Salud',
      progressClass: 'bg-red-400',
    },
    {
      id: 'STUDIES',
      icon: <Lightbulb className="text-yellow-400" />,
      label: 'Estudio',
      progressClass: 'bg-yellow-400',
    },
    {
      id: 'FINANCES',
      icon: <CoinsIcon className="text-green-500 font-bold" />,
      label: 'Finanzas',
      progressClass: 'bg-green-500',
    },
    {
      id: 'SOCIAL',
      icon: <UsersIcon className="text-blue-400 font-bold" />,
      label: 'Relaciones',
      progressClass: 'bg-blue-400',
    },
  ]