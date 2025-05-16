import { TimerProvider } from '@/pages/timer/context';
import { QueryProvider } from './providers/query-provider';
import AppRouter from './router/router';
import Modal from '@/shared/ui/molecules/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import Loading from '@/shared/ui/templates/Loading/Loading';
import { BrowserRouter } from 'react-router-dom';
import 'react-day-picker/style.css';
import AlertDialog from '@/shared/ui/molecules/AlertDialog/AlertDialog';

export const App = () => {
  return (
    <QueryProvider>
      <TimerProvider>
        <Loading />
        <BrowserRouter>
          <AppRouter />
          <Modal />
          <AlertDialog />
        </BrowserRouter>
        <ToastContainer position='bottom-right' draggable />
      </TimerProvider>
    </QueryProvider>
  );
};
