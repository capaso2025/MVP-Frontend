import { TimerProvider } from '@/pages/timer/context';
import { QueryProvider } from './providers/query-provider';
import AppRouter from './router';
import Modal from '@/shared/ui/molecules/Modal/modal';

export const App = () => {
  return (
    <QueryProvider>
      <TimerProvider>
        <AppRouter />
        <Modal />
      </TimerProvider>
    </QueryProvider>
  );
};
