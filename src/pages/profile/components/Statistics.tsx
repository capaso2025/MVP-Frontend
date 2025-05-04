import { Icon } from '@/shared/ui';
import React from 'react';

function Box(props: { Icon: React.ReactNode; title: string; value: string }) {
  const { Icon, title, value } = props;
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4">
      {Icon}
      <div>
        <p className="text-2xl font-semibold text-gray-700">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}
export default function StatisticsPanel() {
  return (
    <div className="w-full">
      <p className="mb-6 text-2xl font-semibold">Estadísticas</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Box
          Icon={<Icon name="clock" className="text-blue-400" />}
          title="Day streak"
          value="0"
        />
        <Box
          Icon={
            <Icon
              name="chart-no-axes-column-decreasing"
              className="text-green-300"
            />
          }
          title="Total XP"
          value="0"
        />
        <Box
          Icon={<Icon name="trophy" className="text-amber-300" />}
          title="Current league"
          value="None"
        />
        <Box
          Icon={<Icon name="medal" className="text-yellow-400" />}
          title="Top 3 finishes"
          value="0"
        />
      </div>
    </div>
  );
}
