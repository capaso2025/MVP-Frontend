import { useRenderStore } from '@/shared/store/render-store';
import { AlertDialogContainer, AlertDialogContent } from './AlertDialogRaw';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';

function AlertDialog() {
  const alertDialogData = useRenderStore((state) => state.alertDialogData);
  const closeAlertDialog = useRenderStore((state) => state.closeAlertDialog);
  const {
    title,
    description,
    confirmText,
    onConfirm,
    onClose = () => {},
    onCancel = () => {},
    onlyCloseAction = false,
    confirmButtonProps,
    show = false,
  } = alertDialogData;

  if (!show) return <></>;

  return (
    <AlertDialogContainer defaultOpen={show}>
      <AlertDialogContent
        className="bg-landing-dark w-[95%] rounded-2xl p-10 text-white"
        id="alert-dialog"
      >
        {title && (
          <AlertDialogTitle>
            <Typography variant="h3" className="text-foreground text-center">
              {title}
            </Typography>
          </AlertDialogTitle>
        )}
        {description && (
          <Typography
            variant="h6"
            className={`px-4 text-center font-normal ${!title ? '!text-foreground pb-4 text-xl' : 'text-foreground-secondary'}`}
          >
            {description}
          </Typography>
        )}
        <div
          className={`mt-10 grid gap-4 ${onlyCloseAction ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}
        >
          {onlyCloseAction ? (
            <Button
              variant="landing"
              className="w-full"
              {...confirmButtonProps}
              onClick={async () => {
                await onConfirm?.();
                document.body.style.overflow = 'auto';
                onClose?.();
                closeAlertDialog();
              }}
            >
              {confirmText || 'Entendido'}
            </Button>
          ) : (
            <>
              <Button
                variant="secondary"
                className="text-wrap"
                onClick={() => {
                  onClose?.();
                  document.body.style.overflow = 'auto';
                  closeAlertDialog();
                  onCancel?.();
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="landing"
                className="w-full text-wrap hover:!scale-100"
                {...confirmButtonProps}
                onClick={async () => {
                  await onConfirm?.();
                  document.body.style.overflow = 'auto';
                  onClose?.();
                  closeAlertDialog();
                }}
              >
                {confirmText || ''}
              </Button>
            </>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialogContainer>
  );
}

export default AlertDialog;
