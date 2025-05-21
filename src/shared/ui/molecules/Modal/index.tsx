import { useRenderStore } from '@/shared/store/render-store';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../../atoms/Icon/Icon';
import { Typography } from '../../atoms/Typography';

function Modal() {
  const closeModal = useRenderStore((state) => state.closeModal);
  const {
    children,
    containerClassName,
    title,
    description,
    noCloseButton,
    fullScreen,
  } = useRenderStore((state) => state.modalData);
  useEffect(() => {
    if (!children) {
      document.body.style.overflow = 'auto';
      return;
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  }, [children]);

  const handleClose = () => {
    closeModal();
    document.body.style.overflow = 'auto';
  };

  if (!children) return <></>;

  return ReactDOM.createPortal(
    <div
      style={{ zIndex: '100000' }}
      className={`animate-slide-x absolute top-0 right-0 bottom-0 left-0 h-screen w-screen ${fullScreen ? '' : 'flex items-center p-4 backdrop-blur-sm backdrop-brightness-50'}`}
    >
      <div
        className={`bg-background relative overflow-auto ${fullScreen ? 'h-full w-full' : 'border-custom mx-auto min-h-[200px] w-[90%] max-w-[500px] rounded-2xl p-4 md:min-w-[400px]'} ${containerClassName || ''
          }`}
      >
        {noCloseButton ? null : (
          <div
            onClick={handleClose}
            className="absolute top-[4px] left-[4px] grid h-10 w-10 cursor-pointer place-content-center rounded-2xl"
          >
            <Icon name="x" className="text-primary scale-110" />
          </div>
        )}
        {title && (
          <Typography variant="h2" className="mt-4 mb-2 text-center text-white">
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body1" className="mb-2 text-center text-white">
            {description}
          </Typography>
        )}
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
}

export default Modal;
