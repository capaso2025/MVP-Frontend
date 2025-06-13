import { Button, Typography } from '@/shared/ui';

function Calendar() {
  return (
    <div className="grid h-[calc(100vh-80px)] place-content-center">
      <Typography
        variant="h6"
        className="text-foreground-secondary mx-auto mb-2 font-normal"
      >
        Conectar con
      </Typography>
      <Button variant="ghost">
        <img
          alt="google calendar"
          className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4"
          width={200}
          src="/google-calendar.png"
        />
      </Button>
    </div>
  );
}

export default Calendar;
