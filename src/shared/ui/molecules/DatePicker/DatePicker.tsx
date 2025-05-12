import { format } from 'date-fns';
import { Icon } from '../../atoms/Icon/Icon';
import { useEffect, useState } from 'react';
import Popover from '../Popover/Popover';
import { Button } from '../../atoms/Button/Button';
import { DayPicker } from 'react-day-picker';
import { Typography } from '../../atoms/Typography/Typography';

export function DatePicker(props: {
  className?: string;
  onChange?: (date: Date) => void;
  placeholder?: string;
  errorMessage?: string | undefined;
}) {
  const { className = "", errorMessage, onChange, placeholder } = props;
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    onChange?.(date as Date);
  }, [date]);

  return (
    <div>
      <Popover
        trigger={() => (
          <Button
            type='button'
            variant={'input'}
            className={`w-full justify-start !p-0 h-10 !pl-[11px] gap-1 ${className} ${errorMessage ? '!border !border-error !bg-error-light' : ''}`}
          >
            <Icon name="calendar" className='text-gray-500' />
            {date ? format(date, "dd/MM/yyyy") : <span className='text-[16px] text-[#9e9fa6] font-normal'>{placeholder || ""}</span>}
          </Button>
        )}
        contentClassName='mt-14'
        content={() => (
          <DayPicker
            captionLayout='dropdown'
            startMonth={new Date("1920-01-01")}
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
              today: 'text-primary'
            }}
          />
        )}
      />
      {errorMessage && <Typography
        variant="caption"
        color={errorMessage ? 'error' : 'secondary'}
        className="mt-1"
      >
        {errorMessage}
      </Typography>}
    </div>
  );
}
