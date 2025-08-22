import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Popover from '../Popover';
import { Button } from '../../atoms/Button';
import { DayPicker } from 'react-day-picker';
import { Typography } from '../../atoms/Typography';
import Error from '../../atoms/Error';

export function DatePicker(props: {
  className?: string;
  onChange?: (date: Date) => void;
  placeholder?: string;
  name: string;
  errors?: Record<string, string>;
  label?: string;
}) {
  const { className = '', errors, onChange, placeholder, label = "", name } = props;
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    onChange?.(date as Date);
  }, [date]);

  return (
    <div>
      <Popover
        trigger={() => (
          <> {label && (
            <Typography variant="body2" className="text-gray-500 mb-2">{label}</Typography>
          )}
            <Button
              type="button"
              variant={'input'}
              className={`h-10 w-full justify-start gap-1 !p-0 !pl-[11px] ${className} ${errors?.[name] ? '!border-error !bg-error-light !border' : ''}`}
            >
              {date ? (
                format(date, 'dd/MM/yyyy')
              ) : (
                <span className="text-[16px] font-normal text-[#9e9fa6]">
                  {placeholder || ''}
                </span>
              )}
            </Button></>
        )}
        contentClassName="mt-18"
        content={() => (
          <DayPicker
            captionLayout="dropdown"
            startMonth={new Date('1920-01-01')}
            animate
            mode="single"
            lang="es"
            selected={date}
            onSelect={setDate}
            classNames={{
              selected: 'bg-primary-2 text-white rounded-sm',
              week: 'flex gap-1',
              weekdays: 'flex justify-between mx-4',
              chevron: 'fill-primary-2',
              today: 'text-primary',
            }}
          />
        )}
      />
      <Error errors={errors} name={name} />
    </div>
  );
}
