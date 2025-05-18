import { format } from 'date-fns';
import { Icon } from '../../atoms/Icon/Icon';
import { useEffect, useState } from 'react';
import Popover from '../Popover';
import { Button } from '../../atoms/Button';
import { DayPicker } from 'react-day-picker';
import { Typography } from '../../atoms/Typography';

export function DatePicker(props: {
  className?: string;
  onChange?: (date: Date) => void;
  placeholder?: string;
  errorMessage?: string | undefined;
}) {
  const { className = '', errorMessage, onChange, placeholder } = props;
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    onChange?.(date as Date);
  }, [date]);

  return (
    <div>
      <Popover
        trigger={() => (
          <Button
            type="button"
            variant={'input'}
            className={`h-10 w-full justify-start gap-1 !p-0 !pl-[11px] ${className} ${errorMessage ? '!border-error !bg-error-light !border' : ''}`}
          >
            <Icon name="calendar" className="text-gray-500" />
            {date ? (
              format(date, 'dd/MM/yyyy')
            ) : (
              <span className="text-[16px] font-normal text-[#9e9fa6]">
                {placeholder || ''}
              </span>
            )}
          </Button>
        )}
        contentClassName="mt-14"
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
      {errorMessage && <Typography className="mt-1">{errorMessage}</Typography>}
    </div>
  );
}
