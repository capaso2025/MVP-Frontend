import { forwardRef, useCallback } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { Button } from '@/shared/ui/atoms/Button';
import { Typography } from '@/shared/ui/atoms/Typography';
import { useRenderStore } from '@/shared/store/render-store';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../atoms/Icon/Icon';
import capoLogo from '@/assets/capo-logo.png';

export interface OnboardingLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
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
  }, []);
  return (
    <div
      ref={ref}
      className={`bg-background grid h-screen grid-rows-[max-content_auto_max-content] ${className}`}
      {...restProps}
    >
      <header className="bg-primary border-b border-gray-200 px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center">
            {<img src={capoLogo} width={50} alt="capo logo" />}
            {title && (
              <Typography
                variant="h6"
                className="ml-4 hidden text-white sm:block"
              >
                {title}
              </Typography>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={handleExit}>
            <Icon name="x" className="text-white" />
          </Button>
        </div>
      </header>

      <main className='h-[calc(100vh-132px)] overflow-auto'>{children}</main>

      <footer className="border-t border-gray-200 bg-white px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Typography variant="body1" className="text-secondary">
            © {new Date().getFullYear()} CAPO
          </Typography>
          <Typography variant="body1" className="text-secondary">
            Desarrollando habilidades
          </Typography>
        </div>
      </footer>
    </div>
  );
});

// Definir el nombre para DevTools
OnboardingLayout.displayName = 'OnboardingLayout';
