import { useRenderStore } from '@/shared/store/render-store';
import {
  AlertDialogContainer,
  AlertDialogContent,
} from './AlertDialogRaw'
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';

function AlertDialog() {
  const alertDialogData = useRenderStore(state => state.alertDialogData);
  const closeAlertDialog = useRenderStore(state => state.closeAlertDialog);
  const {
    title,
    description,
    confirmText,
    onConfirm,
    onClose = () => { },
    onCancel = () => { },
    onlyCloseAction = false,
    confirmButtonProps,
    show = false,
  } = alertDialogData;

  if (!show) return <></>

  return (
    <AlertDialogContainer defaultOpen={show}>
      <AlertDialogContent className="rounded-2xl w-[95%] text-white" id="alert-dialog">
        {title && (
          <AlertDialogTitle>
            <Typography variant='body1' className="text-primary text-center">
              {title}
            </Typography>
          </AlertDialogTitle>
        )}
        {description && (
          <Typography className={`px-4 ${!title ? "pt-8 text-primary" : ""}`}>
            {description}
          </Typography>
        )}
        <div
          className={`grid gap-4 ${onlyCloseAction ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
        >
          {onlyCloseAction ? (
            <Button
              variant='outline'
              className="w-full"
              {...confirmButtonProps}
              onClick={async () => {
                await onConfirm?.();
                document.body.style.overflow = "auto"
                onClose?.();
                closeAlertDialog();
              }}
            >
              {confirmText || "Entendido"}
            </Button>
          ) : (
            <>
              <Button variant='secondary' className="text-wrap" onClick={() => {
                onClose?.();
                document.body.style.overflow = "auto"
                closeAlertDialog();
                onCancel?.();
              }}>Cancelar</Button>
              <Button
                className="text-wrap w-full"
                {...confirmButtonProps}
                onClick={async () => {
                  await onConfirm?.();
                  document.body.style.overflow = "auto"
                  onClose?.();
                  closeAlertDialog();
                }}
              >
                {confirmText || ""}
              </Button>
            </>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialogContainer>
  );
}

export default AlertDialog;
