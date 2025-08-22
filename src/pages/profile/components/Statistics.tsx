import { ChartColumnIncreasingIcon, ClockIcon, MedalIcon, TrophyIcon } from '@/shared/ui/atoms/Icon/Icon';
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
          Icon={<ClockIcon />}
          title="Day streak"
          value="0"
        />
        <Box
          Icon={
            <ChartColumnIncreasingIcon />
          }
          title="Total XP"
          value="0"
        />
        <Box
          Icon={<TrophyIcon />}
          title="Current league"
          value="None"
        />
        <Box
          Icon={<MedalIcon />}
          title="Top 3 finishes"
          value="0"
        />
      </div>
    </div>
  );
}
