import { forwardRef, useCallback } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { Button } from '@/shared/ui/atoms/Button';
import { Typography } from '@/shared/ui/atoms/Typography';
import { useRenderStore } from '@/shared/store/render-store';
import { useNavigate } from 'react-router-dom';
import { XIcon } from '../../atoms/Icon/Icon';
import capoLogo from '@/assets/capo-logo.png';

export interface OnboardingLayoutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  logo?: ReactNode | string;
  children: ReactNode;
}
export const OnboardingLayout = forwardRef<
  HTMLDivElement,
  OnboardingLayoutProps
>(({ title, children, className = '', ...restProps }, ref) => {
  const setAlertDialogData = useRenderStore(
    (state) => state.setAlertDialogData,
  );
  const navigate = useNavigate();

  const handleExit = useCallback(() => {
    setAlertDialogData({
      show: true,
      title: '¿Estás seguro que deseas salir?',
      description: 'Si abandonas ahora, perderás tu progreso.',
      onConfirm: () => {
        navigate('/');
      },
      confirmText: 'Sí, salir',
    });
  }, [navigate, setAlertDialogData]);
  return (
    <div
      ref={ref}
      className={`bg-landing-dark grid h-screen grid-rows-[max-content_auto_max-content] ${className}`}
      {...restProps}
    >
      <header className="shadow-primary-lighter/10 px-4 py-3 shadow-sm md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center">
            {<img src={capoLogo} width={50} alt="capo logo" />}
          </div>
          {typeof title === 'string' ? (
            <Typography
              variant="h4"
              className="!text-md ml-4 text-center font-normal text-white md:!text-xl"
            >
              {title}
            </Typography>
          ) : (
            title
          )}
          <Button variant="ghost" size="sm" onClick={handleExit}>
            <XIcon className="text-white" />
          </Button>
        </div>
      </header>

      <main className="h-auto overflow-auto">{children}</main>

      <footer className="px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Typography variant="body1" className="text-foreground-secondary">
            © {new Date().getFullYear()} CAPASO
          </Typography>
          <Typography variant="body1" className="text-foreground-secondary">
            Desarrollando habilidades
          </Typography>
        </div>
      </footer>
    </div>
  );
});

// Definir el nombre para DevTools
OnboardingLayout.displayName = 'OnboardingLayout';
