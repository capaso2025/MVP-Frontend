import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TimerProvider } from '@/pages/timer/context';
import Loading from '@/shared/ui/templates/loading';
import Modal from '@/shared/ui/molecules/Modal';
import AlertDialog from '@/shared/ui/molecules/AlertDialog';
import { QueryProvider } from '@/app/providers/query-provider';
export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <QueryProvider>
      <TimerProvider>
        <Loading />
        <Outlet />
        <Modal />
        <AlertDialog />
      </TimerProvider>
    </QueryProvider>
  )
}