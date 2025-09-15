import { useRenderStore } from '@/shared/store/render-store';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '../../atoms/Icon/Icon';
import { Typography } from '../../atoms/Typography';
import logo from '@/assets/capo-logo.png';
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
      document.body.style.overflowY = 'auto';
      return;
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  }, [children]);

  const handleClose = () => {
    closeModal();
    document.body.style.overflowY = 'auto';
  };

  if (!children) return <></>;

  return ReactDOM.createPortal(
    <div
      style={{ zIndex: '100000' }}
      className={`animate-fade-in bg-custom absolute top-0 right-0 bottom-0 left-0 h-screen w-screen ${fullScreen ? '' : 'flex items-center p-4 backdrop-blur-sm backdrop-brightness-50'}`}
    >
      <div
        className={`relative overflow-hidden shadow-xl max-h-[95vh] p-4 ${fullScreen ? 'h-full w-full' : 'mx-auto min-h-[200px] w-[90%] max-w-[500px] rounded-2xl  p-4 md:min-w-[400px]'} ${containerClassName || 'bg-landing-dark'
          }`}
      >
        {noCloseButton ? null : (
          <div
            onClick={handleClose}
            className="absolute top-[4px] right-[4px] grid h-10 w-10 cursor-pointer place-content-center rounded-2xl"
          >
            <XIcon
              className={`scale-110 text-primary`}
            />
          </div>
        )}
        {fullScreen ? (
          <img src={logo} alt="" className="absolute top-4 left-4" width={50} />
        ) : (
          <></>
        )}
        {title && (
          <Typography
            variant="h4"
            className="text-primary mt-4 mb-2 text-center"
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body1" className="text-primary mb-2 text-center">
            {description}
          </Typography>
        )}
        <div className='overflow-y-auto py-4 px-2 scrollbar-hide'>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
}

export default Modal;
