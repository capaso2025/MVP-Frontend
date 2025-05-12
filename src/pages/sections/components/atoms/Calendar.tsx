import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';

function CustomCalendar(props: { selectedDays: Date[] }) {
  const { selectedDays } = props;
  const [selected, setSelected] = useState<Date[]>([...selectedDays]);
  useEffect(() => {
    setSelected([...selectedDays]);
  }, [selectedDays]);

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <DayPicker
        required
        animate
        mode="multiple"
        lang="es"
        selected={selected}
        onSelect={(v) => setSelected(v || [])}
        footer={
          <div className="flex items-center gap-2">
            <div className="bg-primary-2 h-[12px] w-[12px] rounded-xs" />
            Días completados
          </div>
        }
        classNames={{
          selected: 'bg-primary-2 text-white rounded-sm',
          week: 'flex gap-1',
          weekdays: 'flex justify-between mx-4',
          chevron: 'fill-primary-2',
          today: 'font-bold text-primary-2',
        }}
      />
    </div>
  );
}

export default CustomCalendar;
