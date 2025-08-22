import { Progress, Typography } from '@/shared/ui';
import { Card } from '@/shared/ui/atoms/Card';
import Spacer from '@/shared/ui/atoms/Spacer';
import { CoinsIcon, Heart, Lightbulb, UsersIcon } from 'lucide-react';
function Categories() {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {[
      {
        icon: <Heart className="text-red-400" />,
        label: 'Salud',
        value: 75,
        progressClass: 'bg-red-400',
      },
      {
        icon: <Lightbulb className="text-yellow-400" />,
        label: 'Estudio',
        value: 60,
        progressClass: 'bg-yellow-400',
      },
      {
        icon: <CoinsIcon className="text-green-500 font-bold" />,
        label: 'Finanzas',
        value: 50,
        progressClass: 'bg-green-500',
      },
      {
        icon: <UsersIcon className="text-blue-400 font-bold" />,
        label: 'Relaciones',
        value: 80,
        progressClass: 'bg-blue-400',
      },
    ].map(({ icon, label, value, progressClass }) => (
      <Card key={label} className="flex-1">
        <div className="flex items-center justify-between gap-2">
          {icon}
          <Typography>{value}%</Typography>
        </div>
        <Spacer size="sm" />
        <Typography>{label}</Typography>
        <Progress value={value} className={progressClass} />
      </Card>
    ))}
  </div>
};

export default Categories;