import { useRenderStore } from '@/shared/store/render-store';
import {
  AlertDialogContainer,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './AlertDialogRaw'
import { Button } from '../../atoms/Button/Button';

function AlertDialog() {
  const alertDialogData = useRenderStore(state => state.alertDialogData);
  const closeAlertDialog = useRenderStore(state => state.closeAlertDialog);
  const {
    title,
    description,
    confirmText,
    onConfirm,
    onClose = () => { },
    onlyCloseAction = false,
    confirmButtonProps,
    show = false,
  } = alertDialogData;

  if (!show) return <></>

  return (
    <AlertDialogContainer defaultOpen={show}>
      <AlertDialogContent className="rounded-2xl w-[95%] text-white" id="alert-dialog">
        <AlertDialogHeader>
          <div className="rounded-full absolute -top-16 left-1/2 -translate-x-1/2 alert-dialog-circle-icon">
          </div>
          {title && (
            <AlertDialogTitle className="text-2xl text-white text-center">
              {title}
            </AlertDialogTitle>
          )}
          {description && (
            <AlertDialogDescription className={`px-4 ${!title ? "pt-8 text-base text-white" : ""}`}>
              {description}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter
          className={onlyCloseAction ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}
        >
          {onlyCloseAction ? (
            <AlertDialogCancel
              variant="default"
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
            </AlertDialogCancel>
          ) : (
            <>
              <AlertDialogCancel className="text-wrap" onClick={() => {
                onClose?.();
                document.body.style.overflow = "auto"
                closeAlertDialog();
              }}>Cancelar</AlertDialogCancel>
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
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogContainer>
  );
}

export default AlertDialog;
